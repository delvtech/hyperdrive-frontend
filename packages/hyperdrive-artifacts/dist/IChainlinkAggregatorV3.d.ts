export declare const IChainlinkAggregatorV3: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "description";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getRoundData";
        readonly inputs: readonly [{
            readonly name: "_roundId";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }];
        readonly outputs: readonly [{
            readonly name: "roundId";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }, {
            readonly name: "answer";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "startedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "updatedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "answeredInRound";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "latestRoundData";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "roundId";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }, {
            readonly name: "answer";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "startedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "updatedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "answeredInRound";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "decimals()": "313ce567";
        readonly "description()": "7284e416";
        readonly "getRoundData(uint80)": "9a6fc8f5";
        readonly "latestRoundData()": "feaf968c";
        readonly "version()": "54fd4d50";
    };
};
//# sourceMappingURL=IChainlinkAggregatorV3.d.ts.map