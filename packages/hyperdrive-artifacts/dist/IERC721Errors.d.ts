export declare const IERC721Errors: {
    abi: readonly [{
        readonly type: "error";
        readonly name: "ERC721IncorrectOwner";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC721InsufficientApproval";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC721InvalidApprover";
        readonly inputs: readonly [{
            readonly name: "approver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC721InvalidOperator";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC721InvalidOwner";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC721InvalidReceiver";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC721InvalidSender";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC721NonexistentToken";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {};
};
//# sourceMappingURL=IERC721Errors.d.ts.map