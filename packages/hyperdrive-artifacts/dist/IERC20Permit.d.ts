export declare const IERC20Permit: {
    readonly abi: readonly [{
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
        readonly "nonces(address)": "7ecebe00";
        readonly "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in https://eips.ethereum.org/EIPS/eip-2612[EIP-2612]. Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't need to send a transaction, and thus is not required to hold Ether at all. ==== Security Considerations There are two important considerations concerning the use of `permit`. The first is that a valid permit signature expresses an allowance, and it should not be assumed to convey additional meaning. In particular, it should not be considered as an intention to spend the allowance in any specific way. The second is that because permits have built-in replay protection and can be submitted by anyone, they can be frontrun. A protocol that uses permits should take this into consideration and allow a `permit` call to fail. Combining these two aspects, a pattern that may be generally recommended is: ```solidity function doThingWithPermit(..., uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {     try token.permit(msg.sender, address(this), value, deadline, v, r, s) {} catch {}     doThing(..., value); } function doThing(..., uint256 value) public {     token.safeTransferFrom(msg.sender, address(this), value);     ... } ``` Observe that: 1) `msg.sender` is used as the owner, leaving no ambiguity as to the signer intent, and 2) the use of `try/catch` allows the permit to fail and makes the code tolerant to frontrunning. (See also {SafeERC20-safeTransferFrom}). Additionally, note that smart contract wallets (such as Argent or Safe) are not able to produce permit signatures, so contracts should have entry points that don't rely on permit.\",\"kind\":\"dev\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"details\":\"Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.\"},\"nonces(address)\":{\"details\":\"Returns the current nonce for `owner`. This value must be included whenever a signature is generated for {permit}. Every successful call to {permit} increases ``owner``'s nonce by one. This prevents a signature from being used multiple times.\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"details\":\"Sets `value` as the allowance of `spender` over ``owner``'s tokens, given ``owner``'s signed approval. IMPORTANT: The same issues {IERC20-approve} has related to transaction ordering also apply here. Emits an {Approval} event. Requirements: - `spender` cannot be the zero address. - `deadline` must be a timestamp in the future. - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner` over the EIP712-formatted function arguments. - the signature must use ``owner``'s current nonce (see {nonces}). For more information on the signature format, see the https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP section]. CAUTION: See Security Considerations above.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":\"IERC20Permit\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
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
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "DOMAIN_SEPARATOR()": {
                        readonly details: "Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.";
                    };
                    readonly "nonces(address)": {
                        readonly details: "Returns the current nonce for `owner`. This value must be included whenever a signature is generated for {permit}. Every successful call to {permit} increases ``owner``'s nonce by one. This prevents a signature from being used multiple times.";
                    };
                    readonly "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
                        readonly details: "Sets `value` as the allowance of `spender` over ``owner``'s tokens, given ``owner``'s signed approval. IMPORTANT: The same issues {IERC20-approve} has related to transaction ordering also apply here. Emits an {Approval} event. Requirements: - `spender` cannot be the zero address. - `deadline` must be a timestamp in the future. - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner` over the EIP712-formatted function arguments. - the signature must use ``owner``'s current nonce (see {nonces}). For more information on the signature format, see the https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP section]. CAUTION: See Security Considerations above.";
                    };
                };
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
                readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": "IERC20Permit";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                readonly keccak256: "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff";
                readonly urls: readonly ["bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d", "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol";
        readonly id: 71354;
        readonly exportedSymbols: {
            readonly IERC20Permit: readonly [71353];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "123:3680:167";
        readonly nodes: readonly [{
            readonly id: 71319;
            readonly nodeType: "PragmaDirective";
            readonly src: "123:24:167";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 71353;
            readonly nodeType: "ContractDefinition";
            readonly src: "2113:1689:167";
            readonly nodes: readonly [{
                readonly id: 71338;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2997:183:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71321;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2142:850:167";
                    readonly text: " @dev Sets `value` as the allowance of `spender` over ``owner``'s tokens,\n given ``owner``'s signed approval.\n IMPORTANT: The same issues {IERC20-approve} has related to transaction\n ordering also apply here.\n Emits an {Approval} event.\n Requirements:\n - `spender` cannot be the zero address.\n - `deadline` must be a timestamp in the future.\n - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`\n over the EIP712-formatted function arguments.\n - the signature must use ``owner``'s current nonce (see {nonces}).\n For more information on the signature format, see the\n https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP\n section].\n CAUTION: See Security Considerations above.";
                };
                readonly functionSelector: "d505accf";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "permit";
                readonly nameLocation: "3006:6:167";
                readonly parameters: {
                    readonly id: 71336;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71323;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "3030:5:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71338;
                        readonly src: "3022:13:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71322;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3022:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71325;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "3053:7:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71338;
                        readonly src: "3045:15:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71324;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3045:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71327;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3078:5:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71338;
                        readonly src: "3070:13:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71326;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3070:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71329;
                        readonly mutability: "mutable";
                        readonly name: "deadline";
                        readonly nameLocation: "3101:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71338;
                        readonly src: "3093:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71328;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3093:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71331;
                        readonly mutability: "mutable";
                        readonly name: "v";
                        readonly nameLocation: "3125:1:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71338;
                        readonly src: "3119:7:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 71330;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3119:5:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71333;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "3144:1:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71338;
                        readonly src: "3136:9:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 71332;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3136:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71335;
                        readonly mutability: "mutable";
                        readonly name: "s";
                        readonly nameLocation: "3163:1:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71338;
                        readonly src: "3155:9:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 71334;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3155:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3012:158:167";
                };
                readonly returnParameters: {
                    readonly id: 71337;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3179:0:167";
                };
                readonly scope: 71353;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 71346;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3485:63:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71339;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3186:294:167";
                    readonly text: " @dev Returns the current nonce for `owner`. This value must be\n included whenever a signature is generated for {permit}.\n Every successful call to {permit} increases ``owner``'s nonce by one. This\n prevents a signature from being used multiple times.";
                };
                readonly functionSelector: "7ecebe00";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "nonces";
                readonly nameLocation: "3494:6:167";
                readonly parameters: {
                    readonly id: 71342;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71341;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "3509:5:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71346;
                        readonly src: "3501:13:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71340;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3501:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3500:15:167";
                };
                readonly returnParameters: {
                    readonly id: 71345;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71344;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71346;
                        readonly src: "3539:7:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71343;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3539:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3538:9:167";
                };
                readonly scope: 71353;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 71352;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3740:60:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71347;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3554:128:167";
                    readonly text: " @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.";
                };
                readonly functionSelector: "3644e515";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "DOMAIN_SEPARATOR";
                readonly nameLocation: "3749:16:167";
                readonly parameters: {
                    readonly id: 71348;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3765:2:167";
                };
                readonly returnParameters: {
                    readonly id: 71351;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71350;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71352;
                        readonly src: "3791:7:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 71349;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3791:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3790:9:167";
                };
                readonly scope: 71353;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IERC20Permit";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 71320;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "149:1963:167";
                readonly text: " @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in\n https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].\n Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by\n presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't\n need to send a transaction, and thus is not required to hold Ether at all.\n ==== Security Considerations\n There are two important considerations concerning the use of `permit`. The first is that a valid permit signature\n expresses an allowance, and it should not be assumed to convey additional meaning. In particular, it should not be\n considered as an intention to spend the allowance in any specific way. The second is that because permits have\n built-in replay protection and can be submitted by anyone, they can be frontrun. A protocol that uses permits should\n take this into consideration and allow a `permit` call to fail. Combining these two aspects, a pattern that may be\n generally recommended is:\n ```solidity\n function doThingWithPermit(..., uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {\n     try token.permit(msg.sender, address(this), value, deadline, v, r, s) {} catch {}\n     doThing(..., value);\n }\n function doThing(..., uint256 value) public {\n     token.safeTransferFrom(msg.sender, address(this), value);\n     ...\n }\n ```\n Observe that: 1) `msg.sender` is used as the owner, leaving no ambiguity as to the signer intent, and 2) the use of\n `try/catch` allows the permit to fail and makes the code tolerant to frontrunning. (See also\n {SafeERC20-safeTransferFrom}).\n Additionally, note that smart contract wallets (such as Argent or Safe) are not able to produce permit signatures, so\n contracts should have entry points that don't rely on permit.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [71353];
            readonly name: "IERC20Permit";
            readonly nameLocation: "2123:12:167";
            readonly scope: 71354;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 167;
};
//# sourceMappingURL=IERC20Permit.d.ts.map