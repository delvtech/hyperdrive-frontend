export declare const IRocketStorage: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "addUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmGuardian";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmWithdrawalAddress";
        readonly inputs: readonly [{
            readonly name: "_nodeAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteAddress";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteBool";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteBytes";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteBytes32";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteInt";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteString";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getAddress";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBool";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBytes";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBytes32";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployedStatus";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getGuardian";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInt";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNodePendingWithdrawalAddress";
        readonly inputs: readonly [{
            readonly name: "_nodeAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNodeWithdrawalAddress";
        readonly inputs: readonly [{
            readonly name: "_nodeAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getString";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setAddress";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setBool";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setBytes";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setBytes32";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setGuardian";
        readonly inputs: readonly [{
            readonly name: "_newAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setInt";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setString";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setWithdrawalAddress";
        readonly inputs: readonly [{
            readonly name: "_nodeAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_newWithdrawalAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_confirm";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "subUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly "addUint(bytes32,uint256)": "adb353dc";
        readonly "confirmGuardian()": "1e0ea61e";
        readonly "confirmWithdrawalAddress(address)": "bd439126";
        readonly "deleteAddress(bytes32)": "0e14a376";
        readonly "deleteBool(bytes32)": "2c62ff2d";
        readonly "deleteBytes(bytes32)": "616b59f6";
        readonly "deleteBytes32(bytes32)": "0b9adc57";
        readonly "deleteInt(bytes32)": "8c160095";
        readonly "deleteString(bytes32)": "f6bb3cc4";
        readonly "deleteUint(bytes32)": "e2b202bf";
        readonly "getAddress(bytes32)": "21f8a721";
        readonly "getBool(bytes32)": "7ae1cfca";
        readonly "getBytes(bytes32)": "c031a180";
        readonly "getBytes32(bytes32)": "a6ed563e";
        readonly "getDeployedStatus()": "1bed5241";
        readonly "getGuardian()": "a75b87d2";
        readonly "getInt(bytes32)": "dc97d962";
        readonly "getNodePendingWithdrawalAddress(address)": "fd412513";
        readonly "getNodeWithdrawalAddress(address)": "5b49ff62";
        readonly "getString(bytes32)": "986e791a";
        readonly "getUint(bytes32)": "bd02d0f5";
        readonly "setAddress(bytes32,address)": "ca446dd9";
        readonly "setBool(bytes32,bool)": "abfdcced";
        readonly "setBytes(bytes32,bytes)": "2e28d084";
        readonly "setBytes32(bytes32,bytes32)": "4e91db08";
        readonly "setGuardian(address)": "8a0dac4a";
        readonly "setInt(bytes32,int256)": "3e49bed0";
        readonly "setString(bytes32,string)": "6e899550";
        readonly "setUint(bytes32,uint256)": "e2a4853a";
        readonly "setWithdrawalAddress(address,address,bool)": "a543ccea";
        readonly "subUint(bytes32,uint256)": "ebb9d8c9";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"addUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"confirmGuardian\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"confirmWithdrawalAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBytes32\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteString\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployedStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getGuardian\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"getNodePendingWithdrawalAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"getNodeWithdrawalAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_value\",\"type\":\"address\"}],\"name\":\"setAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"_value\",\"type\":\"bool\"}],\"name\":\"setBool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"_value\",\"type\":\"bytes\"}],\"name\":\"setBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"_value\",\"type\":\"bytes32\"}],\"name\":\"setBytes32\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newAddress\",\"type\":\"address\"}],\"name\":\"setGuardian\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"int256\",\"name\":\"_value\",\"type\":\"int256\"}],\"name\":\"setInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_value\",\"type\":\"string\"}],\"name\":\"setString\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"setUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newWithdrawalAddress\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_confirm\",\"type\":\"bool\"}],\"name\":\"setWithdrawalAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"subUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketStorage.sol\":\"IRocketStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketStorage.sol\":{\"keccak256\":\"0xa8caf20ba9b981389f2ba62d91e38273252dea1d3ba4f97b1a1d9889da842944\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e1dbf2a38330a67b3c1cdbdc4c36eb4abbccc3d55df09431a9abb19f5a73308\",\"dweb:/ipfs/QmVhKzCHSgaREiKiATN4S6WKVc3ziMUyydkBdnnLUV8hMM\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "addUint";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "confirmGuardian";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_nodeAddress";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "confirmWithdrawalAddress";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deleteAddress";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deleteBool";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deleteBytes";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deleteBytes32";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deleteInt";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deleteString";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deleteUint";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getAddress";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getBool";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getBytes";
                readonly outputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "";
                    readonly type: "bytes";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getBytes32";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getDeployedStatus";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getGuardian";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getInt";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_nodeAddress";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getNodePendingWithdrawalAddress";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_nodeAddress";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getNodeWithdrawalAddress";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getString";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getUint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "address";
                    readonly name: "_value";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setAddress";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_value";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setBool";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_value";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setBytes";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_value";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setBytes32";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_newAddress";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setGuardian";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "int256";
                    readonly name: "_value";
                    readonly type: "int256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setInt";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "string";
                    readonly name: "_value";
                    readonly type: "string";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setString";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_value";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setUint";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_nodeAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_newWithdrawalAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_confirm";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setWithdrawalAddress";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_key";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "subUint";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/src/interfaces/IRocketStorage.sol": "IRocketStorage";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IRocketStorage.sol": {
                readonly keccak256: "0xa8caf20ba9b981389f2ba62d91e38273252dea1d3ba4f97b1a1d9889da842944";
                readonly urls: readonly ["bzz-raw://3e1dbf2a38330a67b3c1cdbdc4c36eb4abbccc3d55df09431a9abb19f5a73308", "dweb:/ipfs/QmVhKzCHSgaREiKiATN4S6WKVc3ziMUyydkBdnnLUV8hMM"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IRocketStorage.sol";
        readonly id: 12706;
        readonly exportedSymbols: {
            readonly IRocketStorage: readonly [12705];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2256:107";
        readonly nodes: readonly [{
            readonly id: 12511;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:107";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12705;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:2230:107";
            readonly nodes: readonly [{
                readonly id: 12516;
                readonly nodeType: "FunctionDefinition";
                readonly src: "116:58:107";
                readonly nodes: readonly [];
                readonly functionSelector: "1bed5241";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getDeployedStatus";
                readonly nameLocation: "125:17:107";
                readonly parameters: {
                    readonly id: 12512;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "142:2:107";
                };
                readonly returnParameters: {
                    readonly id: 12515;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12514;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12516;
                        readonly src: "168:4:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12513;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "168:4:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "167:6:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12521;
                readonly nodeType: "FunctionDefinition";
                readonly src: "196:55:107";
                readonly nodes: readonly [];
                readonly functionSelector: "a75b87d2";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGuardian";
                readonly nameLocation: "205:11:107";
                readonly parameters: {
                    readonly id: 12517;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "216:2:107";
                };
                readonly returnParameters: {
                    readonly id: 12520;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12519;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12521;
                        readonly src: "242:7:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12518;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "242:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "241:9:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12526;
                readonly nodeType: "FunctionDefinition";
                readonly src: "257:51:107";
                readonly nodes: readonly [];
                readonly functionSelector: "8a0dac4a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setGuardian";
                readonly nameLocation: "266:11:107";
                readonly parameters: {
                    readonly id: 12524;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12523;
                        readonly mutability: "mutable";
                        readonly name: "_newAddress";
                        readonly nameLocation: "286:11:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12526;
                        readonly src: "278:19:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12522;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "278:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "277:21:107";
                };
                readonly returnParameters: {
                    readonly id: 12525;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "307:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12529;
                readonly nodeType: "FunctionDefinition";
                readonly src: "314:36:107";
                readonly nodes: readonly [];
                readonly functionSelector: "1e0ea61e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "confirmGuardian";
                readonly nameLocation: "323:15:107";
                readonly parameters: {
                    readonly id: 12527;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "338:2:107";
                };
                readonly returnParameters: {
                    readonly id: 12528;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "349:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12536;
                readonly nodeType: "FunctionDefinition";
                readonly src: "371:66:107";
                readonly nodes: readonly [];
                readonly functionSelector: "21f8a721";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getAddress";
                readonly nameLocation: "380:10:107";
                readonly parameters: {
                    readonly id: 12532;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12531;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "399:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12536;
                        readonly src: "391:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12530;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "391:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "390:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12535;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12534;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12536;
                        readonly src: "428:7:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12533;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "428:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "427:9:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12543;
                readonly nodeType: "FunctionDefinition";
                readonly src: "443:60:107";
                readonly nodes: readonly [];
                readonly functionSelector: "bd02d0f5";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getUint";
                readonly nameLocation: "452:7:107";
                readonly parameters: {
                    readonly id: 12539;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12538;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "468:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12543;
                        readonly src: "460:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12537;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "460:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "459:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12542;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12541;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12543;
                        readonly src: "497:4:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12540;
                            readonly name: "uint";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "497:4:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "496:6:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12550;
                readonly nodeType: "FunctionDefinition";
                readonly src: "509:71:107";
                readonly nodes: readonly [];
                readonly functionSelector: "986e791a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getString";
                readonly nameLocation: "518:9:107";
                readonly parameters: {
                    readonly id: 12546;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12545;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "536:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12550;
                        readonly src: "528:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12544;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "528:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "527:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12549;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12548;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12550;
                        readonly src: "565:13:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 12547;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "565:6:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "564:15:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12557;
                readonly nodeType: "FunctionDefinition";
                readonly src: "586:69:107";
                readonly nodes: readonly [];
                readonly functionSelector: "c031a180";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBytes";
                readonly nameLocation: "595:8:107";
                readonly parameters: {
                    readonly id: 12553;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12552;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "612:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12557;
                        readonly src: "604:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12551;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "604:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "603:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12556;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12555;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12557;
                        readonly src: "641:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 12554;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "641:5:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "640:14:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12564;
                readonly nodeType: "FunctionDefinition";
                readonly src: "661:60:107";
                readonly nodes: readonly [];
                readonly functionSelector: "7ae1cfca";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBool";
                readonly nameLocation: "670:7:107";
                readonly parameters: {
                    readonly id: 12560;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12559;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "686:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12564;
                        readonly src: "678:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12558;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "678:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "677:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12563;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12562;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12564;
                        readonly src: "715:4:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12561;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "715:4:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "714:6:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12571;
                readonly nodeType: "FunctionDefinition";
                readonly src: "727:58:107";
                readonly nodes: readonly [];
                readonly functionSelector: "dc97d962";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getInt";
                readonly nameLocation: "736:6:107";
                readonly parameters: {
                    readonly id: 12567;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12566;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "751:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12571;
                        readonly src: "743:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12565;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "743:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "742:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12570;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12569;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12571;
                        readonly src: "780:3:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 12568;
                            readonly name: "int";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "780:3:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "779:5:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12578;
                readonly nodeType: "FunctionDefinition";
                readonly src: "791:66:107";
                readonly nodes: readonly [];
                readonly functionSelector: "a6ed563e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBytes32";
                readonly nameLocation: "800:10:107";
                readonly parameters: {
                    readonly id: 12574;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12573;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "819:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12578;
                        readonly src: "811:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12572;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "811:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "810:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12577;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12576;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12578;
                        readonly src: "848:7:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12575;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "848:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "847:9:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12585;
                readonly nodeType: "FunctionDefinition";
                readonly src: "878:59:107";
                readonly nodes: readonly [];
                readonly functionSelector: "ca446dd9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setAddress";
                readonly nameLocation: "887:10:107";
                readonly parameters: {
                    readonly id: 12583;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12580;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "906:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12585;
                        readonly src: "898:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12579;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "898:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12582;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "920:6:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12585;
                        readonly src: "912:14:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12581;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "912:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "897:30:107";
                };
                readonly returnParameters: {
                    readonly id: 12584;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "936:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12592;
                readonly nodeType: "FunctionDefinition";
                readonly src: "943:53:107";
                readonly nodes: readonly [];
                readonly functionSelector: "e2a4853a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setUint";
                readonly nameLocation: "952:7:107";
                readonly parameters: {
                    readonly id: 12590;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12587;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "968:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12592;
                        readonly src: "960:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12586;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "960:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12589;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "979:6:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12592;
                        readonly src: "974:11:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12588;
                            readonly name: "uint";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "974:4:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "959:27:107";
                };
                readonly returnParameters: {
                    readonly id: 12591;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "995:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12599;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1002:66:107";
                readonly nodes: readonly [];
                readonly functionSelector: "6e899550";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setString";
                readonly nameLocation: "1011:9:107";
                readonly parameters: {
                    readonly id: 12597;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12594;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1029:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12599;
                        readonly src: "1021:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12593;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1021:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12596;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1051:6:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12599;
                        readonly src: "1035:22:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_calldata_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 12595;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1035:6:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1020:38:107";
                };
                readonly returnParameters: {
                    readonly id: 12598;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1067:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12606;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1074:64:107";
                readonly nodes: readonly [];
                readonly functionSelector: "2e28d084";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setBytes";
                readonly nameLocation: "1083:8:107";
                readonly parameters: {
                    readonly id: 12604;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12601;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1100:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12606;
                        readonly src: "1092:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12600;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1092:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12603;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1121:6:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12606;
                        readonly src: "1106:21:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 12602;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1106:5:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1091:37:107";
                };
                readonly returnParameters: {
                    readonly id: 12605;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1137:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12613;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1144:53:107";
                readonly nodes: readonly [];
                readonly functionSelector: "abfdcced";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setBool";
                readonly nameLocation: "1153:7:107";
                readonly parameters: {
                    readonly id: 12611;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12608;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1169:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12613;
                        readonly src: "1161:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12607;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1161:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12610;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1180:6:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12613;
                        readonly src: "1175:11:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12609;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1175:4:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1160:27:107";
                };
                readonly returnParameters: {
                    readonly id: 12612;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1196:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12620;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1203:51:107";
                readonly nodes: readonly [];
                readonly functionSelector: "3e49bed0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setInt";
                readonly nameLocation: "1212:6:107";
                readonly parameters: {
                    readonly id: 12618;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12615;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1227:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12620;
                        readonly src: "1219:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12614;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1219:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12617;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1237:6:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12620;
                        readonly src: "1233:10:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 12616;
                            readonly name: "int";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1233:3:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1218:26:107";
                };
                readonly returnParameters: {
                    readonly id: 12619;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1253:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12627;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1260:59:107";
                readonly nodes: readonly [];
                readonly functionSelector: "4e91db08";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setBytes32";
                readonly nameLocation: "1269:10:107";
                readonly parameters: {
                    readonly id: 12625;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12622;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1288:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12627;
                        readonly src: "1280:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12621;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1280:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12624;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1302:6:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12627;
                        readonly src: "1294:14:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12623;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1294:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1279:30:107";
                };
                readonly returnParameters: {
                    readonly id: 12626;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1318:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12632;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1341:46:107";
                readonly nodes: readonly [];
                readonly functionSelector: "0e14a376";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteAddress";
                readonly nameLocation: "1350:13:107";
                readonly parameters: {
                    readonly id: 12630;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12629;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1372:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12632;
                        readonly src: "1364:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12628;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1364:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1363:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12631;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1386:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12637;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1393:43:107";
                readonly nodes: readonly [];
                readonly functionSelector: "e2b202bf";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteUint";
                readonly nameLocation: "1402:10:107";
                readonly parameters: {
                    readonly id: 12635;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12634;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1421:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12637;
                        readonly src: "1413:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12633;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1413:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1412:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12636;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1435:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12642;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1442:45:107";
                readonly nodes: readonly [];
                readonly functionSelector: "f6bb3cc4";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteString";
                readonly nameLocation: "1451:12:107";
                readonly parameters: {
                    readonly id: 12640;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12639;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1472:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12642;
                        readonly src: "1464:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12638;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1464:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1463:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12641;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1486:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12647;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1493:44:107";
                readonly nodes: readonly [];
                readonly functionSelector: "616b59f6";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteBytes";
                readonly nameLocation: "1502:11:107";
                readonly parameters: {
                    readonly id: 12645;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12644;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1522:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12647;
                        readonly src: "1514:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12643;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1514:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1513:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12646;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1536:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12652;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1543:43:107";
                readonly nodes: readonly [];
                readonly functionSelector: "2c62ff2d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteBool";
                readonly nameLocation: "1552:10:107";
                readonly parameters: {
                    readonly id: 12650;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12649;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1571:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12652;
                        readonly src: "1563:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12648;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1563:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1562:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12651;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1585:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12657;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1592:42:107";
                readonly nodes: readonly [];
                readonly functionSelector: "8c160095";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteInt";
                readonly nameLocation: "1601:9:107";
                readonly parameters: {
                    readonly id: 12655;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12654;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1619:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12657;
                        readonly src: "1611:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12653;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1611:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1610:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12656;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1633:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12662;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1640:46:107";
                readonly nodes: readonly [];
                readonly functionSelector: "0b9adc57";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteBytes32";
                readonly nameLocation: "1649:13:107";
                readonly parameters: {
                    readonly id: 12660;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12659;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1671:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12662;
                        readonly src: "1663:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12658;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1663:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1662:14:107";
                };
                readonly returnParameters: {
                    readonly id: 12661;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1685:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12669;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1710:57:107";
                readonly nodes: readonly [];
                readonly functionSelector: "adb353dc";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "addUint";
                readonly nameLocation: "1719:7:107";
                readonly parameters: {
                    readonly id: 12667;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12664;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1735:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12669;
                        readonly src: "1727:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12663;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1727:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12666;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "1749:7:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12669;
                        readonly src: "1741:15:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12665;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1741:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1726:31:107";
                };
                readonly returnParameters: {
                    readonly id: 12668;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1766:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12676;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1773:57:107";
                readonly nodes: readonly [];
                readonly functionSelector: "ebb9d8c9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "subUint";
                readonly nameLocation: "1782:7:107";
                readonly parameters: {
                    readonly id: 12674;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12671;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1798:4:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12676;
                        readonly src: "1790:12:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 12670;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1790:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12673;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "1812:7:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12676;
                        readonly src: "1804:15:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12672;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1804:7:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1789:31:107";
                };
                readonly returnParameters: {
                    readonly id: 12675;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1829:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12683;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1861:102:107";
                readonly nodes: readonly [];
                readonly functionSelector: "5b49ff62";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getNodeWithdrawalAddress";
                readonly nameLocation: "1870:24:107";
                readonly parameters: {
                    readonly id: 12679;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12678;
                        readonly mutability: "mutable";
                        readonly name: "_nodeAddress";
                        readonly nameLocation: "1912:12:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12683;
                        readonly src: "1904:20:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12677;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1904:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1894:36:107";
                };
                readonly returnParameters: {
                    readonly id: 12682;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12681;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12683;
                        readonly src: "1954:7:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12680;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1954:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1953:9:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12690;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1969:109:107";
                readonly nodes: readonly [];
                readonly functionSelector: "fd412513";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getNodePendingWithdrawalAddress";
                readonly nameLocation: "1978:31:107";
                readonly parameters: {
                    readonly id: 12686;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12685;
                        readonly mutability: "mutable";
                        readonly name: "_nodeAddress";
                        readonly nameLocation: "2027:12:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12690;
                        readonly src: "2019:20:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12684;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2019:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2009:36:107";
                };
                readonly returnParameters: {
                    readonly id: 12689;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12688;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12690;
                        readonly src: "2069:7:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12687;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2069:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2068:9:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12699;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2084:137:107";
                readonly nodes: readonly [];
                readonly functionSelector: "a543ccea";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setWithdrawalAddress";
                readonly nameLocation: "2093:20:107";
                readonly parameters: {
                    readonly id: 12697;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12692;
                        readonly mutability: "mutable";
                        readonly name: "_nodeAddress";
                        readonly nameLocation: "2131:12:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12699;
                        readonly src: "2123:20:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12691;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2123:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12694;
                        readonly mutability: "mutable";
                        readonly name: "_newWithdrawalAddress";
                        readonly nameLocation: "2161:21:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12699;
                        readonly src: "2153:29:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12693;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2153:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12696;
                        readonly mutability: "mutable";
                        readonly name: "_confirm";
                        readonly nameLocation: "2197:8:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12699;
                        readonly src: "2192:13:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12695;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2192:4:107";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:98:107";
                };
                readonly returnParameters: {
                    readonly id: 12698;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2220:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12704;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2227:65:107";
                readonly nodes: readonly [];
                readonly functionSelector: "bd439126";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "confirmWithdrawalAddress";
                readonly nameLocation: "2236:24:107";
                readonly parameters: {
                    readonly id: 12702;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12701;
                        readonly mutability: "mutable";
                        readonly name: "_nodeAddress";
                        readonly nameLocation: "2269:12:107";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12704;
                        readonly src: "2261:20:107";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12700;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2261:7:107";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2260:22:107";
                };
                readonly returnParameters: {
                    readonly id: 12703;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2291:0:107";
                };
                readonly scope: 12705;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IRocketStorage";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [12705];
            readonly name: "IRocketStorage";
            readonly nameLocation: "74:14:107";
            readonly scope: 12706;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 107;
};
//# sourceMappingURL=IRocketStorage.d.ts.map