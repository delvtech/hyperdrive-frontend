export declare const Context: {
    readonly abi: readonly [];
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":\"Context\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [];
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
                readonly "lib/openzeppelin-contracts/contracts/utils/Context.sol": "Context";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                readonly keccak256: "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2";
                readonly urls: readonly ["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12", "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/Context.sol";
        readonly id: 71975;
        readonly exportedSymbols: {
            readonly Context: readonly [71974];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "101:862:170";
        readonly nodes: readonly [{
            readonly id: 71946;
            readonly nodeType: "PragmaDirective";
            readonly src: "101:24:170";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 71974;
            readonly nodeType: "ContractDefinition";
            readonly src: "624:338:170";
            readonly nodes: readonly [{
                readonly id: 71956;
                readonly nodeType: "FunctionDefinition";
                readonly src: "656:96:170";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71955;
                    readonly nodeType: "Block";
                    readonly src: "718:34:170";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly expression: {
                                readonly id: 71952;
                                readonly name: "msg";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: -15;
                                readonly src: "735:3:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_magic_message";
                                    readonly typeString: "msg";
                                };
                            };
                            readonly id: 71953;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "739:6:170";
                            readonly memberName: "sender";
                            readonly nodeType: "MemberAccess";
                            readonly src: "735:10:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 71951;
                        readonly id: 71954;
                        readonly nodeType: "Return";
                        readonly src: "728:17:170";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_msgSender";
                readonly nameLocation: "665:10:170";
                readonly parameters: {
                    readonly id: 71948;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "675:2:170";
                };
                readonly returnParameters: {
                    readonly id: 71951;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71950;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71956;
                        readonly src: "709:7:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71949;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "709:7:170";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "708:9:170";
                };
                readonly scope: 71974;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 71965;
                readonly nodeType: "FunctionDefinition";
                readonly src: "758:99:170";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71964;
                    readonly nodeType: "Block";
                    readonly src: "825:32:170";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly expression: {
                                readonly id: 71961;
                                readonly name: "msg";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: -15;
                                readonly src: "842:3:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_magic_message";
                                    readonly typeString: "msg";
                                };
                            };
                            readonly id: 71962;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "846:4:170";
                            readonly memberName: "data";
                            readonly nodeType: "MemberAccess";
                            readonly src: "842:8:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_calldata_ptr";
                                readonly typeString: "bytes calldata";
                            };
                        };
                        readonly functionReturnParameters: 71960;
                        readonly id: 71963;
                        readonly nodeType: "Return";
                        readonly src: "835:15:170";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_msgData";
                readonly nameLocation: "767:8:170";
                readonly parameters: {
                    readonly id: 71957;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "775:2:170";
                };
                readonly returnParameters: {
                    readonly id: 71960;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71959;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71965;
                        readonly src: "809:14:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71958;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "809:5:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "808:16:170";
                };
                readonly scope: 71974;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 71973;
                readonly nodeType: "FunctionDefinition";
                readonly src: "863:97:170";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71972;
                    readonly nodeType: "Block";
                    readonly src: "935:25:170";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly hexValue: "30";
                            readonly id: 71970;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "952:1:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly functionReturnParameters: 71969;
                        readonly id: 71971;
                        readonly nodeType: "Return";
                        readonly src: "945:8:170";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_contextSuffixLength";
                readonly nameLocation: "872:20:170";
                readonly parameters: {
                    readonly id: 71966;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "892:2:170";
                };
                readonly returnParameters: {
                    readonly id: 71969;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71968;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71973;
                        readonly src: "926:7:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71967;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "926:7:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "925:9:170";
                };
                readonly scope: 71974;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "Context";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 71947;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "127:496:170";
                readonly text: " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [71974];
            readonly name: "Context";
            readonly nameLocation: "642:7:170";
            readonly scope: 71975;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 170;
};
//# sourceMappingURL=Context.d.ts.map