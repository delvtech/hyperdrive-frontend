export declare const IERC1155Errors: {
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
        readonly name: "ERC1155InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC1155InvalidApprover";
        readonly type: "error";
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
        readonly name: "ERC1155InvalidArrayLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "ERC1155InvalidOperator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC1155InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC1155InvalidSender";
        readonly type: "error";
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
        readonly name: "ERC1155MissingApprovalForAll";
        readonly type: "error";
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC1155InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"idsLength\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"valuesLength\",\"type\":\"uint256\"}],\"name\":\"ERC1155InvalidArrayLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC1155MissingApprovalForAll\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Standard ERC1155 Errors Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens.\",\"errors\":{\"ERC1155InsufficientBalance(address,uint256,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC1155InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC1155InvalidArrayLength(uint256,uint256)\":[{\"details\":\"Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation. Used in batch transfers.\",\"params\":{\"idsLength\":\"Length of the array of token identifiers\",\"valuesLength\":\"Length of the array of token amounts\"}}],\"ERC1155InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC1155InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC1155InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC1155MissingApprovalForAll(address,address)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"owner\":\"Address of the current owner of a token.\"}}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":\"IERC1155Errors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
        readonly id: 70269;
        readonly exportedSymbols: {
            readonly IERC1155Errors: readonly [70268];
            readonly IERC20Errors: readonly [70173];
            readonly IERC721Errors: readonly [70221];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "112:6420:161";
        readonly nodes: readonly [{
            readonly id: 70133;
            readonly nodeType: "PragmaDirective";
            readonly src: "112:24:161";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 70173;
            readonly nodeType: "ContractDefinition";
            readonly src: "278:1764:161";
            readonly nodes: readonly [{
                readonly id: 70143;
                readonly nodeType: "ErrorDefinition";
                readonly src: "621:80:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70135;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "307:309:161";
                    readonly text: " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer.";
                };
                readonly errorSelector: "e450d38c";
                readonly name: "ERC20InsufficientBalance";
                readonly nameLocation: "627:24:161";
                readonly parameters: {
                    readonly id: 70142;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70137;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "660:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70143;
                        readonly src: "652:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70136;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "652:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70139;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "676:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70143;
                        readonly src: "668:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70138;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "668:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70141;
                        readonly mutability: "mutable";
                        readonly name: "needed";
                        readonly nameLocation: "693:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70143;
                        readonly src: "685:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70140;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "685:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "651:49:161";
                };
            }, {
                readonly id: 70148;
                readonly nodeType: "ErrorDefinition";
                readonly src: "864:41:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70144;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "707:152:161";
                    readonly text: " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.";
                };
                readonly errorSelector: "96c6fd1e";
                readonly name: "ERC20InvalidSender";
                readonly nameLocation: "870:18:161";
                readonly parameters: {
                    readonly id: 70147;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70146;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "897:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70148;
                        readonly src: "889:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70145;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "889:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "888:16:161";
                };
            }, {
                readonly id: 70153;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1075:45:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70149;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "911:159:161";
                    readonly text: " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred.";
                };
                readonly errorSelector: "ec442f05";
                readonly name: "ERC20InvalidReceiver";
                readonly nameLocation: "1081:20:161";
                readonly parameters: {
                    readonly id: 70152;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70151;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "1110:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70153;
                        readonly src: "1102:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70150;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1102:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1101:18:161";
                };
            }, {
                readonly id: 70162;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1476:85:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70154;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1126:345:161";
                    readonly text: " @dev Indicates a failure with the `spender`’s `allowance`. Used in transfers.\n @param spender Address that may be allowed to operate on tokens without being their owner.\n @param allowance Amount of tokens a `spender` is allowed to operate with.\n @param needed Minimum amount required to perform a transfer.";
                };
                readonly errorSelector: "fb8f41b2";
                readonly name: "ERC20InsufficientAllowance";
                readonly nameLocation: "1482:26:161";
                readonly parameters: {
                    readonly id: 70161;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70156;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1517:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70162;
                        readonly src: "1509:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70155;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1509:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70158;
                        readonly mutability: "mutable";
                        readonly name: "allowance";
                        readonly nameLocation: "1534:9:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70162;
                        readonly src: "1526:17:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70157;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1526:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70160;
                        readonly mutability: "mutable";
                        readonly name: "needed";
                        readonly nameLocation: "1553:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70162;
                        readonly src: "1545:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70159;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1545:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1508:52:161";
                };
            }, {
                readonly id: 70167;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1746:45:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70163;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1567:174:161";
                    readonly text: " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation.";
                };
                readonly errorSelector: "e602df05";
                readonly name: "ERC20InvalidApprover";
                readonly nameLocation: "1752:20:161";
                readonly parameters: {
                    readonly id: 70166;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70165;
                        readonly mutability: "mutable";
                        readonly name: "approver";
                        readonly nameLocation: "1781:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70167;
                        readonly src: "1773:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70164;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1773:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1772:18:161";
                };
            }, {
                readonly id: 70172;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1997:43:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70168;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1797:195:161";
                    readonly text: " @dev Indicates a failure with the `spender` to be approved. Used in approvals.\n @param spender Address that may be allowed to operate on tokens without being their owner.";
                };
                readonly errorSelector: "94280d62";
                readonly name: "ERC20InvalidSpender";
                readonly nameLocation: "2003:19:161";
                readonly parameters: {
                    readonly id: 70171;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70170;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2031:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70172;
                        readonly src: "2023:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70169;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2023:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2022:17:161";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IERC20Errors";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 70134;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "138:139:161";
                readonly text: " @dev Standard ERC20 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [70173];
            readonly name: "IERC20Errors";
            readonly nameLocation: "288:12:161";
            readonly scope: 70269;
            readonly usedErrors: readonly [70143, 70148, 70153, 70162, 70167, 70172];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 70221;
            readonly nodeType: "ContractDefinition";
            readonly src: "2186:2092:161";
            readonly nodes: readonly [{
                readonly id: 70179;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2440:40:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70175;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2216:219:161";
                    readonly text: " @dev Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20.\n Used in balance queries.\n @param owner Address of the current owner of a token.";
                };
                readonly errorSelector: "89c62b64";
                readonly name: "ERC721InvalidOwner";
                readonly nameLocation: "2446:18:161";
                readonly parameters: {
                    readonly id: 70178;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70177;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2473:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70179;
                        readonly src: "2465:13:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70176;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2465:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2464:15:161";
                };
            }, {
                readonly id: 70184;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2623:46:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70180;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2486:132:161";
                    readonly text: " @dev Indicates a `tokenId` whose `owner` is the zero address.\n @param tokenId Identifier number of a token.";
                };
                readonly errorSelector: "7e273289";
                readonly name: "ERC721NonexistentToken";
                readonly nameLocation: "2629:22:161";
                readonly parameters: {
                    readonly id: 70183;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70182;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "2660:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70184;
                        readonly src: "2652:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70181;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2652:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2651:17:161";
                };
            }, {
                readonly id: 70193;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2969:75:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70185;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2675:289:161";
                    readonly text: " @dev Indicates an error related to the ownership over a particular token. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param tokenId Identifier number of a token.\n @param owner Address of the current owner of a token.";
                };
                readonly errorSelector: "64283d7b";
                readonly name: "ERC721IncorrectOwner";
                readonly nameLocation: "2975:20:161";
                readonly parameters: {
                    readonly id: 70192;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70187;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "3004:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70193;
                        readonly src: "2996:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70186;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2996:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70189;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "3020:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70193;
                        readonly src: "3012:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70188;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3012:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70191;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "3037:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70193;
                        readonly src: "3029:13:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70190;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3029:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2995:48:161";
                };
            }, {
                readonly id: 70198;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3207:42:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70194;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3050:152:161";
                    readonly text: " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.";
                };
                readonly errorSelector: "73c6ac6e";
                readonly name: "ERC721InvalidSender";
                readonly nameLocation: "3213:19:161";
                readonly parameters: {
                    readonly id: 70197;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70196;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "3241:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70198;
                        readonly src: "3233:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70195;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3233:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3232:16:161";
                };
            }, {
                readonly id: 70203;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3419:46:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70199;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3255:159:161";
                    readonly text: " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred.";
                };
                readonly errorSelector: "64a0ae92";
                readonly name: "ERC721InvalidReceiver";
                readonly nameLocation: "3425:21:161";
                readonly parameters: {
                    readonly id: 70202;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70201;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "3455:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70203;
                        readonly src: "3447:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70200;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3447:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3446:18:161";
                };
            }, {
                readonly id: 70210;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3723:68:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70204;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3471:247:161";
                    readonly text: " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param tokenId Identifier number of a token.";
                };
                readonly errorSelector: "177e802f";
                readonly name: "ERC721InsufficientApproval";
                readonly nameLocation: "3729:26:161";
                readonly parameters: {
                    readonly id: 70209;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70206;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "3764:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70210;
                        readonly src: "3756:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70205;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3756:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70208;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "3782:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70210;
                        readonly src: "3774:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70207;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3774:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3755:35:161";
                };
            }, {
                readonly id: 70215;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3976:46:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70211;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3797:174:161";
                    readonly text: " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation.";
                };
                readonly errorSelector: "a9fbf51f";
                readonly name: "ERC721InvalidApprover";
                readonly nameLocation: "3982:21:161";
                readonly parameters: {
                    readonly id: 70214;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70213;
                        readonly mutability: "mutable";
                        readonly name: "approver";
                        readonly nameLocation: "4012:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70215;
                        readonly src: "4004:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70212;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4004:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4003:18:161";
                };
            }, {
                readonly id: 70220;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4230:46:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70216;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4028:197:161";
                    readonly text: " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner.";
                };
                readonly errorSelector: "5b08ba18";
                readonly name: "ERC721InvalidOperator";
                readonly nameLocation: "4236:21:161";
                readonly parameters: {
                    readonly id: 70219;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70218;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "4266:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70220;
                        readonly src: "4258:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70217;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4258:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4257:18:161";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IERC721Errors";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 70174;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "2044:141:161";
                readonly text: " @dev Standard ERC721 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [70221];
            readonly name: "IERC721Errors";
            readonly nameLocation: "2196:13:161";
            readonly scope: 70269;
            readonly usedErrors: readonly [70179, 70184, 70193, 70198, 70203, 70210, 70215, 70220];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 70268;
            readonly nodeType: "ContractDefinition";
            readonly src: "4424:2107:161";
            readonly nodes: readonly [{
                readonly id: 70233;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4821:99:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70223;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4455:361:161";
                    readonly text: " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer.\n @param tokenId Identifier number of a token.";
                };
                readonly errorSelector: "03dee4c5";
                readonly name: "ERC1155InsufficientBalance";
                readonly nameLocation: "4827:26:161";
                readonly parameters: {
                    readonly id: 70232;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70225;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "4862:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70233;
                        readonly src: "4854:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70224;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4854:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70227;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "4878:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70233;
                        readonly src: "4870:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70226;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4870:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70229;
                        readonly mutability: "mutable";
                        readonly name: "needed";
                        readonly nameLocation: "4895:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70233;
                        readonly src: "4887:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70228;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4887:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70231;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "4911:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70233;
                        readonly src: "4903:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70230;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4903:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4853:66:161";
                };
            }, {
                readonly id: 70238;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5083:43:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70234;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4926:152:161";
                    readonly text: " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.";
                };
                readonly errorSelector: "01a83514";
                readonly name: "ERC1155InvalidSender";
                readonly nameLocation: "5089:20:161";
                readonly parameters: {
                    readonly id: 70237;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70236;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "5118:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70238;
                        readonly src: "5110:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70235;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5110:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5109:16:161";
                };
            }, {
                readonly id: 70243;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5296:47:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70239;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5132:159:161";
                    readonly text: " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred.";
                };
                readonly errorSelector: "57f447ce";
                readonly name: "ERC1155InvalidReceiver";
                readonly nameLocation: "5302:22:161";
                readonly parameters: {
                    readonly id: 70242;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70241;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "5333:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70243;
                        readonly src: "5325:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70240;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5325:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5324:18:161";
                };
            }, {
                readonly id: 70250;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5610:68:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70244;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5349:256:161";
                    readonly text: " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param owner Address of the current owner of a token.";
                };
                readonly errorSelector: "e237d922";
                readonly name: "ERC1155MissingApprovalForAll";
                readonly nameLocation: "5616:28:161";
                readonly parameters: {
                    readonly id: 70249;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70246;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "5653:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70250;
                        readonly src: "5645:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70245;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5645:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70248;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "5671:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70250;
                        readonly src: "5663:13:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70247;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5663:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5644:33:161";
                };
            }, {
                readonly id: 70255;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5863:47:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70251;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5684:174:161";
                    readonly text: " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation.";
                };
                readonly errorSelector: "3e31884e";
                readonly name: "ERC1155InvalidApprover";
                readonly nameLocation: "5869:22:161";
                readonly parameters: {
                    readonly id: 70254;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70253;
                        readonly mutability: "mutable";
                        readonly name: "approver";
                        readonly nameLocation: "5900:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70255;
                        readonly src: "5892:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70252;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5892:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5891:18:161";
                };
            }, {
                readonly id: 70260;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6118:47:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70256;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5916:197:161";
                    readonly text: " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner.";
                };
                readonly errorSelector: "ced3e100";
                readonly name: "ERC1155InvalidOperator";
                readonly nameLocation: "6124:22:161";
                readonly parameters: {
                    readonly id: 70259;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70258;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "6155:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70260;
                        readonly src: "6147:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70257;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6147:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6146:18:161";
                };
            }, {
                readonly id: 70267;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6456:73:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70261;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6171:280:161";
                    readonly text: " @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.\n Used in batch transfers.\n @param idsLength Length of the array of token identifiers\n @param valuesLength Length of the array of token amounts";
                };
                readonly errorSelector: "5b059991";
                readonly name: "ERC1155InvalidArrayLength";
                readonly nameLocation: "6462:25:161";
                readonly parameters: {
                    readonly id: 70266;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70263;
                        readonly mutability: "mutable";
                        readonly name: "idsLength";
                        readonly nameLocation: "6496:9:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70267;
                        readonly src: "6488:17:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70262;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6488:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70265;
                        readonly mutability: "mutable";
                        readonly name: "valuesLength";
                        readonly nameLocation: "6515:12:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70267;
                        readonly src: "6507:20:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70264;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6507:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6487:41:161";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IERC1155Errors";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 70222;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "4280:143:161";
                readonly text: " @dev Standard ERC1155 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [70268];
            readonly name: "IERC1155Errors";
            readonly nameLocation: "4434:14:161";
            readonly scope: 70269;
            readonly usedErrors: readonly [70233, 70238, 70243, 70250, 70255, 70260, 70267];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 161;
};
//# sourceMappingURL=IERC1155Errors.d.ts.map