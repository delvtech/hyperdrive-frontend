export declare const IHyperdriveEvents: {
    readonly abi: readonly [{
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":\"IHyperdriveEvents\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
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
                readonly "contracts/src/interfaces/IHyperdriveEvents.sol": "IHyperdriveEvents";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IHyperdriveEvents.sol";
        readonly id: 11206;
        readonly exportedSymbols: {
            readonly IHyperdriveEvents: readonly [11205];
            readonly IMultiTokenEvents: readonly [11777];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:3746:89";
        readonly nodes: readonly [{
            readonly id: 11006;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:89";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 11008;
            readonly nodeType: "ImportDirective";
            readonly src: "64:60:89";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IMultiTokenEvents.sol";
            readonly file: "./IMultiTokenEvents.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 11206;
            readonly sourceUnit: 11778;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 11007;
                    readonly name: "IMultiTokenEvents";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11777;
                    readonly src: "73:17:89";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11205;
            readonly nodeType: "ContractDefinition";
            readonly src: "126:3658:89";
            readonly nodes: readonly [{
                readonly id: 11025;
                readonly nodeType: "EventDefinition";
                readonly src: "246:187:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11011;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "181:60:89";
                    readonly text: "@notice Emitted when the Hyperdrive pool is initialized.";
                };
                readonly eventSelector: "dfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952";
                readonly name: "Initialize";
                readonly nameLocation: "252:10:89";
                readonly parameters: {
                    readonly id: 11024;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11013;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "provider";
                        readonly nameLocation: "288:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11025;
                        readonly src: "272:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11012;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "272:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11015;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "lpAmount";
                        readonly nameLocation: "314:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11025;
                        readonly src: "306:16:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11014;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "306:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11017;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "340:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11025;
                        readonly src: "332:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11016;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "332:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11019;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "vaultShareAmount";
                        readonly nameLocation: "368:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11025;
                        readonly src: "360:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11018;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "360:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11021;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "asBase";
                        readonly nameLocation: "399:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11025;
                        readonly src: "394:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11020;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "394:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11023;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "423:3:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11025;
                        readonly src: "415:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11022;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "415:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "262:170:89";
                };
            }, {
                readonly id: 11040;
                readonly nodeType: "EventDefinition";
                readonly src: "513:198:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11026;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "439:69:89";
                    readonly text: "@notice Emitted when an LP adds liquidity to the Hyperdrive pool.";
                };
                readonly eventSelector: "a59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a86";
                readonly name: "AddLiquidity";
                readonly nameLocation: "519:12:89";
                readonly parameters: {
                    readonly id: 11039;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11028;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "provider";
                        readonly nameLocation: "557:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11040;
                        readonly src: "541:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11027;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "541:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11030;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "lpAmount";
                        readonly nameLocation: "583:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11040;
                        readonly src: "575:16:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11029;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "575:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11032;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "609:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11040;
                        readonly src: "601:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11031;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "601:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11034;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "vaultShareAmount";
                        readonly nameLocation: "637:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11040;
                        readonly src: "629:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11033;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "629:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11036;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "asBase";
                        readonly nameLocation: "668:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11040;
                        readonly src: "663:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11035;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "663:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11038;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "lpSharePrice";
                        readonly nameLocation: "692:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11040;
                        readonly src: "684:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11037;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "684:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "531:179:89";
                };
            }, {
                readonly id: 11059;
                readonly nodeType: "EventDefinition";
                readonly src: "796:277:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11041;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "717:74:89";
                    readonly text: "@notice Emitted when an LP removes liquidity from the Hyperdrive pool.";
                };
                readonly eventSelector: "56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c9";
                readonly name: "RemoveLiquidity";
                readonly nameLocation: "802:15:89";
                readonly parameters: {
                    readonly id: 11058;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11043;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "provider";
                        readonly nameLocation: "843:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11059;
                        readonly src: "827:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11042;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "827:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11045;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "destination";
                        readonly nameLocation: "877:11:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11059;
                        readonly src: "861:27:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11044;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "861:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11047;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "lpAmount";
                        readonly nameLocation: "906:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11059;
                        readonly src: "898:16:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11046;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "898:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11049;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "932:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11059;
                        readonly src: "924:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11048;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "924:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11051;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "vaultShareAmount";
                        readonly nameLocation: "960:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11059;
                        readonly src: "952:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11050;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "952:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11053;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "asBase";
                        readonly nameLocation: "991:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11059;
                        readonly src: "986:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11052;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "986:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11055;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "withdrawalShareAmount";
                        readonly nameLocation: "1015:21:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11059;
                        readonly src: "1007:29:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11054;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1007:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11057;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "lpSharePrice";
                        readonly nameLocation: "1054:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11059;
                        readonly src: "1046:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11056;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1046:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "817:255:89";
                };
            }, {
                readonly id: 11074;
                readonly nodeType: "EventDefinition";
                readonly src: "1141:228:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11060;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1079:57:89";
                    readonly text: "@notice Emitted when an LP redeems withdrawal shares.";
                };
                readonly eventSelector: "4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf";
                readonly name: "RedeemWithdrawalShares";
                readonly nameLocation: "1147:22:89";
                readonly parameters: {
                    readonly id: 11073;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11062;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "provider";
                        readonly nameLocation: "1195:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11074;
                        readonly src: "1179:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11061;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1179:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11064;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "destination";
                        readonly nameLocation: "1229:11:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11074;
                        readonly src: "1213:27:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11063;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1213:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11066;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "withdrawalShareAmount";
                        readonly nameLocation: "1258:21:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11074;
                        readonly src: "1250:29:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11065;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1250:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11068;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "1297:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11074;
                        readonly src: "1289:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11067;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1289:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11070;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "vaultShareAmount";
                        readonly nameLocation: "1325:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11074;
                        readonly src: "1317:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11069;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1317:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11072;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "asBase";
                        readonly nameLocation: "1356:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11074;
                        readonly src: "1351:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11071;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1351:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1169:199:89";
                };
            }, {
                readonly id: 11091;
                readonly nodeType: "EventDefinition";
                readonly src: "1431:227:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11075;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1375:51:89";
                    readonly text: "@notice Emitted when a long position is opened.";
                };
                readonly eventSelector: "88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c";
                readonly name: "OpenLong";
                readonly nameLocation: "1437:8:89";
                readonly parameters: {
                    readonly id: 11090;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11077;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "trader";
                        readonly nameLocation: "1471:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11091;
                        readonly src: "1455:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11076;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1455:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11079;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "assetId";
                        readonly nameLocation: "1503:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11091;
                        readonly src: "1487:23:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11078;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1487:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11081;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "maturityTime";
                        readonly nameLocation: "1528:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11091;
                        readonly src: "1520:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11080;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1520:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11083;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "1558:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11091;
                        readonly src: "1550:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11082;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1550:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11085;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "vaultShareAmount";
                        readonly nameLocation: "1586:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11091;
                        readonly src: "1578:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11084;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1578:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11087;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "asBase";
                        readonly nameLocation: "1617:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11091;
                        readonly src: "1612:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11086;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1612:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11089;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "bondAmount";
                        readonly nameLocation: "1641:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11091;
                        readonly src: "1633:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11088;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1633:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1445:212:89";
                };
            }, {
                readonly id: 11110;
                readonly nodeType: "EventDefinition";
                readonly src: "1721:258:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11092;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1664:52:89";
                    readonly text: "@notice Emitted when a short position is opened.";
                };
                readonly eventSelector: "b354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b";
                readonly name: "OpenShort";
                readonly nameLocation: "1727:9:89";
                readonly parameters: {
                    readonly id: 11109;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11094;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "trader";
                        readonly nameLocation: "1762:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11110;
                        readonly src: "1746:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11093;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1746:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11096;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "assetId";
                        readonly nameLocation: "1794:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11110;
                        readonly src: "1778:23:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11095;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1778:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11098;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "maturityTime";
                        readonly nameLocation: "1819:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11110;
                        readonly src: "1811:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11097;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1811:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11100;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "1849:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11110;
                        readonly src: "1841:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11099;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1841:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11102;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "vaultShareAmount";
                        readonly nameLocation: "1877:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11110;
                        readonly src: "1869:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11101;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1869:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11104;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "asBase";
                        readonly nameLocation: "1908:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11110;
                        readonly src: "1903:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11103;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1903:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11106;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "baseProceeds";
                        readonly nameLocation: "1932:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11110;
                        readonly src: "1924:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11105;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1924:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11108;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "bondAmount";
                        readonly nameLocation: "1962:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11110;
                        readonly src: "1954:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11107;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1954:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1736:242:89";
                };
            }, {
                readonly id: 11129;
                readonly nodeType: "EventDefinition";
                readonly src: "2041:265:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11111;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1985:51:89";
                    readonly text: "@notice Emitted when a long position is closed.";
                };
                readonly eventSelector: "c0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b802";
                readonly name: "CloseLong";
                readonly nameLocation: "2047:9:89";
                readonly parameters: {
                    readonly id: 11128;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11113;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "trader";
                        readonly nameLocation: "2082:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11129;
                        readonly src: "2066:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11112;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2066:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11115;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "destination";
                        readonly nameLocation: "2114:11:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11129;
                        readonly src: "2098:27:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11114;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2098:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11117;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "assetId";
                        readonly nameLocation: "2151:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11129;
                        readonly src: "2135:23:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11116;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2135:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11119;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "maturityTime";
                        readonly nameLocation: "2176:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11129;
                        readonly src: "2168:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11118;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2168:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11121;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "2206:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11129;
                        readonly src: "2198:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11120;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2198:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11123;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "vaultShareAmount";
                        readonly nameLocation: "2234:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11129;
                        readonly src: "2226:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11122;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2226:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11125;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "asBase";
                        readonly nameLocation: "2265:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11129;
                        readonly src: "2260:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11124;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2260:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11127;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "bondAmount";
                        readonly nameLocation: "2289:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11129;
                        readonly src: "2281:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11126;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2281:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2056:249:89";
                };
            }, {
                readonly id: 11150;
                readonly nodeType: "EventDefinition";
                readonly src: "2369:295:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11130;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2312:52:89";
                    readonly text: "@notice Emitted when a short position is closed.";
                };
                readonly eventSelector: "cb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730";
                readonly name: "CloseShort";
                readonly nameLocation: "2375:10:89";
                readonly parameters: {
                    readonly id: 11149;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11132;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "trader";
                        readonly nameLocation: "2411:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11150;
                        readonly src: "2395:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11131;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2395:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11134;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "destination";
                        readonly nameLocation: "2443:11:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11150;
                        readonly src: "2427:27:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11133;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2427:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11136;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "assetId";
                        readonly nameLocation: "2480:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11150;
                        readonly src: "2464:23:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11135;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2464:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11138;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "maturityTime";
                        readonly nameLocation: "2505:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11150;
                        readonly src: "2497:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11137;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2497:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11140;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "baseAmount";
                        readonly nameLocation: "2535:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11150;
                        readonly src: "2527:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11139;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2527:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11142;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "vaultShareAmount";
                        readonly nameLocation: "2563:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11150;
                        readonly src: "2555:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11141;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2555:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11144;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "asBase";
                        readonly nameLocation: "2594:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11150;
                        readonly src: "2589:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11143;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2589:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11146;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "basePayment";
                        readonly nameLocation: "2618:11:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11150;
                        readonly src: "2610:19:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11145;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2610:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11148;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "bondAmount";
                        readonly nameLocation: "2647:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11150;
                        readonly src: "2639:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11147;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2639:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2385:278:89";
                };
            }, {
                readonly id: 11163;
                readonly nodeType: "EventDefinition";
                readonly src: "2724:193:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11151;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2670:49:89";
                    readonly text: "@notice Emitted when a checkpoint is created.";
                };
                readonly eventSelector: "5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd1551";
                readonly name: "CreateCheckpoint";
                readonly nameLocation: "2730:16:89";
                readonly parameters: {
                    readonly id: 11162;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11153;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "checkpointTime";
                        readonly nameLocation: "2772:14:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11163;
                        readonly src: "2756:30:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11152;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2756:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11155;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "2804:15:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11163;
                        readonly src: "2796:23:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11154;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2796:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11157;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "maturedShorts";
                        readonly nameLocation: "2837:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11163;
                        readonly src: "2829:21:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11156;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2829:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11159;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "maturedLongs";
                        readonly nameLocation: "2868:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11163;
                        readonly src: "2860:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11158;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2860:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11161;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "lpSharePrice";
                        readonly nameLocation: "2898:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11163;
                        readonly src: "2890:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11160;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2890:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2746:170:89";
                };
            }, {
                readonly id: 11170;
                readonly nodeType: "EventDefinition";
                readonly src: "2983:68:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11164;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2923:55:89";
                    readonly text: "@notice Emitted when governance fees are collected.";
                };
                readonly eventSelector: "a4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47";
                readonly name: "CollectGovernanceFee";
                readonly nameLocation: "2989:20:89";
                readonly parameters: {
                    readonly id: 11169;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11166;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "collector";
                        readonly nameLocation: "3026:9:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11170;
                        readonly src: "3010:25:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11165;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3010:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11168;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "fees";
                        readonly nameLocation: "3045:4:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11170;
                        readonly src: "3037:12:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11167;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3037:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3009:41:89";
                };
            }, {
                readonly id: 11175;
                readonly nodeType: "EventDefinition";
                readonly src: "3124:59:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11171;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3057:62:89";
                    readonly text: "@notice Emitted when the fee collector address is updated.";
                };
                readonly eventSelector: "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f";
                readonly name: "FeeCollectorUpdated";
                readonly nameLocation: "3130:19:89";
                readonly parameters: {
                    readonly id: 11174;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11173;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newFeeCollector";
                        readonly nameLocation: "3166:15:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11175;
                        readonly src: "3150:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11172;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3150:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3149:33:89";
                };
            }, {
                readonly id: 11180;
                readonly nodeType: "EventDefinition";
                readonly src: "3258:63:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11176;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3189:64:89";
                    readonly text: "@notice Emitted when the sweep collector address is updated.";
                };
                readonly eventSelector: "c049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd2";
                readonly name: "SweepCollectorUpdated";
                readonly nameLocation: "3264:21:89";
                readonly parameters: {
                    readonly id: 11179;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11178;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newSweepCollector";
                        readonly nameLocation: "3302:17:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11180;
                        readonly src: "3286:33:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11177;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3286:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3285:35:89";
                };
            }, {
                readonly id: 11185;
                readonly nodeType: "EventDefinition";
                readonly src: "3391:55:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11181;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3327:59:89";
                    readonly text: "@notice Emitted when the governance address is updated.";
                };
                readonly eventSelector: "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab";
                readonly name: "GovernanceUpdated";
                readonly nameLocation: "3397:17:89";
                readonly parameters: {
                    readonly id: 11184;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11183;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newGovernance";
                        readonly nameLocation: "3431:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11185;
                        readonly src: "3415:29:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11182;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3415:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3414:31:89";
                };
            }, {
                readonly id: 11192;
                readonly nodeType: "EventDefinition";
                readonly src: "3502:60:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11186;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3452:45:89";
                    readonly text: "@notice Emitted when a pauser is updated.";
                };
                readonly eventSelector: "902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af";
                readonly name: "PauserUpdated";
                readonly nameLocation: "3508:13:89";
                readonly parameters: {
                    readonly id: 11191;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11188;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newPauser";
                        readonly nameLocation: "3538:9:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11192;
                        readonly src: "3522:25:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11187;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3522:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11190;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "status";
                        readonly nameLocation: "3554:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11192;
                        readonly src: "3549:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11189;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3549:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3521:40:89";
                };
            }, {
                readonly id: 11197;
                readonly nodeType: "EventDefinition";
                readonly src: "3626:40:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11193;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3568:53:89";
                    readonly text: "@notice Emitted when the pause status is updated.";
                };
                readonly eventSelector: "7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5";
                readonly name: "PauseStatusUpdated";
                readonly nameLocation: "3632:18:89";
                readonly parameters: {
                    readonly id: 11196;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11195;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "isPaused";
                        readonly nameLocation: "3656:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11197;
                        readonly src: "3651:13:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11194;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3651:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3650:15:89";
                };
            }, {
                readonly id: 11204;
                readonly nodeType: "EventDefinition";
                readonly src: "3719:63:89";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11198;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3672:42:89";
                    readonly text: "@notice Emitted when tokens are swept.";
                };
                readonly eventSelector: "951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e096";
                readonly name: "Sweep";
                readonly nameLocation: "3725:5:89";
                readonly parameters: {
                    readonly id: 11203;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11200;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "collector";
                        readonly nameLocation: "3747:9:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11204;
                        readonly src: "3731:25:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11199;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3731:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11202;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "3774:6:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11204;
                        readonly src: "3758:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11201;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3758:7:89";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3730:51:89";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 11009;
                    readonly name: "IMultiTokenEvents";
                    readonly nameLocations: readonly ["157:17:89"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11777;
                    readonly src: "157:17:89";
                };
                readonly id: 11010;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "157:17:89";
            }];
            readonly canonicalName: "IHyperdriveEvents";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [11205, 11777];
            readonly name: "IHyperdriveEvents";
            readonly nameLocation: "136:17:89";
            readonly scope: 11206;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 89;
};
//# sourceMappingURL=IHyperdriveEvents.d.ts.map