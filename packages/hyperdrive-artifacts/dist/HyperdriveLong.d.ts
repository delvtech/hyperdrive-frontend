export declare const HyperdriveLong: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "AddLiquidity";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "CloseLong";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basePayment";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "CloseShort";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "collector";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fees";
            readonly type: "uint256";
        }];
        readonly name: "CollectGovernanceFee";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "checkpointTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "checkpointVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturedShorts";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturedLongs";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "CreateCheckpoint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newFeeCollector";
            readonly type: "address";
        }];
        readonly name: "FeeCollectorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newGovernance";
            readonly type: "address";
        }];
        readonly name: "GovernanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "apr";
            readonly type: "uint256";
        }];
        readonly name: "Initialize";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "OpenLong";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseProceeds";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "OpenShort";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPaused";
            readonly type: "bool";
        }];
        readonly name: "PauseStatusUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newPauser";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "status";
            readonly type: "bool";
        }];
        readonly name: "PauserUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }];
        readonly name: "RedeemWithdrawalShares";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "RemoveLiquidity";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "collector";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "Sweep";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newSweepCollector";
            readonly type: "address";
        }];
        readonly name: "SweepCollectorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "TransferSingle";
        readonly type: "event";
    }];
    readonly bytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveLong\",\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"Implements the long accounting for Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveLong.sol\":\"HyperdriveLong\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "AddLiquidity";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Approval";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "ApprovalForAll";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CloseLong";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "basePayment";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CloseShort";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "collector";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "fees";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CollectGovernanceFee";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "checkpointTime";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "checkpointVaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturedShorts";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturedLongs";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CreateCheckpoint";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newFeeCollector";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "FeeCollectorUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newGovernance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "GovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "apr";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Initialize";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "OpenLong";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseProceeds";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "OpenShort";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "isPaused";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "PauseStatusUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newPauser";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "status";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "PauserUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "withdrawalShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "RedeemWithdrawalShares";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "withdrawalShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "RemoveLiquidity";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "collector";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "Sweep";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newSweepCollector";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "SweepCollectorUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "id";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "TransferSingle";
                readonly anonymous: false;
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/src/internal/HyperdriveLong.sol": "HyperdriveLong";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5";
                readonly urls: readonly ["bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339", "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f";
                readonly urls: readonly ["bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19", "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784";
                readonly urls: readonly ["bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa", "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3";
                readonly urls: readonly ["bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186", "dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLP.sol": {
                readonly keccak256: "0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488";
                readonly urls: readonly ["bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4", "dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLong.sol": {
                readonly keccak256: "0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc";
                readonly urls: readonly ["bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4", "dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveMultiToken.sol": {
                readonly keccak256: "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373";
                readonly urls: readonly ["bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d", "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e";
                readonly urls: readonly ["bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19", "dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb";
                readonly urls: readonly ["bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c", "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a";
                readonly urls: readonly ["bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d", "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424";
                readonly urls: readonly ["bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a", "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189";
                readonly urls: readonly ["bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786", "dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c";
                readonly urls: readonly ["bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4", "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e";
                readonly urls: readonly ["bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797", "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"];
                readonly license: "Apache-2.0";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                readonly keccak256: "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236";
                readonly urls: readonly ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/internal/HyperdriveLong.sol";
        readonly id: 16055;
        readonly exportedSymbols: {
            readonly AssetId: readonly [18009];
            readonly Errors: readonly [18030];
            readonly FixedPointMath: readonly [18822];
            readonly HyperdriveLP: readonly [15127];
            readonly HyperdriveLong: readonly [16054];
            readonly HyperdriveMath: readonly [19567];
            readonly IHyperdrive: readonly [10351];
            readonly IHyperdriveEvents: readonly [10887];
            readonly LPMath: readonly [21642];
            readonly ONE: readonly [18039];
            readonly SafeCast: readonly [21815];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:27424:115";
        readonly nodes: readonly [{
            readonly id: 15129;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:115";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 15131;
            readonly nodeType: "ImportDirective";
            readonly src: "64:60:115";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 16055;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 15130;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "73:11:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 15133;
            readonly nodeType: "ImportDirective";
            readonly src: "125:72:115";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveEvents.sol";
            readonly file: "../interfaces/IHyperdriveEvents.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 16055;
            readonly sourceUnit: 10888;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 15132;
                    readonly name: "IHyperdriveEvents";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10887;
                    readonly src: "134:17:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 15135;
            readonly nodeType: "ImportDirective";
            readonly src: "198:51:115";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/AssetId.sol";
            readonly file: "../libraries/AssetId.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 16055;
            readonly sourceUnit: 18010;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 15134;
                    readonly name: "AssetId";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18009;
                    readonly src: "207:7:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 15137;
            readonly nodeType: "ImportDirective";
            readonly src: "250:49:115";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/Errors.sol";
            readonly file: "../libraries/Errors.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 16055;
            readonly sourceUnit: 18031;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 15136;
                    readonly name: "Errors";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18030;
                    readonly src: "259:6:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 15140;
            readonly nodeType: "ImportDirective";
            readonly src: "300:70:115";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 16055;
            readonly sourceUnit: 18823;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 15138;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18822;
                    readonly src: "309:14:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 15139;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18039;
                    readonly src: "325:3:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 15142;
            readonly nodeType: "ImportDirective";
            readonly src: "371:65:115";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "../libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 16055;
            readonly sourceUnit: 19568;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 15141;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19567;
                    readonly src: "380:14:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 15144;
            readonly nodeType: "ImportDirective";
            readonly src: "437:49:115";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/LPMath.sol";
            readonly file: "../libraries/LPMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 16055;
            readonly sourceUnit: 21643;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 15143;
                    readonly name: "LPMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 21642;
                    readonly src: "446:6:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 15146;
            readonly nodeType: "ImportDirective";
            readonly src: "487:53:115";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/SafeCast.sol";
            readonly file: "../libraries/SafeCast.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 16055;
            readonly sourceUnit: 21816;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 15145;
                    readonly name: "SafeCast";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 21815;
                    readonly src: "496:8:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 15148;
            readonly nodeType: "ImportDirective";
            readonly src: "541:50:115";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveLP.sol";
            readonly file: "./HyperdriveLP.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 16055;
            readonly sourceUnit: 15128;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 15147;
                    readonly name: "HyperdriveLP";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 15127;
                    readonly src: "550:12:115";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 16054;
            readonly nodeType: "ContractDefinition";
            readonly src: "919:26543:115";
            readonly nodes: readonly [{
                readonly id: 15156;
                readonly nodeType: "UsingForDirective";
                readonly src: "993:33:115";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 15154;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["999:14:115"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18822;
                    readonly src: "999:14:115";
                };
                readonly typeName: {
                    readonly id: 15155;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1018:7:115";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 15159;
                readonly nodeType: "UsingForDirective";
                readonly src: "1031:32:115";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 15157;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1037:14:115"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18822;
                    readonly src: "1037:14:115";
                };
                readonly typeName: {
                    readonly id: 15158;
                    readonly name: "int256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1056:6:115";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                };
            }, {
                readonly id: 15162;
                readonly nodeType: "UsingForDirective";
                readonly src: "1068:27:115";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 15160;
                    readonly name: "SafeCast";
                    readonly nameLocations: readonly ["1074:8:115"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 21815;
                    readonly src: "1074:8:115";
                };
                readonly typeName: {
                    readonly id: 15161;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1087:7:115";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 15165;
                readonly nodeType: "UsingForDirective";
                readonly src: "1100:26:115";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 15163;
                    readonly name: "SafeCast";
                    readonly nameLocations: readonly ["1106:8:115"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 21815;
                    readonly src: "1106:8:115";
                };
                readonly typeName: {
                    readonly id: 15164;
                    readonly name: "int256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1119:6:115";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                };
            }, {
                readonly id: 15349;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1899:3798:115";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 15348;
                    readonly nodeType: "Block";
                    readonly src: "2184:3513:115";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 15186;
                                readonly name: "_checkMessageValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12736;
                                readonly src: "2244:18:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$__$";
                                    readonly typeString: "function () view";
                                };
                            };
                            readonly id: 15187;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2244:20:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15188;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2244:20:115";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 15190;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15175;
                                readonly src: "2343:8:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 15189;
                                readonly name: "_checkOptions";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12758;
                                readonly src: "2329:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_Options_$10210_calldata_ptr_$returns$__$";
                                    readonly typeString: "function (struct IHyperdrive.Options calldata) pure";
                                };
                            };
                            readonly id: 15191;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2329:23:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15192;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2329:23:115";
                    }, {
                        readonly assignments: readonly [15194, 15196];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15194;
                            readonly mutability: "mutable";
                            readonly name: "sharesDeposited";
                            readonly nameLocation: "2416:15:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "2408:23:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15193;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2408:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 15196;
                            readonly mutability: "mutable";
                            readonly name: "vaultSharePrice";
                            readonly nameLocation: "2441:15:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "2433:23:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15195;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2433:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15201;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 15198;
                                readonly name: "_amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15168;
                                readonly src: "2482:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15199;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15175;
                                readonly src: "2503:8:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 15197;
                                readonly name: "_deposit";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12616;
                                readonly src: "2460:8:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)";
                                };
                            };
                            readonly id: 15200;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2460:61:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2407:114:115";
                    }, {
                        readonly assignments: readonly [15203];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15203;
                            readonly mutability: "mutable";
                            readonly name: "baseDeposited";
                            readonly nameLocation: "3082:13:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "3074:21:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15202;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3074:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15208;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 15206;
                                readonly name: "vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15196;
                                readonly src: "3122:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 15204;
                                    readonly name: "sharesDeposited";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15194;
                                    readonly src: "3098:15:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 15205;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3114:7:115";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18085;
                                readonly src: "3098:23:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 15207;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3098:40:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3074:64:115";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 15211;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 15209;
                                readonly name: "baseDeposited";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15203;
                                readonly src: "3152:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 15210;
                                readonly name: "_minimumTransactionAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17566;
                                readonly src: "3168:25:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3152:41:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15218;
                        readonly nodeType: "IfStatement";
                        readonly src: "3148:117:115";
                        readonly trueBody: {
                            readonly id: 15217;
                            readonly nodeType: "Block";
                            readonly src: "3195:70:115";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15212;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "3216:11:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 15214;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3228:24:115";
                                        readonly memberName: "MinimumTransactionAmount";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10264;
                                        readonly src: "3216:36:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15215;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3216:38:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15216;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3209:45:115";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 15221;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 15219;
                                readonly name: "vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15196;
                                readonly src: "3278:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 15220;
                                readonly name: "_minVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15172;
                                readonly src: "3296:19:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3278:37:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15228;
                        readonly nodeType: "IfStatement";
                        readonly src: "3274:106:115";
                        readonly trueBody: {
                            readonly id: 15227;
                            readonly nodeType: "Block";
                            readonly src: "3317:63:115";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15222;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "3338:11:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 15224;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3350:17:115";
                                        readonly memberName: "MinimumSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10261;
                                        readonly src: "3338:29:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15225;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3338:31:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15226;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3331:38:115";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [15230];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15230;
                            readonly mutability: "mutable";
                            readonly name: "latestCheckpoint";
                            readonly nameLocation: "3431:16:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "3423:24:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15229;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3423:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15233;
                        readonly initialValue: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 15231;
                                readonly name: "_latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12892;
                                readonly src: "3450:17:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 15232;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3450:19:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3423:46:115";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 15235;
                                readonly name: "latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15230;
                                readonly src: "3509:16:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15236;
                                readonly name: "vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15196;
                                readonly src: "3539:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 15237;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21642;
                                    readonly src: "3568:6:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21642_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 15238;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3575:29:115";
                                readonly memberName: "SHARE_PROCEEDS_MAX_ITERATIONS";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19590;
                                readonly src: "3568:36:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15234;
                                readonly name: "_applyCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12806;
                                readonly src: "3479:16:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) returns (uint256)";
                                };
                            };
                            readonly id: 15239;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3479:135:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 15240;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3479:135:115";
                    }, {
                        readonly assignments: readonly [15242];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15242;
                            readonly mutability: "mutable";
                            readonly name: "shareReservesDelta";
                            readonly nameLocation: "3884:18:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "3876:26:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15241;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3876:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15243;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3876:26:115";
                    }, {
                        readonly assignments: readonly [15245];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15245;
                            readonly mutability: "mutable";
                            readonly name: "totalGovernanceFee";
                            readonly nameLocation: "3920:18:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "3912:26:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15244;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3912:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15246;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3912:26:115";
                    }, {
                        readonly expression: {
                            readonly id: 15255;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 15247;
                                    readonly name: "shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15242;
                                    readonly src: "3962:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15248;
                                    readonly name: "bondProceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15184;
                                    readonly src: "3994:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15249;
                                    readonly name: "totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15245;
                                    readonly src: "4020:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 15250;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3948:100:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 15252;
                                    readonly name: "sharesDeposited";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15194;
                                    readonly src: "4070:15:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15253;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15196;
                                    readonly src: "4087:15:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 15251;
                                    readonly name: "_calculateOpenLong";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15915;
                                    readonly src: "4051:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) view returns (uint256,uint256,uint256)";
                                    };
                                };
                                readonly id: 15254;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4051:52:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256)";
                                };
                            };
                            readonly src: "3948:155:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15256;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3948:155:115";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 15259;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 15257;
                                readonly name: "bondProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15184;
                                readonly src: "4163:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 15258;
                                readonly name: "_minOutput";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15170;
                                readonly src: "4178:10:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "4163:25:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15266;
                        readonly nodeType: "IfStatement";
                        readonly src: "4159:88:115";
                        readonly trueBody: {
                            readonly id: 15265;
                            readonly nodeType: "Block";
                            readonly src: "4190:57:115";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15260;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "4211:11:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 15262;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4223:11:115";
                                        readonly memberName: "OutputLimit";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10273;
                                        readonly src: "4211:23:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15263;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4211:25:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15264;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4204:32:115";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 15269;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 15267;
                                readonly name: "_governanceFeesAccrued";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17592;
                                readonly src: "4298:22:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly id: 15268;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15245;
                                readonly src: "4324:18:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "4298:44:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 15270;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4298:44:115";
                    }, {
                        readonly expression: {
                            readonly id: 15275;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 15271;
                                readonly name: "maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15182;
                                readonly src: "4398:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 15274;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 15272;
                                    readonly name: "latestCheckpoint";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15230;
                                    readonly src: "4413:16:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 15273;
                                    readonly name: "_positionDuration";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17542;
                                    readonly src: "4432:17:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "4413:36:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "4398:51:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 15276;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4398:51:115";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 15278;
                                readonly name: "shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15242;
                                readonly src: "4487:18:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15279;
                                readonly name: "bondProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15184;
                                readonly src: "4519:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15280;
                                readonly name: "vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15196;
                                readonly src: "4545:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15281;
                                readonly name: "maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15182;
                                readonly src: "4574:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15277;
                                readonly name: "_applyOpenLong";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15671;
                                readonly src: "4459:14:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 15282;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4459:137:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15283;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4459:137:115";
                    }, {
                        readonly assignments: readonly [15285];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15285;
                            readonly mutability: "mutable";
                            readonly name: "assetId";
                            readonly nameLocation: "4688:7:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "4680:15:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15284;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4680:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15293;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly expression: {
                                        readonly id: 15288;
                                        readonly name: "AssetId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18009;
                                        readonly src: "4733:7:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18009_$";
                                            readonly typeString: "type(library AssetId)";
                                        };
                                    };
                                    readonly id: 15289;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4741:13:115";
                                    readonly memberName: "AssetIdPrefix";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17756;
                                    readonly src: "4733:21:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                        readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                    };
                                };
                                readonly id: 15290;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4755:4:115";
                                readonly memberName: "Long";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 17753;
                                readonly src: "4733:26:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            }, {
                                readonly id: 15291;
                                readonly name: "maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15182;
                                readonly src: "4773:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 15286;
                                    readonly name: "AssetId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18009;
                                    readonly src: "4698:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18009_$";
                                        readonly typeString: "type(library AssetId)";
                                    };
                                };
                                readonly id: 15287;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4706:13:115";
                                readonly memberName: "encodeAssetId";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 17779;
                                readonly src: "4698:21:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 15292;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4698:97:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4680:115:115";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 15295;
                                readonly name: "assetId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15285;
                                readonly src: "4811:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 15296;
                                    readonly name: "_options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15175;
                                    readonly src: "4820:8:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                };
                                readonly id: 15297;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4829:11:115";
                                readonly memberName: "destination";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10203;
                                readonly src: "4820:20:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 15298;
                                readonly name: "bondProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15184;
                                readonly src: "4842:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15294;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16328;
                                readonly src: "4805:5:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256)";
                                };
                            };
                            readonly id: 15299;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4805:50:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15300;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4805:50:115";
                    }, {
                        readonly assignments: readonly [15302];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15302;
                            readonly mutability: "mutable";
                            readonly name: "amount";
                            readonly nameLocation: "4909:6:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "4901:14:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15301;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4901:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15304;
                        readonly initialValue: {
                            readonly id: 15303;
                            readonly name: "_amount";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15168;
                            readonly src: "4918:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4901:24:115";
                    }, {
                        readonly assignments: readonly [15306];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15306;
                            readonly mutability: "mutable";
                            readonly name: "maturityTime_";
                            readonly nameLocation: "4974:13:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "4966:21:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15305;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4966:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15308;
                        readonly initialValue: {
                            readonly id: 15307;
                            readonly name: "maturityTime";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15182;
                            readonly src: "4990:12:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4966:36:115";
                    }, {
                        readonly assignments: readonly [15310];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15310;
                            readonly mutability: "mutable";
                            readonly name: "bondProceeds_";
                            readonly nameLocation: "5051:13:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "5043:21:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15309;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5043:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15312;
                        readonly initialValue: {
                            readonly id: 15311;
                            readonly name: "bondProceeds";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15184;
                            readonly src: "5067:12:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5043:36:115";
                    }, {
                        readonly assignments: readonly [15314];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15314;
                            readonly mutability: "mutable";
                            readonly name: "vaultSharePrice_";
                            readonly nameLocation: "5128:16:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "5120:24:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15313;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5120:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15316;
                        readonly initialValue: {
                            readonly id: 15315;
                            readonly name: "vaultSharePrice";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15196;
                            readonly src: "5147:15:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5120:42:115";
                    }, {
                        readonly assignments: readonly [15321];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15321;
                            readonly mutability: "mutable";
                            readonly name: "options";
                            readonly nameLocation: "5232:7:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15348;
                            readonly src: "5203:36:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "calldata";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                            readonly typeName: {
                                readonly id: 15320;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 15319;
                                    readonly name: "IHyperdrive.Options";
                                    readonly nameLocations: readonly ["5203:11:115", "5215:7:115"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10210;
                                    readonly src: "5203:19:115";
                                };
                                readonly referencedDeclaration: 10210;
                                readonly src: "5203:19:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.Options";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15323;
                        readonly initialValue: {
                            readonly id: 15322;
                            readonly name: "_options";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15175;
                            readonly src: "5242:8:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                readonly typeString: "struct IHyperdrive.Options calldata";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5203:47:115";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 15325;
                                    readonly name: "options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15321;
                                    readonly src: "5318:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                };
                                readonly id: 15326;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5326:11:115";
                                readonly memberName: "destination";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10203;
                                readonly src: "5318:19:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 15327;
                                readonly name: "assetId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15285;
                                readonly src: "5351:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15328;
                                readonly name: "maturityTime_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15306;
                                readonly src: "5372:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 15330;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15302;
                                    readonly src: "5424:6:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15331;
                                    readonly name: "vaultSharePrice_";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15314;
                                    readonly src: "5432:16:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15332;
                                    readonly name: "options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15321;
                                    readonly src: "5450:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    }];
                                    readonly id: 15329;
                                    readonly name: "_convertToBaseFromOption";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13614;
                                    readonly src: "5399:24:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15333;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5399:59:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 15335;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15302;
                                    readonly src: "5520:6:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15336;
                                    readonly name: "vaultSharePrice_";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15314;
                                    readonly src: "5528:16:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15337;
                                    readonly name: "options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15321;
                                    readonly src: "5546:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    }];
                                    readonly id: 15334;
                                    readonly name: "_convertToVaultSharesFromOption";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13640;
                                    readonly src: "5488:31:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15338;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5488:66:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 15339;
                                    readonly name: "options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15321;
                                    readonly src: "5592:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                };
                                readonly id: 15340;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5600:6:115";
                                readonly memberName: "asBase";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10206;
                                readonly src: "5592:14:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly id: 15341;
                                readonly name: "bondProceeds_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15310;
                                readonly src: "5620:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15324;
                                readonly name: "OpenLong";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 10771;
                                readonly src: "5296:8:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256,uint256,uint256,uint256,bool,uint256)";
                                };
                            };
                            readonly id: 15342;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5296:347:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15343;
                        readonly nodeType: "EmitStatement";
                        readonly src: "5291:352:115";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 15344;
                                readonly name: "maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15182;
                                readonly src: "5662:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15345;
                                readonly name: "bondProceeds_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15310;
                                readonly src: "5676:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 15346;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "5661:29:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 15185;
                        readonly id: 15347;
                        readonly nodeType: "Return";
                        readonly src: "5654:36:115";
                    }];
                };
                readonly documentation: {
                    readonly id: 15166;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1132:762:115";
                    readonly text: "@dev Opens a long position.\n @param _amount The amount of capital provided to open the long. The\n        units of this quantity are either base or vault shares, depending\n        on the value of `_options.asBase`.\n @param _minOutput The minimum number of bonds to receive.\n @param _minVaultSharePrice The minimum vault share price at which to\n        open the long. This allows traders to protect themselves from\n        opening a long in a checkpoint where negative interest has\n        accrued.\n @param _options The options that configure how the trade is settled.\n @return maturityTime The maturity time of the bonds.\n @return bondProceeds The amount of bonds the user received.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 15178;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 15177;
                        readonly name: "nonReentrant";
                        readonly nameLocations: readonly ["2086:12:115"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 71603;
                        readonly src: "2086:12:115";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "2086:12:115";
                }, {
                    readonly id: 15180;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 15179;
                        readonly name: "isNotPaused";
                        readonly nameLocations: readonly ["2107:11:115"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 12794;
                        readonly src: "2107:11:115";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "2107:11:115";
                }];
                readonly name: "_openLong";
                readonly nameLocation: "1908:9:115";
                readonly parameters: {
                    readonly id: 15176;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15168;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "1935:7:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15349;
                        readonly src: "1927:15:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15167;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1927:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15170;
                        readonly mutability: "mutable";
                        readonly name: "_minOutput";
                        readonly nameLocation: "1960:10:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15349;
                        readonly src: "1952:18:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15169;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1952:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15172;
                        readonly mutability: "mutable";
                        readonly name: "_minVaultSharePrice";
                        readonly nameLocation: "1988:19:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15349;
                        readonly src: "1980:27:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15171;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1980:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15175;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "2046:8:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15349;
                        readonly src: "2017:37:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 15174;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 15173;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["2017:11:115", "2029:7:115"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10210;
                                readonly src: "2017:19:115";
                            };
                            readonly referencedDeclaration: 10210;
                            readonly src: "2017:19:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1917:143:115";
                };
                readonly returnParameters: {
                    readonly id: 15185;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15182;
                        readonly mutability: "mutable";
                        readonly name: "maturityTime";
                        readonly nameLocation: "2144:12:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15349;
                        readonly src: "2136:20:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15181;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2136:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15184;
                        readonly mutability: "mutable";
                        readonly name: "bondProceeds";
                        readonly nameLocation: "2166:12:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15349;
                        readonly src: "2158:20:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15183;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2158:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2135:44:115";
                };
                readonly scope: 16054;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 15564;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6356:5326:115";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 15563;
                    readonly nodeType: "Block";
                    readonly src: "6557:5125:115";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 15367;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15359;
                                readonly src: "6635:8:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 15366;
                                readonly name: "_checkOptions";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12758;
                                readonly src: "6621:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_Options_$10210_calldata_ptr_$returns$__$";
                                    readonly typeString: "function (struct IHyperdrive.Options calldata) pure";
                                };
                            };
                            readonly id: 15368;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6621:23:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15369;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6621:23:115";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 15372;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 15370;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15354;
                                readonly src: "6769:11:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 15371;
                                readonly name: "_minimumTransactionAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17566;
                                readonly src: "6783:25:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6769:39:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15379;
                        readonly nodeType: "IfStatement";
                        readonly src: "6765:115:115";
                        readonly trueBody: {
                            readonly id: 15378;
                            readonly nodeType: "Block";
                            readonly src: "6810:70:115";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15373;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "6831:11:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 15375;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6843:24:115";
                                        readonly memberName: "MinimumTransactionAmount";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10264;
                                        readonly src: "6831:36:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15376;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6831:38:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15377;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6824:45:115";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [15381];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15381;
                            readonly mutability: "mutable";
                            readonly name: "vaultSharePrice";
                            readonly nameLocation: "7155:15:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "7147:23:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15380;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7147:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15384;
                        readonly initialValue: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 15382;
                                readonly name: "_pricePerVaultShare";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12690;
                                readonly src: "7173:19:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 15383;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7173:21:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7147:47:115";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 15388;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 15385;
                                    readonly name: "block";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -4;
                                    readonly src: "7208:5:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_block";
                                        readonly typeString: "block";
                                    };
                                };
                                readonly id: 15386;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7214:9:115";
                                readonly memberName: "timestamp";
                                readonly nodeType: "MemberAccess";
                                readonly src: "7208:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 15387;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15352;
                                readonly src: "7226:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "7208:31:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 15405;
                            readonly nodeType: "Block";
                            readonly src: "7426:173:115";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 15399;
                                        readonly name: "_maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15352;
                                        readonly src: "7474:13:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15400;
                                        readonly name: "vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15381;
                                        readonly src: "7505:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 15401;
                                            readonly name: "LPMath";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 21642;
                                            readonly src: "7538:6:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21642_$";
                                                readonly typeString: "type(library LPMath)";
                                            };
                                        };
                                        readonly id: 15402;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7545:29:115";
                                        readonly memberName: "SHARE_PROCEEDS_MAX_ITERATIONS";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 19590;
                                        readonly src: "7538:36:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 15398;
                                        readonly name: "_applyCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12806;
                                        readonly src: "7440:16:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) returns (uint256)";
                                        };
                                    };
                                    readonly id: 15403;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7440:148:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 15404;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7440:148:115";
                            }];
                        };
                        readonly id: 15406;
                        readonly nodeType: "IfStatement";
                        readonly src: "7204:395:115";
                        readonly trueBody: {
                            readonly id: 15397;
                            readonly nodeType: "Block";
                            readonly src: "7241:179:115";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [];
                                            readonly id: 15390;
                                            readonly name: "_latestCheckpoint";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12892;
                                            readonly src: "7289:17:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                                readonly typeString: "function () view returns (uint256)";
                                            };
                                        };
                                        readonly id: 15391;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7289:19:115";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15392;
                                        readonly name: "vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15381;
                                        readonly src: "7326:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 15393;
                                            readonly name: "LPMath";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 21642;
                                            readonly src: "7359:6:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21642_$";
                                                readonly typeString: "type(library LPMath)";
                                            };
                                        };
                                        readonly id: 15394;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7366:29:115";
                                        readonly memberName: "SHARE_PROCEEDS_MAX_ITERATIONS";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 19590;
                                        readonly src: "7359:36:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 15389;
                                        readonly name: "_applyCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12806;
                                        readonly src: "7255:16:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) returns (uint256)";
                                        };
                                    };
                                    readonly id: 15395;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7255:154:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 15396;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7255:154:115";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly expression: {
                                            readonly id: 15410;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18009;
                                            readonly src: "7699:7:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18009_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 15411;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7707:13:115";
                                        readonly memberName: "AssetIdPrefix";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17756;
                                        readonly src: "7699:21:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                            readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                        };
                                    };
                                    readonly id: 15412;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7721:4:115";
                                    readonly memberName: "Long";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17753;
                                    readonly src: "7699:26:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    };
                                }, {
                                    readonly id: 15413;
                                    readonly name: "_maturityTime";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15352;
                                    readonly src: "7727:13:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 15408;
                                        readonly name: "AssetId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18009;
                                        readonly src: "7677:7:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18009_$";
                                            readonly typeString: "type(library AssetId)";
                                        };
                                    };
                                    readonly id: 15409;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7685:13:115";
                                    readonly memberName: "encodeAssetId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17779;
                                    readonly src: "7677:21:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15414;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7677:64:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 15415;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "7755:3:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 15416;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7759:6:115";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "7755:10:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 15417;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15354;
                                readonly src: "7779:11:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15407;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16380;
                                readonly src: "7658:5:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256)";
                                };
                            };
                            readonly id: 15418;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7658:142:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15419;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7658:142:115";
                    }, {
                        readonly assignments: readonly [15421, 15423, 15425, 15427, 15429];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15421;
                            readonly mutability: "mutable";
                            readonly name: "bondReservesDelta";
                            readonly nameLocation: "7984:17:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "7976:25:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15420;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7976:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 15423;
                            readonly mutability: "mutable";
                            readonly name: "shareProceeds";
                            readonly nameLocation: "8023:13:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "8015:21:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15422;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8015:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 15425;
                            readonly mutability: "mutable";
                            readonly name: "shareReservesDelta";
                            readonly nameLocation: "8058:18:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "8050:26:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15424;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8050:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 15427;
                            readonly mutability: "mutable";
                            readonly name: "shareAdjustmentDelta";
                            readonly nameLocation: "8097:20:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "8090:27:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 15426;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8090:6:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 15429;
                            readonly mutability: "mutable";
                            readonly name: "totalGovernanceFee";
                            readonly nameLocation: "8139:18:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "8131:26:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15428;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8131:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15435;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 15431;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15354;
                                readonly src: "8190:11:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15432;
                                readonly name: "vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15381;
                                readonly src: "8203:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15433;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15352;
                                readonly src: "8220:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15430;
                                readonly name: "_calculateCloseLong";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16053;
                                readonly src: "8170:19:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) view returns (uint256,uint256,uint256,int256,uint256)";
                                };
                            };
                            readonly id: 15434;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8170:64:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7962:272:115";
                    }, {
                        readonly assignments: readonly [15437];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15437;
                            readonly mutability: "mutable";
                            readonly name: "maturityTime";
                            readonly nameLocation: "8443:12:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "8435:20:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15436;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8435:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15439;
                        readonly initialValue: {
                            readonly id: 15438;
                            readonly name: "_maturityTime";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15352;
                            readonly src: "8458:13:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8435:36:115";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 15443;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 15440;
                                    readonly name: "block";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -4;
                                    readonly src: "8516:5:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_block";
                                        readonly typeString: "block";
                                    };
                                };
                                readonly id: 15441;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8522:9:115";
                                readonly memberName: "timestamp";
                                readonly nodeType: "MemberAccess";
                                readonly src: "8516:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 15442;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15352;
                                readonly src: "8534:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "8516:31:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 15498;
                            readonly nodeType: "Block";
                            readonly src: "9665:652:115";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 15492;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 15487;
                                        readonly name: "shareProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15423;
                                        readonly src: "9877:13:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 15489;
                                            readonly name: "shareProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15423;
                                            readonly src: "9911:13:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 15490;
                                            readonly name: "vaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15381;
                                            readonly src: "9926:15:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly id: 15488;
                                            readonly name: "_applyZombieClose";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13273;
                                            readonly src: "9893:17:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) returns (uint256)";
                                            };
                                        };
                                        readonly id: 15491;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9893:49:115";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9877:65:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 15493;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9877:65:115";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 15495;
                                        readonly name: "vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15381;
                                        readonly src: "10290:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 15494;
                                        readonly name: "_distributeExcessIdleSafe";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [14917, 15020];
                                        readonly referencedDeclaration: 14917;
                                        readonly src: "10264:25:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$";
                                            readonly typeString: "function (uint256) returns (bool)";
                                        };
                                    };
                                    readonly id: 15496;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10264:42:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 15497;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10264:42:115";
                            }];
                        };
                        readonly id: 15499;
                        readonly nodeType: "IfStatement";
                        readonly src: "8512:1805:115";
                        readonly trueBody: {
                            readonly id: 15486;
                            readonly nodeType: "Block";
                            readonly src: "8549:1110:115";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 15446;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 15444;
                                        readonly name: "_governanceFeesAccrued";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17592;
                                        readonly src: "8608:22:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 15445;
                                        readonly name: "totalGovernanceFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15429;
                                        readonly src: "8634:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8608:44:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 15447;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8608:44:115";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 15449;
                                        readonly name: "_bondAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15354;
                                        readonly src: "8699:11:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15450;
                                        readonly name: "bondReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15421;
                                        readonly src: "8728:17:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15451;
                                        readonly name: "shareReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15425;
                                        readonly src: "8763:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15452;
                                        readonly name: "shareAdjustmentDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15427;
                                        readonly src: "8799:20:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    }, {
                                        readonly id: 15453;
                                        readonly name: "maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15437;
                                        readonly src: "8837:12:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 15448;
                                        readonly name: "_applyCloseLong";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15802;
                                        readonly src: "8666:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$returns$__$";
                                            readonly typeString: "function (uint256,uint256,uint256,int256,uint256)";
                                        };
                                    };
                                    readonly id: 15454;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "8666:197:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15455;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8666:197:115";
                            }, {
                                readonly assignments: readonly [15457];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 15457;
                                    readonly mutability: "mutable";
                                    readonly name: "nonNettedLongs";
                                    readonly nameLocation: "9037:14:115";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 15486;
                                    readonly src: "9030:21:115";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly typeName: {
                                        readonly id: 15456;
                                        readonly name: "int256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9030:6:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 15461;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 15459;
                                        readonly name: "maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15437;
                                        readonly src: "9070:12:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 15458;
                                        readonly name: "_nonNettedLongs";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12940;
                                        readonly src: "9054:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_int256_$";
                                            readonly typeString: "function (uint256) view returns (int256)";
                                        };
                                    };
                                    readonly id: 15460;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9054:29:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9030:53:115";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                        readonly id: 15467;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 15463;
                                            readonly name: "nonNettedLongs";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15457;
                                            readonly src: "9134:14:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "+";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 15464;
                                                    readonly name: "_bondAmount";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 15354;
                                                    readonly src: "9151:11:115";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 15465;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9163:8:115";
                                                readonly memberName: "toInt256";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 21814;
                                                readonly src: "9151:20:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 15466;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "9151:22:115";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "9134:39:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    }, {
                                        readonly id: 15468;
                                        readonly name: "nonNettedLongs";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15457;
                                        readonly src: "9191:14:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        }, {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        }];
                                        readonly id: 15462;
                                        readonly name: "_updateLongExposure";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13181;
                                        readonly src: "9097:19:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$";
                                            readonly typeString: "function (int256,int256)";
                                        };
                                    };
                                    readonly id: 15469;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9097:122:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15470;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9097:122:115";
                            }, {
                                readonly assignments: readonly [15472];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 15472;
                                    readonly mutability: "mutable";
                                    readonly name: "success";
                                    readonly nameLocation: "9489:7:115";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 15486;
                                    readonly src: "9484:12:115";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly typeName: {
                                        readonly id: 15471;
                                        readonly name: "bool";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9484:4:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 15476;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 15474;
                                        readonly name: "vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15381;
                                        readonly src: "9525:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 15473;
                                        readonly name: "_distributeExcessIdleSafe";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [14917, 15020];
                                        readonly referencedDeclaration: 14917;
                                        readonly src: "9499:25:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$";
                                            readonly typeString: "function (uint256) returns (bool)";
                                        };
                                    };
                                    readonly id: 15475;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9499:42:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9484:57:115";
                            }, {
                                readonly condition: {
                                    readonly id: 15478;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "!";
                                    readonly prefix: true;
                                    readonly src: "9559:8:115";
                                    readonly subExpression: {
                                        readonly id: 15477;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15472;
                                        readonly src: "9560:7:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 15485;
                                readonly nodeType: "IfStatement";
                                readonly src: "9555:94:115";
                                readonly trueBody: {
                                    readonly id: 15484;
                                    readonly nodeType: "Block";
                                    readonly src: "9569:80:115";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 15479;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10351;
                                                    readonly src: "9594:11:115";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 15481;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9606:26:115";
                                                readonly memberName: "DistributeExcessIdleFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10293;
                                                readonly src: "9594:38:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 15482;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "9594:40:115";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 15483;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "9587:47:115";
                                    }];
                                };
                            }];
                        };
                    }, {
                        readonly assignments: readonly [15501];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15501;
                            readonly mutability: "mutable";
                            readonly name: "proceeds";
                            readonly nameLocation: "10381:8:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "10373:16:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15500;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10373:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15507;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 15503;
                                readonly name: "shareProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15423;
                                readonly src: "10402:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15504;
                                readonly name: "vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15381;
                                readonly src: "10417:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15505;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15359;
                                readonly src: "10434:8:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 15502;
                                readonly name: "_withdraw";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12679;
                                readonly src: "10392:9:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)";
                                };
                            };
                            readonly id: 15506;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10392:51:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10373:70:115";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 15510;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 15508;
                                readonly name: "proceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15501;
                                readonly src: "10734:8:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 15509;
                                readonly name: "_minOutput";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15356;
                                readonly src: "10745:10:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "10734:21:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15517;
                        readonly nodeType: "IfStatement";
                        readonly src: "10730:84:115";
                        readonly trueBody: {
                            readonly id: 15516;
                            readonly nodeType: "Block";
                            readonly src: "10757:57:115";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15511;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "10778:11:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 15513;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10790:11:115";
                                        readonly memberName: "OutputLimit";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10273;
                                        readonly src: "10778:23:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15514;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10778:25:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15515;
                                readonly nodeType: "RevertStatement";
                                readonly src: "10771:32:115";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [15519];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15519;
                            readonly mutability: "mutable";
                            readonly name: "bondAmount";
                            readonly nameLocation: "10867:10:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "10859:18:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15518;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10859:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15521;
                        readonly initialValue: {
                            readonly id: 15520;
                            readonly name: "_bondAmount";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15354;
                            readonly src: "10880:11:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10859:32:115";
                    }, {
                        readonly assignments: readonly [15523];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15523;
                            readonly mutability: "mutable";
                            readonly name: "vaultSharePrice_";
                            readonly nameLocation: "10940:16:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "10932:24:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15522;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10932:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15525;
                        readonly initialValue: {
                            readonly id: 15524;
                            readonly name: "vaultSharePrice";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15381;
                            readonly src: "10959:15:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10932:42:115";
                    }, {
                        readonly assignments: readonly [15530];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15530;
                            readonly mutability: "mutable";
                            readonly name: "options";
                            readonly nameLocation: "11044:7:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15563;
                            readonly src: "11015:36:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "calldata";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                            readonly typeName: {
                                readonly id: 15529;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 15528;
                                    readonly name: "IHyperdrive.Options";
                                    readonly nameLocations: readonly ["11015:11:115", "11027:7:115"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10210;
                                    readonly src: "11015:19:115";
                                };
                                readonly referencedDeclaration: 10210;
                                readonly src: "11015:19:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.Options";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15532;
                        readonly initialValue: {
                            readonly id: 15531;
                            readonly name: "_options";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15359;
                            readonly src: "11054:8:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                readonly typeString: "struct IHyperdrive.Options calldata";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "11015:47:115";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 15534;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "11131:3:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 15535;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "11135:6:115";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "11131:10:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 15536;
                                    readonly name: "options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15530;
                                    readonly src: "11165:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                };
                                readonly id: 15537;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "11173:11:115";
                                readonly memberName: "destination";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10203;
                                readonly src: "11165:19:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly expression: {
                                            readonly id: 15540;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18009;
                                            readonly src: "11235:7:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18009_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 15541;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11243:13:115";
                                        readonly memberName: "AssetIdPrefix";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17756;
                                        readonly src: "11235:21:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                            readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                        };
                                    };
                                    readonly id: 15542;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "11257:4:115";
                                    readonly memberName: "Long";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17753;
                                    readonly src: "11235:26:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    };
                                }, {
                                    readonly id: 15543;
                                    readonly name: "maturityTime";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15437;
                                    readonly src: "11263:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 15538;
                                        readonly name: "AssetId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18009;
                                        readonly src: "11213:7:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18009_$";
                                            readonly typeString: "type(library AssetId)";
                                        };
                                    };
                                    readonly id: 15539;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "11221:13:115";
                                    readonly memberName: "encodeAssetId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17779;
                                    readonly src: "11213:21:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15544;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11213:63:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15545;
                                readonly name: "maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15437;
                                readonly src: "11290:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 15547;
                                    readonly name: "proceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15501;
                                    readonly src: "11370:8:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15548;
                                    readonly name: "vaultSharePrice_";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15523;
                                    readonly src: "11380:16:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15549;
                                    readonly name: "options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15530;
                                    readonly src: "11398:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    }];
                                    readonly id: 15546;
                                    readonly name: "_convertToBaseFromOption";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13614;
                                    readonly src: "11345:24:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15550;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11345:61:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 15552;
                                    readonly name: "proceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15501;
                                    readonly src: "11506:8:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15553;
                                    readonly name: "vaultSharePrice_";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15523;
                                    readonly src: "11532:16:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15554;
                                    readonly name: "options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15530;
                                    readonly src: "11566:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    }];
                                    readonly id: 15551;
                                    readonly name: "_convertToVaultSharesFromOption";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13640;
                                    readonly src: "11457:31:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15555;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11457:130:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 15556;
                                    readonly name: "options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15530;
                                    readonly src: "11601:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                };
                                readonly id: 15557;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "11609:6:115";
                                readonly memberName: "asBase";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10206;
                                readonly src: "11601:14:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly id: 15558;
                                readonly name: "bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15519;
                                readonly src: "11629:10:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15533;
                                readonly name: "CloseLong";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 10809;
                                readonly src: "11108:9:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,uint256,uint256,uint256,uint256,bool,uint256)";
                                };
                            };
                            readonly id: 15559;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "11108:541:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15560;
                        readonly nodeType: "EmitStatement";
                        readonly src: "11103:546:115";
                    }, {
                        readonly expression: {
                            readonly id: 15561;
                            readonly name: "proceeds";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 15501;
                            readonly src: "11667:8:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 15365;
                        readonly id: 15562;
                        readonly nodeType: "Return";
                        readonly src: "11660:15:115";
                    }];
                };
                readonly documentation: {
                    readonly id: 15350;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5703:648:115";
                    readonly text: "@dev Closes a long position with a specified maturity time.\n @param _maturityTime The maturity time of the long.\n @param _bondAmount The amount of longs to close.\n @param _minOutput The minimum proceeds the trader will accept. The units\n        of this quantity are either base or vault shares, depending on\n        the value of `_options.asBase`.\n @param _options The options that configure how the trade is settled.\n @return The proceeds the user receives. The units of this quantity are\n         either base or vault shares, depending on the value of\n         `_options.asBase`.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 15362;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 15361;
                        readonly name: "nonReentrant";
                        readonly nameLocations: readonly ["6526:12:115"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 71603;
                        readonly src: "6526:12:115";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "6526:12:115";
                }];
                readonly name: "_closeLong";
                readonly nameLocation: "6365:10:115";
                readonly parameters: {
                    readonly id: 15360;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15352;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "6393:13:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15564;
                        readonly src: "6385:21:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15351;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6385:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15354;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "6424:11:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15564;
                        readonly src: "6416:19:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15353;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6416:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15356;
                        readonly mutability: "mutable";
                        readonly name: "_minOutput";
                        readonly nameLocation: "6453:10:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15564;
                        readonly src: "6445:18:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15355;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6445:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15359;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "6502:8:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15564;
                        readonly src: "6473:37:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 15358;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 15357;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["6473:11:115", "6485:7:115"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10210;
                                readonly src: "6473:19:115";
                            };
                            readonly referencedDeclaration: 10210;
                            readonly src: "6473:19:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6375:141:115";
                };
                readonly returnParameters: {
                    readonly id: 15365;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15364;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15564;
                        readonly src: "6548:7:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15363;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6548:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6547:9:115";
                };
                readonly scope: 16054;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 15671;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12096:1951:115";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 15670;
                    readonly nodeType: "Block";
                    readonly src: "12273:1774:115";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [15577];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15577;
                            readonly mutability: "mutable";
                            readonly name: "longsOutstanding_";
                            readonly nameLocation: "12354:17:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15670;
                            readonly src: "12346:25:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                            readonly typeName: {
                                readonly id: 15576;
                                readonly name: "uint128";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "12346:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15580;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 15578;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17570;
                                readonly src: "12374:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly id: 15579;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "12387:16:115";
                            readonly memberName: "longsOutstanding";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10016;
                            readonly src: "12374:29:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "12346:57:115";
                    }, {
                        readonly expression: {
                            readonly id: 15599;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 15581;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "12413:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15583;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "12426:23:115";
                                readonly memberName: "longAverageMaturityTime";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10025;
                                readonly src: "12413:36:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 15590;
                                            readonly name: "longsOutstanding_";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15577;
                                            readonly src: "12572:17:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint128";
                                                readonly typeString: "uint128";
                                            };
                                        }, {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 15593;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 15591;
                                                readonly name: "_maturityTime";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 15573;
                                                readonly src: "12607:13:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "*";
                                            readonly rightExpression: {
                                                readonly id: 15592;
                                                readonly name: "ONE";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18039;
                                                readonly src: "12623:3:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "12607:19:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 15594;
                                            readonly name: "_bondReservesDelta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15569;
                                            readonly src: "12677:18:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly hexValue: "74727565";
                                            readonly id: 15595;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "bool";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "12713:4:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                            readonly value: "true";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint128";
                                                readonly typeString: "uint128";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly expression: {
                                                        readonly id: 15586;
                                                        readonly name: "_marketState";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 17570;
                                                        readonly src: "12473:12:115";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                                        };
                                                    };
                                                    readonly id: 15587;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12486:23:115";
                                                    readonly memberName: "longAverageMaturityTime";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 10025;
                                                    readonly src: "12473:36:115";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint128";
                                                        readonly typeString: "uint128";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_uint128";
                                                        readonly typeString: "uint128";
                                                    }];
                                                    readonly id: 15585;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "12452:7:115";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 15584;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "12452:7:115";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 15588;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12452:67:115";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 15589;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12533:21:115";
                                            readonly memberName: "updateWeightedAverage";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18732;
                                            readonly src: "12452:102:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 15596;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "12452:279:115";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 15597;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "12745:9:115";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21707;
                                    readonly src: "12452:302:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 15598;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "12452:304:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "12413:343:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 15600;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "12413:343:115";
                    }, {
                        readonly expression: {
                            readonly id: 15607;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 15601;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "12874:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15603;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "12887:13:115";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10007;
                                readonly src: "12874:26:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 15604;
                                        readonly name: "_shareReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15567;
                                        readonly src: "12904:19:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 15605;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "12924:9:115";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21707;
                                    readonly src: "12904:29:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 15606;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "12904:31:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "12874:61:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 15608;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "12874:61:115";
                    }, {
                        readonly expression: {
                            readonly id: 15615;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 15609;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "12945:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15611;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "12958:12:115";
                                readonly memberName: "bondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10010;
                                readonly src: "12945:25:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 15612;
                                        readonly name: "_bondReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15569;
                                        readonly src: "12974:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 15613;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "12993:9:115";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21707;
                                    readonly src: "12974:28:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 15614;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "12974:30:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "12945:59:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 15616;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "12945:59:115";
                    }, {
                        readonly expression: {
                            readonly id: 15621;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 15617;
                                readonly name: "longsOutstanding_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15577;
                                readonly src: "13014:17:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 15618;
                                        readonly name: "_bondReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15569;
                                        readonly src: "13035:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 15619;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13054:9:115";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21707;
                                    readonly src: "13035:28:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 15620;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "13035:30:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13014:51:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 15622;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13014:51:115";
                    }, {
                        readonly expression: {
                            readonly id: 15627;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 15623;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "13075:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15625;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13088:16:115";
                                readonly memberName: "longsOutstanding";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10016;
                                readonly src: "13075:29:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 15626;
                                readonly name: "longsOutstanding_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15577;
                                readonly src: "13107:17:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13075:49:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 15628;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13075:49:115";
                    }, {
                        readonly assignments: readonly [15630];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15630;
                            readonly mutability: "mutable";
                            readonly name: "nonNettedLongs";
                            readonly nameLocation: "13286:14:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15670;
                            readonly src: "13279:21:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 15629;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "13279:6:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15634;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 15632;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15573;
                                readonly src: "13319:13:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15631;
                                readonly name: "_nonNettedLongs";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12940;
                                readonly src: "13303:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_int256_$";
                                    readonly typeString: "function (uint256) view returns (int256)";
                                };
                            };
                            readonly id: 15633;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13303:30:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "13279:54:115";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 15636;
                                readonly name: "nonNettedLongs";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15630;
                                readonly src: "13376:14:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 15641;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 15637;
                                    readonly name: "nonNettedLongs";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "13404:14:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15638;
                                            readonly name: "_bondReservesDelta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15569;
                                            readonly src: "13421:18:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 15639;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "13440:8:115";
                                        readonly memberName: "toInt256";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 21814;
                                        readonly src: "13421:27:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256) pure returns (int256)";
                                        };
                                    };
                                    readonly id: 15640;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13421:29:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "13404:46:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly id: 15635;
                                readonly name: "_updateLongExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13181;
                                readonly src: "13343:19:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$";
                                    readonly typeString: "function (int256,int256)";
                                };
                            };
                            readonly id: 15642;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13343:117:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 15643;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13343:117:115";
                    }, {
                        readonly condition: {
                            readonly id: 15647;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "13558:29:115";
                            readonly subExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 15645;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15571;
                                    readonly src: "13570:16:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 15644;
                                    readonly name: "_isSolvent";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13128;
                                    readonly src: "13559:10:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (uint256) view returns (bool)";
                                    };
                                };
                                readonly id: 15646;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "13559:28:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15654;
                        readonly nodeType: "IfStatement";
                        readonly src: "13554:100:115";
                        readonly trueBody: {
                            readonly id: 15653;
                            readonly nodeType: "Block";
                            readonly src: "13589:65:115";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15648;
                                            readonly name: "Errors";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18030;
                                            readonly src: "13603:6:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_Errors_$18030_$";
                                                readonly typeString: "type(library Errors)";
                                            };
                                        };
                                        readonly id: 15650;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "13610:31:115";
                                        readonly memberName: "throwInsufficientLiquidityError";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18029;
                                        readonly src: "13603:38:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15651;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13603:40:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15652;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "13603:40:115";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [15656];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15656;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "13892:7:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15670;
                            readonly src: "13887:12:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 15655;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "13887:4:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15660;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 15658;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15571;
                                readonly src: "13928:16:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15657;
                                readonly name: "_distributeExcessIdleSafe";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [14917, 15020];
                                readonly referencedDeclaration: 14917;
                                readonly src: "13902:25:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (uint256) returns (bool)";
                                };
                            };
                            readonly id: 15659;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13902:43:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "13887:58:115";
                    }, {
                        readonly condition: {
                            readonly id: 15662;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "13959:8:115";
                            readonly subExpression: {
                                readonly id: 15661;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15656;
                                readonly src: "13960:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15669;
                        readonly nodeType: "IfStatement";
                        readonly src: "13955:86:115";
                        readonly trueBody: {
                            readonly id: 15668;
                            readonly nodeType: "Block";
                            readonly src: "13969:72:115";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15663;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "13990:11:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 15665;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14002:26:115";
                                        readonly memberName: "DistributeExcessIdleFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10293;
                                        readonly src: "13990:38:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15666;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13990:40:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15667;
                                readonly nodeType: "RevertStatement";
                                readonly src: "13983:47:115";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 15565;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11688:403:115";
                    readonly text: "@dev Applies an open long to the state. This includes updating the\n      reserves and maintaining the reserve invariants.\n @param _shareReservesDelta The amount of shares paid to the curve.\n @param _bondReservesDelta The amount of bonds sold by the curve.\n @param _vaultSharePrice The current vault share price.\n @param _maturityTime The maturity time of the long.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_applyOpenLong";
                readonly nameLocation: "12105:14:115";
                readonly parameters: {
                    readonly id: 15574;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15567;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "12137:19:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15671;
                        readonly src: "12129:27:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15566;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12129:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15569;
                        readonly mutability: "mutable";
                        readonly name: "_bondReservesDelta";
                        readonly nameLocation: "12174:18:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15671;
                        readonly src: "12166:26:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15568;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12166:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15571;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "12210:16:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15671;
                        readonly src: "12202:24:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15570;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12202:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15573;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12244:13:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15671;
                        readonly src: "12236:21:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15572;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12236:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12119:144:115";
                };
                readonly returnParameters: {
                    readonly id: 15575;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12273:0:115";
                };
                readonly scope: 16054;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 15802;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14516:2940:115";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 15801;
                    readonly nodeType: "Block";
                    readonly src: "14727:2729:115";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [15686];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15686;
                            readonly mutability: "mutable";
                            readonly name: "shareReserves";
                            readonly nameLocation: "14884:13:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15801;
                            readonly src: "14876:21:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15685;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14876:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15689;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 15687;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17570;
                                readonly src: "14900:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly id: 15688;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "14913:13:115";
                            readonly memberName: "shareReserves";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10007;
                            readonly src: "14900:26:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "14876:50:115";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 15698;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 15692;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 15690;
                                    readonly name: "shareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15686;
                                    readonly src: "14953:13:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 15691;
                                    readonly name: "_shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15678;
                                    readonly src: "14969:19:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "14953:35:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 15697;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 15695;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 15693;
                                        readonly name: "shareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15686;
                                        readonly src: "15004:13:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 15694;
                                        readonly name: "_shareReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15678;
                                        readonly src: "15020:19:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "15004:35:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 15696;
                                    readonly name: "_minimumShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17563;
                                    readonly src: "15042:21:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "15004:59:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "14953:110:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15705;
                        readonly nodeType: "IfStatement";
                        readonly src: "14936:203:115";
                        readonly trueBody: {
                            readonly id: 15704;
                            readonly nodeType: "Block";
                            readonly src: "15074:65:115";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15699;
                                            readonly name: "Errors";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18030;
                                            readonly src: "15088:6:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_Errors_$18030_$";
                                                readonly typeString: "type(library Errors)";
                                            };
                                        };
                                        readonly id: 15701;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15095:31:115";
                                        readonly memberName: "throwInsufficientLiquidityError";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18029;
                                        readonly src: "15088:38:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15702;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15088:40:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15703;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "15088:40:115";
                            }];
                        };
                    }, {
                        readonly id: 15710;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "15148:71:115";
                        readonly statements: readonly [{
                            readonly expression: {
                                readonly id: 15708;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 15706;
                                    readonly name: "shareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15686;
                                    readonly src: "15172:13:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "-=";
                                readonly rightHandSide: {
                                    readonly id: 15707;
                                    readonly name: "_shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15678;
                                    readonly src: "15189:19:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "15172:36:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 15709;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "15172:36:115";
                        }];
                    }, {
                        readonly assignments: readonly [15712];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15712;
                            readonly mutability: "mutable";
                            readonly name: "shareAdjustment";
                            readonly nameLocation: "15683:15:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15801;
                            readonly src: "15676:22:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 15711;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "15676:6:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15715;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 15713;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17570;
                                readonly src: "15701:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly id: 15714;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "15714:15:115";
                            readonly memberName: "shareAdjustment";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10019;
                            readonly src: "15701:28:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "15676:53:115";
                    }, {
                        readonly expression: {
                            readonly id: 15718;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 15716;
                                readonly name: "shareAdjustment";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15712;
                                readonly src: "15739:15:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 15717;
                                readonly name: "_shareAdjustmentDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15680;
                                readonly src: "15758:21:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "15739:40:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 15719;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15739:40:115";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 15732;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 15724;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15720;
                                            readonly name: "_shareReservesDelta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15678;
                                            readonly src: "15806:19:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 15721;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15826:8:115";
                                        readonly memberName: "toInt256";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 21814;
                                        readonly src: "15806:28:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256) pure returns (int256)";
                                        };
                                    };
                                    readonly id: 15722;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15806:30:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 15723;
                                    readonly name: "_shareAdjustmentDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15680;
                                    readonly src: "15839:21:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "15806:54:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 15731;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 15727;
                                        readonly name: "shareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15686;
                                        readonly src: "15940:13:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15728;
                                        readonly name: "shareAdjustment";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15712;
                                        readonly src: "15971:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        }];
                                        readonly expression: {
                                            readonly id: 15725;
                                            readonly name: "HyperdriveMath";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19567;
                                            readonly src: "15876:14:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                                readonly typeString: "type(library HyperdriveMath)";
                                            };
                                        };
                                        readonly id: 15726;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15891:31:115";
                                        readonly memberName: "calculateEffectiveShareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 19010;
                                        readonly src: "15876:46:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256,int256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 15729;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15876:124:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 15730;
                                    readonly name: "_minimumShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17563;
                                    readonly src: "16015:21:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "15876:160:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "15806:230:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15739;
                        readonly nodeType: "IfStatement";
                        readonly src: "15789:323:115";
                        readonly trueBody: {
                            readonly id: 15738;
                            readonly nodeType: "Block";
                            readonly src: "16047:65:115";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15733;
                                            readonly name: "Errors";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18030;
                                            readonly src: "16061:6:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_Errors_$18030_$";
                                                readonly typeString: "type(library Errors)";
                                            };
                                        };
                                        readonly id: 15735;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "16068:31:115";
                                        readonly memberName: "throwInsufficientLiquidityError";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18029;
                                        readonly src: "16061:38:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15736;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "16061:40:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15737;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "16061:40:115";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [15741];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15741;
                            readonly mutability: "mutable";
                            readonly name: "longsOutstanding";
                            readonly nameLocation: "16180:16:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15801;
                            readonly src: "16172:24:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15740;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "16172:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15744;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 15742;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17570;
                                readonly src: "16199:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly id: 15743;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "16212:16:115";
                            readonly memberName: "longsOutstanding";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10016;
                            readonly src: "16199:29:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "16172:56:115";
                    }, {
                        readonly expression: {
                            readonly id: 15763;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 15745;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "16238:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15747;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16251:23:115";
                                readonly memberName: "longAverageMaturityTime";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10025;
                                readonly src: "16238:36:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 15754;
                                            readonly name: "longsOutstanding";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15741;
                                            readonly src: "16397:16:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 15757;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 15755;
                                                readonly name: "_maturityTime";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 15682;
                                                readonly src: "16431:13:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "*";
                                            readonly rightExpression: {
                                                readonly id: 15756;
                                                readonly name: "ONE";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18039;
                                                readonly src: "16447:3:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "16431:19:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 15758;
                                            readonly name: "_bondAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15674;
                                            readonly src: "16501:11:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly hexValue: "66616c7365";
                                            readonly id: 15759;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "bool";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "16530:5:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                            readonly value: "false";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly expression: {
                                                        readonly id: 15750;
                                                        readonly name: "_marketState";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 17570;
                                                        readonly src: "16298:12:115";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                                        };
                                                    };
                                                    readonly id: 15751;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "16311:23:115";
                                                    readonly memberName: "longAverageMaturityTime";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 10025;
                                                    readonly src: "16298:36:115";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint128";
                                                        readonly typeString: "uint128";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_uint128";
                                                        readonly typeString: "uint128";
                                                    }];
                                                    readonly id: 15749;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "16277:7:115";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 15748;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "16277:7:115";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 15752;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "16277:67:115";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 15753;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "16358:21:115";
                                            readonly memberName: "updateWeightedAverage";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18732;
                                            readonly src: "16277:102:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 15760;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "16277:272:115";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 15761;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "16563:9:115";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21707;
                                    readonly src: "16277:295:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 15762;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "16277:297:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "16238:336:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 15764;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16238:336:115";
                    }, {
                        readonly expression: {
                            readonly id: 15767;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 15765;
                                readonly name: "longsOutstanding";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15741;
                                readonly src: "16636:16:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 15766;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15674;
                                readonly src: "16656:11:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16636:31:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 15768;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16636:31:115";
                    }, {
                        readonly expression: {
                            readonly id: 15775;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 15769;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "16677:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15771;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16690:16:115";
                                readonly memberName: "longsOutstanding";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10016;
                                readonly src: "16677:29:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 15772;
                                        readonly name: "longsOutstanding";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15741;
                                        readonly src: "16709:16:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 15773;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "16726:9:115";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21707;
                                    readonly src: "16709:26:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 15774;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "16709:28:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "16677:60:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 15776;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16677:60:115";
                    }, {
                        readonly expression: {
                            readonly id: 15783;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 15777;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "17259:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15779;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "17272:13:115";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10007;
                                readonly src: "17259:26:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 15780;
                                        readonly name: "shareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15686;
                                        readonly src: "17288:13:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 15781;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "17302:9:115";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21707;
                                    readonly src: "17288:23:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 15782;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "17288:25:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "17259:54:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 15784;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17259:54:115";
                    }, {
                        readonly expression: {
                            readonly id: 15791;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 15785;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "17323:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15787;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "17336:15:115";
                                readonly memberName: "shareAdjustment";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10019;
                                readonly src: "17323:28:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 15788;
                                        readonly name: "shareAdjustment";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15712;
                                        readonly src: "17354:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly id: 15789;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "17370:8:115";
                                    readonly memberName: "toInt128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21781;
                                    readonly src: "17354:24:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$";
                                        readonly typeString: "function (int256) pure returns (int128)";
                                    };
                                };
                                readonly id: 15790;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "17354:26:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly src: "17323:57:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly id: 15792;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17323:57:115";
                    }, {
                        readonly expression: {
                            readonly id: 15799;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 15793;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "17390:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15795;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "17403:12:115";
                                readonly memberName: "bondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10010;
                                readonly src: "17390:25:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 15796;
                                        readonly name: "_bondReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15676;
                                        readonly src: "17419:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 15797;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "17438:9:115";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21707;
                                    readonly src: "17419:28:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 15798;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "17419:30:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "17390:59:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 15800;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17390:59:115";
                    }];
                };
                readonly documentation: {
                    readonly id: 15672;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14053:458:115";
                    readonly text: "@dev Applies the trading deltas from a closed long to the reserves and\n      the withdrawal pool.\n @param _bondAmount The amount of longs that were closed.\n @param _bondReservesDelta The bonds to add to the reserves.\n @param _shareReservesDelta The shares to remove from the reserves.\n @param _shareAdjustmentDelta The amount to decrease the share adjustment.\n @param _maturityTime The maturity time of the long.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_applyCloseLong";
                readonly nameLocation: "14525:15:115";
                readonly parameters: {
                    readonly id: 15683;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15674;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "14558:11:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15802;
                        readonly src: "14550:19:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15673;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14550:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15676;
                        readonly mutability: "mutable";
                        readonly name: "_bondReservesDelta";
                        readonly nameLocation: "14587:18:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15802;
                        readonly src: "14579:26:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15675;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14579:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15678;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "14623:19:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15802;
                        readonly src: "14615:27:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15677;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14615:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15680;
                        readonly mutability: "mutable";
                        readonly name: "_shareAdjustmentDelta";
                        readonly nameLocation: "14659:21:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15802;
                        readonly src: "14652:28:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 15679;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14652:6:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15682;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "14698:13:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15802;
                        readonly src: "14690:21:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15681;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14690:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14540:177:115";
                };
                readonly returnParameters: {
                    readonly id: 15684;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14727:0:115";
                };
                readonly scope: 16054;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 15915;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17948:3698:115";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 15914;
                    readonly nodeType: "Block";
                    readonly src: "18226:3420:115";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 15828;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 15816;
                                readonly name: "bondReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15812;
                                readonly src: "18387:17:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 15819;
                                        readonly name: "_effectiveShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12907;
                                        readonly src: "18453:23:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                            readonly typeString: "function () view returns (uint256)";
                                        };
                                    };
                                    readonly id: 15820;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "18453:25:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 15821;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17570;
                                        readonly src: "18492:12:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 15822;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18505:12:115";
                                    readonly memberName: "bondReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10010;
                                    readonly src: "18492:25:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly id: 15823;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15805;
                                    readonly src: "18531:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15824;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17545;
                                    readonly src: "18569:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15825;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15807;
                                    readonly src: "18595:16:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15826;
                                    readonly name: "_initialVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17560;
                                    readonly src: "18625:23:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 15817;
                                        readonly name: "HyperdriveMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19567;
                                        readonly src: "18407:14:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                            readonly typeString: "type(library HyperdriveMath)";
                                        };
                                    };
                                    readonly id: 15818;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18422:17:115";
                                    readonly memberName: "calculateOpenLong";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 19305;
                                    readonly src: "18407:32:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15827;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "18407:251:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "18387:271:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 15829;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "18387:271:115";
                    }, {
                        readonly assignments: readonly [15831];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15831;
                            readonly mutability: "mutable";
                            readonly name: "spotPrice";
                            readonly nameLocation: "18799:9:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15914;
                            readonly src: "18791:17:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15830;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "18791:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15841;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 15834;
                                    readonly name: "_effectiveShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 12907;
                                    readonly src: "18858:23:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 15835;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "18858:25:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 15836;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "18897:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 15837;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "18910:12:115";
                                readonly memberName: "bondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10010;
                                readonly src: "18897:25:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly id: 15838;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17560;
                                readonly src: "18936:23:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15839;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17545;
                                readonly src: "18973:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 15832;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "18811:14:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 15833;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "18826:18:115";
                                readonly memberName: "calculateSpotPrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18940;
                                readonly src: "18811:33:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 15840;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "18811:184:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "18791:204:115";
                    }, {
                        readonly condition: {
                            readonly arguments: readonly [{
                                readonly id: 15843;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15805;
                                readonly src: "19059:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15844;
                                readonly name: "bondReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15812;
                                readonly src: "19089:17:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 15847;
                                    readonly name: "spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15831;
                                    readonly src: "19190:9:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15848;
                                    readonly name: "_curveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17548;
                                    readonly src: "19221:9:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15849;
                                    readonly name: "_flatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17551;
                                    readonly src: "19252:8:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 15845;
                                        readonly name: "HyperdriveMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19567;
                                        readonly src: "19124:14:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                            readonly typeString: "type(library HyperdriveMath)";
                                        };
                                    };
                                    readonly id: 15846;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "19139:29:115";
                                    readonly memberName: "calculateOpenLongMaxSpotPrice";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 19254;
                                    readonly src: "19124:44:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15850;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "19124:154:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15842;
                                readonly name: "_isNegativeInterest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13102;
                                readonly src: "19022:19:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (uint256,uint256,uint256) view returns (bool)";
                                };
                            };
                            readonly id: 15851;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "19022:270:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15858;
                        readonly nodeType: "IfStatement";
                        readonly src: "19005:363:115";
                        readonly trueBody: {
                            readonly id: 15857;
                            readonly nodeType: "Block";
                            readonly src: "19303:65:115";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15852;
                                            readonly name: "Errors";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18030;
                                            readonly src: "19317:6:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_Errors_$18030_$";
                                                readonly typeString: "type(library Errors)";
                                            };
                                        };
                                        readonly id: 15854;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "19324:31:115";
                                        readonly memberName: "throwInsufficientLiquidityError";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18029;
                                        readonly src: "19317:38:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15855;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "19317:40:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15856;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "19317:40:115";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [15860, 15862];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15860;
                            readonly mutability: "mutable";
                            readonly name: "curveFee";
                            readonly nameLocation: "19552:8:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15914;
                            readonly src: "19544:16:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15859;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "19544:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 15862;
                            readonly mutability: "mutable";
                            readonly name: "governanceCurveFee";
                            readonly nameLocation: "19591:18:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 15914;
                            readonly src: "19583:26:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15861;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "19583:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15868;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 15864;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15805;
                                readonly src: "19674:12:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15865;
                                readonly name: "spotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15831;
                                readonly src: "19704:9:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15866;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15807;
                                readonly src: "19731:16:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 15863;
                                readonly name: "_calculateFeesGivenShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13518;
                                readonly src: "19631:25:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) view returns (uint256,uint256)";
                                };
                            };
                            readonly id: 15867;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "19631:130:115";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "19530:231:115";
                    }, {
                        readonly expression: {
                            readonly id: 15871;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 15869;
                                readonly name: "bondReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15812;
                                readonly src: "19957:17:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 15870;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15860;
                                readonly src: "19978:8:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "19957:29:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 15872;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "19957:29:115";
                    }, {
                        readonly expression: {
                            readonly id: 15879;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 15873;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15814;
                                readonly src: "20510:18:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 15876;
                                    readonly name: "spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15831;
                                    readonly src: "20574:9:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15877;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15807;
                                    readonly src: "20597:16:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 15874;
                                        readonly name: "governanceCurveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15862;
                                        readonly src: "20531:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 15875;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "20550:10:115";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18067;
                                    readonly src: "20531:29:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15878;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "20531:92:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20510:113:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 15880;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20510:113:115";
                    }, {
                        readonly expression: {
                            readonly id: 15885;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 15881;
                                readonly name: "shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15810;
                                readonly src: "20861:18:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 15884;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 15882;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15805;
                                    readonly src: "20882:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 15883;
                                    readonly name: "totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15814;
                                    readonly src: "20897:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "20882:33:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20861:54:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 15886;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20861:54:115";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 15901;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 15892;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [];
                                            readonly id: 15889;
                                            readonly name: "_effectiveShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12907;
                                            readonly src: "21287:23:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                                readonly typeString: "function () view returns (uint256)";
                                            };
                                        };
                                        readonly id: 15890;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "21287:25:115";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 15891;
                                        readonly name: "shareReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15810;
                                        readonly src: "21315:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "21287:46:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 15896;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 15893;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17570;
                                            readonly src: "21351:12:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 15894;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "21364:12:115";
                                        readonly memberName: "bondReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10010;
                                        readonly src: "21351:25:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 15895;
                                        readonly name: "bondReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15812;
                                        readonly src: "21379:17:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "21351:45:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15897;
                                    readonly name: "_initialVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17560;
                                    readonly src: "21414:23:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15898;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17545;
                                    readonly src: "21455:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 15887;
                                        readonly name: "HyperdriveMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19567;
                                        readonly src: "21236:14:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                            readonly typeString: "type(library HyperdriveMath)";
                                        };
                                    };
                                    readonly id: 15888;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "21251:18:115";
                                    readonly memberName: "calculateSpotPrice";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18940;
                                    readonly src: "21236:33:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15899;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "21236:245:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 15900;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18039;
                                readonly src: "21484:3:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "21236:251:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 15908;
                        readonly nodeType: "IfStatement";
                        readonly src: "21219:344:115";
                        readonly trueBody: {
                            readonly id: 15907;
                            readonly nodeType: "Block";
                            readonly src: "21498:65:115";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 15902;
                                            readonly name: "Errors";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18030;
                                            readonly src: "21512:6:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_Errors_$18030_$";
                                                readonly typeString: "type(library Errors)";
                                            };
                                        };
                                        readonly id: 15904;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "21519:31:115";
                                        readonly memberName: "throwInsufficientLiquidityError";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18029;
                                        readonly src: "21512:38:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 15905;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "21512:40:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 15906;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "21512:40:115";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 15909;
                                readonly name: "shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15810;
                                readonly src: "21581:18:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15910;
                                readonly name: "bondReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15812;
                                readonly src: "21601:17:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 15911;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15814;
                                readonly src: "21620:18:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 15912;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "21580:59:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 15815;
                        readonly id: 15913;
                        readonly nodeType: "Return";
                        readonly src: "21573:66:115";
                    }];
                };
                readonly documentation: {
                    readonly id: 15803;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17462:481:115";
                    readonly text: "@dev Calculate the pool reserve and trader deltas that result from\n      opening a long. This calculation includes trading fees.\n @param _shareAmount The amount of shares being paid to open the long.\n @param _vaultSharePrice The current vault share price.\n @return shareReservesDelta The change in the share reserves.\n @return bondReservesDelta The change in the bond reserves.\n @return totalGovernanceFee The governance fee in shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateOpenLong";
                readonly nameLocation: "17957:18:115";
                readonly parameters: {
                    readonly id: 15808;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15805;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "17993:12:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15915;
                        readonly src: "17985:20:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15804;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17985:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15807;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "18023:16:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15915;
                        readonly src: "18015:24:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15806;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18015:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17975:70:115";
                };
                readonly returnParameters: {
                    readonly id: 15815;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15810;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "18114:18:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15915;
                        readonly src: "18106:26:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15809;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18106:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15812;
                        readonly mutability: "mutable";
                        readonly name: "bondReservesDelta";
                        readonly nameLocation: "18154:17:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15915;
                        readonly src: "18146:25:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15811;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18146:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15814;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "18193:18:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 15915;
                        readonly src: "18185:26:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15813;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18185:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18092:129:115";
                };
                readonly scope: 16054;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 16053;
                readonly nodeType: "FunctionDefinition";
                readonly src: "22365:5095:115";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 16052;
                    readonly nodeType: "Block";
                    readonly src: "22750:4710:115";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [15936];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 15936;
                            readonly mutability: "mutable";
                            readonly name: "shareCurveDelta";
                            readonly nameLocation: "22956:15:115";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 16052;
                            readonly src: "22948:23:115";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 15935;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "22948:7:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 15937;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "22948:23:115";
                    }, {
                        readonly id: 16019;
                        readonly nodeType: "Block";
                        readonly src: "22981:3079:115";
                        readonly statements: readonly [{
                            readonly assignments: readonly [15939];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 15939;
                                readonly mutability: "mutable";
                                readonly name: "timeRemaining";
                                readonly nameLocation: "23424:13:115";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 16019;
                                readonly src: "23416:21:115";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 15938;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "23416:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 15943;
                            readonly initialValue: {
                                readonly arguments: readonly [{
                                    readonly id: 15941;
                                    readonly name: "_maturityTime";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15922;
                                    readonly src: "23464:13:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 15940;
                                    readonly name: "_calculateTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 12838;
                                    readonly src: "23440:23:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256) view returns (uint256)";
                                    };
                                };
                                readonly id: 15942;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "23440:38:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "23416:62:115";
                        }, {
                            readonly expression: {
                                readonly id: 15960;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly components: readonly [{
                                        readonly id: 15944;
                                        readonly name: "shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15936;
                                        readonly src: "23493:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15945;
                                        readonly name: "bondReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15925;
                                        readonly src: "23510:17:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15946;
                                        readonly name: "shareProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15927;
                                        readonly src: "23529:13:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 15947;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "23492:51:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256,uint256)";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [];
                                            readonly id: 15950;
                                            readonly name: "_effectiveShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 12907;
                                            readonly src: "23618:23:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                                readonly typeString: "function () view returns (uint256)";
                                            };
                                        };
                                        readonly id: 15951;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "23618:25:115";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 15952;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17570;
                                            readonly src: "23665:12:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 15953;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "23678:12:115";
                                        readonly memberName: "bondReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10010;
                                        readonly src: "23665:25:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    }, {
                                        readonly id: 15954;
                                        readonly name: "_bondAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15918;
                                        readonly src: "23712:11:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15955;
                                        readonly name: "timeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15939;
                                        readonly src: "23745:13:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15956;
                                        readonly name: "_timeStretch";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17545;
                                        readonly src: "23780:12:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15957;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15920;
                                        readonly src: "23814:16:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15958;
                                        readonly name: "_initialVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17560;
                                        readonly src: "23852:23:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 15948;
                                            readonly name: "HyperdriveMath";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19567;
                                            readonly src: "23546:14:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                                readonly typeString: "type(library HyperdriveMath)";
                                            };
                                        };
                                        readonly id: 15949;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "23578:18:115";
                                        readonly memberName: "calculateCloseLong";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 19370;
                                        readonly src: "23546:50:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)";
                                        };
                                    };
                                    readonly id: 15959;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "23546:347:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256,uint256)";
                                    };
                                };
                                readonly src: "23492:401:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$__$";
                                    readonly typeString: "tuple()";
                                };
                            };
                            readonly id: 15961;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "23492:401:115";
                        }, {
                            readonly assignments: readonly [15963];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 15963;
                                readonly mutability: "mutable";
                                readonly name: "curveFee";
                                readonly nameLocation: "24142:8:115";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 16019;
                                readonly src: "24134:16:115";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 15962;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "24134:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 15964;
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "24134:16:115";
                        }, {
                            readonly assignments: readonly [15966];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 15966;
                                readonly mutability: "mutable";
                                readonly name: "governanceCurveFee";
                                readonly nameLocation: "24172:18:115";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 16019;
                                readonly src: "24164:26:115";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 15965;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "24164:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 15967;
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "24164:26:115";
                        }, {
                            readonly assignments: readonly [15969];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 15969;
                                readonly mutability: "mutable";
                                readonly name: "flatFee";
                                readonly nameLocation: "24212:7:115";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 16019;
                                readonly src: "24204:15:115";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 15968;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "24204:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 15970;
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "24204:15:115";
                        }, {
                            readonly assignments: readonly [15972];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 15972;
                                readonly mutability: "mutable";
                                readonly name: "spotPrice";
                                readonly nameLocation: "24241:9:115";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 16019;
                                readonly src: "24233:17:115";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 15971;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "24233:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 15982;
                            readonly initialValue: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 15975;
                                        readonly name: "_effectiveShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 12907;
                                        readonly src: "24304:23:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                            readonly typeString: "function () view returns (uint256)";
                                        };
                                    };
                                    readonly id: 15976;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "24304:25:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 15977;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17570;
                                        readonly src: "24347:12:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 15978;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "24360:12:115";
                                    readonly memberName: "bondReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10010;
                                    readonly src: "24347:25:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly id: 15979;
                                    readonly name: "_initialVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17560;
                                    readonly src: "24390:23:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 15980;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17545;
                                    readonly src: "24431:12:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 15973;
                                        readonly name: "HyperdriveMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19567;
                                        readonly src: "24253:14:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                            readonly typeString: "type(library HyperdriveMath)";
                                        };
                                    };
                                    readonly id: 15974;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "24268:18:115";
                                    readonly memberName: "calculateSpotPrice";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18940;
                                    readonly src: "24253:33:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 15981;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "24253:204:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "24233:224:115";
                        }, {
                            readonly assignments: readonly [15984];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 15984;
                                readonly mutability: "mutable";
                                readonly name: "vaultSharePrice";
                                readonly nameLocation: "24479:15:115";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 16019;
                                readonly src: "24471:23:115";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 15983;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "24471:7:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 15986;
                            readonly initialValue: {
                                readonly id: 15985;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15920;
                                readonly src: "24497:16:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "24471:42:115";
                        }, {
                            readonly expression: {
                                readonly id: 15998;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly components: readonly [{
                                        readonly id: 15987;
                                        readonly name: "curveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15963;
                                        readonly src: "24569:8:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15988;
                                        readonly name: "flatFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15969;
                                        readonly src: "24605:7:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15989;
                                        readonly name: "governanceCurveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15966;
                                        readonly src: "24640:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15990;
                                        readonly name: "totalGovernanceFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15933;
                                        readonly src: "24686:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 15991;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "24551:177:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly arguments: readonly [{
                                        readonly id: 15993;
                                        readonly name: "_bondAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15918;
                                        readonly src: "24773:11:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15994;
                                        readonly name: "timeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15939;
                                        readonly src: "24802:13:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15995;
                                        readonly name: "spotPrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15972;
                                        readonly src: "24833:9:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 15996;
                                        readonly name: "vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15984;
                                        readonly src: "24860:15:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 15992;
                                        readonly name: "_calculateFeesGivenBonds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13588;
                                        readonly src: "24731:24:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)";
                                        };
                                    };
                                    readonly id: 15997;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "24731:158:115";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                    };
                                };
                                readonly src: "24551:338:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$__$";
                                    readonly typeString: "tuple()";
                                };
                            };
                            readonly id: 15999;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "24551:338:115";
                        }, {
                            readonly expression: {
                                readonly id: 16005;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 16000;
                                    readonly name: "shareCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15936;
                                    readonly src: "25352:15:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "-=";
                                readonly rightHandSide: {
                                    readonly components: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 16003;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 16001;
                                            readonly name: "curveFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15963;
                                            readonly src: "25372:8:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 16002;
                                            readonly name: "governanceCurveFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15966;
                                            readonly src: "25383:18:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "25372:29:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 16004;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "25371:31:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "25352:50:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 16006;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "25352:50:115";
                        }, {
                            readonly expression: {
                                readonly id: 16011;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 16007;
                                    readonly name: "shareProceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15927;
                                    readonly src: "25596:13:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "-=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 16010;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 16008;
                                        readonly name: "curveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15963;
                                        readonly src: "25613:8:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 16009;
                                        readonly name: "flatFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15969;
                                        readonly src: "25624:7:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "25613:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "25596:35:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 16012;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "25596:35:115";
                        }, {
                            readonly expression: {
                                readonly id: 16017;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 16013;
                                    readonly name: "shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15929;
                                    readonly src: "25994:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 16016;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 16014;
                                        readonly name: "shareProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15927;
                                        readonly src: "26015:13:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 16015;
                                        readonly name: "totalGovernanceFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15933;
                                        readonly src: "26031:18:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "26015:34:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "25994:55:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 16018;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "25994:55:115";
                        }];
                    }, {
                        readonly expression: {
                            readonly id: 16050;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 16020;
                                    readonly name: "shareProceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15927;
                                    readonly src: "26354:13:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 16021;
                                    readonly name: "shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15929;
                                    readonly src: "26381:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 16022;
                                    readonly name: "shareCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15936;
                                    readonly src: "26413:15:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 16023;
                                    readonly name: "shareAdjustmentDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15931;
                                    readonly src: "26442:20:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly id: 16024;
                                    readonly name: "totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15933;
                                    readonly src: "26476:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 16025;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "26340:164:115";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 16028;
                                    readonly name: "shareProceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15927;
                                    readonly src: "26568:13:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 16029;
                                    readonly name: "shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15929;
                                    readonly src: "26595:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 16030;
                                    readonly name: "shareCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15936;
                                    readonly src: "26627:15:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 16031;
                                    readonly name: "totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15933;
                                    readonly src: "26656:18:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly baseExpression: {
                                            readonly id: 16032;
                                            readonly name: "_checkpoints";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17580;
                                            readonly src: "27167:12:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10045_storage_$";
                                                readonly typeString: "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)";
                                            };
                                        };
                                        readonly id: 16036;
                                        readonly indexExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 16035;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 16033;
                                                readonly name: "_maturityTime";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 15922;
                                                readonly src: "27180:13:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 16034;
                                                readonly name: "_positionDuration";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17542;
                                                readonly src: "27196:17:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "27180:33:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "27167:47:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Checkpoint_$10045_storage";
                                            readonly typeString: "struct IHyperdrive.Checkpoint storage ref";
                                        };
                                    };
                                    readonly id: 16037;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "27215:15:115";
                                    readonly memberName: "vaultSharePrice";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10044;
                                    readonly src: "27167:63:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 16041;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 16038;
                                                readonly name: "block";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -4;
                                                readonly src: "27270:5:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_block";
                                                    readonly typeString: "block";
                                                };
                                            };
                                            readonly id: 16039;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "27276:9:115";
                                            readonly memberName: "timestamp";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "27270:15:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "<";
                                        readonly rightExpression: {
                                            readonly id: 16040;
                                            readonly name: "_maturityTime";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 15922;
                                            readonly src: "27288:13:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "27270:31:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly falseExpression: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly id: 16043;
                                                readonly name: "_checkpoints";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17580;
                                                readonly src: "27355:12:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10045_storage_$";
                                                    readonly typeString: "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)";
                                                };
                                            };
                                            readonly id: 16045;
                                            readonly indexExpression: {
                                                readonly id: 16044;
                                                readonly name: "_maturityTime";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 15922;
                                                readonly src: "27368:13:115";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "27355:27:115";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Checkpoint_$10045_storage";
                                                readonly typeString: "struct IHyperdrive.Checkpoint storage ref";
                                            };
                                        };
                                        readonly id: 16046;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "27383:15:115";
                                        readonly memberName: "vaultSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10044;
                                        readonly src: "27355:43:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly id: 16047;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Conditional";
                                    readonly src: "27270:128:115";
                                    readonly trueExpression: {
                                        readonly id: 16042;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15920;
                                        readonly src: "27320:16:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly hexValue: "74727565";
                                    readonly id: 16048;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "bool";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "27439:4:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly value: "true";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    }];
                                    readonly expression: {
                                        readonly id: 16026;
                                        readonly name: "HyperdriveMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19567;
                                        readonly src: "26507:14:115";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                            readonly typeString: "type(library HyperdriveMath)";
                                        };
                                    };
                                    readonly id: 16027;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "26522:32:115";
                                    readonly memberName: "calculateNegativeInterestOnClose";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 19566;
                                    readonly src: "26507:47:115";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,bool) pure returns (uint256,uint256,uint256,int256,uint256)";
                                    };
                                };
                                readonly id: 16049;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "26507:946:115";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                                };
                            };
                            readonly src: "26340:1113:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 16051;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "26340:1113:115";
                    }];
                };
                readonly documentation: {
                    readonly id: 15916;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "21652:708:115";
                    readonly text: "@dev Calculate the pool reserve and trader deltas that result from\n      closing a long. This calculation includes trading fees.\n @param _bondAmount The amount of bonds being purchased to close the short.\n @param _vaultSharePrice The current vault share price.\n @param _maturityTime The maturity time of the short position.\n @return bondReservesDelta The bonds added to the reserves.\n @return shareProceeds The proceeds in shares of selling the bonds.\n @return shareReservesDelta The shares removed from the reserves.\n @return shareAdjustmentDelta The change in the share adjustment.\n @return totalGovernanceFee The governance fee in shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateCloseLong";
                readonly nameLocation: "22374:19:115";
                readonly parameters: {
                    readonly id: 15923;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15918;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "22411:11:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 16053;
                        readonly src: "22403:19:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15917;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22403:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15920;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "22440:16:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 16053;
                        readonly src: "22432:24:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15919;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22432:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15922;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "22474:13:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 16053;
                        readonly src: "22466:21:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15921;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22466:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "22393:100:115";
                };
                readonly returnParameters: {
                    readonly id: 15934;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 15925;
                        readonly mutability: "mutable";
                        readonly name: "bondReservesDelta";
                        readonly nameLocation: "22562:17:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 16053;
                        readonly src: "22554:25:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15924;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22554:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15927;
                        readonly mutability: "mutable";
                        readonly name: "shareProceeds";
                        readonly nameLocation: "22601:13:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 16053;
                        readonly src: "22593:21:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15926;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22593:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15929;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "22636:18:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 16053;
                        readonly src: "22628:26:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15928;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22628:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15931;
                        readonly mutability: "mutable";
                        readonly name: "shareAdjustmentDelta";
                        readonly nameLocation: "22675:20:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 16053;
                        readonly src: "22668:27:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 15930;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22668:6:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 15933;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "22717:18:115";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 16053;
                        readonly src: "22709:26:115";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 15932;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22709:7:115";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "22540:205:115";
                };
                readonly scope: 16054;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 15150;
                    readonly name: "IHyperdriveEvents";
                    readonly nameLocations: readonly ["955:17:115"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 10887;
                    readonly src: "955:17:115";
                };
                readonly id: 15151;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "955:17:115";
            }, {
                readonly baseName: {
                    readonly id: 15152;
                    readonly name: "HyperdriveLP";
                    readonly nameLocations: readonly ["974:12:115"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 15127;
                    readonly src: "974:12:115";
                };
                readonly id: 15153;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "974:12:115";
            }];
            readonly canonicalName: "HyperdriveLong";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 15149;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "593:326:115";
                readonly text: "@author DELV\n @title HyperdriveLong\n @notice Implements the long accounting for Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [16054, 15127, 16538, 13667, 17734, 71639, 10887, 11459];
            readonly name: "HyperdriveLong";
            readonly nameLocation: "937:14:115";
            readonly scope: 16055;
            readonly usedErrors: readonly [71584];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 115;
};
//# sourceMappingURL=HyperdriveLong.d.ts.map