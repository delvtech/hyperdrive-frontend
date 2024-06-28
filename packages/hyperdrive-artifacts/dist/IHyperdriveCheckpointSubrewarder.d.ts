export declare const IHyperdriveCheckpointSubrewarder: {
    abi: readonly [{
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
        readonly name: "kind";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "minterRewardAmount";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "processReward";
        readonly inputs: readonly [{
            readonly name: "_instance";
            readonly type: "address";
            readonly internalType: "address";
        }, {
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
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registry";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IHyperdriveRegistry";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rewardToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rewarder";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "source";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "traderRewardAmount";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "updateMinterRewardAmount";
        readonly inputs: readonly [{
            readonly name: "_minterRewardAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateRegistry";
        readonly inputs: readonly [{
            readonly name: "_registry";
            readonly type: "address";
            readonly internalType: "contract IHyperdriveRegistry";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateRewardToken";
        readonly inputs: readonly [{
            readonly name: "_rewardToken";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateSource";
        readonly inputs: readonly [{
            readonly name: "_source";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateTraderRewardAmount";
        readonly inputs: readonly [{
            readonly name: "_traderRewardAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly stateMutability: "pure";
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
        readonly name: "MinterRewardAmountUpdated";
        readonly inputs: readonly [{
            readonly name: "minterRewardAmount";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RegistryUpdated";
        readonly inputs: readonly [{
            readonly name: "registry";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract IHyperdriveRegistry";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RewardTokenUpdated";
        readonly inputs: readonly [{
            readonly name: "rewardToken";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract IERC20";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SourceUpdated";
        readonly inputs: readonly [{
            readonly name: "source";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TraderRewardAmountUpdated";
        readonly inputs: readonly [{
            readonly name: "traderRewardAmount";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
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
        readonly "kind()": "04baa00b";
        readonly "minterRewardAmount()": "62498576";
        readonly "name()": "06fdde03";
        readonly "processReward(address,address,uint256,bool)": "e9f46041";
        readonly "registry()": "7b103999";
        readonly "rewardToken()": "f7c618c1";
        readonly "rewarder()": "dcc3e06e";
        readonly "source()": "67e828bf";
        readonly "traderRewardAmount()": "5b338e07";
        readonly "updateAdmin(address)": "e2f273bd";
        readonly "updateMinterRewardAmount(uint256)": "2057b1c7";
        readonly "updateRegistry(address)": "1a5da6c8";
        readonly "updateRewardToken(address)": "f8cf31cb";
        readonly "updateSource(address)": "f24bab65";
        readonly "updateTraderRewardAmount(uint256)": "9183219f";
        readonly "version()": "54fd4d50";
    };
};
//# sourceMappingURL=IHyperdriveCheckpointSubrewarder.d.ts.map