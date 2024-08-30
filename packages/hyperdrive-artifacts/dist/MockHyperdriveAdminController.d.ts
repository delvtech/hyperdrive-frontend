export declare const MockHyperdriveAdminController: {
    abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_hyperdriveGovernance";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_feeCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_sweepCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_checkpointRewarder";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "__defaultPausers";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "checkpointRewarder";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "defaultPausers";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeCollector";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "hyperdriveGovernance";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sweepCollector";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "updateCheckpointRewarder";
        readonly inputs: readonly [{
            readonly name: "_checkpointRewarder";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateFeeCollector";
        readonly inputs: readonly [{
            readonly name: "_feeCollector";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateHyperdriveGovernance";
        readonly inputs: readonly [{
            readonly name: "_hyperdriveGovernance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateSweepCollector";
        readonly inputs: readonly [{
            readonly name: "_sweepCollector";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "checkpointRewarder()": "f2596458";
        readonly "defaultPausers()": "a64c90bf";
        readonly "feeCollector()": "c415b95c";
        readonly "hyperdriveGovernance()": "e3331555";
        readonly "sweepCollector()": "10780f73";
        readonly "updateCheckpointRewarder(address)": "3e2d2014";
        readonly "updateFeeCollector(address)": "d2c35ce8";
        readonly "updateHyperdriveGovernance(address)": "dd2b8fbb";
        readonly "updateSweepCollector(address)": "8627a4f0";
    };
};
//# sourceMappingURL=MockHyperdriveAdminController.d.ts.map