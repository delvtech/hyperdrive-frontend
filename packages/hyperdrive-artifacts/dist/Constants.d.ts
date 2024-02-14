export declare const Constants: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x";
        readonly linkReferences: {};
    };
    readonly ast: {
        readonly absolutePath: "test/utils/Constants.sol";
        readonly id: 139505;
        readonly exportedSymbols: {
            readonly ETH: readonly [139504];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:92:178";
        readonly nodes: readonly [{
            readonly id: 139501;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:178";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 139504;
            readonly nodeType: "VariableDeclaration";
            readonly src: "64:65:178";
            readonly nodes: readonly [];
            readonly constant: true;
            readonly mutability: "constant";
            readonly name: "ETH";
            readonly nameLocation: "81:3:178";
            readonly scope: 139505;
            readonly stateVariable: false;
            readonly storageLocation: "default";
            readonly typeDescriptions: {
                readonly typeIdentifier: "t_address";
                readonly typeString: "address";
            };
            readonly typeName: {
                readonly id: 139502;
                readonly name: "address";
                readonly nodeType: "ElementaryTypeName";
                readonly src: "64:7:178";
                readonly stateMutability: "nonpayable";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
            };
            readonly value: {
                readonly hexValue: "307845656565654565656545654565654565456545656545454565656565456565656565656545456545";
                readonly id: 139503;
                readonly isConstant: false;
                readonly isLValue: false;
                readonly isPure: true;
                readonly kind: "number";
                readonly lValueRequested: false;
                readonly nodeType: "Literal";
                readonly src: "87:42:178";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly value: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
            };
            readonly visibility: "internal";
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 178;
};
//# sourceMappingURL=Constants.d.ts.map