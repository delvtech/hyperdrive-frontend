export declare const HyperdriveCheckpointRewarder: {
    abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_subrewarder";
            readonly type: "address";
            readonly internalType: "contract IHyperdriveCheckpointSubrewarder";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "admin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "claimCheckpointReward";
        readonly inputs: readonly [{
            readonly name: "_claimant";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_checkpointTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_isTrader";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "kind";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "subrewarder";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IHyperdriveCheckpointSubrewarder";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "updateAdmin";
        readonly inputs: readonly [{
            readonly name: "_admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateSubrewarder";
        readonly inputs: readonly [{
            readonly name: "_subrewarder";
            readonly type: "address";
            readonly internalType: "contract IHyperdriveCheckpointSubrewarder";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "AdminUpdated";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CheckpointRewardClaimed";
        readonly inputs: readonly [{
            readonly name: "instance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "claimant";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "isTrader";
            readonly type: "bool";
            readonly indexed: true;
            readonly internalType: "bool";
        }, {
            readonly name: "checkpointTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "rewardToken";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract IERC20";
        }, {
            readonly name: "rewardAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SubrewarderUpdated";
        readonly inputs: readonly [{
            readonly name: "subrewarder";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract IHyperdriveCheckpointSubrewarder";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "admin()": "f851a440";
        readonly "claimCheckpointReward(address,uint256,bool)": "69114d4e";
        readonly "kind()": "04baa00b";
        readonly "name()": "06fdde03";
        readonly "subrewarder()": "3d7f7b24";
        readonly "updateAdmin(address)": "e2f273bd";
        readonly "updateSubrewarder(address)": "9b06ae49";
        readonly "version()": "54fd4d50";
    };
};
//# sourceMappingURL=HyperdriveCheckpointRewarder.d.ts.map