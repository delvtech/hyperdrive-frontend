export declare const IERC721Errors: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "ERC721IncorrectOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ERC721InsufficientApproval";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidOperator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ERC721NonexistentToken";
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Standard ERC721 Errors Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens.\",\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":\"IERC721Errors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]}},\"version\":1}";
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
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC721IncorrectOwner";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly type: "error";
                readonly name: "ERC721InsufficientApproval";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "approver";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC721InvalidApprover";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC721InvalidOperator";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC721InvalidOwner";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC721InvalidReceiver";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "sender";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "ERC721InvalidSender";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly type: "error";
                readonly name: "ERC721NonexistentToken";
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
                readonly "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": "IERC721Errors";
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
        readonly id: 70449;
        readonly exportedSymbols: {
            readonly IERC1155Errors: readonly [70448];
            readonly IERC20Errors: readonly [70353];
            readonly IERC721Errors: readonly [70401];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "112:6420:161";
        readonly nodes: readonly [{
            readonly id: 70313;
            readonly nodeType: "PragmaDirective";
            readonly src: "112:24:161";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 70353;
            readonly nodeType: "ContractDefinition";
            readonly src: "278:1764:161";
            readonly nodes: readonly [{
                readonly id: 70323;
                readonly nodeType: "ErrorDefinition";
                readonly src: "621:80:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70315;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "307:309:161";
                    readonly text: " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer.";
                };
                readonly errorSelector: "e450d38c";
                readonly name: "ERC20InsufficientBalance";
                readonly nameLocation: "627:24:161";
                readonly parameters: {
                    readonly id: 70322;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70317;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "660:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70323;
                        readonly src: "652:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70316;
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
                        readonly id: 70319;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "676:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70323;
                        readonly src: "668:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70318;
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
                        readonly id: 70321;
                        readonly mutability: "mutable";
                        readonly name: "needed";
                        readonly nameLocation: "693:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70323;
                        readonly src: "685:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70320;
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
                readonly id: 70328;
                readonly nodeType: "ErrorDefinition";
                readonly src: "864:41:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70324;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "707:152:161";
                    readonly text: " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.";
                };
                readonly errorSelector: "96c6fd1e";
                readonly name: "ERC20InvalidSender";
                readonly nameLocation: "870:18:161";
                readonly parameters: {
                    readonly id: 70327;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70326;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "897:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70328;
                        readonly src: "889:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70325;
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
                readonly id: 70333;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1075:45:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70329;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "911:159:161";
                    readonly text: " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred.";
                };
                readonly errorSelector: "ec442f05";
                readonly name: "ERC20InvalidReceiver";
                readonly nameLocation: "1081:20:161";
                readonly parameters: {
                    readonly id: 70332;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70331;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "1110:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70333;
                        readonly src: "1102:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70330;
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
                readonly id: 70342;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1476:85:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70334;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1126:345:161";
                    readonly text: " @dev Indicates a failure with the `spender`’s `allowance`. Used in transfers.\n @param spender Address that may be allowed to operate on tokens without being their owner.\n @param allowance Amount of tokens a `spender` is allowed to operate with.\n @param needed Minimum amount required to perform a transfer.";
                };
                readonly errorSelector: "fb8f41b2";
                readonly name: "ERC20InsufficientAllowance";
                readonly nameLocation: "1482:26:161";
                readonly parameters: {
                    readonly id: 70341;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70336;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1517:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70342;
                        readonly src: "1509:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70335;
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
                        readonly id: 70338;
                        readonly mutability: "mutable";
                        readonly name: "allowance";
                        readonly nameLocation: "1534:9:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70342;
                        readonly src: "1526:17:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70337;
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
                        readonly id: 70340;
                        readonly mutability: "mutable";
                        readonly name: "needed";
                        readonly nameLocation: "1553:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70342;
                        readonly src: "1545:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70339;
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
                readonly id: 70347;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1746:45:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70343;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1567:174:161";
                    readonly text: " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation.";
                };
                readonly errorSelector: "e602df05";
                readonly name: "ERC20InvalidApprover";
                readonly nameLocation: "1752:20:161";
                readonly parameters: {
                    readonly id: 70346;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70345;
                        readonly mutability: "mutable";
                        readonly name: "approver";
                        readonly nameLocation: "1781:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70347;
                        readonly src: "1773:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70344;
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
                readonly id: 70352;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1997:43:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70348;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1797:195:161";
                    readonly text: " @dev Indicates a failure with the `spender` to be approved. Used in approvals.\n @param spender Address that may be allowed to operate on tokens without being their owner.";
                };
                readonly errorSelector: "94280d62";
                readonly name: "ERC20InvalidSpender";
                readonly nameLocation: "2003:19:161";
                readonly parameters: {
                    readonly id: 70351;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70350;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2031:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70352;
                        readonly src: "2023:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70349;
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
                readonly id: 70314;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "138:139:161";
                readonly text: " @dev Standard ERC20 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [70353];
            readonly name: "IERC20Errors";
            readonly nameLocation: "288:12:161";
            readonly scope: 70449;
            readonly usedErrors: readonly [70323, 70328, 70333, 70342, 70347, 70352];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 70401;
            readonly nodeType: "ContractDefinition";
            readonly src: "2186:2092:161";
            readonly nodes: readonly [{
                readonly id: 70359;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2440:40:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70355;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2216:219:161";
                    readonly text: " @dev Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20.\n Used in balance queries.\n @param owner Address of the current owner of a token.";
                };
                readonly errorSelector: "89c62b64";
                readonly name: "ERC721InvalidOwner";
                readonly nameLocation: "2446:18:161";
                readonly parameters: {
                    readonly id: 70358;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70357;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2473:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70359;
                        readonly src: "2465:13:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70356;
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
                readonly id: 70364;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2623:46:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70360;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2486:132:161";
                    readonly text: " @dev Indicates a `tokenId` whose `owner` is the zero address.\n @param tokenId Identifier number of a token.";
                };
                readonly errorSelector: "7e273289";
                readonly name: "ERC721NonexistentToken";
                readonly nameLocation: "2629:22:161";
                readonly parameters: {
                    readonly id: 70363;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70362;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "2660:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70364;
                        readonly src: "2652:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70361;
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
                readonly id: 70373;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2969:75:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70365;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2675:289:161";
                    readonly text: " @dev Indicates an error related to the ownership over a particular token. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param tokenId Identifier number of a token.\n @param owner Address of the current owner of a token.";
                };
                readonly errorSelector: "64283d7b";
                readonly name: "ERC721IncorrectOwner";
                readonly nameLocation: "2975:20:161";
                readonly parameters: {
                    readonly id: 70372;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70367;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "3004:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70373;
                        readonly src: "2996:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70366;
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
                        readonly id: 70369;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "3020:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70373;
                        readonly src: "3012:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70368;
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
                        readonly id: 70371;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "3037:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70373;
                        readonly src: "3029:13:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70370;
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
                readonly id: 70378;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3207:42:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70374;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3050:152:161";
                    readonly text: " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.";
                };
                readonly errorSelector: "73c6ac6e";
                readonly name: "ERC721InvalidSender";
                readonly nameLocation: "3213:19:161";
                readonly parameters: {
                    readonly id: 70377;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70376;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "3241:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70378;
                        readonly src: "3233:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70375;
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
                readonly id: 70383;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3419:46:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70379;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3255:159:161";
                    readonly text: " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred.";
                };
                readonly errorSelector: "64a0ae92";
                readonly name: "ERC721InvalidReceiver";
                readonly nameLocation: "3425:21:161";
                readonly parameters: {
                    readonly id: 70382;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70381;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "3455:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70383;
                        readonly src: "3447:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70380;
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
                readonly id: 70390;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3723:68:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70384;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3471:247:161";
                    readonly text: " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param tokenId Identifier number of a token.";
                };
                readonly errorSelector: "177e802f";
                readonly name: "ERC721InsufficientApproval";
                readonly nameLocation: "3729:26:161";
                readonly parameters: {
                    readonly id: 70389;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70386;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "3764:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70390;
                        readonly src: "3756:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70385;
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
                        readonly id: 70388;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "3782:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70390;
                        readonly src: "3774:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70387;
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
                readonly id: 70395;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3976:46:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70391;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3797:174:161";
                    readonly text: " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation.";
                };
                readonly errorSelector: "a9fbf51f";
                readonly name: "ERC721InvalidApprover";
                readonly nameLocation: "3982:21:161";
                readonly parameters: {
                    readonly id: 70394;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70393;
                        readonly mutability: "mutable";
                        readonly name: "approver";
                        readonly nameLocation: "4012:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70395;
                        readonly src: "4004:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70392;
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
                readonly id: 70400;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4230:46:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70396;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4028:197:161";
                    readonly text: " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner.";
                };
                readonly errorSelector: "5b08ba18";
                readonly name: "ERC721InvalidOperator";
                readonly nameLocation: "4236:21:161";
                readonly parameters: {
                    readonly id: 70399;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70398;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "4266:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70400;
                        readonly src: "4258:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70397;
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
                readonly id: 70354;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "2044:141:161";
                readonly text: " @dev Standard ERC721 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [70401];
            readonly name: "IERC721Errors";
            readonly nameLocation: "2196:13:161";
            readonly scope: 70449;
            readonly usedErrors: readonly [70359, 70364, 70373, 70378, 70383, 70390, 70395, 70400];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 70448;
            readonly nodeType: "ContractDefinition";
            readonly src: "4424:2107:161";
            readonly nodes: readonly [{
                readonly id: 70413;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4821:99:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70403;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4455:361:161";
                    readonly text: " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer.\n @param tokenId Identifier number of a token.";
                };
                readonly errorSelector: "03dee4c5";
                readonly name: "ERC1155InsufficientBalance";
                readonly nameLocation: "4827:26:161";
                readonly parameters: {
                    readonly id: 70412;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70405;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "4862:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70413;
                        readonly src: "4854:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70404;
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
                        readonly id: 70407;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "4878:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70413;
                        readonly src: "4870:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70406;
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
                        readonly id: 70409;
                        readonly mutability: "mutable";
                        readonly name: "needed";
                        readonly nameLocation: "4895:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70413;
                        readonly src: "4887:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70408;
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
                        readonly id: 70411;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "4911:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70413;
                        readonly src: "4903:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70410;
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
                readonly id: 70418;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5083:43:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70414;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4926:152:161";
                    readonly text: " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.";
                };
                readonly errorSelector: "01a83514";
                readonly name: "ERC1155InvalidSender";
                readonly nameLocation: "5089:20:161";
                readonly parameters: {
                    readonly id: 70417;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70416;
                        readonly mutability: "mutable";
                        readonly name: "sender";
                        readonly nameLocation: "5118:6:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70418;
                        readonly src: "5110:14:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70415;
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
                readonly id: 70423;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5296:47:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70419;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5132:159:161";
                    readonly text: " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred.";
                };
                readonly errorSelector: "57f447ce";
                readonly name: "ERC1155InvalidReceiver";
                readonly nameLocation: "5302:22:161";
                readonly parameters: {
                    readonly id: 70422;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70421;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "5333:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70423;
                        readonly src: "5325:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70420;
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
                readonly id: 70430;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5610:68:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70424;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5349:256:161";
                    readonly text: " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param owner Address of the current owner of a token.";
                };
                readonly errorSelector: "e237d922";
                readonly name: "ERC1155MissingApprovalForAll";
                readonly nameLocation: "5616:28:161";
                readonly parameters: {
                    readonly id: 70429;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70426;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "5653:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70430;
                        readonly src: "5645:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70425;
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
                        readonly id: 70428;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "5671:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70430;
                        readonly src: "5663:13:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70427;
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
                readonly id: 70435;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5863:47:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70431;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5684:174:161";
                    readonly text: " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation.";
                };
                readonly errorSelector: "3e31884e";
                readonly name: "ERC1155InvalidApprover";
                readonly nameLocation: "5869:22:161";
                readonly parameters: {
                    readonly id: 70434;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70433;
                        readonly mutability: "mutable";
                        readonly name: "approver";
                        readonly nameLocation: "5900:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70435;
                        readonly src: "5892:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70432;
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
                readonly id: 70440;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6118:47:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70436;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5916:197:161";
                    readonly text: " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner.";
                };
                readonly errorSelector: "ced3e100";
                readonly name: "ERC1155InvalidOperator";
                readonly nameLocation: "6124:22:161";
                readonly parameters: {
                    readonly id: 70439;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70438;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "6155:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70440;
                        readonly src: "6147:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70437;
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
                readonly id: 70447;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6456:73:161";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70441;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6171:280:161";
                    readonly text: " @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.\n Used in batch transfers.\n @param idsLength Length of the array of token identifiers\n @param valuesLength Length of the array of token amounts";
                };
                readonly errorSelector: "5b059991";
                readonly name: "ERC1155InvalidArrayLength";
                readonly nameLocation: "6462:25:161";
                readonly parameters: {
                    readonly id: 70446;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70443;
                        readonly mutability: "mutable";
                        readonly name: "idsLength";
                        readonly nameLocation: "6496:9:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70447;
                        readonly src: "6488:17:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70442;
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
                        readonly id: 70445;
                        readonly mutability: "mutable";
                        readonly name: "valuesLength";
                        readonly nameLocation: "6515:12:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70447;
                        readonly src: "6507:20:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70444;
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
                readonly id: 70402;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "4280:143:161";
                readonly text: " @dev Standard ERC1155 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [70448];
            readonly name: "IERC1155Errors";
            readonly nameLocation: "4434:14:161";
            readonly scope: 70449;
            readonly usedErrors: readonly [70413, 70418, 70423, 70430, 70435, 70440, 70447];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 161;
};
//# sourceMappingURL=IERC721Errors.d.ts.map