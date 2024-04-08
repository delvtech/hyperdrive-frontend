export declare const IRocketStorage: {
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
        readonly name: "addUint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "confirmGuardian";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_nodeAddress";
            readonly type: "address";
        }];
        readonly name: "confirmWithdrawalAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "deleteAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "deleteBool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "deleteBytes";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "deleteBytes32";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "deleteInt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "deleteString";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "deleteUint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "getAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "getBool";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "getBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "getBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDeployedStatus";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGuardian";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "getInt";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_nodeAddress";
            readonly type: "address";
        }];
        readonly name: "getNodePendingWithdrawalAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_nodeAddress";
            readonly type: "address";
        }];
        readonly name: "getNodeWithdrawalAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "getString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }];
        readonly name: "getUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly name: "setAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setBool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setBytes";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setBytes32";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newAddress";
            readonly type: "address";
        }];
        readonly name: "setGuardian";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setInt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setString";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setUint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setWithdrawalAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "subUint";
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"addUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"confirmGuardian\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"confirmWithdrawalAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteBytes32\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteString\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"deleteUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployedStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getGuardian\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"getNodePendingWithdrawalAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"}],\"name\":\"getNodeWithdrawalAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"}],\"name\":\"getUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_value\",\"type\":\"address\"}],\"name\":\"setAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"_value\",\"type\":\"bool\"}],\"name\":\"setBool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"_value\",\"type\":\"bytes\"}],\"name\":\"setBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"_value\",\"type\":\"bytes32\"}],\"name\":\"setBytes32\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newAddress\",\"type\":\"address\"}],\"name\":\"setGuardian\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"int256\",\"name\":\"_value\",\"type\":\"int256\"}],\"name\":\"setInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_value\",\"type\":\"string\"}],\"name\":\"setString\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"setUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nodeAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newWithdrawalAddress\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_confirm\",\"type\":\"bool\"}],\"name\":\"setWithdrawalAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_key\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"subUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketStorage.sol\":\"IRocketStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketStorage.sol\":{\"keccak256\":\"0xa8caf20ba9b981389f2ba62d91e38273252dea1d3ba4f97b1a1d9889da842944\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e1dbf2a38330a67b3c1cdbdc4c36eb4abbccc3d55df09431a9abb19f5a73308\",\"dweb:/ipfs/QmVhKzCHSgaREiKiATN4S6WKVc3ziMUyydkBdnnLUV8hMM\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
        readonly id: 12035;
        readonly exportedSymbols: {
            readonly IRocketStorage: readonly [12034];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2256:108";
        readonly nodes: readonly [{
            readonly id: 11840;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:108";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12034;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:2230:108";
            readonly nodes: readonly [{
                readonly id: 11845;
                readonly nodeType: "FunctionDefinition";
                readonly src: "116:58:108";
                readonly nodes: readonly [];
                readonly functionSelector: "1bed5241";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getDeployedStatus";
                readonly nameLocation: "125:17:108";
                readonly parameters: {
                    readonly id: 11841;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "142:2:108";
                };
                readonly returnParameters: {
                    readonly id: 11844;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11843;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11845;
                        readonly src: "168:4:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11842;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "168:4:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "167:6:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11850;
                readonly nodeType: "FunctionDefinition";
                readonly src: "196:55:108";
                readonly nodes: readonly [];
                readonly functionSelector: "a75b87d2";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGuardian";
                readonly nameLocation: "205:11:108";
                readonly parameters: {
                    readonly id: 11846;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "216:2:108";
                };
                readonly returnParameters: {
                    readonly id: 11849;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11848;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11850;
                        readonly src: "242:7:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11847;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "242:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "241:9:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11855;
                readonly nodeType: "FunctionDefinition";
                readonly src: "257:51:108";
                readonly nodes: readonly [];
                readonly functionSelector: "8a0dac4a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setGuardian";
                readonly nameLocation: "266:11:108";
                readonly parameters: {
                    readonly id: 11853;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11852;
                        readonly mutability: "mutable";
                        readonly name: "_newAddress";
                        readonly nameLocation: "286:11:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11855;
                        readonly src: "278:19:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11851;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "278:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "277:21:108";
                };
                readonly returnParameters: {
                    readonly id: 11854;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "307:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11858;
                readonly nodeType: "FunctionDefinition";
                readonly src: "314:36:108";
                readonly nodes: readonly [];
                readonly functionSelector: "1e0ea61e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "confirmGuardian";
                readonly nameLocation: "323:15:108";
                readonly parameters: {
                    readonly id: 11856;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "338:2:108";
                };
                readonly returnParameters: {
                    readonly id: 11857;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "349:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11865;
                readonly nodeType: "FunctionDefinition";
                readonly src: "371:66:108";
                readonly nodes: readonly [];
                readonly functionSelector: "21f8a721";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getAddress";
                readonly nameLocation: "380:10:108";
                readonly parameters: {
                    readonly id: 11861;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11860;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "399:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11865;
                        readonly src: "391:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11859;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "391:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "390:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11864;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11863;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11865;
                        readonly src: "428:7:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11862;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "428:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "427:9:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11872;
                readonly nodeType: "FunctionDefinition";
                readonly src: "443:60:108";
                readonly nodes: readonly [];
                readonly functionSelector: "bd02d0f5";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getUint";
                readonly nameLocation: "452:7:108";
                readonly parameters: {
                    readonly id: 11868;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11867;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "468:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11872;
                        readonly src: "460:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11866;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "460:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "459:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11871;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11870;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11872;
                        readonly src: "497:4:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11869;
                            readonly name: "uint";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "497:4:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "496:6:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11879;
                readonly nodeType: "FunctionDefinition";
                readonly src: "509:71:108";
                readonly nodes: readonly [];
                readonly functionSelector: "986e791a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getString";
                readonly nameLocation: "518:9:108";
                readonly parameters: {
                    readonly id: 11875;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11874;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "536:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11879;
                        readonly src: "528:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11873;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "528:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "527:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11878;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11877;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11879;
                        readonly src: "565:13:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 11876;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "565:6:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "564:15:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11886;
                readonly nodeType: "FunctionDefinition";
                readonly src: "586:69:108";
                readonly nodes: readonly [];
                readonly functionSelector: "c031a180";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBytes";
                readonly nameLocation: "595:8:108";
                readonly parameters: {
                    readonly id: 11882;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11881;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "612:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11886;
                        readonly src: "604:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11880;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "604:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "603:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11885;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11884;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11886;
                        readonly src: "641:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 11883;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "641:5:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "640:14:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11893;
                readonly nodeType: "FunctionDefinition";
                readonly src: "661:60:108";
                readonly nodes: readonly [];
                readonly functionSelector: "7ae1cfca";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBool";
                readonly nameLocation: "670:7:108";
                readonly parameters: {
                    readonly id: 11889;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11888;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "686:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11893;
                        readonly src: "678:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11887;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "678:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "677:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11892;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11891;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11893;
                        readonly src: "715:4:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11890;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "715:4:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "714:6:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11900;
                readonly nodeType: "FunctionDefinition";
                readonly src: "727:58:108";
                readonly nodes: readonly [];
                readonly functionSelector: "dc97d962";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getInt";
                readonly nameLocation: "736:6:108";
                readonly parameters: {
                    readonly id: 11896;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11895;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "751:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11900;
                        readonly src: "743:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11894;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "743:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "742:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11899;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11898;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11900;
                        readonly src: "780:3:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 11897;
                            readonly name: "int";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "780:3:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "779:5:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11907;
                readonly nodeType: "FunctionDefinition";
                readonly src: "791:66:108";
                readonly nodes: readonly [];
                readonly functionSelector: "a6ed563e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBytes32";
                readonly nameLocation: "800:10:108";
                readonly parameters: {
                    readonly id: 11903;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11902;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "819:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11907;
                        readonly src: "811:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11901;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "811:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "810:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11906;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11905;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11907;
                        readonly src: "848:7:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11904;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "848:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "847:9:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11914;
                readonly nodeType: "FunctionDefinition";
                readonly src: "878:59:108";
                readonly nodes: readonly [];
                readonly functionSelector: "ca446dd9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setAddress";
                readonly nameLocation: "887:10:108";
                readonly parameters: {
                    readonly id: 11912;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11909;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "906:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11914;
                        readonly src: "898:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11908;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "898:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11911;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "920:6:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11914;
                        readonly src: "912:14:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11910;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "912:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "897:30:108";
                };
                readonly returnParameters: {
                    readonly id: 11913;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "936:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11921;
                readonly nodeType: "FunctionDefinition";
                readonly src: "943:53:108";
                readonly nodes: readonly [];
                readonly functionSelector: "e2a4853a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setUint";
                readonly nameLocation: "952:7:108";
                readonly parameters: {
                    readonly id: 11919;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11916;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "968:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11921;
                        readonly src: "960:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11915;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "960:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11918;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "979:6:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11921;
                        readonly src: "974:11:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11917;
                            readonly name: "uint";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "974:4:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "959:27:108";
                };
                readonly returnParameters: {
                    readonly id: 11920;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "995:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11928;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1002:66:108";
                readonly nodes: readonly [];
                readonly functionSelector: "6e899550";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setString";
                readonly nameLocation: "1011:9:108";
                readonly parameters: {
                    readonly id: 11926;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11923;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1029:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11928;
                        readonly src: "1021:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11922;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1021:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11925;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1051:6:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11928;
                        readonly src: "1035:22:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_calldata_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 11924;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1035:6:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1020:38:108";
                };
                readonly returnParameters: {
                    readonly id: 11927;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1067:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11935;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1074:64:108";
                readonly nodes: readonly [];
                readonly functionSelector: "2e28d084";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setBytes";
                readonly nameLocation: "1083:8:108";
                readonly parameters: {
                    readonly id: 11933;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11930;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1100:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11935;
                        readonly src: "1092:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11929;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1092:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11932;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1121:6:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11935;
                        readonly src: "1106:21:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 11931;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1106:5:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1091:37:108";
                };
                readonly returnParameters: {
                    readonly id: 11934;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1137:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11942;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1144:53:108";
                readonly nodes: readonly [];
                readonly functionSelector: "abfdcced";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setBool";
                readonly nameLocation: "1153:7:108";
                readonly parameters: {
                    readonly id: 11940;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11937;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1169:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11942;
                        readonly src: "1161:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11936;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1161:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11939;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1180:6:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11942;
                        readonly src: "1175:11:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11938;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1175:4:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1160:27:108";
                };
                readonly returnParameters: {
                    readonly id: 11941;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1196:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11949;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1203:51:108";
                readonly nodes: readonly [];
                readonly functionSelector: "3e49bed0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setInt";
                readonly nameLocation: "1212:6:108";
                readonly parameters: {
                    readonly id: 11947;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11944;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1227:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11949;
                        readonly src: "1219:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11943;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1219:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11946;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1237:6:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11949;
                        readonly src: "1233:10:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 11945;
                            readonly name: "int";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1233:3:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1218:26:108";
                };
                readonly returnParameters: {
                    readonly id: 11948;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1253:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11956;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1260:59:108";
                readonly nodes: readonly [];
                readonly functionSelector: "4e91db08";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setBytes32";
                readonly nameLocation: "1269:10:108";
                readonly parameters: {
                    readonly id: 11954;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11951;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1288:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11956;
                        readonly src: "1280:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11950;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1280:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11953;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1302:6:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11956;
                        readonly src: "1294:14:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11952;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1294:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1279:30:108";
                };
                readonly returnParameters: {
                    readonly id: 11955;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1318:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11961;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1341:46:108";
                readonly nodes: readonly [];
                readonly functionSelector: "0e14a376";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteAddress";
                readonly nameLocation: "1350:13:108";
                readonly parameters: {
                    readonly id: 11959;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11958;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1372:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11961;
                        readonly src: "1364:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11957;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1364:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1363:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11960;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1386:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11966;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1393:43:108";
                readonly nodes: readonly [];
                readonly functionSelector: "e2b202bf";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteUint";
                readonly nameLocation: "1402:10:108";
                readonly parameters: {
                    readonly id: 11964;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11963;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1421:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11966;
                        readonly src: "1413:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11962;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1413:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1412:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11965;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1435:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11971;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1442:45:108";
                readonly nodes: readonly [];
                readonly functionSelector: "f6bb3cc4";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteString";
                readonly nameLocation: "1451:12:108";
                readonly parameters: {
                    readonly id: 11969;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11968;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1472:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11971;
                        readonly src: "1464:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11967;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1464:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1463:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11970;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1486:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11976;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1493:44:108";
                readonly nodes: readonly [];
                readonly functionSelector: "616b59f6";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteBytes";
                readonly nameLocation: "1502:11:108";
                readonly parameters: {
                    readonly id: 11974;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11973;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1522:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11976;
                        readonly src: "1514:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11972;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1514:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1513:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11975;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1536:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11981;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1543:43:108";
                readonly nodes: readonly [];
                readonly functionSelector: "2c62ff2d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteBool";
                readonly nameLocation: "1552:10:108";
                readonly parameters: {
                    readonly id: 11979;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11978;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1571:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11981;
                        readonly src: "1563:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11977;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1563:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1562:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11980;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1585:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11986;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1592:42:108";
                readonly nodes: readonly [];
                readonly functionSelector: "8c160095";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteInt";
                readonly nameLocation: "1601:9:108";
                readonly parameters: {
                    readonly id: 11984;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11983;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1619:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11986;
                        readonly src: "1611:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11982;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1611:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1610:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11985;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1633:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11991;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1640:46:108";
                readonly nodes: readonly [];
                readonly functionSelector: "0b9adc57";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deleteBytes32";
                readonly nameLocation: "1649:13:108";
                readonly parameters: {
                    readonly id: 11989;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11988;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1671:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11991;
                        readonly src: "1663:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11987;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1663:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1662:14:108";
                };
                readonly returnParameters: {
                    readonly id: 11990;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1685:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11998;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1710:57:108";
                readonly nodes: readonly [];
                readonly functionSelector: "adb353dc";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "addUint";
                readonly nameLocation: "1719:7:108";
                readonly parameters: {
                    readonly id: 11996;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11993;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1735:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11998;
                        readonly src: "1727:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11992;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1727:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11995;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "1749:7:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11998;
                        readonly src: "1741:15:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11994;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1741:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1726:31:108";
                };
                readonly returnParameters: {
                    readonly id: 11997;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1766:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12005;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1773:57:108";
                readonly nodes: readonly [];
                readonly functionSelector: "ebb9d8c9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "subUint";
                readonly nameLocation: "1782:7:108";
                readonly parameters: {
                    readonly id: 12003;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12000;
                        readonly mutability: "mutable";
                        readonly name: "_key";
                        readonly nameLocation: "1798:4:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12005;
                        readonly src: "1790:12:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11999;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1790:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12002;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "1812:7:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12005;
                        readonly src: "1804:15:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12001;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1804:7:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1789:31:108";
                };
                readonly returnParameters: {
                    readonly id: 12004;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1829:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12012;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1861:102:108";
                readonly nodes: readonly [];
                readonly functionSelector: "5b49ff62";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getNodeWithdrawalAddress";
                readonly nameLocation: "1870:24:108";
                readonly parameters: {
                    readonly id: 12008;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12007;
                        readonly mutability: "mutable";
                        readonly name: "_nodeAddress";
                        readonly nameLocation: "1912:12:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12012;
                        readonly src: "1904:20:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12006;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1904:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1894:36:108";
                };
                readonly returnParameters: {
                    readonly id: 12011;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12010;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12012;
                        readonly src: "1954:7:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12009;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1954:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1953:9:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12019;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1969:109:108";
                readonly nodes: readonly [];
                readonly functionSelector: "fd412513";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getNodePendingWithdrawalAddress";
                readonly nameLocation: "1978:31:108";
                readonly parameters: {
                    readonly id: 12015;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12014;
                        readonly mutability: "mutable";
                        readonly name: "_nodeAddress";
                        readonly nameLocation: "2027:12:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12019;
                        readonly src: "2019:20:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12013;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2019:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2009:36:108";
                };
                readonly returnParameters: {
                    readonly id: 12018;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12017;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12019;
                        readonly src: "2069:7:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12016;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2069:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2068:9:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12028;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2084:137:108";
                readonly nodes: readonly [];
                readonly functionSelector: "a543ccea";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setWithdrawalAddress";
                readonly nameLocation: "2093:20:108";
                readonly parameters: {
                    readonly id: 12026;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12021;
                        readonly mutability: "mutable";
                        readonly name: "_nodeAddress";
                        readonly nameLocation: "2131:12:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12028;
                        readonly src: "2123:20:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12020;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2123:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12023;
                        readonly mutability: "mutable";
                        readonly name: "_newWithdrawalAddress";
                        readonly nameLocation: "2161:21:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12028;
                        readonly src: "2153:29:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12022;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2153:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12025;
                        readonly mutability: "mutable";
                        readonly name: "_confirm";
                        readonly nameLocation: "2197:8:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12028;
                        readonly src: "2192:13:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12024;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2192:4:108";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:98:108";
                };
                readonly returnParameters: {
                    readonly id: 12027;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2220:0:108";
                };
                readonly scope: 12034;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12033;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2227:65:108";
                readonly nodes: readonly [];
                readonly functionSelector: "bd439126";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "confirmWithdrawalAddress";
                readonly nameLocation: "2236:24:108";
                readonly parameters: {
                    readonly id: 12031;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12030;
                        readonly mutability: "mutable";
                        readonly name: "_nodeAddress";
                        readonly nameLocation: "2269:12:108";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12033;
                        readonly src: "2261:20:108";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12029;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2261:7:108";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2260:22:108";
                };
                readonly returnParameters: {
                    readonly id: 12032;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2291:0:108";
                };
                readonly scope: 12034;
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
            readonly linearizedBaseContracts: readonly [12034];
            readonly name: "IRocketStorage";
            readonly nameLocation: "74:14:108";
            readonly scope: 12035;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 108;
};
//# sourceMappingURL=IRocketStorage.d.ts.map