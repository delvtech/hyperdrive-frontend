export declare const AerodromeLpHyperdriveCoreDeployer: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "deployHyperdrive";
        readonly inputs: readonly [{
            readonly name: "__name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_config";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.PoolConfig";
            readonly components: readonly [{
                readonly name: "baseToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "vaultSharesToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "linkerFactory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "circuitBreakerDelta";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "positionDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "checkpointDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governance";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "feeCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sweepCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "checkpointRewarder";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fees";
                readonly type: "tuple";
                readonly internalType: "struct IHyperdrive.Fees";
                readonly components: readonly [{
                    readonly name: "curve";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "flat";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }, {
            readonly name: "_adminController";
            readonly type: "address";
            readonly internalType: "contract IHyperdriveAdminController";
        }, {
            readonly name: "_extraData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_target0";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_target1";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_target2";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_target3";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_target4";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "deployHyperdrive(string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),address,bytes,address,address,address,address,address,bytes32)": "8cc23ce0";
    };
};
//# sourceMappingURL=AerodromeLpHyperdriveCoreDeployer.d.ts.map