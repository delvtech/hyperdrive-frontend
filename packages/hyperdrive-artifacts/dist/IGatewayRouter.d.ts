export declare const IGatewayRouter: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "getGateway";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "outboundTransferCustomRefund";
        readonly inputs: readonly [{
            readonly name: "_l1Token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_refundTo";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_gasPriceBid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "getGateway(address)": "bda009fe";
        readonly "outboundTransferCustomRefund(address,address,address,uint256,uint256,uint256,bytes)": "4fb1a07b";
    };
};
//# sourceMappingURL=IGatewayRouter.d.ts.map