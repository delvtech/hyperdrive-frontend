export declare const IERC1155Errors: {
    readonly abi: readonly [{
        readonly type: "error";
        readonly name: "ERC1155InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "needed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidApprover";
        readonly inputs: readonly [{
            readonly name: "approver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidArrayLength";
        readonly inputs: readonly [{
            readonly name: "idsLength";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "valuesLength";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidOperator";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidReceiver";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidSender";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155MissingApprovalForAll";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
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
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC1155InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"idsLength\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"valuesLength\",\"type\":\"uint256\"}],\"name\":\"ERC1155InvalidArrayLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC1155MissingApprovalForAll\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Standard ERC1155 Errors Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens.\",\"errors\":{\"ERC1155InsufficientBalance(address,uint256,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC1155InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC1155InvalidArrayLength(uint256,uint256)\":[{\"details\":\"Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation. Used in batch transfers.\",\"params\":{\"idsLength\":\"Length of the array of token identifiers\",\"valuesLength\":\"Length of the array of token amounts\"}}],\"ERC1155InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC1155InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC1155InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC1155MissingApprovalForAll(address,address)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"owner\":\"Address of the current owner of a token.\"}}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":\"IERC1155Errors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "sender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "needed";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly type: "error";
                readonly name: "ERC1155InsufficientBalance";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "approver";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC1155InvalidApprover";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "idsLength";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "valuesLength";
                    readonly type: "uint256";
                }];
                readonly type: "error";
                readonly name: "ERC1155InvalidArrayLength";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC1155InvalidOperator";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC1155InvalidReceiver";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "sender";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC1155InvalidSender";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC1155MissingApprovalForAll";
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
                readonly "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": "IERC1155Errors";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                readonly keccak256: "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7";
                readonly urls: readonly ["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f", "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol";
        readonly id: 70877;
        readonly exportedSymbols: {
            readonly IERC1155Errors: readonly [70876];
            readonly IERC20Errors: readonly [70781];
            readonly IERC721Errors: readonly [70829];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "112:6420:167";
        readonly nodes: readonly [{
            readonly id: 70741;
            readonly nodeType: "PragmaDirective";
            readonly src: "112:24:167";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 70781;
            readonly nodeType: "ContractDefinition";
            readonly src: "278:1764:167";
            readonly nodes: readonly [{
                readonly id: 70751;
                readonly nodeType: "ErrorDefinition";
                readonly src: "621:80:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70743;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "307:309:167";
                    readonly text: " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer.";
                };
                readonly errorSelector: "e450d38c";
                readonly name: "ERC20InsufficientBalance";
                readonly nameLocation: "627:24:167";
                readonly parameters: {
                    readonly id: 70750;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70745;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "660:6:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70751;
                        readonly src: "652:14:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70744;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "652:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70747;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "676:7:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70751;
                        readonly src: "668:15:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70746;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "668:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70749;
                        readonly mutability: "mutable";
                        readonly name: "needed";
                        readonly nameLocation: "693:6:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70751;
                        readonly src: "685:14:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70748;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "685:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "651:49:167";
                };
            }, {
                readonly id: 70756;
                readonly nodeType: "ErrorDefinition";
                readonly src: "864:41:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70752;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "707:152:167";
                    readonly text: " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.";
                };
                readonly errorSelector: "96c6fd1e";
                readonly name: "ERC20InvalidSender";
                readonly nameLocation: "870:18:167";
                readonly parameters: {
                    readonly id: 70755;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70754;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "897:6:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70756;
                        readonly src: "889:14:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70753;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "889:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "888:16:167";
                };
            }, {
                readonly id: 70761;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1075:45:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70757;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "911:159:167";
                    readonly text: " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred.";
                };
                readonly errorSelector: "ec442f05";
                readonly name: "ERC20InvalidReceiver";
                readonly nameLocation: "1081:20:167";
                readonly parameters: {
                    readonly id: 70760;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70759;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "1110:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70761;
                        readonly src: "1102:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70758;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1102:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1101:18:167";
                };
            }, {
                readonly id: 70770;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1476:85:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70762;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1126:345:167";
                    readonly text: " @dev Indicates a failure with the `spender`’s `allowance`. Used in transfers.\n @param spender Address that may be allowed to operate on tokens without being their owner.\n @param allowance Amount of tokens a `spender` is allowed to operate with.\n @param needed Minimum amount required to perform a transfer.";
                };
                readonly errorSelector: "fb8f41b2";
                readonly name: "ERC20InsufficientAllowance";
                readonly nameLocation: "1482:26:167";
                readonly parameters: {
                    readonly id: 70769;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70764;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1517:7:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70770;
                        readonly src: "1509:15:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70763;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1509:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70766;
                        readonly mutability: "mutable";
                        readonly name: "allowance";
                        readonly nameLocation: "1534:9:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70770;
                        readonly src: "1526:17:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70765;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1526:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70768;
                        readonly mutability: "mutable";
                        readonly name: "needed";
                        readonly nameLocation: "1553:6:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70770;
                        readonly src: "1545:14:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70767;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1545:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1508:52:167";
                };
            }, {
                readonly id: 70775;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1746:45:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70771;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1567:174:167";
                    readonly text: " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation.";
                };
                readonly errorSelector: "e602df05";
                readonly name: "ERC20InvalidApprover";
                readonly nameLocation: "1752:20:167";
                readonly parameters: {
                    readonly id: 70774;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70773;
                        readonly mutability: "mutable";
                        readonly name: "approver";
                        readonly nameLocation: "1781:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70775;
                        readonly src: "1773:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70772;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1773:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1772:18:167";
                };
            }, {
                readonly id: 70780;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1997:43:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70776;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1797:195:167";
                    readonly text: " @dev Indicates a failure with the `spender` to be approved. Used in approvals.\n @param spender Address that may be allowed to operate on tokens without being their owner.";
                };
                readonly errorSelector: "94280d62";
                readonly name: "ERC20InvalidSpender";
                readonly nameLocation: "2003:19:167";
                readonly parameters: {
                    readonly id: 70779;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70778;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2031:7:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70780;
                        readonly src: "2023:15:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70777;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2023:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2022:17:167";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IERC20Errors";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 70742;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "138:139:167";
                readonly text: " @dev Standard ERC20 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [70781];
            readonly name: "IERC20Errors";
            readonly nameLocation: "288:12:167";
            readonly scope: 70877;
            readonly usedErrors: readonly [70751, 70756, 70761, 70770, 70775, 70780];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 70829;
            readonly nodeType: "ContractDefinition";
            readonly src: "2186:2092:167";
            readonly nodes: readonly [{
                readonly id: 70787;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2440:40:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70783;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2216:219:167";
                    readonly text: " @dev Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20.\n Used in balance queries.\n @param owner Address of the current owner of a token.";
                };
                readonly errorSelector: "89c62b64";
                readonly name: "ERC721InvalidOwner";
                readonly nameLocation: "2446:18:167";
                readonly parameters: {
                    readonly id: 70786;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70785;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2473:5:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70787;
                        readonly src: "2465:13:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70784;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2465:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2464:15:167";
                };
            }, {
                readonly id: 70792;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2623:46:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70788;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2486:132:167";
                    readonly text: " @dev Indicates a `tokenId` whose `owner` is the zero address.\n @param tokenId Identifier number of a token.";
                };
                readonly errorSelector: "7e273289";
                readonly name: "ERC721NonexistentToken";
                readonly nameLocation: "2629:22:167";
                readonly parameters: {
                    readonly id: 70791;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70790;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "2660:7:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70792;
                        readonly src: "2652:15:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70789;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2652:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2651:17:167";
                };
            }, {
                readonly id: 70801;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2969:75:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70793;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2675:289:167";
                    readonly text: " @dev Indicates an error related to the ownership over a particular token. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param tokenId Identifier number of a token.\n @param owner Address of the current owner of a token.";
                };
                readonly errorSelector: "64283d7b";
                readonly name: "ERC721IncorrectOwner";
                readonly nameLocation: "2975:20:167";
                readonly parameters: {
                    readonly id: 70800;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70795;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "3004:6:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70801;
                        readonly src: "2996:14:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70794;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2996:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70797;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "3020:7:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70801;
                        readonly src: "3012:15:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70796;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3012:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70799;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "3037:5:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70801;
                        readonly src: "3029:13:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70798;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3029:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2995:48:167";
                };
            }, {
                readonly id: 70806;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3207:42:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70802;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3050:152:167";
                    readonly text: " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.";
                };
                readonly errorSelector: "73c6ac6e";
                readonly name: "ERC721InvalidSender";
                readonly nameLocation: "3213:19:167";
                readonly parameters: {
                    readonly id: 70805;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70804;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "3241:6:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70806;
                        readonly src: "3233:14:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70803;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3233:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3232:16:167";
                };
            }, {
                readonly id: 70811;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3419:46:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70807;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3255:159:167";
                    readonly text: " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred.";
                };
                readonly errorSelector: "64a0ae92";
                readonly name: "ERC721InvalidReceiver";
                readonly nameLocation: "3425:21:167";
                readonly parameters: {
                    readonly id: 70810;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70809;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "3455:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70811;
                        readonly src: "3447:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70808;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3447:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3446:18:167";
                };
            }, {
                readonly id: 70818;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3723:68:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70812;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3471:247:167";
                    readonly text: " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param tokenId Identifier number of a token.";
                };
                readonly errorSelector: "177e802f";
                readonly name: "ERC721InsufficientApproval";
                readonly nameLocation: "3729:26:167";
                readonly parameters: {
                    readonly id: 70817;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70814;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "3764:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70818;
                        readonly src: "3756:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70813;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3756:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70816;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "3782:7:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70818;
                        readonly src: "3774:15:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70815;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3774:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3755:35:167";
                };
            }, {
                readonly id: 70823;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3976:46:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70819;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3797:174:167";
                    readonly text: " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation.";
                };
                readonly errorSelector: "a9fbf51f";
                readonly name: "ERC721InvalidApprover";
                readonly nameLocation: "3982:21:167";
                readonly parameters: {
                    readonly id: 70822;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70821;
                        readonly mutability: "mutable";
                        readonly name: "approver";
                        readonly nameLocation: "4012:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70823;
                        readonly src: "4004:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70820;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4004:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4003:18:167";
                };
            }, {
                readonly id: 70828;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4230:46:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70824;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4028:197:167";
                    readonly text: " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner.";
                };
                readonly errorSelector: "5b08ba18";
                readonly name: "ERC721InvalidOperator";
                readonly nameLocation: "4236:21:167";
                readonly parameters: {
                    readonly id: 70827;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70826;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "4266:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70828;
                        readonly src: "4258:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70825;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4258:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4257:18:167";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IERC721Errors";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 70782;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "2044:141:167";
                readonly text: " @dev Standard ERC721 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [70829];
            readonly name: "IERC721Errors";
            readonly nameLocation: "2196:13:167";
            readonly scope: 70877;
            readonly usedErrors: readonly [70787, 70792, 70801, 70806, 70811, 70818, 70823, 70828];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 70876;
            readonly nodeType: "ContractDefinition";
            readonly src: "4424:2107:167";
            readonly nodes: readonly [{
                readonly id: 70841;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4821:99:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70831;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4455:361:167";
                    readonly text: " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer.\n @param tokenId Identifier number of a token.";
                };
                readonly errorSelector: "03dee4c5";
                readonly name: "ERC1155InsufficientBalance";
                readonly nameLocation: "4827:26:167";
                readonly parameters: {
                    readonly id: 70840;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70833;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "4862:6:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70841;
                        readonly src: "4854:14:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70832;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4854:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70835;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "4878:7:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70841;
                        readonly src: "4870:15:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70834;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4870:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70837;
                        readonly mutability: "mutable";
                        readonly name: "needed";
                        readonly nameLocation: "4895:6:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70841;
                        readonly src: "4887:14:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70836;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4887:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70839;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "4911:7:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70841;
                        readonly src: "4903:15:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70838;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4903:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4853:66:167";
                };
            }, {
                readonly id: 70846;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5083:43:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70842;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4926:152:167";
                    readonly text: " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.";
                };
                readonly errorSelector: "01a83514";
                readonly name: "ERC1155InvalidSender";
                readonly nameLocation: "5089:20:167";
                readonly parameters: {
                    readonly id: 70845;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70844;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "5118:6:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70846;
                        readonly src: "5110:14:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70843;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5110:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5109:16:167";
                };
            }, {
                readonly id: 70851;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5296:47:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70847;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5132:159:167";
                    readonly text: " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred.";
                };
                readonly errorSelector: "57f447ce";
                readonly name: "ERC1155InvalidReceiver";
                readonly nameLocation: "5302:22:167";
                readonly parameters: {
                    readonly id: 70850;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70849;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "5333:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70851;
                        readonly src: "5325:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70848;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5325:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5324:18:167";
                };
            }, {
                readonly id: 70858;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5610:68:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70852;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5349:256:167";
                    readonly text: " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param owner Address of the current owner of a token.";
                };
                readonly errorSelector: "e237d922";
                readonly name: "ERC1155MissingApprovalForAll";
                readonly nameLocation: "5616:28:167";
                readonly parameters: {
                    readonly id: 70857;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70854;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "5653:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70858;
                        readonly src: "5645:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70853;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5645:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70856;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "5671:5:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70858;
                        readonly src: "5663:13:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70855;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5663:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5644:33:167";
                };
            }, {
                readonly id: 70863;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5863:47:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70859;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5684:174:167";
                    readonly text: " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation.";
                };
                readonly errorSelector: "3e31884e";
                readonly name: "ERC1155InvalidApprover";
                readonly nameLocation: "5869:22:167";
                readonly parameters: {
                    readonly id: 70862;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70861;
                        readonly mutability: "mutable";
                        readonly name: "approver";
                        readonly nameLocation: "5900:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70863;
                        readonly src: "5892:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70860;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5892:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5891:18:167";
                };
            }, {
                readonly id: 70868;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6118:47:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70864;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5916:197:167";
                    readonly text: " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner.";
                };
                readonly errorSelector: "ced3e100";
                readonly name: "ERC1155InvalidOperator";
                readonly nameLocation: "6124:22:167";
                readonly parameters: {
                    readonly id: 70867;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70866;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "6155:8:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70868;
                        readonly src: "6147:16:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70865;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6147:7:167";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6146:18:167";
                };
            }, {
                readonly id: 70875;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6456:73:167";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70869;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6171:280:167";
                    readonly text: " @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.\n Used in batch transfers.\n @param idsLength Length of the array of token identifiers\n @param valuesLength Length of the array of token amounts";
                };
                readonly errorSelector: "5b059991";
                readonly name: "ERC1155InvalidArrayLength";
                readonly nameLocation: "6462:25:167";
                readonly parameters: {
                    readonly id: 70874;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70871;
                        readonly mutability: "mutable";
                        readonly name: "idsLength";
                        readonly nameLocation: "6496:9:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70875;
                        readonly src: "6488:17:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70870;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6488:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70873;
                        readonly mutability: "mutable";
                        readonly name: "valuesLength";
                        readonly nameLocation: "6515:12:167";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70875;
                        readonly src: "6507:20:167";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70872;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6507:7:167";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6487:41:167";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IERC1155Errors";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 70830;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "4280:143:167";
                readonly text: " @dev Standard ERC1155 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [70876];
            readonly name: "IERC1155Errors";
            readonly nameLocation: "4434:14:167";
            readonly scope: 70877;
            readonly usedErrors: readonly [70841, 70846, 70851, 70858, 70863, 70868, 70875];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 167;
};
//# sourceMappingURL=IERC1155Errors.d.ts.map