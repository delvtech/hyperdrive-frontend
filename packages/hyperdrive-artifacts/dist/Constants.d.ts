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
        readonly absolutePath: "contracts/src/libraries/Constants.sol";
        readonly id: 14124;
        readonly exportedSymbols: {
            readonly ETH: readonly [14123];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:134:72";
        readonly nodes: readonly [{
            readonly id: 14119;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:72";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 14123;
            readonly nodeType: "VariableDeclaration";
            readonly src: "106:65:72";
            readonly nodes: readonly [];
            readonly constant: true;
            readonly mutability: "constant";
            readonly name: "ETH";
            readonly nameLocation: "123:3:72";
            readonly scope: 14124;
            readonly stateVariable: false;
            readonly storageLocation: "default";
            readonly typeDescriptions: {
                readonly typeIdentifier: "t_address";
                readonly typeString: "address";
            };
            readonly typeName: {
                readonly id: 14121;
                readonly name: "address";
                readonly nodeType: "ElementaryTypeName";
                readonly src: "106:7:72";
                readonly stateMutability: "nonpayable";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
            };
            readonly value: {
                readonly hexValue: "307845656565654565656545654565654565456545656545454565656565456565656565656545456545";
                readonly id: 14122;
                readonly isConstant: false;
                readonly isLValue: false;
                readonly isPure: true;
                readonly kind: "number";
                readonly lValueRequested: false;
                readonly nodeType: "Literal";
                readonly src: "129:42:72";
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
    readonly id: 72;
};
//# sourceMappingURL=Constants.d.ts.map