export declare const VmSafe: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "accesses";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "readSlots";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "writeSlots";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addr";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbs";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbs";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbs";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbs";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbsDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbsDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbsDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbsDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRel";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRel";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRel";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRel";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRelDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRelDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRelDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRelDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "right";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "right";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "right";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "right";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "right";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "right";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "right";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "right";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "right";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "right";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "right";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "right";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "right";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "right";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "right";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "right";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "right";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "right";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "right";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "right";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "right";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "right";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "right";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "right";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertFalse";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertFalse";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "right";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "right";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "right";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "right";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "right";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "right";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "right";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "right";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "right";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "right";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "right";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "right";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "right";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "right";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "right";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "right";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "right";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "right";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "right";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "right";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "right";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "right";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "right";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "right";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertTrue";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertTrue";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assume";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "breakpoint";
        readonly inputs: readonly [{
            readonly name: "char";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "breakpoint";
        readonly inputs: readonly [{
            readonly name: "char";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "closeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "computeCreate2Address";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCodeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "computeCreate2Address";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCodeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "deployer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "computeCreateAddress";
        readonly inputs: readonly [{
            readonly name: "deployer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "copyFile";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "to";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "copied";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "recursive";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createWallet";
        readonly inputs: readonly [{
            readonly name: "walletLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createWallet";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createWallet";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "walletLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "derivationPath";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "language";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "language";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "derivationPath";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "envAddress";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envAddress";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBool";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBool";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes32";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes32";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envInt";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envInt";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envString";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envString";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envUint";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envUint";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "eth_getLogs";
        readonly inputs: readonly [{
            readonly name: "fromBlock";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "toBlock";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "topics";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "logs";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.EthGetLogs[]";
            readonly components: readonly [{
                readonly name: "emitter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "topics";
                readonly type: "bytes32[]";
                readonly internalType: "bytes32[]";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "blockHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "blockNumber";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "transactionHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "transactionIndex";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "logIndex";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "removed";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "exists";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ffi";
        readonly inputs: readonly [{
            readonly name: "commandInput";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "fsMetadata";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "metadata";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.FsMetadata";
            readonly components: readonly [{
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "length";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "readOnly";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "modified";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "accessed";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "created";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBlockNumber";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "height";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBlockTimestamp";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "creationBytecode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployedCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "runtimeBytecode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLabel";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "currentLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getMappingKeyAndParentOf";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "elementSlot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "found";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "parent";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getMappingLength";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "mappingSlot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "length";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getMappingSlotAt";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "mappingSlot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "idx";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getNonce";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNonce";
        readonly inputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getRecordedLogs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "logs";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.Log[]";
            readonly components: readonly [{
                readonly name: "topics";
                readonly type: "bytes32[]";
                readonly internalType: "bytes32[]";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "emitter";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "keyExists";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "keyExistsJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "keyExistsToml";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "label";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "load";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "parseAddress";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBool";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBytes";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBytes32";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseInt";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonAddress";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonAddressArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBool";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBoolArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes32";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes32Array";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytesArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonInt";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonIntArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonKeys";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "keys";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonString";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonStringArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonUint";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonUintArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseToml";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseToml";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlAddress";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlAddressArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBool";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBoolArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBytes";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBytes32";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBytes32Array";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBytesArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlInt";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlIntArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlKeys";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "keys";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlString";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlStringArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlUint";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlUintArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseUint";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "pauseGasMetering";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "projectRoot";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "maxDepth";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "maxDepth";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "followLinks";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readFileBinary";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readLine";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "line";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readLink";
        readonly inputs: readonly [{
            readonly name: "linkPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "targetPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "record";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "recordLogs";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rememberKey";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "recursive";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "replace";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "from";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "to";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "output";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "resumeGasMetering";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rpc";
        readonly inputs: readonly [{
            readonly name: "method";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "params";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rpcUrl";
        readonly inputs: readonly [{
            readonly name: "rpcAlias";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rpcUrlStructs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "urls";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.Rpc[]";
            readonly components: readonly [{
                readonly name: "key";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "url";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rpcUrls";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "urls";
            readonly type: "string[2][]";
            readonly internalType: "string[2][]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "serializeAddress";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeAddress";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBool";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBool";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes32";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes32";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeInt";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeInt";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeJson";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeString";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeString";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeUint";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeUint";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setEnv";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sign";
        readonly inputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sign";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "signP256";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "sleep";
        readonly inputs: readonly [{
            readonly name: "duration";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "split";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delimiter";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "outputs";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startMappingRecording";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startStateDiffRecording";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopAndReturnStateDiff";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "accountAccesses";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.AccountAccess[]";
            readonly components: readonly [{
                readonly name: "chainInfo";
                readonly type: "tuple";
                readonly internalType: "struct VmSafe.ChainInfo";
                readonly components: readonly [{
                    readonly name: "forkId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "chainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "kind";
                readonly type: "uint8";
                readonly internalType: "enum VmSafe.AccountAccessKind";
            }, {
                readonly name: "account";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "accessor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "initialized";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "oldBalance";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "newBalance";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deployedCode";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "reverted";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "storageAccesses";
                readonly type: "tuple[]";
                readonly internalType: "struct VmSafe.StorageAccess[]";
                readonly components: readonly [{
                    readonly name: "account";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "slot";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "isWrite";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }, {
                    readonly name: "previousValue";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "newValue";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "reverted";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopBroadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopMappingRecording";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "toBase64";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toBase64";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toBase64URL";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toBase64URL";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toLowercase";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "output";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toUppercase";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "output";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "trim";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "output";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "tryFfi";
        readonly inputs: readonly [{
            readonly name: "commandInput";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.FfiResult";
            readonly components: readonly [{
                readonly name: "exitCode";
                readonly type: "int32";
                readonly internalType: "int32";
            }, {
                readonly name: "stdout";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "stderr";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "unixTime";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "milliseconds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeFileBinary";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeLine";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeToml";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeToml";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "accesses(address)": "65bc9481";
        readonly "addr(uint256)": "ffa18649";
        readonly "assertApproxEqAbs(int256,int256,uint256)": "240f839d";
        readonly "assertApproxEqAbs(int256,int256,uint256,string)": "8289e621";
        readonly "assertApproxEqAbs(uint256,uint256,uint256)": "16d207c6";
        readonly "assertApproxEqAbs(uint256,uint256,uint256,string)": "f710b062";
        readonly "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)": "3d5bc8bc";
        readonly "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)": "6a5066d4";
        readonly "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)": "045c55ce";
        readonly "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)": "60429eb2";
        readonly "assertApproxEqRel(int256,int256,uint256)": "fea2d14f";
        readonly "assertApproxEqRel(int256,int256,uint256,string)": "ef277d72";
        readonly "assertApproxEqRel(uint256,uint256,uint256)": "8cf25ef4";
        readonly "assertApproxEqRel(uint256,uint256,uint256,string)": "1ecb7d33";
        readonly "assertApproxEqRelDecimal(int256,int256,uint256,uint256)": "abbf21cc";
        readonly "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)": "fccc11c4";
        readonly "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)": "21ed2977";
        readonly "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)": "82d6c8fd";
        readonly "assertEq(address,address)": "515361f6";
        readonly "assertEq(address,address,string)": "2f2769d1";
        readonly "assertEq(address[],address[])": "3868ac34";
        readonly "assertEq(address[],address[],string)": "3e9173c5";
        readonly "assertEq(bool,bool)": "f7fe3477";
        readonly "assertEq(bool,bool,string)": "4db19e7e";
        readonly "assertEq(bool[],bool[])": "707df785";
        readonly "assertEq(bool[],bool[],string)": "e48a8f8d";
        readonly "assertEq(bytes,bytes)": "97624631";
        readonly "assertEq(bytes,bytes,string)": "e24fed00";
        readonly "assertEq(bytes32,bytes32)": "7c84c69b";
        readonly "assertEq(bytes32,bytes32,string)": "c1fa1ed0";
        readonly "assertEq(bytes32[],bytes32[])": "0cc9ee84";
        readonly "assertEq(bytes32[],bytes32[],string)": "e03e9177";
        readonly "assertEq(bytes[],bytes[])": "e5fb9b4a";
        readonly "assertEq(bytes[],bytes[],string)": "f413f0b6";
        readonly "assertEq(int256,int256)": "fe74f05b";
        readonly "assertEq(int256,int256,string)": "714a2f13";
        readonly "assertEq(int256[],int256[])": "711043ac";
        readonly "assertEq(int256[],int256[],string)": "191f1b30";
        readonly "assertEq(string,string)": "f320d963";
        readonly "assertEq(string,string,string)": "36f656d8";
        readonly "assertEq(string[],string[])": "cf1c049c";
        readonly "assertEq(string[],string[],string)": "eff6b27d";
        readonly "assertEq(uint256,uint256)": "98296c54";
        readonly "assertEq(uint256,uint256,string)": "88b44c85";
        readonly "assertEq(uint256[],uint256[])": "975d5a12";
        readonly "assertEq(uint256[],uint256[],string)": "5d18c73a";
        readonly "assertEqDecimal(int256,int256,uint256)": "48016c04";
        readonly "assertEqDecimal(int256,int256,uint256,string)": "7e77b0c5";
        readonly "assertEqDecimal(uint256,uint256,uint256)": "27af7d9c";
        readonly "assertEqDecimal(uint256,uint256,uint256,string)": "d0cbbdef";
        readonly "assertFalse(bool)": "a5982885";
        readonly "assertFalse(bool,string)": "7ba04809";
        readonly "assertGe(int256,int256)": "0a30b771";
        readonly "assertGe(int256,int256,string)": "a84328dd";
        readonly "assertGe(uint256,uint256)": "a8d4d1d9";
        readonly "assertGe(uint256,uint256,string)": "e25242c0";
        readonly "assertGeDecimal(int256,int256,uint256)": "dc28c0f1";
        readonly "assertGeDecimal(int256,int256,uint256,string)": "5df93c9b";
        readonly "assertGeDecimal(uint256,uint256,uint256)": "3d1fe08a";
        readonly "assertGeDecimal(uint256,uint256,uint256,string)": "8bff9133";
        readonly "assertGt(int256,int256)": "5a362d45";
        readonly "assertGt(int256,int256,string)": "f8d33b9b";
        readonly "assertGt(uint256,uint256)": "db07fcd2";
        readonly "assertGt(uint256,uint256,string)": "d9a3c4d2";
        readonly "assertGtDecimal(int256,int256,uint256)": "78611f0e";
        readonly "assertGtDecimal(int256,int256,uint256,string)": "04a5c7ab";
        readonly "assertGtDecimal(uint256,uint256,uint256)": "eccd2437";
        readonly "assertGtDecimal(uint256,uint256,uint256,string)": "64949a8d";
        readonly "assertLe(int256,int256)": "95fd154e";
        readonly "assertLe(int256,int256,string)": "4dfe692c";
        readonly "assertLe(uint256,uint256)": "8466f415";
        readonly "assertLe(uint256,uint256,string)": "d17d4b0d";
        readonly "assertLeDecimal(int256,int256,uint256)": "11d1364a";
        readonly "assertLeDecimal(int256,int256,uint256,string)": "aa5cf788";
        readonly "assertLeDecimal(uint256,uint256,uint256)": "c304aab7";
        readonly "assertLeDecimal(uint256,uint256,uint256,string)": "7fefbbe0";
        readonly "assertLt(int256,int256)": "3e914080";
        readonly "assertLt(int256,int256,string)": "9ff531e3";
        readonly "assertLt(uint256,uint256)": "b12fc005";
        readonly "assertLt(uint256,uint256,string)": "65d5c135";
        readonly "assertLtDecimal(int256,int256,uint256)": "dbe8d88b";
        readonly "assertLtDecimal(int256,int256,uint256,string)": "40f0b4e0";
        readonly "assertLtDecimal(uint256,uint256,uint256)": "2077337e";
        readonly "assertLtDecimal(uint256,uint256,uint256,string)": "a972d037";
        readonly "assertNotEq(address,address)": "b12e1694";
        readonly "assertNotEq(address,address,string)": "8775a591";
        readonly "assertNotEq(address[],address[])": "46d0b252";
        readonly "assertNotEq(address[],address[],string)": "72c7e0b5";
        readonly "assertNotEq(bool,bool)": "236e4d66";
        readonly "assertNotEq(bool,bool,string)": "1091a261";
        readonly "assertNotEq(bool[],bool[])": "286fafea";
        readonly "assertNotEq(bool[],bool[],string)": "62c6f9fb";
        readonly "assertNotEq(bytes,bytes)": "3cf78e28";
        readonly "assertNotEq(bytes,bytes,string)": "9507540e";
        readonly "assertNotEq(bytes32,bytes32)": "898e83fc";
        readonly "assertNotEq(bytes32,bytes32,string)": "b2332f51";
        readonly "assertNotEq(bytes32[],bytes32[])": "0603ea68";
        readonly "assertNotEq(bytes32[],bytes32[],string)": "b873634c";
        readonly "assertNotEq(bytes[],bytes[])": "edecd035";
        readonly "assertNotEq(bytes[],bytes[],string)": "1dcd1f68";
        readonly "assertNotEq(int256,int256)": "f4c004e3";
        readonly "assertNotEq(int256,int256,string)": "4724c5b9";
        readonly "assertNotEq(int256[],int256[])": "0b72f4ef";
        readonly "assertNotEq(int256[],int256[],string)": "d3977322";
        readonly "assertNotEq(string,string)": "6a8237b3";
        readonly "assertNotEq(string,string,string)": "78bdcea7";
        readonly "assertNotEq(string[],string[])": "bdfacbe8";
        readonly "assertNotEq(string[],string[],string)": "b67187f3";
        readonly "assertNotEq(uint256,uint256)": "b7909320";
        readonly "assertNotEq(uint256,uint256,string)": "98f9bdbd";
        readonly "assertNotEq(uint256[],uint256[])": "56f29cba";
        readonly "assertNotEq(uint256[],uint256[],string)": "9a7fbd8f";
        readonly "assertNotEqDecimal(int256,int256,uint256)": "14e75680";
        readonly "assertNotEqDecimal(int256,int256,uint256,string)": "33949f0b";
        readonly "assertNotEqDecimal(uint256,uint256,uint256)": "669efca7";
        readonly "assertNotEqDecimal(uint256,uint256,uint256,string)": "f5a55558";
        readonly "assertTrue(bool)": "0c9fd581";
        readonly "assertTrue(bool,string)": "a34edc03";
        readonly "assume(bool)": "4c63e562";
        readonly "breakpoint(string)": "f0259e92";
        readonly "breakpoint(string,bool)": "f7d39a8d";
        readonly "broadcast()": "afc98040";
        readonly "broadcast(address)": "e6962cdb";
        readonly "broadcast(uint256)": "f67a965b";
        readonly "closeFile(string)": "48c3241f";
        readonly "computeCreate2Address(bytes32,bytes32)": "890c283b";
        readonly "computeCreate2Address(bytes32,bytes32,address)": "d323826a";
        readonly "computeCreateAddress(address,uint256)": "74637a7a";
        readonly "copyFile(string,string)": "a54a87d8";
        readonly "createDir(string,bool)": "168b64d3";
        readonly "createWallet(string)": "7404f1d2";
        readonly "createWallet(uint256)": "7a675bb6";
        readonly "createWallet(uint256,string)": "ed7c5462";
        readonly "deriveKey(string,string,uint32)": "6bcb2c1b";
        readonly "deriveKey(string,string,uint32,string)": "29233b1f";
        readonly "deriveKey(string,uint32)": "6229498b";
        readonly "deriveKey(string,uint32,string)": "32c8176d";
        readonly "envAddress(string)": "350d56bf";
        readonly "envAddress(string,string)": "ad31b9fa";
        readonly "envBool(string)": "7ed1ec7d";
        readonly "envBool(string,string)": "aaaddeaf";
        readonly "envBytes(string)": "4d7baf06";
        readonly "envBytes(string,string)": "ddc2651b";
        readonly "envBytes32(string)": "97949042";
        readonly "envBytes32(string,string)": "5af231c1";
        readonly "envInt(string)": "892a0c61";
        readonly "envInt(string,string)": "42181150";
        readonly "envOr(string,address)": "561fe540";
        readonly "envOr(string,bool)": "4777f3cf";
        readonly "envOr(string,bytes)": "b3e47705";
        readonly "envOr(string,bytes32)": "b4a85892";
        readonly "envOr(string,int256)": "bbcb713e";
        readonly "envOr(string,string)": "d145736c";
        readonly "envOr(string,string,address[])": "c74e9deb";
        readonly "envOr(string,string,bool[])": "eb85e83b";
        readonly "envOr(string,string,bytes32[])": "2281f367";
        readonly "envOr(string,string,bytes[])": "64bc3e64";
        readonly "envOr(string,string,int256[])": "4700d74b";
        readonly "envOr(string,string,string[])": "859216bc";
        readonly "envOr(string,string,uint256[])": "74318528";
        readonly "envOr(string,uint256)": "5e97348f";
        readonly "envString(string)": "f877cb19";
        readonly "envString(string,string)": "14b02bc9";
        readonly "envUint(string)": "c1978d1f";
        readonly "envUint(string,string)": "f3dec099";
        readonly "eth_getLogs(uint256,uint256,address,bytes32[])": "35e1349b";
        readonly "exists(string)": "261a323e";
        readonly "ffi(string[])": "89160467";
        readonly "fsMetadata(string)": "af368a08";
        readonly "getBlockNumber()": "42cbb15c";
        readonly "getBlockTimestamp()": "796b89b9";
        readonly "getCode(string)": "8d1cc925";
        readonly "getDeployedCode(string)": "3ebf73b4";
        readonly "getLabel(address)": "28a249b0";
        readonly "getMappingKeyAndParentOf(address,bytes32)": "876e24e6";
        readonly "getMappingLength(address,bytes32)": "2f2fd63f";
        readonly "getMappingSlotAt(address,bytes32,uint256)": "ebc73ab4";
        readonly "getNonce((address,uint256,uint256,uint256))": "a5748aad";
        readonly "getNonce(address)": "2d0335ab";
        readonly "getRecordedLogs()": "191553a4";
        readonly "isDir(string)": "7d15d019";
        readonly "isFile(string)": "e0eb04d4";
        readonly "keyExists(string,string)": "528a683c";
        readonly "keyExistsJson(string,string)": "db4235f6";
        readonly "keyExistsToml(string,string)": "600903ad";
        readonly "label(address,string)": "c657c718";
        readonly "load(address,bytes32)": "667f9d70";
        readonly "parseAddress(string)": "c6ce059d";
        readonly "parseBool(string)": "974ef924";
        readonly "parseBytes(string)": "8f5d232d";
        readonly "parseBytes32(string)": "087e6e81";
        readonly "parseInt(string)": "42346c5e";
        readonly "parseJson(string)": "6a82600a";
        readonly "parseJson(string,string)": "85940ef1";
        readonly "parseJsonAddress(string,string)": "1e19e657";
        readonly "parseJsonAddressArray(string,string)": "2fce7883";
        readonly "parseJsonBool(string,string)": "9f86dc91";
        readonly "parseJsonBoolArray(string,string)": "91f3b94f";
        readonly "parseJsonBytes(string,string)": "fd921be8";
        readonly "parseJsonBytes32(string,string)": "1777e59d";
        readonly "parseJsonBytes32Array(string,string)": "91c75bc3";
        readonly "parseJsonBytesArray(string,string)": "6631aa99";
        readonly "parseJsonInt(string,string)": "7b048ccd";
        readonly "parseJsonIntArray(string,string)": "9983c28a";
        readonly "parseJsonKeys(string,string)": "213e4198";
        readonly "parseJsonString(string,string)": "49c4fac8";
        readonly "parseJsonStringArray(string,string)": "498fdcf4";
        readonly "parseJsonUint(string,string)": "addde2b6";
        readonly "parseJsonUintArray(string,string)": "522074ab";
        readonly "parseToml(string)": "592151f0";
        readonly "parseToml(string,string)": "37736e08";
        readonly "parseTomlAddress(string,string)": "65e7c844";
        readonly "parseTomlAddressArray(string,string)": "65c428e7";
        readonly "parseTomlBool(string,string)": "d30dced6";
        readonly "parseTomlBoolArray(string,string)": "127cfe9a";
        readonly "parseTomlBytes(string,string)": "d77bfdb9";
        readonly "parseTomlBytes32(string,string)": "8e214810";
        readonly "parseTomlBytes32Array(string,string)": "3e716f81";
        readonly "parseTomlBytesArray(string,string)": "b197c247";
        readonly "parseTomlInt(string,string)": "c1350739";
        readonly "parseTomlIntArray(string,string)": "d3522ae6";
        readonly "parseTomlKeys(string,string)": "812a44b2";
        readonly "parseTomlString(string,string)": "8bb8dd43";
        readonly "parseTomlStringArray(string,string)": "9f629281";
        readonly "parseTomlUint(string,string)": "cc7b0487";
        readonly "parseTomlUintArray(string,string)": "b5df27c8";
        readonly "parseUint(string)": "fa91454d";
        readonly "pauseGasMetering()": "d1a5b36f";
        readonly "projectRoot()": "d930a0e6";
        readonly "readDir(string)": "c4bc59e0";
        readonly "readDir(string,uint64)": "1497876c";
        readonly "readDir(string,uint64,bool)": "8102d70d";
        readonly "readFile(string)": "60f9bb11";
        readonly "readFileBinary(string)": "16ed7bc4";
        readonly "readLine(string)": "70f55728";
        readonly "readLink(string)": "9f5684a2";
        readonly "record()": "266cf109";
        readonly "recordLogs()": "41af2f52";
        readonly "rememberKey(uint256)": "22100064";
        readonly "removeDir(string,bool)": "45c62011";
        readonly "removeFile(string)": "f1afe04d";
        readonly "replace(string,string,string)": "e00ad03e";
        readonly "resumeGasMetering()": "2bcd50e0";
        readonly "rpc(string,string)": "1206c8a8";
        readonly "rpcUrl(string)": "975a6ce9";
        readonly "rpcUrlStructs()": "9d2ad72a";
        readonly "rpcUrls()": "a85a8418";
        readonly "serializeAddress(string,string,address)": "972c6062";
        readonly "serializeAddress(string,string,address[])": "1e356e1a";
        readonly "serializeBool(string,string,bool)": "ac22e971";
        readonly "serializeBool(string,string,bool[])": "92925aa1";
        readonly "serializeBytes(string,string,bytes)": "f21d52c7";
        readonly "serializeBytes(string,string,bytes[])": "9884b232";
        readonly "serializeBytes32(string,string,bytes32)": "2d812b44";
        readonly "serializeBytes32(string,string,bytes32[])": "201e43e2";
        readonly "serializeInt(string,string,int256)": "3f33db60";
        readonly "serializeInt(string,string,int256[])": "7676e127";
        readonly "serializeJson(string,string)": "9b3358b0";
        readonly "serializeString(string,string,string)": "88da6d35";
        readonly "serializeString(string,string,string[])": "561cd6f3";
        readonly "serializeUint(string,string,uint256)": "129e9002";
        readonly "serializeUint(string,string,uint256[])": "fee9a469";
        readonly "setEnv(string,string)": "3d5923ee";
        readonly "sign((address,uint256,uint256,uint256),bytes32)": "b25c5a25";
        readonly "sign(uint256,bytes32)": "e341eaa4";
        readonly "signP256(uint256,bytes32)": "83211b40";
        readonly "sleep(uint256)": "fa9d8713";
        readonly "split(string,string)": "8bb75533";
        readonly "startBroadcast()": "7fb5297f";
        readonly "startBroadcast(address)": "7fec2a8d";
        readonly "startBroadcast(uint256)": "ce817d47";
        readonly "startMappingRecording()": "3e9705c0";
        readonly "startStateDiffRecording()": "cf22e3c9";
        readonly "stopAndReturnStateDiff()": "aa5cf90e";
        readonly "stopBroadcast()": "76eadd36";
        readonly "stopMappingRecording()": "0d4aae9b";
        readonly "toBase64(bytes)": "a5cbfe65";
        readonly "toBase64(string)": "3f8be2c8";
        readonly "toBase64URL(bytes)": "c8bd0e4a";
        readonly "toBase64URL(string)": "ae3165b3";
        readonly "toLowercase(string)": "50bb0884";
        readonly "toString(address)": "56ca623e";
        readonly "toString(bool)": "71dce7da";
        readonly "toString(bytes)": "71aad10d";
        readonly "toString(bytes32)": "b11a19e8";
        readonly "toString(int256)": "a322c40e";
        readonly "toString(uint256)": "6900a3ae";
        readonly "toUppercase(string)": "074ae3d7";
        readonly "trim(string)": "b2dad155";
        readonly "tryFfi(string[])": "f45c1ce7";
        readonly "unixTime()": "625387dc";
        readonly "writeFile(string,string)": "897e0a97";
        readonly "writeFileBinary(string,bytes)": "1f21fc80";
        readonly "writeJson(string,string)": "e23cd19f";
        readonly "writeJson(string,string,string)": "35d6ad46";
        readonly "writeLine(string,string)": "619d897f";
        readonly "writeToml(string,string)": "c0865ba7";
        readonly "writeToml(string,string,string)": "51ac6a33";
    };
};
//# sourceMappingURL=VmSafe.d.ts.map