export declare const SafeCast: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122057bad2968544e75a44bb4a0bc81d75cf6f7326ae80ea0ca9aecb5d8981316cab64736f6c63430008140033";
        readonly sourceMap: "343:1864:127:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;343:1864:127;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122057bad2968544e75a44bb4a0bc81d75cf6f7326ae80ea0ca9aecb5d8981316cab64736f6c63430008140033";
        readonly sourceMap: "343:1864:127:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe unsigned integer casting library that reverts on overflow.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/SafeCast.sol\":\"SafeCast\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]}},\"version\":1}";
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
                readonly "contracts/src/libraries/SafeCast.sol": "SafeCast";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952";
                readonly urls: readonly ["bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf", "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
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
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/libraries/SafeCast.sol";
        readonly id: 22266;
        readonly exportedSymbols: {
            readonly IHyperdrive: readonly [11028];
            readonly SafeCast: readonly [22265];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "40:2168:127";
        readonly nodes: readonly [{
            readonly id: 22088;
            readonly nodeType: "PragmaDirective";
            readonly src: "40:23:127";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 22090;
            readonly nodeType: "ImportDirective";
            readonly src: "65:60:127";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22266;
            readonly sourceUnit: 11029;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 22089;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11028;
                    readonly src: "74:11:127";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 22265;
            readonly nodeType: "ContractDefinition";
            readonly src: "343:1864:127";
            readonly nodes: readonly [{
                readonly id: 22121;
                readonly nodeType: "FunctionDefinition";
                readonly src: "527:190:127";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22120;
                    readonly nodeType: "Block";
                    readonly src: "591:126:127";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 22105;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "605:15:127";
                            readonly subExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 22103;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 22099;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22094;
                                        readonly src: "607:1:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_rational_5192296858534827628530496329220096_by_1";
                                            readonly typeString: "int_const 5192...(26 digits omitted)...0096";
                                        };
                                        readonly id: 22102;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly hexValue: "31";
                                            readonly id: 22100;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "611:1:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1_by_1";
                                                readonly typeString: "int_const 1";
                                            };
                                            readonly value: "1";
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "<<";
                                        readonly rightExpression: {
                                            readonly hexValue: "313132";
                                            readonly id: 22101;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "616:3:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_112_by_1";
                                                readonly typeString: "int_const 112";
                                            };
                                            readonly value: "112";
                                        };
                                        readonly src: "611:8:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_5192296858534827628530496329220096_by_1";
                                            readonly typeString: "int_const 5192...(26 digits omitted)...0096";
                                        };
                                    };
                                    readonly src: "607:12:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 22104;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "606:14:127";
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
                        readonly id: 22112;
                        readonly nodeType: "IfStatement";
                        readonly src: "601:86:127";
                        readonly trueBody: {
                            readonly id: 22111;
                            readonly nodeType: "Block";
                            readonly src: "622:65:127";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 22106;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11028;
                                            readonly src: "643:11:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11028_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 22108;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "655:19:127";
                                        readonly memberName: "UnsafeCastToUint112";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10982;
                                        readonly src: "643:31:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 22109;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "643:33:127";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 22110;
                                readonly nodeType: "RevertStatement";
                                readonly src: "636:40:127";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 22118;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 22113;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22097;
                                readonly src: "696:1:127";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 22116;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22094;
                                    readonly src: "708:1:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 22115;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "700:7:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint112_$";
                                        readonly typeString: "type(uint112)";
                                    };
                                    readonly typeName: {
                                        readonly id: 22114;
                                        readonly name: "uint112";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "700:7:127";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 22117;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "700:10:127";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            };
                            readonly src: "696:14:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint112";
                                readonly typeString: "uint112";
                            };
                        };
                        readonly id: 22119;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "696:14:127";
                    }];
                };
                readonly documentation: {
                    readonly id: 22092;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "366:156:127";
                    readonly text: "@notice This function safely casts a uint256 to a uint112.\n @param x The uint256 to cast to uint112.\n @return y The uint112 casted from x.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toUint112";
                readonly nameLocation: "536:9:127";
                readonly parameters: {
                    readonly id: 22095;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22094;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "554:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22121;
                        readonly src: "546:9:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22093;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "546:7:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "545:11:127";
                };
                readonly returnParameters: {
                    readonly id: 22098;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22097;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "588:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22121;
                        readonly src: "580:9:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint112";
                            readonly typeString: "uint112";
                        };
                        readonly typeName: {
                            readonly id: 22096;
                            readonly name: "uint112";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "580:7:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint112";
                                readonly typeString: "uint112";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "579:11:127";
                };
                readonly scope: 22265;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 22151;
                readonly nodeType: "FunctionDefinition";
                readonly src: "884:190:127";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22150;
                    readonly nodeType: "Block";
                    readonly src: "948:126:127";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 22135;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "962:15:127";
                            readonly subExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 22133;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 22129;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22124;
                                        readonly src: "964:1:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_rational_340282366920938463463374607431768211456_by_1";
                                            readonly typeString: "int_const 3402...(31 digits omitted)...1456";
                                        };
                                        readonly id: 22132;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly hexValue: "31";
                                            readonly id: 22130;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "968:1:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1_by_1";
                                                readonly typeString: "int_const 1";
                                            };
                                            readonly value: "1";
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "<<";
                                        readonly rightExpression: {
                                            readonly hexValue: "313238";
                                            readonly id: 22131;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "973:3:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_128_by_1";
                                                readonly typeString: "int_const 128";
                                            };
                                            readonly value: "128";
                                        };
                                        readonly src: "968:8:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_340282366920938463463374607431768211456_by_1";
                                            readonly typeString: "int_const 3402...(31 digits omitted)...1456";
                                        };
                                    };
                                    readonly src: "964:12:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 22134;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "963:14:127";
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
                        readonly id: 22142;
                        readonly nodeType: "IfStatement";
                        readonly src: "958:86:127";
                        readonly trueBody: {
                            readonly id: 22141;
                            readonly nodeType: "Block";
                            readonly src: "979:65:127";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 22136;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11028;
                                            readonly src: "1000:11:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11028_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 22138;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1012:19:127";
                                        readonly memberName: "UnsafeCastToUint128";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10985;
                                        readonly src: "1000:31:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 22139;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1000:33:127";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 22140;
                                readonly nodeType: "RevertStatement";
                                readonly src: "993:40:127";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 22148;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 22143;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22127;
                                readonly src: "1053:1:127";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 22146;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22124;
                                    readonly src: "1065:1:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 22145;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1057:7:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint128_$";
                                        readonly typeString: "type(uint128)";
                                    };
                                    readonly typeName: {
                                        readonly id: 22144;
                                        readonly name: "uint128";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1057:7:127";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 22147;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1057:10:127";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "1053:14:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 22149;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1053:14:127";
                    }];
                };
                readonly documentation: {
                    readonly id: 22122;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "723:156:127";
                    readonly text: "@notice This function safely casts a uint256 to a uint128.\n @param x The uint256 to cast to uint128.\n @return y The uint128 casted from x.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toUint128";
                readonly nameLocation: "893:9:127";
                readonly parameters: {
                    readonly id: 22125;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22124;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "911:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22151;
                        readonly src: "903:9:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22123;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "903:7:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "902:11:127";
                };
                readonly returnParameters: {
                    readonly id: 22128;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22127;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "945:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22151;
                        readonly src: "937:9:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 22126;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "937:7:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "936:11:127";
                };
                readonly scope: 22265;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 22189;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1240:212:127";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22188;
                    readonly nodeType: "Block";
                    readonly src: "1302:150:127";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 22170;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "1316:33:127";
                            readonly subExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 22168;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 22159;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22154;
                                        readonly src: "1318:1:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<=";
                                    readonly rightExpression: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 22164;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "1336:6:127";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_int128_$";
                                                        readonly typeString: "type(int128)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 22163;
                                                        readonly name: "int128";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "1336:6:127";
                                                        readonly typeDescriptions: {};
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_type$_t_int128_$";
                                                        readonly typeString: "type(int128)";
                                                    }];
                                                    readonly id: 22162;
                                                    readonly name: "type";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -27;
                                                    readonly src: "1331:4:127";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_metatype_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 22165;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "1331:12:127";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_meta_type_t_int128";
                                                    readonly typeString: "type(int128)";
                                                };
                                            };
                                            readonly id: 22166;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "1344:3:127";
                                            readonly memberName: "max";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "1331:16:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int128";
                                                readonly typeString: "int128";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_int128";
                                                readonly typeString: "int128";
                                            }];
                                            readonly id: 22161;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "1323:7:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint128_$";
                                                readonly typeString: "type(uint128)";
                                            };
                                            readonly typeName: {
                                                readonly id: 22160;
                                                readonly name: "uint128";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "1323:7:127";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 22167;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1323:25:127";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly src: "1318:30:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 22169;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "1317:32:127";
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
                        readonly id: 22177;
                        readonly nodeType: "IfStatement";
                        readonly src: "1312:103:127";
                        readonly trueBody: {
                            readonly id: 22176;
                            readonly nodeType: "Block";
                            readonly src: "1351:64:127";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 22171;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11028;
                                            readonly src: "1372:11:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11028_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 22173;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1384:18:127";
                                        readonly memberName: "UnsafeCastToInt128";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10988;
                                        readonly src: "1372:30:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 22174;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1372:32:127";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 22175;
                                readonly nodeType: "RevertStatement";
                                readonly src: "1365:39:127";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 22186;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 22178;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22157;
                                readonly src: "1424:1:127";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 22183;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22154;
                                        readonly src: "1442:1:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 22182;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "1435:6:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_int256_$";
                                            readonly typeString: "type(int256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 22181;
                                            readonly name: "int256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "1435:6:127";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 22184;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1435:9:127";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly id: 22180;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1428:6:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_int128_$";
                                        readonly typeString: "type(int128)";
                                    };
                                    readonly typeName: {
                                        readonly id: 22179;
                                        readonly name: "int128";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1428:6:127";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 22185;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1428:17:127";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly src: "1424:21:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly id: 22187;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1424:21:127";
                    }];
                };
                readonly documentation: {
                    readonly id: 22152;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1080:155:127";
                    readonly text: "@notice This function safely casts an uint256 to an int128.\n @param x The uint256 to cast to int128.\n @return y The int128 casted from x.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toInt128";
                readonly nameLocation: "1249:8:127";
                readonly parameters: {
                    readonly id: 22155;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22154;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1266:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22189;
                        readonly src: "1258:9:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22153;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1258:7:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1257:11:127";
                };
                readonly returnParameters: {
                    readonly id: 22158;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22157;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1299:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22189;
                        readonly src: "1292:8:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int128";
                            readonly typeString: "int128";
                        };
                        readonly typeName: {
                            readonly id: 22156;
                            readonly name: "int128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1292:6:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1291:10:127";
                };
                readonly scope: 22265;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 22229;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1616:219:127";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22228;
                    readonly nodeType: "Block";
                    readonly src: "1677:158:127";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 22213;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "1691:49:127";
                            readonly subExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 22211;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                        readonly id: 22203;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 22197;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 22192;
                                            readonly src: "1693:1:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">=";
                                        readonly rightExpression: {
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 22200;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "1703:6:127";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_int128_$";
                                                        readonly typeString: "type(int128)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 22199;
                                                        readonly name: "int128";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "1703:6:127";
                                                        readonly typeDescriptions: {};
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_type$_t_int128_$";
                                                        readonly typeString: "type(int128)";
                                                    }];
                                                    readonly id: 22198;
                                                    readonly name: "type";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -27;
                                                    readonly src: "1698:4:127";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_metatype_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 22201;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "1698:12:127";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_meta_type_t_int128";
                                                    readonly typeString: "type(int128)";
                                                };
                                            };
                                            readonly id: 22202;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "1711:3:127";
                                            readonly memberName: "min";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "1698:16:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int128";
                                                readonly typeString: "int128";
                                            };
                                        };
                                        readonly src: "1693:21:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&&";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                        readonly id: 22210;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 22204;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 22192;
                                            readonly src: "1718:1:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "<=";
                                        readonly rightExpression: {
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 22207;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "1728:6:127";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_int128_$";
                                                        readonly typeString: "type(int128)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 22206;
                                                        readonly name: "int128";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "1728:6:127";
                                                        readonly typeDescriptions: {};
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_type$_t_int128_$";
                                                        readonly typeString: "type(int128)";
                                                    }];
                                                    readonly id: 22205;
                                                    readonly name: "type";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -27;
                                                    readonly src: "1723:4:127";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_metatype_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 22208;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "1723:12:127";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_meta_type_t_int128";
                                                    readonly typeString: "type(int128)";
                                                };
                                            };
                                            readonly id: 22209;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "1736:3:127";
                                            readonly memberName: "max";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "1723:16:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int128";
                                                readonly typeString: "int128";
                                            };
                                        };
                                        readonly src: "1718:21:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "1693:46:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 22212;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "1692:48:127";
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
                        readonly id: 22220;
                        readonly nodeType: "IfStatement";
                        readonly src: "1687:119:127";
                        readonly trueBody: {
                            readonly id: 22219;
                            readonly nodeType: "Block";
                            readonly src: "1742:64:127";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 22214;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11028;
                                            readonly src: "1763:11:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11028_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 22216;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1775:18:127";
                                        readonly memberName: "UnsafeCastToInt128";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10988;
                                        readonly src: "1763:30:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 22217;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1763:32:127";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 22218;
                                readonly nodeType: "RevertStatement";
                                readonly src: "1756:39:127";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 22226;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 22221;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22195;
                                readonly src: "1815:1:127";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 22224;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22192;
                                    readonly src: "1826:1:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly id: 22223;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1819:6:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_int128_$";
                                        readonly typeString: "type(int128)";
                                    };
                                    readonly typeName: {
                                        readonly id: 22222;
                                        readonly name: "int128";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1819:6:127";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 22225;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1819:9:127";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly src: "1815:13:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly id: 22227;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1815:13:127";
                    }];
                };
                readonly documentation: {
                    readonly id: 22190;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1458:153:127";
                    readonly text: "@notice This function safely casts an int256 to an int128.\n @param x The int256 to cast to int128.\n @return y The int128 casted from x.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toInt128";
                readonly nameLocation: "1625:8:127";
                readonly parameters: {
                    readonly id: 22193;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22192;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1641:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22229;
                        readonly src: "1634:8:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 22191;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1634:6:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1633:10:127";
                };
                readonly returnParameters: {
                    readonly id: 22196;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22195;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1674:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22229;
                        readonly src: "1667:8:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int128";
                            readonly typeString: "int128";
                        };
                        readonly typeName: {
                            readonly id: 22194;
                            readonly name: "int128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1667:6:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1666:10:127";
                };
                readonly scope: 22265;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 22264;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2001:204:127";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22263;
                    readonly nodeType: "Block";
                    readonly src: "2063:142:127";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 22248;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "2077:33:127";
                            readonly subExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 22246;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 22237;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22232;
                                        readonly src: "2079:1:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<=";
                                    readonly rightExpression: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 22242;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "2097:6:127";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_int256_$";
                                                        readonly typeString: "type(int256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 22241;
                                                        readonly name: "int256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "2097:6:127";
                                                        readonly typeDescriptions: {};
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_type$_t_int256_$";
                                                        readonly typeString: "type(int256)";
                                                    }];
                                                    readonly id: 22240;
                                                    readonly name: "type";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -27;
                                                    readonly src: "2092:4:127";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_metatype_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 22243;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "2092:12:127";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_meta_type_t_int256";
                                                    readonly typeString: "type(int256)";
                                                };
                                            };
                                            readonly id: 22244;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2105:3:127";
                                            readonly memberName: "max";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "2092:16:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            }];
                                            readonly id: 22239;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "2084:7:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 22238;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "2084:7:127";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 22245;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2084:25:127";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2079:30:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 22247;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "2078:32:127";
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
                        readonly id: 22255;
                        readonly nodeType: "IfStatement";
                        readonly src: "2073:103:127";
                        readonly trueBody: {
                            readonly id: 22254;
                            readonly nodeType: "Block";
                            readonly src: "2112:64:127";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 22249;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11028;
                                            readonly src: "2133:11:127";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11028_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 22251;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2145:18:127";
                                        readonly memberName: "UnsafeCastToInt256";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10991;
                                        readonly src: "2133:30:127";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 22252;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2133:32:127";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 22253;
                                readonly nodeType: "RevertStatement";
                                readonly src: "2126:39:127";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 22261;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 22256;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22235;
                                readonly src: "2185:1:127";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 22259;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22232;
                                    readonly src: "2196:1:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 22258;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2189:6:127";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_int256_$";
                                        readonly typeString: "type(int256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 22257;
                                        readonly name: "int256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2189:6:127";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 22260;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2189:9:127";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "2185:13:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 22262;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2185:13:127";
                    }];
                };
                readonly documentation: {
                    readonly id: 22230;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1841:155:127";
                    readonly text: "@notice This function safely casts an uint256 to an int256.\n @param x The uint256 to cast to int256.\n @return y The int256 casted from x.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toInt256";
                readonly nameLocation: "2010:8:127";
                readonly parameters: {
                    readonly id: 22233;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22232;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2027:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22264;
                        readonly src: "2019:9:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22231;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2019:7:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2018:11:127";
                };
                readonly returnParameters: {
                    readonly id: 22236;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22235;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "2060:1:127";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22264;
                        readonly src: "2053:8:127";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 22234;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2053:6:127";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2052:10:127";
                };
                readonly scope: 22265;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "SafeCast";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly documentation: {
                readonly id: 22091;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "127:216:127";
                readonly text: "@notice Safe unsigned integer casting library that reverts on overflow.\n @author Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [22265];
            readonly name: "SafeCast";
            readonly nameLocation: "351:8:127";
            readonly scope: 22266;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 127;
};
//# sourceMappingURL=SafeCast.d.ts.map