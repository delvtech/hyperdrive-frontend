export declare const ERC20: {
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
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
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
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "allowance";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
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
            readonly name: "";
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
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
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
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
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
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
        readonly "DOMAIN_SEPARATOR()": "3644e515";
        readonly "allowance(address,address)": "dd62ed3e";
        readonly "approve(address,uint256)": "095ea7b3";
        readonly "balanceOf(address)": "70a08231";
        readonly "decimals()": "313ce567";
        readonly "name()": "06fdde03";
        readonly "nonces(address)": "7ecebe00";
        readonly "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf";
        readonly "symbol()": "95d89b41";
        readonly "totalSupply()": "18160ddd";
        readonly "transfer(address,uint256)": "a9059cbb";
        readonly "transferFrom(address,address,uint256)": "23b872dd";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)\",\"details\":\"Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Modern and gas efficient ERC20 + EIP-2612 implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/tokens/ERC20.sol\":\"ERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}";
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
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Approval";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
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
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Transfer";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "DOMAIN_SEPARATOR";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "allowance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "approve";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
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
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
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
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
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
                readonly name: "permit";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [];
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
                readonly name: "transfer";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
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
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFrom";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
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
                readonly "lib/solmate/src/tokens/ERC20.sol": "ERC20";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/solmate/src/tokens/ERC20.sol": {
                readonly keccak256: "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10";
                readonly urls: readonly ["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35", "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"];
                readonly license: "AGPL-3.0-only";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/solmate/src/tokens/ERC20.sol";
        readonly id: 72540;
        readonly exportedSymbols: {
            readonly ERC20: readonly [72539];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:6770:172";
        readonly nodes: readonly [{
            readonly id: 72153;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:172";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 72539;
            readonly nodeType: "ContractDefinition";
            readonly src: "474:6337:172";
            readonly nodes: readonly [{
                readonly id: 72162;
                readonly nodeType: "EventDefinition";
                readonly src: "683:73:172";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
                readonly name: "Transfer";
                readonly nameLocation: "689:8:172";
                readonly parameters: {
                    readonly id: 72161;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72156;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "714:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72162;
                        readonly src: "698:20:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72155;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "698:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72158;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "736:2:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72162;
                        readonly src: "720:18:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72157;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "720:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72160;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "748:6:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72162;
                        readonly src: "740:14:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72159;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "740:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "697:58:172";
                };
            }, {
                readonly id: 72170;
                readonly nodeType: "EventDefinition";
                readonly src: "762:79:172";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925";
                readonly name: "Approval";
                readonly nameLocation: "768:8:172";
                readonly parameters: {
                    readonly id: 72169;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72164;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "793:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72170;
                        readonly src: "777:21:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72163;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "777:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72166;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "816:7:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72170;
                        readonly src: "800:23:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72165;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "800:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72168;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "833:6:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72170;
                        readonly src: "825:14:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72167;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "825:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "776:64:172";
                };
            }, {
                readonly id: 72172;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1031:18:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "06fdde03";
                readonly mutability: "mutable";
                readonly name: "name";
                readonly nameLocation: "1045:4:172";
                readonly scope: 72539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_storage";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 72171;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1031:6:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72174;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1056:20:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "95d89b41";
                readonly mutability: "mutable";
                readonly name: "symbol";
                readonly nameLocation: "1070:6:172";
                readonly scope: 72539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_storage";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 72173;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1056:6:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72176;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1083:31:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "313ce567";
                readonly mutability: "immutable";
                readonly name: "decimals";
                readonly nameLocation: "1106:8:172";
                readonly scope: 72539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint8";
                    readonly typeString: "uint8";
                };
                readonly typeName: {
                    readonly id: 72175;
                    readonly name: "uint8";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1083:5:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint8";
                        readonly typeString: "uint8";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72178;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1304:26:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "18160ddd";
                readonly mutability: "mutable";
                readonly name: "totalSupply";
                readonly nameLocation: "1319:11:172";
                readonly scope: 72539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 72177;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1304:7:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72182;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1337:44:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "70a08231";
                readonly mutability: "mutable";
                readonly name: "balanceOf";
                readonly nameLocation: "1372:9:172";
                readonly scope: 72539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                    readonly typeString: "mapping(address => uint256)";
                };
                readonly typeName: {
                    readonly id: 72181;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 72179;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1345:7:172";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "1337:27:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                        readonly typeString: "mapping(address => uint256)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 72180;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1356:7:172";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72188;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1388:64:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "dd62ed3e";
                readonly mutability: "mutable";
                readonly name: "allowance";
                readonly nameLocation: "1443:9:172";
                readonly scope: 72539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                    readonly typeString: "mapping(address => mapping(address => uint256))";
                };
                readonly typeName: {
                    readonly id: 72187;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 72183;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1396:7:172";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "1388:47:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                        readonly typeString: "mapping(address => mapping(address => uint256))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 72186;
                        readonly keyName: "";
                        readonly keyNameLocation: "-1:-1:-1";
                        readonly keyType: {
                            readonly id: 72184;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1415:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "1407:27:172";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                            readonly typeString: "mapping(address => uint256)";
                        };
                        readonly valueName: "";
                        readonly valueNameLocation: "-1:-1:-1";
                        readonly valueType: {
                            readonly id: 72185;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1426:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72190;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1643:43:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "immutable";
                readonly name: "INITIAL_CHAIN_ID";
                readonly nameLocation: "1670:16:172";
                readonly scope: 72539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 72189;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1643:7:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 72192;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1693:51:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "immutable";
                readonly name: "INITIAL_DOMAIN_SEPARATOR";
                readonly nameLocation: "1720:24:172";
                readonly scope: 72539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 72191;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1693:7:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 72196;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1751:41:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "7ecebe00";
                readonly mutability: "mutable";
                readonly name: "nonces";
                readonly nameLocation: "1786:6:172";
                readonly scope: 72539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                    readonly typeString: "mapping(address => uint256)";
                };
                readonly typeName: {
                    readonly id: 72195;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 72193;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1759:7:172";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "1751:27:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                        readonly typeString: "mapping(address => uint256)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 72194;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1770:7:172";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72228;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1981:292:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72227;
                    readonly nodeType: "Block";
                    readonly src: "2084:189:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72207;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72205;
                                readonly name: "name";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72172;
                                readonly src: "2094:4:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage";
                                    readonly typeString: "string storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72206;
                                readonly name: "_name";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72198;
                                readonly src: "2101:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "2094:12:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly id: 72208;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2094:12:172";
                    }, {
                        readonly expression: {
                            readonly id: 72211;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72209;
                                readonly name: "symbol";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72174;
                                readonly src: "2116:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage";
                                    readonly typeString: "string storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72210;
                                readonly name: "_symbol";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72200;
                                readonly src: "2125:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "2116:16:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly id: 72212;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2116:16:172";
                    }, {
                        readonly expression: {
                            readonly id: 72215;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72213;
                                readonly name: "decimals";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72176;
                                readonly src: "2142:8:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint8";
                                    readonly typeString: "uint8";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72214;
                                readonly name: "_decimals";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72202;
                                readonly src: "2153:9:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint8";
                                    readonly typeString: "uint8";
                                };
                            };
                            readonly src: "2142:20:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly id: 72216;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2142:20:172";
                    }, {
                        readonly expression: {
                            readonly id: 72220;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72217;
                                readonly name: "INITIAL_CHAIN_ID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72190;
                                readonly src: "2173:16:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 72218;
                                    readonly name: "block";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -4;
                                    readonly src: "2192:5:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_block";
                                        readonly typeString: "block";
                                    };
                                };
                                readonly id: 72219;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2198:7:172";
                                readonly memberName: "chainid";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2192:13:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2173:32:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72221;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2173:32:172";
                    }, {
                        readonly expression: {
                            readonly id: 72225;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72222;
                                readonly name: "INITIAL_DOMAIN_SEPARATOR";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72192;
                                readonly src: "2215:24:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 72223;
                                    readonly name: "computeDomainSeparator";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72482;
                                    readonly src: "2242:22:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_bytes32_$";
                                        readonly typeString: "function () view returns (bytes32)";
                                    };
                                };
                                readonly id: 72224;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2242:24:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "2215:51:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 72226;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2215:51:172";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 72203;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72198;
                        readonly mutability: "mutable";
                        readonly name: "_name";
                        readonly nameLocation: "2016:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72228;
                        readonly src: "2002:19:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 72197;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2002:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72200;
                        readonly mutability: "mutable";
                        readonly name: "_symbol";
                        readonly nameLocation: "2045:7:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72228;
                        readonly src: "2031:21:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 72199;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2031:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72202;
                        readonly mutability: "mutable";
                        readonly name: "_decimals";
                        readonly nameLocation: "2068:9:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72228;
                        readonly src: "2062:15:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 72201;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2062:5:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1992:91:172";
                };
                readonly returnParameters: {
                    readonly id: 72204;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2084:0:172";
                };
                readonly scope: 72539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 72256;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2461:211:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72255;
                    readonly nodeType: "Block";
                    readonly src: "2541:131:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72244;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly baseExpression: {
                                        readonly id: 72237;
                                        readonly name: "allowance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72188;
                                        readonly src: "2551:9:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                                            readonly typeString: "mapping(address => mapping(address => uint256))";
                                        };
                                    };
                                    readonly id: 72241;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 72238;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "2561:3:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72239;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2565:6:172";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2561:10:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "2551:21:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 72242;
                                readonly indexExpression: {
                                    readonly id: 72240;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72230;
                                    readonly src: "2573:7:172";
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
                                readonly src: "2551:30:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72243;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72232;
                                readonly src: "2584:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2551:39:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72245;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2551:39:172";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72247;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2615:3:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72248;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2619:6:172";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2615:10:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72249;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72230;
                                readonly src: "2627:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72250;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72232;
                                readonly src: "2636:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 72246;
                                readonly name: "Approval";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72170;
                                readonly src: "2606:8:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,uint256)";
                                };
                            };
                            readonly id: 72251;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2606:37:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72252;
                        readonly nodeType: "EmitStatement";
                        readonly src: "2601:42:172";
                    }, {
                        readonly expression: {
                            readonly hexValue: "74727565";
                            readonly id: 72253;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2661:4:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly functionReturnParameters: 72236;
                        readonly id: 72254;
                        readonly nodeType: "Return";
                        readonly src: "2654:11:172";
                    }];
                };
                readonly functionSelector: "095ea7b3";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "approve";
                readonly nameLocation: "2470:7:172";
                readonly parameters: {
                    readonly id: 72233;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72230;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2486:7:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72256;
                        readonly src: "2478:15:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72229;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2478:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72232;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "2503:6:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72256;
                        readonly src: "2495:14:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72231;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2495:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2477:33:172";
                };
                readonly returnParameters: {
                    readonly id: 72236;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72235;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72256;
                        readonly src: "2535:4:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72234;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2535:4:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2534:6:172";
                };
                readonly scope: 72539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72289;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2678:373:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72288;
                    readonly nodeType: "Block";
                    readonly src: "2754:297:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72270;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 72265;
                                    readonly name: "balanceOf";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72182;
                                    readonly src: "2764:9:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 72268;
                                readonly indexExpression: {
                                    readonly expression: {
                                        readonly id: 72266;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "2774:3:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 72267;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2778:6:172";
                                    readonly memberName: "sender";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "2774:10:172";
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
                                readonly src: "2764:21:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 72269;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72260;
                                readonly src: "2789:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2764:31:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72271;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2764:31:172";
                    }, {
                        readonly id: 72278;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "2917:58:172";
                        readonly statements: readonly [{
                            readonly expression: {
                                readonly id: 72276;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly baseExpression: {
                                        readonly id: 72272;
                                        readonly name: "balanceOf";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72182;
                                        readonly src: "2941:9:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 72274;
                                    readonly indexExpression: {
                                        readonly id: 72273;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72258;
                                        readonly src: "2951:2:172";
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
                                    readonly src: "2941:13:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "+=";
                                readonly rightHandSide: {
                                    readonly id: 72275;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72260;
                                    readonly src: "2958:6:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2941:23:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72277;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "2941:23:172";
                        }];
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72280;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2999:3:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72281;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3003:6:172";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2999:10:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72282;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72258;
                                readonly src: "3011:2:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72283;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72260;
                                readonly src: "3015:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 72279;
                                readonly name: "Transfer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72162;
                                readonly src: "2990:8:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,uint256)";
                                };
                            };
                            readonly id: 72284;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2990:32:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72285;
                        readonly nodeType: "EmitStatement";
                        readonly src: "2985:37:172";
                    }, {
                        readonly expression: {
                            readonly hexValue: "74727565";
                            readonly id: 72286;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "3040:4:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly functionReturnParameters: 72264;
                        readonly id: 72287;
                        readonly nodeType: "Return";
                        readonly src: "3033:11:172";
                    }];
                };
                readonly functionSelector: "a9059cbb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transfer";
                readonly nameLocation: "2687:8:172";
                readonly parameters: {
                    readonly id: 72261;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72258;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "2704:2:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72289;
                        readonly src: "2696:10:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72257;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2696:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72260;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "2716:6:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72289;
                        readonly src: "2708:14:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72259;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2708:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2695:28:172";
                };
                readonly returnParameters: {
                    readonly id: 72264;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72263;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72289;
                        readonly src: "2748:4:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72262;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2748:4:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2747:6:172";
                };
                readonly scope: 72539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72350;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3057:592:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72349;
                    readonly nodeType: "Block";
                    readonly src: "3181:468:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [72301];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 72301;
                            readonly mutability: "mutable";
                            readonly name: "allowed";
                            readonly nameLocation: "3199:7:172";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 72349;
                            readonly src: "3191:15:172";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 72300;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3191:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 72308;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly baseExpression: {
                                    readonly id: 72302;
                                    readonly name: "allowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72188;
                                    readonly src: "3209:9:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                                        readonly typeString: "mapping(address => mapping(address => uint256))";
                                    };
                                };
                                readonly id: 72304;
                                readonly indexExpression: {
                                    readonly id: 72303;
                                    readonly name: "from";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72291;
                                    readonly src: "3219:4:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "IndexAccess";
                                readonly src: "3209:15:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                    readonly typeString: "mapping(address => uint256)";
                                };
                            };
                            readonly id: 72307;
                            readonly indexExpression: {
                                readonly expression: {
                                    readonly id: 72305;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "3225:3:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72306;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3229:6:172";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3225:10:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "IndexAccess";
                            readonly src: "3209:27:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3191:45:172";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 72315;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 72309;
                                readonly name: "allowed";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72301;
                                readonly src: "3287:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 72312;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "3303:7:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                            readonly typeString: "type(uint256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 72311;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "3303:7:172";
                                            readonly typeDescriptions: {};
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                            readonly typeString: "type(uint256)";
                                        }];
                                        readonly id: 72310;
                                        readonly name: "type";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -27;
                                        readonly src: "3298:4:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_metatype_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 72313;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3298:13:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_meta_type_t_uint256";
                                        readonly typeString: "type(uint256)";
                                    };
                                };
                                readonly id: 72314;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3312:3:172";
                                readonly memberName: "max";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3298:17:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3287:28:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 72327;
                        readonly nodeType: "IfStatement";
                        readonly src: "3283:80:172";
                        readonly trueBody: {
                            readonly expression: {
                                readonly id: 72325;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 72316;
                                            readonly name: "allowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72188;
                                            readonly src: "3317:9:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                                                readonly typeString: "mapping(address => mapping(address => uint256))";
                                            };
                                        };
                                        readonly id: 72320;
                                        readonly indexExpression: {
                                            readonly id: 72317;
                                            readonly name: "from";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72291;
                                            readonly src: "3327:4:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "3317:15:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 72321;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 72318;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "3333:3:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72319;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3337:6:172";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "3333:10:172";
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
                                    readonly src: "3317:27:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 72324;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 72322;
                                        readonly name: "allowed";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72301;
                                        readonly src: "3347:7:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 72323;
                                        readonly name: "amount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72295;
                                        readonly src: "3357:6:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3347:16:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "3317:46:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72326;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "3317:46:172";
                        };
                    }, {
                        readonly expression: {
                            readonly id: 72332;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 72328;
                                    readonly name: "balanceOf";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72182;
                                    readonly src: "3374:9:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 72330;
                                readonly indexExpression: {
                                    readonly id: 72329;
                                    readonly name: "from";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72291;
                                    readonly src: "3384:4:172";
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
                                readonly src: "3374:15:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 72331;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72295;
                                readonly src: "3393:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3374:25:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72333;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3374:25:172";
                    }, {
                        readonly id: 72340;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "3521:58:172";
                        readonly statements: readonly [{
                            readonly expression: {
                                readonly id: 72338;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly baseExpression: {
                                        readonly id: 72334;
                                        readonly name: "balanceOf";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72182;
                                        readonly src: "3545:9:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 72336;
                                    readonly indexExpression: {
                                        readonly id: 72335;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72293;
                                        readonly src: "3555:2:172";
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
                                    readonly src: "3545:13:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "+=";
                                readonly rightHandSide: {
                                    readonly id: 72337;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72295;
                                    readonly src: "3562:6:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "3545:23:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72339;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "3545:23:172";
                        }];
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 72342;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72291;
                                readonly src: "3603:4:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72343;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72293;
                                readonly src: "3609:2:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72344;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72295;
                                readonly src: "3613:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 72341;
                                readonly name: "Transfer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72162;
                                readonly src: "3594:8:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,uint256)";
                                };
                            };
                            readonly id: 72345;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3594:26:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72346;
                        readonly nodeType: "EmitStatement";
                        readonly src: "3589:31:172";
                    }, {
                        readonly expression: {
                            readonly hexValue: "74727565";
                            readonly id: 72347;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "3638:4:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly functionReturnParameters: 72299;
                        readonly id: 72348;
                        readonly nodeType: "Return";
                        readonly src: "3631:11:172";
                    }];
                };
                readonly functionSelector: "23b872dd";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferFrom";
                readonly nameLocation: "3066:12:172";
                readonly parameters: {
                    readonly id: 72296;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72291;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "3096:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72350;
                        readonly src: "3088:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72290;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3088:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72293;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "3118:2:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72350;
                        readonly src: "3110:10:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72292;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3110:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72295;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "3138:6:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72350;
                        readonly src: "3130:14:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72294;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3130:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3078:72:172";
                };
                readonly returnParameters: {
                    readonly id: 72299;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72298;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72350;
                        readonly src: "3175:4:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72297;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3175:4:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3174:6:172";
                };
                readonly scope: 72539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72437;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3838:1483:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72436;
                    readonly nodeType: "Block";
                    readonly src: "4027:1294:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72371;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 72368;
                                    readonly name: "deadline";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72358;
                                    readonly src: "4045:8:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">=";
                                readonly rightExpression: {
                                    readonly expression: {
                                        readonly id: 72369;
                                        readonly name: "block";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -4;
                                        readonly src: "4057:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_block";
                                            readonly typeString: "block";
                                        };
                                    };
                                    readonly id: 72370;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4063:9:172";
                                    readonly memberName: "timestamp";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4057:15:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "4045:27:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5045524d49545f444541444c494e455f45585049524544";
                                readonly id: 72372;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4074:25:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_dd18cfd81b4c1281b56302a044e7f751a261543590362c41d86af048f8ed4b3e";
                                    readonly typeString: "literal_string \"PERMIT_DEADLINE_EXPIRED\"";
                                };
                                readonly value: "PERMIT_DEADLINE_EXPIRED";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_dd18cfd81b4c1281b56302a044e7f751a261543590362c41d86af048f8ed4b3e";
                                    readonly typeString: "literal_string \"PERMIT_DEADLINE_EXPIRED\"";
                                }];
                                readonly id: 72367;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4037:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 72373;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4037:63:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72374;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4037:63:172";
                    }, {
                        readonly id: 72429;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "4241:1027:172";
                        readonly statements: readonly [{
                            readonly assignments: readonly [72376];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 72376;
                                readonly mutability: "mutable";
                                readonly name: "recoveredAddress";
                                readonly nameLocation: "4273:16:172";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 72429;
                                readonly src: "4265:24:172";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly typeName: {
                                    readonly id: 72375;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "4265:7:172";
                                    readonly stateMutability: "nonpayable";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 72406;
                            readonly initialValue: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly hexValue: "1901";
                                            readonly id: 72381;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "4392:10:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541";
                                                readonly typeString: "literal_string hex\"1901\"";
                                            };
                                            readonly value: "\u0019\u0001";
                                        }, {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly id: 72382;
                                                readonly name: "DOMAIN_SEPARATOR";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72452;
                                                readonly src: "4428:16:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_bytes32_$";
                                                    readonly typeString: "function () view returns (bytes32)";
                                                };
                                            };
                                            readonly id: 72383;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4428:18:172";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly hexValue: "5065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529";
                                                        readonly id: 72388;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "string";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "4602:84:172";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_stringliteral_6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9";
                                                            readonly typeString: "literal_string \"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\"";
                                                        };
                                                        readonly value: "Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)";
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_stringliteral_6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9";
                                                            readonly typeString: "literal_string \"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\"";
                                                        }];
                                                        readonly id: 72387;
                                                        readonly name: "keccak256";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -8;
                                                        readonly src: "4555:9:172";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                        };
                                                    };
                                                    readonly id: 72389;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "4555:165:172";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }, {
                                                    readonly id: 72390;
                                                    readonly name: "owner";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72352;
                                                    readonly src: "4754:5:172";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }, {
                                                    readonly id: 72391;
                                                    readonly name: "spender";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72354;
                                                    readonly src: "4793:7:172";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }, {
                                                    readonly id: 72392;
                                                    readonly name: "value";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72356;
                                                    readonly src: "4834:5:172";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }, {
                                                    readonly id: 72396;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "UnaryOperation";
                                                    readonly operator: "++";
                                                    readonly prefix: false;
                                                    readonly src: "4873:15:172";
                                                    readonly subExpression: {
                                                        readonly baseExpression: {
                                                            readonly id: 72393;
                                                            readonly name: "nonces";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 72196;
                                                            readonly src: "4873:6:172";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                                                readonly typeString: "mapping(address => uint256)";
                                                            };
                                                        };
                                                        readonly id: 72395;
                                                        readonly indexExpression: {
                                                            readonly id: 72394;
                                                            readonly name: "owner";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 72352;
                                                            readonly src: "4880:5:172";
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
                                                        readonly src: "4873:13:172";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }, {
                                                    readonly id: 72397;
                                                    readonly name: "deadline";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72358;
                                                    readonly src: "4922:8:172";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
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
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    }, {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 72385;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "4511:3:172";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 72386;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "4515:6:172";
                                                    readonly memberName: "encode";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "4511:10:172";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function () pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 72398;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "4511:449:172";
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
                                                readonly id: 72384;
                                                readonly name: "keccak256";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -8;
                                                readonly src: "4472:9:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                };
                                            };
                                            readonly id: 72399;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4472:514:172";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541";
                                                readonly typeString: "literal_string hex\"1901\"";
                                            }, {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            }, {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            }];
                                            readonly expression: {
                                                readonly id: 72379;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "4350:3:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 72380;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4354:12:172";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4350:16:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 72400;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4350:658:172";
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
                                        readonly id: 72378;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "4319:9:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 72401;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4319:707:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }, {
                                    readonly id: 72402;
                                    readonly name: "v";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72360;
                                    readonly src: "5044:1:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint8";
                                        readonly typeString: "uint8";
                                    };
                                }, {
                                    readonly id: 72403;
                                    readonly name: "r";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72362;
                                    readonly src: "5063:1:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }, {
                                    readonly id: 72404;
                                    readonly name: "s";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72364;
                                    readonly src: "5082:1:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    }, {
                                        readonly typeIdentifier: "t_uint8";
                                        readonly typeString: "uint8";
                                    }, {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    }, {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    }];
                                    readonly id: 72377;
                                    readonly name: "ecrecover";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -6;
                                    readonly src: "4292:9:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32,uint8,bytes32,bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 72405;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4292:805:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "4265:832:172";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 72417;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 72413;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 72408;
                                            readonly name: "recoveredAddress";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72376;
                                            readonly src: "5120:16:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "!=";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 72411;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5148:1:172";
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
                                                readonly id: 72410;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5140:7:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72409;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5140:7:172";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72412;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5140:10:172";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "5120:30:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&&";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 72416;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 72414;
                                            readonly name: "recoveredAddress";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72376;
                                            readonly src: "5154:16:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly id: 72415;
                                            readonly name: "owner";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72352;
                                            readonly src: "5174:5:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "5154:25:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5120:59:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }, {
                                    readonly hexValue: "494e56414c49445f5349474e4552";
                                    readonly id: 72418;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5181:16:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_ba2319f5fa9f0c8e55f0d6899910b7354e6f643d1d349de47190066d85e68a1c";
                                        readonly typeString: "literal_string \"INVALID_SIGNER\"";
                                    };
                                    readonly value: "INVALID_SIGNER";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_ba2319f5fa9f0c8e55f0d6899910b7354e6f643d1d349de47190066d85e68a1c";
                                        readonly typeString: "literal_string \"INVALID_SIGNER\"";
                                    }];
                                    readonly id: 72407;
                                    readonly name: "require";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [-18, -18];
                                    readonly referencedDeclaration: -18;
                                    readonly src: "5112:7:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                        readonly typeString: "function (bool,string memory) pure";
                                    };
                                };
                                readonly id: 72419;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5112:86:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$__$";
                                    readonly typeString: "tuple()";
                                };
                            };
                            readonly id: 72420;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "5112:86:172";
                        }, {
                            readonly expression: {
                                readonly id: 72427;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 72421;
                                            readonly name: "allowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72188;
                                            readonly src: "5213:9:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                                                readonly typeString: "mapping(address => mapping(address => uint256))";
                                            };
                                        };
                                        readonly id: 72424;
                                        readonly indexExpression: {
                                            readonly id: 72422;
                                            readonly name: "recoveredAddress";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72376;
                                            readonly src: "5223:16:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "5213:27:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 72425;
                                    readonly indexExpression: {
                                        readonly id: 72423;
                                        readonly name: "spender";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72354;
                                        readonly src: "5241:7:172";
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
                                    readonly src: "5213:36:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly id: 72426;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72356;
                                    readonly src: "5252:5:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "5213:44:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72428;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "5213:44:172";
                        }];
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 72431;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72352;
                                readonly src: "5292:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72432;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72354;
                                readonly src: "5299:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72433;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72356;
                                readonly src: "5308:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 72430;
                                readonly name: "Approval";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72170;
                                readonly src: "5283:8:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,uint256)";
                                };
                            };
                            readonly id: 72434;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5283:31:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72435;
                        readonly nodeType: "EmitStatement";
                        readonly src: "5278:36:172";
                    }];
                };
                readonly functionSelector: "d505accf";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "permit";
                readonly nameLocation: "3847:6:172";
                readonly parameters: {
                    readonly id: 72365;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72352;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "3871:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72437;
                        readonly src: "3863:13:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72351;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3863:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72354;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "3894:7:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72437;
                        readonly src: "3886:15:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72353;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3886:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72356;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3919:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72437;
                        readonly src: "3911:13:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72355;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3911:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72358;
                        readonly mutability: "mutable";
                        readonly name: "deadline";
                        readonly nameLocation: "3942:8:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72437;
                        readonly src: "3934:16:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72357;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3934:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72360;
                        readonly mutability: "mutable";
                        readonly name: "v";
                        readonly nameLocation: "3966:1:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72437;
                        readonly src: "3960:7:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 72359;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3960:5:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72362;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "3985:1:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72437;
                        readonly src: "3977:9:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 72361;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3977:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72364;
                        readonly mutability: "mutable";
                        readonly name: "s";
                        readonly nameLocation: "4004:1:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72437;
                        readonly src: "3996:9:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 72363;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3996:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3853:158:172";
                };
                readonly returnParameters: {
                    readonly id: 72366;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4027:0:172";
                };
                readonly scope: 72539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72452;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5327:177:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72451;
                    readonly nodeType: "Block";
                    readonly src: "5393:111:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72445;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 72442;
                                        readonly name: "block";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -4;
                                        readonly src: "5410:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_block";
                                            readonly typeString: "block";
                                        };
                                    };
                                    readonly id: 72443;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5416:7:172";
                                    readonly memberName: "chainid";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "5410:13:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly id: 72444;
                                    readonly name: "INITIAL_CHAIN_ID";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72190;
                                    readonly src: "5427:16:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "5410:33:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 72447;
                                    readonly name: "computeDomainSeparator";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72482;
                                    readonly src: "5473:22:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_bytes32_$";
                                        readonly typeString: "function () view returns (bytes32)";
                                    };
                                };
                                readonly id: 72448;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5473:24:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 72449;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "5410:87:172";
                            readonly trueExpression: {
                                readonly id: 72446;
                                readonly name: "INITIAL_DOMAIN_SEPARATOR";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72192;
                                readonly src: "5446:24:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 72441;
                        readonly id: 72450;
                        readonly nodeType: "Return";
                        readonly src: "5403:94:172";
                    }];
                };
                readonly functionSelector: "3644e515";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "DOMAIN_SEPARATOR";
                readonly nameLocation: "5336:16:172";
                readonly parameters: {
                    readonly id: 72438;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5352:2:172";
                };
                readonly returnParameters: {
                    readonly id: 72441;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72440;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72452;
                        readonly src: "5384:7:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 72439;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5384:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5383:9:172";
                };
                readonly scope: 72539;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72482;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5510:446:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72481;
                    readonly nodeType: "Block";
                    readonly src: "5584:372:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";
                                        readonly id: 72461;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5682:84:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f";
                                            readonly typeString: "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\"";
                                        };
                                        readonly value: "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f";
                                            readonly typeString: "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\"";
                                        }];
                                        readonly id: 72460;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "5672:9:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 72462;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5672:95:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }, {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 72466;
                                            readonly name: "name";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72172;
                                            readonly src: "5805:4:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_storage";
                                                readonly typeString: "string storage ref";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_string_storage";
                                                readonly typeString: "string storage ref";
                                            }];
                                            readonly id: 72465;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "5799:5:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                            readonly typeName: {
                                                readonly id: 72464;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "5799:5:172";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 72467;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5799:11:172";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_storage_ptr";
                                            readonly typeString: "bytes storage pointer";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_storage_ptr";
                                            readonly typeString: "bytes storage pointer";
                                        }];
                                        readonly id: 72463;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "5789:9:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 72468;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5789:22:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }, {
                                    readonly arguments: readonly [{
                                        readonly hexValue: "31";
                                        readonly id: 72470;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5843:3:172";
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
                                        readonly id: 72469;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "5833:9:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 72471;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5833:14:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 72472;
                                        readonly name: "block";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -4;
                                        readonly src: "5869:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_block";
                                            readonly typeString: "block";
                                        };
                                    };
                                    readonly id: 72473;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5875:7:172";
                                    readonly memberName: "chainid";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "5869:13:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly arguments: readonly [{
                                        readonly id: 72476;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "5912:4:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_ERC20_$72539";
                                            readonly typeString: "contract ERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_ERC20_$72539";
                                            readonly typeString: "contract ERC20";
                                        }];
                                        readonly id: 72475;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5904:7:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 72474;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5904:7:172";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 72477;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5904:13:172";
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
                                        readonly id: 72458;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "5640:3:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 72459;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5644:6:172";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "5640:10:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 72478;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5640:295:172";
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
                                readonly id: 72457;
                                readonly name: "keccak256";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: -8;
                                readonly src: "5613:9:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                };
                            };
                            readonly id: 72479;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5613:336:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 72456;
                        readonly id: 72480;
                        readonly nodeType: "Return";
                        readonly src: "5594:355:172";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "computeDomainSeparator";
                readonly nameLocation: "5519:22:172";
                readonly parameters: {
                    readonly id: 72453;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5541:2:172";
                };
                readonly returnParameters: {
                    readonly id: 72456;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72455;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72482;
                        readonly src: "5575:7:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 72454;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5575:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5574:9:172";
                };
                readonly scope: 72539;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 72510;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6150:325:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72509;
                    readonly nodeType: "Block";
                    readonly src: "6210:265:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72491;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72489;
                                readonly name: "totalSupply";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72178;
                                readonly src: "6220:11:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly id: 72490;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72486;
                                readonly src: "6235:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6220:21:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72492;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6220:21:172";
                    }, {
                        readonly id: 72499;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "6363:58:172";
                        readonly statements: readonly [{
                            readonly expression: {
                                readonly id: 72497;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly baseExpression: {
                                        readonly id: 72493;
                                        readonly name: "balanceOf";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72182;
                                        readonly src: "6387:9:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 72495;
                                    readonly indexExpression: {
                                        readonly id: 72494;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72484;
                                        readonly src: "6397:2:172";
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
                                    readonly src: "6387:13:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "+=";
                                readonly rightHandSide: {
                                    readonly id: 72496;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72486;
                                    readonly src: "6404:6:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "6387:23:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72498;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6387:23:172";
                        }];
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 72503;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6453:1:172";
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
                                    readonly id: 72502;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "6445:7:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 72501;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6445:7:172";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 72504;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6445:10:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72505;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72484;
                                readonly src: "6457:2:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72506;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72486;
                                readonly src: "6461:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 72500;
                                readonly name: "Transfer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72162;
                                readonly src: "6436:8:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,uint256)";
                                };
                            };
                            readonly id: 72507;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6436:32:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72508;
                        readonly nodeType: "EmitStatement";
                        readonly src: "6431:37:172";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_mint";
                readonly nameLocation: "6159:5:172";
                readonly parameters: {
                    readonly id: 72487;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72484;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "6173:2:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72510;
                        readonly src: "6165:10:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72483;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6165:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72486;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "6185:6:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72510;
                        readonly src: "6177:14:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72485;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6177:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6164:28:172";
                };
                readonly returnParameters: {
                    readonly id: 72488;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6210:0:172";
                };
                readonly scope: 72539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 72538;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6481:328:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72537;
                    readonly nodeType: "Block";
                    readonly src: "6543:266:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72521;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 72517;
                                    readonly name: "balanceOf";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72182;
                                    readonly src: "6553:9:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 72519;
                                readonly indexExpression: {
                                    readonly id: 72518;
                                    readonly name: "from";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72512;
                                    readonly src: "6563:4:172";
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
                                readonly src: "6553:15:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 72520;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72514;
                                readonly src: "6572:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6553:25:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72522;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6553:25:172";
                    }, {
                        readonly id: 72527;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "6697:56:172";
                        readonly statements: readonly [{
                            readonly expression: {
                                readonly id: 72525;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 72523;
                                    readonly name: "totalSupply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72178;
                                    readonly src: "6721:11:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "-=";
                                readonly rightHandSide: {
                                    readonly id: 72524;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72514;
                                    readonly src: "6736:6:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "6721:21:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72526;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6721:21:172";
                        }];
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 72529;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72512;
                                readonly src: "6777:4:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 72532;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6791:1:172";
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
                                    readonly id: 72531;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "6783:7:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 72530;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6783:7:172";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 72533;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6783:10:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72534;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72514;
                                readonly src: "6795:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 72528;
                                readonly name: "Transfer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72162;
                                readonly src: "6768:8:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,uint256)";
                                };
                            };
                            readonly id: 72535;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6768:34:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72536;
                        readonly nodeType: "EmitStatement";
                        readonly src: "6763:39:172";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_burn";
                readonly nameLocation: "6490:5:172";
                readonly parameters: {
                    readonly id: 72515;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72512;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "6504:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72538;
                        readonly src: "6496:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72511;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6496:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72514;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "6518:6:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72538;
                        readonly src: "6510:14:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72513;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6510:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6495:30:172";
                };
                readonly returnParameters: {
                    readonly id: 72516;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6543:0:172";
                };
                readonly scope: 72539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "ERC20";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 72154;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "68:406:172";
                readonly text: "@notice Modern and gas efficient ERC20 + EIP-2612 implementation.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)\n @author Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)\n @dev Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [72539];
            readonly name: "ERC20";
            readonly nameLocation: "492:5:172";
            readonly scope: 72540;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [72162, 72170];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 172;
};
//# sourceMappingURL=ERC20.d.ts.map