export declare const MorphoBlueConversions: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "convertToBase";
        readonly inputs: readonly [{
            readonly name: "_vault";
            readonly type: "IMorpho";
            readonly internalType: "contract IMorpho";
        }, {
            readonly name: "_baseToken";
            readonly type: "IERC20";
            readonly internalType: "contract IERC20";
        }, {
            readonly name: "_collateralToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_oracle";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_irm";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_lltv";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_shareAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToShares";
        readonly inputs: readonly [{
            readonly name: "_vault";
            readonly type: "IMorpho";
            readonly internalType: "contract IMorpho";
        }, {
            readonly name: "_baseToken";
            readonly type: "IERC20";
            readonly internalType: "contract IERC20";
        }, {
            readonly name: "_collateralToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_oracle";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_irm";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_lltv";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_baseAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "convertToBase(IMorpho,IERC20,address,address,address,uint256,uint256)": "3c2063f0";
        readonly "convertToShares(IMorpho,IERC20,address,address,address,uint256,uint256)": "49124ca3";
    };
};
//# sourceMappingURL=MorphoBlueConversions.d.ts.map