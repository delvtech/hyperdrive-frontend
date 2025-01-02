export declare const IACLManager: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "ADDRESSES_PROVIDER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPoolAddressesProvider";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "ASSET_LISTING_ADMIN_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "BRIDGE_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "EMERGENCY_ADMIN_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "FLASH_BORROWER_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "POOL_ADMIN_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "RISK_ADMIN_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "addAssetListingAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addBridge";
        readonly inputs: readonly [{
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addEmergencyAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addFlashBorrower";
        readonly inputs: readonly [{
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addPoolAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addRiskAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isAssetListingAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isBridge";
        readonly inputs: readonly [{
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isEmergencyAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isFlashBorrower";
        readonly inputs: readonly [{
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isPoolAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isRiskAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "removeAssetListingAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeBridge";
        readonly inputs: readonly [{
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeEmergencyAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeFlashBorrower";
        readonly inputs: readonly [{
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removePoolAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeRiskAdmin";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setRoleAdmin";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "adminRole";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "ADDRESSES_PROVIDER()": "0542975c";
        readonly "ASSET_LISTING_ADMIN_ROLE()": "78bb0a43";
        readonly "BRIDGE_ROLE()": "b5bfddea";
        readonly "EMERGENCY_ADMIN_ROLE()": "6e76fc8f";
        readonly "FLASH_BORROWER_ROLE()": "5577b7a9";
        readonly "POOL_ADMIN_ROLE()": "b8f6dba7";
        readonly "RISK_ADMIN_ROLE()": "4f16b425";
        readonly "addAssetListingAdmin(address)": "9a2b96f7";
        readonly "addBridge(address)": "9712fdf8";
        readonly "addEmergencyAdmin(address)": "179efb09";
        readonly "addFlashBorrower(address)": "9ac9d80b";
        readonly "addPoolAdmin(address)": "22650caf";
        readonly "addRiskAdmin(address)": "5b9a94e4";
        readonly "isAssetListingAdmin(address)": "13ee32e0";
        readonly "isBridge(address)": "726600ce";
        readonly "isEmergencyAdmin(address)": "2500f2b6";
        readonly "isFlashBorrower(address)": "fa50f297";
        readonly "isPoolAdmin(address)": "7be53ca1";
        readonly "isRiskAdmin(address)": "674b5e4d";
        readonly "removeAssetListingAdmin(address)": "a21bce15";
        readonly "removeBridge(address)": "04df017d";
        readonly "removeEmergencyAdmin(address)": "7a9a93f4";
        readonly "removeFlashBorrower(address)": "253cf980";
        readonly "removePoolAdmin(address)": "f83695cb";
        readonly "removeRiskAdmin(address)": "3c5a08e5";
        readonly "setRoleAdmin(bytes32,bytes32)": "1e4e0091";
    };
};
//# sourceMappingURL=IACLManager.d.ts.map