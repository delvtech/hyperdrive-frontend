export declare const ERC4626: {
    readonly abi: readonly [{
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
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
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
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "asset";
        readonly outputs: readonly [{
            readonly internalType: "contract ERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "convertToAssets";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly name: "convertToShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "maxDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "maxMint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "maxRedeem";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "maxWithdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly name: "previewDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "previewMint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly name: "previewRedeem";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly name: "previewWithdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "redeem";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalAssets";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
    readonly methodIdentifiers: {
        readonly "DOMAIN_SEPARATOR()": "3644e515";
        readonly "allowance(address,address)": "dd62ed3e";
        readonly "approve(address,uint256)": "095ea7b3";
        readonly "asset()": "38d52e0f";
        readonly "balanceOf(address)": "70a08231";
        readonly "convertToAssets(uint256)": "07a2d13a";
        readonly "convertToShares(uint256)": "c6e6f592";
        readonly "decimals()": "313ce567";
        readonly "deposit(uint256,address)": "6e553f65";
        readonly "maxDeposit(address)": "402d267d";
        readonly "maxMint(address)": "c63d75b6";
        readonly "maxRedeem(address)": "d905777e";
        readonly "maxWithdraw(address)": "ce96cb77";
        readonly "mint(uint256,address)": "94bf804d";
        readonly "name()": "06fdde03";
        readonly "nonces(address)": "7ecebe00";
        readonly "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf";
        readonly "previewDeposit(uint256)": "ef8b30f7";
        readonly "previewMint(uint256)": "b3d7f6b9";
        readonly "previewRedeem(uint256)": "4cdad506";
        readonly "previewWithdraw(uint256)": "0a28a477";
        readonly "redeem(uint256,address,address)": "ba087652";
        readonly "symbol()": "95d89b41";
        readonly "totalAssets()": "01e1d114";
        readonly "totalSupply()": "18160ddd";
        readonly "transfer(address,uint256)": "a9059cbb";
        readonly "transferFrom(address,address,uint256)": "23b872dd";
        readonly "withdraw(uint256,address,address)": "b460af94";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC4626.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Minimal ERC4626 tokenized Vault implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/tokens/ERC4626.sol\":\"ERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/tokens/ERC4626.sol\":{\"keccak256\":\"0xbc0fbc5200d17334a98ce69b49d4c5eb95f5716995679b0bab2562e924fba483\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://6069b0b4b8b6d75f0fcc15b521ac92f80ba4648b22ebccef78727f3472e55431\",\"dweb:/ipfs/Qmer8KABno4MvAZ7uawPpEKyU5mpSBqtTaBBK5Yf1kZPtZ\"]},\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060\",\"dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
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
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Approval";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "caller";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Deposit";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
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
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Transfer";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "caller";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Withdraw";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "DOMAIN_SEPARATOR";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "allowance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "approve";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "asset";
                readonly outputs: readonly [{
                    readonly internalType: "contract ERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "convertToAssets";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "convertToShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deposit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxDeposit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxMint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxRedeem";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxWithdraw";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "mint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "nonces";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "permit";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewDeposit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewMint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewRedeem";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewWithdraw";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "redeem";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalAssets";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transfer";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFrom";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "withdraw";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
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
                readonly "lib/solmate/src/tokens/ERC4626.sol": "ERC4626";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/solmate/src/tokens/ERC20.sol": {
                readonly keccak256: "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10";
                readonly urls: readonly ["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35", "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/tokens/ERC4626.sol": {
                readonly keccak256: "0xbc0fbc5200d17334a98ce69b49d4c5eb95f5716995679b0bab2562e924fba483";
                readonly urls: readonly ["bzz-raw://6069b0b4b8b6d75f0fcc15b521ac92f80ba4648b22ebccef78727f3472e55431", "dweb:/ipfs/Qmer8KABno4MvAZ7uawPpEKyU5mpSBqtTaBBK5Yf1kZPtZ"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/utils/FixedPointMathLib.sol": {
                readonly keccak256: "0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843";
                readonly urls: readonly ["bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9", "dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/utils/SafeTransferLib.sol": {
                readonly keccak256: "0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b";
                readonly urls: readonly ["bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060", "dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv"];
                readonly license: "AGPL-3.0-only";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/solmate/src/tokens/ERC4626.sol";
        readonly id: 73026;
        readonly exportedSymbols: {
            readonly ERC20: readonly [72504];
            readonly ERC4626: readonly [73025];
            readonly FixedPointMathLib: readonly [73184];
            readonly SafeTransferLib: readonly [73269];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:6477:173";
        readonly nodes: readonly [{
            readonly id: 72506;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:173";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 72508;
            readonly nodeType: "ImportDirective";
            readonly src: "68:42:173";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/tokens/ERC20.sol";
            readonly file: "../tokens/ERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 73026;
            readonly sourceUnit: 72505;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 72507;
                    readonly name: "ERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 72504;
                    readonly src: "76:5:173";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 72510;
            readonly nodeType: "ImportDirective";
            readonly src: "111:61:173";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/utils/SafeTransferLib.sol";
            readonly file: "../utils/SafeTransferLib.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 73026;
            readonly sourceUnit: 73270;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 72509;
                    readonly name: "SafeTransferLib";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 73269;
                    readonly src: "119:15:173";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 72512;
            readonly nodeType: "ImportDirective";
            readonly src: "173:65:173";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/utils/FixedPointMathLib.sol";
            readonly file: "../utils/FixedPointMathLib.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 73026;
            readonly sourceUnit: 73185;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 72511;
                    readonly name: "FixedPointMathLib";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 73184;
                    readonly src: "181:17:173";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 73025;
            readonly nodeType: "ContractDefinition";
            readonly src: "398:6120:173";
            readonly nodes: readonly [{
                readonly id: 72519;
                readonly nodeType: "UsingForDirective";
                readonly src: "439:32:173";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 72516;
                    readonly name: "SafeTransferLib";
                    readonly nameLocations: readonly ["445:15:173"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 73269;
                    readonly src: "445:15:173";
                };
                readonly typeName: {
                    readonly id: 72518;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 72517;
                        readonly name: "ERC20";
                        readonly nameLocations: readonly ["465:5:173"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72504;
                        readonly src: "465:5:173";
                    };
                    readonly referencedDeclaration: 72504;
                    readonly src: "465:5:173";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_ERC20_$72504";
                        readonly typeString: "contract ERC20";
                    };
                };
            }, {
                readonly id: 72522;
                readonly nodeType: "UsingForDirective";
                readonly src: "476:36:173";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 72520;
                    readonly name: "FixedPointMathLib";
                    readonly nameLocations: readonly ["482:17:173"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 73184;
                    readonly src: "482:17:173";
                };
                readonly typeName: {
                    readonly id: 72521;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "504:7:173";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 72532;
                readonly nodeType: "EventDefinition";
                readonly src: "697:93:173";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7";
                readonly name: "Deposit";
                readonly nameLocation: "703:7:173";
                readonly parameters: {
                    readonly id: 72531;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72524;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "727:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72532;
                        readonly src: "711:22:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72523;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "711:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72526;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "751:5:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72532;
                        readonly src: "735:21:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72525;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "735:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72528;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "766:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72532;
                        readonly src: "758:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72527;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "758:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72530;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "782:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72532;
                        readonly src: "774:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72529;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "774:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "710:79:173";
                };
            }, {
                readonly id: 72544;
                readonly nodeType: "EventDefinition";
                readonly src: "796:166:173";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "fbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db";
                readonly name: "Withdraw";
                readonly nameLocation: "802:8:173";
                readonly parameters: {
                    readonly id: 72543;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72534;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "836:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72544;
                        readonly src: "820:22:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72533;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "820:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72536;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "868:8:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72544;
                        readonly src: "852:24:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72535;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "852:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72538;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "902:5:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72544;
                        readonly src: "886:21:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72537;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "886:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72540;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "925:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72544;
                        readonly src: "917:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72539;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "917:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72542;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "949:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72544;
                        readonly src: "941:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72541;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "941:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "810:151:173";
                };
            }, {
                readonly id: 72547;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1149:28:173";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "38d52e0f";
                readonly mutability: "immutable";
                readonly name: "asset";
                readonly nameLocation: "1172:5:173";
                readonly scope: 73025;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_ERC20_$72504";
                    readonly typeString: "contract ERC20";
                };
                readonly typeName: {
                    readonly id: 72546;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 72545;
                        readonly name: "ERC20";
                        readonly nameLocations: readonly ["1149:5:173"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72504;
                        readonly src: "1149:5:173";
                    };
                    readonly referencedDeclaration: 72504;
                    readonly src: "1149:5:173";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_ERC20_$72504";
                        readonly typeString: "contract ERC20";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72569;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1184:172:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72568;
                    readonly nodeType: "Block";
                    readonly src: "1325:31:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72566;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72564;
                                readonly name: "asset";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72547;
                                readonly src: "1335:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_ERC20_$72504";
                                    readonly typeString: "contract ERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72565;
                                readonly name: "_asset";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72550;
                                readonly src: "1343:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_ERC20_$72504";
                                    readonly typeString: "contract ERC20";
                                };
                            };
                            readonly src: "1335:14:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$72504";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly id: 72567;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1335:14:173";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 72557;
                        readonly name: "_name";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 72552;
                        readonly src: "1290:5:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string memory";
                        };
                    }, {
                        readonly id: 72558;
                        readonly name: "_symbol";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 72554;
                        readonly src: "1297:7:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string memory";
                        };
                    }, {
                        readonly arguments: readonly [];
                        readonly expression: {
                            readonly argumentTypes: readonly [];
                            readonly expression: {
                                readonly id: 72559;
                                readonly name: "_asset";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72550;
                                readonly src: "1306:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_ERC20_$72504";
                                    readonly typeString: "contract ERC20";
                                };
                            };
                            readonly id: 72560;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "1313:8:173";
                            readonly memberName: "decimals";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 72141;
                            readonly src: "1306:15:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_function_external_view$__$returns$_t_uint8_$";
                                readonly typeString: "function () view external returns (uint8)";
                            };
                        };
                        readonly id: 72561;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "functionCall";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1306:17:173";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                    }];
                    readonly id: 72562;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 72556;
                        readonly name: "ERC20";
                        readonly nameLocations: readonly ["1284:5:173"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72504;
                        readonly src: "1284:5:173";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1284:40:173";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 72555;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72550;
                        readonly mutability: "mutable";
                        readonly name: "_asset";
                        readonly nameLocation: "1211:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72569;
                        readonly src: "1205:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$72504";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 72549;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72548;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["1205:5:173"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72504;
                                readonly src: "1205:5:173";
                            };
                            readonly referencedDeclaration: 72504;
                            readonly src: "1205:5:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$72504";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72552;
                        readonly mutability: "mutable";
                        readonly name: "_name";
                        readonly nameLocation: "1241:5:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72569;
                        readonly src: "1227:19:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 72551;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1227:6:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72554;
                        readonly mutability: "mutable";
                        readonly name: "_symbol";
                        readonly nameLocation: "1270:7:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72569;
                        readonly src: "1256:21:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 72553;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1256:6:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1195:88:173";
                };
                readonly returnParameters: {
                    readonly id: 72563;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1325:0:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 72621;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1550:516:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72620;
                    readonly nodeType: "Block";
                    readonly src: "1641:425:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72586;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly components: readonly [{
                                        readonly id: 72583;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 72579;
                                            readonly name: "shares";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72576;
                                            readonly src: "1735:6:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly id: 72581;
                                                readonly name: "assets";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72571;
                                                readonly src: "1759:6:173";
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
                                                readonly id: 72580;
                                                readonly name: "previewDeposit";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72894;
                                                readonly src: "1744:14:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                                    readonly typeString: "function (uint256) view returns (uint256)";
                                                };
                                            };
                                            readonly id: 72582;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1744:22:173";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "1735:31:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 72584;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1734:33:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 72585;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "1771:1:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "1734:38:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5a45524f5f534841524553";
                                readonly id: 72587;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1774:13:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_2119bd5d92259e418533f96b824fbd100e3dea453e6ac4c5f7315e6344368f2f";
                                    readonly typeString: "literal_string \"ZERO_SHARES\"";
                                };
                                readonly value: "ZERO_SHARES";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_2119bd5d92259e418533f96b824fbd100e3dea453e6ac4c5f7315e6344368f2f";
                                    readonly typeString: "literal_string \"ZERO_SHARES\"";
                                }];
                                readonly id: 72578;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1726:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 72588;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1726:62:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72589;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1726:62:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72593;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "1891:3:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72594;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1895:6:173";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1891:10:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 72597;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "1911:4:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC4626_$73025";
                                        readonly typeString: "contract ERC4626";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_ERC4626_$73025";
                                        readonly typeString: "contract ERC4626";
                                    }];
                                    readonly id: 72596;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1903:7:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 72595;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1903:7:173";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 72598;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1903:13:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72599;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72571;
                                readonly src: "1918:6:173";
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
                                }];
                                readonly expression: {
                                    readonly id: 72590;
                                    readonly name: "asset";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72547;
                                    readonly src: "1868:5:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC20_$72504";
                                        readonly typeString: "contract ERC20";
                                    };
                                };
                                readonly id: 72592;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1874:16:173";
                                readonly memberName: "safeTransferFrom";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 73228;
                                readonly src: "1868:22:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_ERC20_$72504_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$72504_$";
                                    readonly typeString: "function (contract ERC20,address,address,uint256)";
                                };
                            };
                            readonly id: 72600;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1868:57:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72601;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1868:57:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72603;
                                readonly name: "receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72573;
                                readonly src: "1942:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72604;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72576;
                                readonly src: "1952:6:173";
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
                                }];
                                readonly id: 72602;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72475;
                                readonly src: "1936:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 72605;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1936:23:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72606;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1936:23:173";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72608;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "1983:3:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72609;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1987:6:173";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1983:10:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72610;
                                readonly name: "receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72573;
                                readonly src: "1995:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72611;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72571;
                                readonly src: "2005:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 72612;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72576;
                                readonly src: "2013:6:173";
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
                                }];
                                readonly id: 72607;
                                readonly name: "Deposit";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72532;
                                readonly src: "1975:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,uint256,uint256)";
                                };
                            };
                            readonly id: 72613;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1975:45:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72614;
                        readonly nodeType: "EmitStatement";
                        readonly src: "1970:50:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72616;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72571;
                                readonly src: "2044:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 72617;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72576;
                                readonly src: "2052:6:173";
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
                                readonly id: 72615;
                                readonly name: "afterDeposit";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73024;
                                readonly src: "2031:12:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,uint256)";
                                };
                            };
                            readonly id: 72618;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2031:28:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72619;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2031:28:173";
                    }];
                };
                readonly functionSelector: "6e553f65";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deposit";
                readonly nameLocation: "1559:7:173";
                readonly parameters: {
                    readonly id: 72574;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72571;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "1575:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72621;
                        readonly src: "1567:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72570;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1567:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72573;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "1591:8:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72621;
                        readonly src: "1583:16:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72572;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1583:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1566:34:173";
                };
                readonly returnParameters: {
                    readonly id: 72577;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72576;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "1633:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72621;
                        readonly src: "1625:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72575;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1625:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1624:16:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72667;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2072:467:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72666;
                    readonly nodeType: "Block";
                    readonly src: "2160:379:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72634;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72630;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72628;
                                readonly src: "2170:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 72632;
                                    readonly name: "shares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72623;
                                    readonly src: "2191:6:173";
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
                                    readonly id: 72631;
                                    readonly name: "previewMint";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72918;
                                    readonly src: "2179:11:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256) view returns (uint256)";
                                    };
                                };
                                readonly id: 72633;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2179:19:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2170:28:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72635;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2170:28:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72639;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2364:3:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72640;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2368:6:173";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2364:10:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 72643;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2384:4:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC4626_$73025";
                                        readonly typeString: "contract ERC4626";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_ERC4626_$73025";
                                        readonly typeString: "contract ERC4626";
                                    }];
                                    readonly id: 72642;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2376:7:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 72641;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2376:7:173";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 72644;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2376:13:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72645;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72628;
                                readonly src: "2391:6:173";
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
                                }];
                                readonly expression: {
                                    readonly id: 72636;
                                    readonly name: "asset";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72547;
                                    readonly src: "2341:5:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC20_$72504";
                                        readonly typeString: "contract ERC20";
                                    };
                                };
                                readonly id: 72638;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2347:16:173";
                                readonly memberName: "safeTransferFrom";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 73228;
                                readonly src: "2341:22:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_ERC20_$72504_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$72504_$";
                                    readonly typeString: "function (contract ERC20,address,address,uint256)";
                                };
                            };
                            readonly id: 72646;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2341:57:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72647;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2341:57:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72649;
                                readonly name: "receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72625;
                                readonly src: "2415:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72650;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72623;
                                readonly src: "2425:6:173";
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
                                }];
                                readonly id: 72648;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72475;
                                readonly src: "2409:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 72651;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2409:23:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72652;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2409:23:173";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72654;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2456:3:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72655;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2460:6:173";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2456:10:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72656;
                                readonly name: "receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72625;
                                readonly src: "2468:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72657;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72628;
                                readonly src: "2478:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 72658;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72623;
                                readonly src: "2486:6:173";
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
                                }];
                                readonly id: 72653;
                                readonly name: "Deposit";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72532;
                                readonly src: "2448:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,uint256,uint256)";
                                };
                            };
                            readonly id: 72659;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2448:45:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72660;
                        readonly nodeType: "EmitStatement";
                        readonly src: "2443:50:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72662;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72628;
                                readonly src: "2517:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 72663;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72623;
                                readonly src: "2525:6:173";
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
                                readonly id: 72661;
                                readonly name: "afterDeposit";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73024;
                                readonly src: "2504:12:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,uint256)";
                                };
                            };
                            readonly id: 72664;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2504:28:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72665;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2504:28:173";
                    }];
                };
                readonly functionSelector: "94bf804d";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "2081:4:173";
                readonly parameters: {
                    readonly id: 72626;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72623;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "2094:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72667;
                        readonly src: "2086:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72622;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2086:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72625;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "2110:8:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72667;
                        readonly src: "2102:16:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72624;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2102:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2085:34:173";
                };
                readonly returnParameters: {
                    readonly id: 72629;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72628;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "2152:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72667;
                        readonly src: "2144:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72627;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2144:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2143:16:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72745;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2545:679:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72744;
                    readonly nodeType: "Block";
                    readonly src: "2682:542:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72682;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72678;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72676;
                                readonly src: "2692:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 72680;
                                    readonly name: "assets";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72669;
                                    readonly src: "2717:6:173";
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
                                    readonly id: 72679;
                                    readonly name: "previewWithdraw";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72942;
                                    readonly src: "2701:15:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256) view returns (uint256)";
                                    };
                                };
                                readonly id: 72681;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2701:23:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2692:32:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72683;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2692:32:173";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 72687;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 72684;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2806:3:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72685;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2810:6:173";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2806:10:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly id: 72686;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72673;
                                readonly src: "2820:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2806:19:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 72717;
                        readonly nodeType: "IfStatement";
                        readonly src: "2802:228:173";
                        readonly trueBody: {
                            readonly id: 72716;
                            readonly nodeType: "Block";
                            readonly src: "2827:203:173";
                            readonly statements: readonly [{
                                readonly assignments: readonly [72689];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 72689;
                                    readonly mutability: "mutable";
                                    readonly name: "allowed";
                                    readonly nameLocation: "2849:7:173";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 72716;
                                    readonly src: "2841:15:173";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 72688;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2841:7:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 72696;
                                readonly initialValue: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 72690;
                                            readonly name: "allowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72153;
                                            readonly src: "2859:9:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                                                readonly typeString: "mapping(address => mapping(address => uint256))";
                                            };
                                        };
                                        readonly id: 72692;
                                        readonly indexExpression: {
                                            readonly id: 72691;
                                            readonly name: "owner";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72673;
                                            readonly src: "2869:5:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "2859:16:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 72695;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 72693;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "2876:3:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72694;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2880:6:173";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2876:10:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "2859:28:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "2841:46:173";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 72703;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 72697;
                                        readonly name: "allowed";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72689;
                                        readonly src: "2942:7:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "!=";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 72700;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2958:7:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72699;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2958:7:173";
                                                    readonly typeDescriptions: {};
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                }];
                                                readonly id: 72698;
                                                readonly name: "type";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -27;
                                                readonly src: "2953:4:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_metatype_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 72701;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2953:13:173";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_meta_type_t_uint256";
                                                readonly typeString: "type(uint256)";
                                            };
                                        };
                                        readonly id: 72702;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2967:3:173";
                                        readonly memberName: "max";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2953:17:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2942:28:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 72715;
                                readonly nodeType: "IfStatement";
                                readonly src: "2938:81:173";
                                readonly trueBody: {
                                    readonly expression: {
                                        readonly id: 72713;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 72704;
                                                    readonly name: "allowance";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72153;
                                                    readonly src: "2972:9:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                                                        readonly typeString: "mapping(address => mapping(address => uint256))";
                                                    };
                                                };
                                                readonly id: 72708;
                                                readonly indexExpression: {
                                                    readonly id: 72705;
                                                    readonly name: "owner";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72673;
                                                    readonly src: "2982:5:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "2972:16:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                                    readonly typeString: "mapping(address => uint256)";
                                                };
                                            };
                                            readonly id: 72709;
                                            readonly indexExpression: {
                                                readonly expression: {
                                                    readonly id: 72706;
                                                    readonly name: "msg";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -15;
                                                    readonly src: "2989:3:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_magic_message";
                                                        readonly typeString: "msg";
                                                    };
                                                };
                                                readonly id: 72707;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "2993:6:173";
                                                readonly memberName: "sender";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "2989:10:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: true;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "2972:28:173";
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
                                            readonly id: 72712;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 72710;
                                                readonly name: "allowed";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72689;
                                                readonly src: "3003:7:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 72711;
                                                readonly name: "shares";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72676;
                                                readonly src: "3013:6:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "3003:16:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2972:47:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 72714;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "2972:47:173";
                                };
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72719;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72669;
                                readonly src: "3055:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 72720;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72676;
                                readonly src: "3063:6:173";
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
                                readonly id: 72718;
                                readonly name: "beforeWithdraw";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73016;
                                readonly src: "3040:14:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,uint256)";
                                };
                            };
                            readonly id: 72721;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3040:30:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72722;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3040:30:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72724;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72673;
                                readonly src: "3087:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72725;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72676;
                                readonly src: "3094:6:173";
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
                                }];
                                readonly id: 72723;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72503;
                                readonly src: "3081:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 72726;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3081:20:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72727;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3081:20:173";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72729;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "3126:3:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72730;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3130:6:173";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3126:10:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72731;
                                readonly name: "receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72671;
                                readonly src: "3138:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72732;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72673;
                                readonly src: "3148:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72733;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72669;
                                readonly src: "3155:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 72734;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72676;
                                readonly src: "3163:6:173";
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
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 72728;
                                readonly name: "Withdraw";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72544;
                                readonly src: "3117:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,address,uint256,uint256)";
                                };
                            };
                            readonly id: 72735;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3117:53:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72736;
                        readonly nodeType: "EmitStatement";
                        readonly src: "3112:58:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72740;
                                readonly name: "receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72671;
                                readonly src: "3200:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72741;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72669;
                                readonly src: "3210:6:173";
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
                                }];
                                readonly expression: {
                                    readonly id: 72737;
                                    readonly name: "asset";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72547;
                                    readonly src: "3181:5:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC20_$72504";
                                        readonly typeString: "contract ERC20";
                                    };
                                };
                                readonly id: 72739;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3187:12:173";
                                readonly memberName: "safeTransfer";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 73248;
                                readonly src: "3181:18:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_ERC20_$72504_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$72504_$";
                                    readonly typeString: "function (contract ERC20,address,uint256)";
                                };
                            };
                            readonly id: 72742;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3181:36:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72743;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3181:36:173";
                    }];
                };
                readonly functionSelector: "b460af94";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "withdraw";
                readonly nameLocation: "2554:8:173";
                readonly parameters: {
                    readonly id: 72674;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72669;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "2580:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72745;
                        readonly src: "2572:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72668;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2572:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72671;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "2604:8:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72745;
                        readonly src: "2596:16:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72670;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2596:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72673;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2630:5:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72745;
                        readonly src: "2622:13:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72672;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2622:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2562:79:173";
                };
                readonly returnParameters: {
                    readonly id: 72677;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72676;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "2674:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72745;
                        readonly src: "2666:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72675;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2666:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2665:16:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72829;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3230:713:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72828;
                    readonly nodeType: "Block";
                    readonly src: "3365:578:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 72759;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 72756;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "3379:3:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72757;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3383:6:173";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3379:10:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly id: 72758;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72751;
                                readonly src: "3393:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3379:19:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 72789;
                        readonly nodeType: "IfStatement";
                        readonly src: "3375:228:173";
                        readonly trueBody: {
                            readonly id: 72788;
                            readonly nodeType: "Block";
                            readonly src: "3400:203:173";
                            readonly statements: readonly [{
                                readonly assignments: readonly [72761];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 72761;
                                    readonly mutability: "mutable";
                                    readonly name: "allowed";
                                    readonly nameLocation: "3422:7:173";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 72788;
                                    readonly src: "3414:15:173";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 72760;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "3414:7:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 72768;
                                readonly initialValue: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 72762;
                                            readonly name: "allowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72153;
                                            readonly src: "3432:9:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                                                readonly typeString: "mapping(address => mapping(address => uint256))";
                                            };
                                        };
                                        readonly id: 72764;
                                        readonly indexExpression: {
                                            readonly id: 72763;
                                            readonly name: "owner";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72751;
                                            readonly src: "3442:5:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "3432:16:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 72767;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 72765;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "3449:3:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72766;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3453:6:173";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "3449:10:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "3432:28:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "3414:46:173";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 72775;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 72769;
                                        readonly name: "allowed";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72761;
                                        readonly src: "3515:7:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "!=";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 72772;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3531:7:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72771;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3531:7:173";
                                                    readonly typeDescriptions: {};
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                }];
                                                readonly id: 72770;
                                                readonly name: "type";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -27;
                                                readonly src: "3526:4:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_metatype_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 72773;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3526:13:173";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_meta_type_t_uint256";
                                                readonly typeString: "type(uint256)";
                                            };
                                        };
                                        readonly id: 72774;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3540:3:173";
                                        readonly memberName: "max";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "3526:17:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3515:28:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 72787;
                                readonly nodeType: "IfStatement";
                                readonly src: "3511:81:173";
                                readonly trueBody: {
                                    readonly expression: {
                                        readonly id: 72785;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 72776;
                                                    readonly name: "allowance";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72153;
                                                    readonly src: "3545:9:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                                                        readonly typeString: "mapping(address => mapping(address => uint256))";
                                                    };
                                                };
                                                readonly id: 72780;
                                                readonly indexExpression: {
                                                    readonly id: 72777;
                                                    readonly name: "owner";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72751;
                                                    readonly src: "3555:5:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "3545:16:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                                    readonly typeString: "mapping(address => uint256)";
                                                };
                                            };
                                            readonly id: 72781;
                                            readonly indexExpression: {
                                                readonly expression: {
                                                    readonly id: 72778;
                                                    readonly name: "msg";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -15;
                                                    readonly src: "3562:3:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_magic_message";
                                                        readonly typeString: "msg";
                                                    };
                                                };
                                                readonly id: 72779;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "3566:6:173";
                                                readonly memberName: "sender";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "3562:10:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: true;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "3545:28:173";
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
                                            readonly id: 72784;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 72782;
                                                readonly name: "allowed";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72761;
                                                readonly src: "3576:7:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 72783;
                                                readonly name: "shares";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72747;
                                                readonly src: "3586:6:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "3576:16:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "3545:47:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 72786;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "3545:47:173";
                                };
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72798;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly components: readonly [{
                                        readonly id: 72795;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 72791;
                                            readonly name: "assets";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72754;
                                            readonly src: "3696:6:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly id: 72793;
                                                readonly name: "shares";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72747;
                                                readonly src: "3719:6:173";
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
                                                readonly id: 72792;
                                                readonly name: "previewRedeem";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72954;
                                                readonly src: "3705:13:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                                    readonly typeString: "function (uint256) view returns (uint256)";
                                                };
                                            };
                                            readonly id: 72794;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3705:21:173";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "3696:30:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 72796;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3695:32:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 72797;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3731:1:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3695:37:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5a45524f5f415353455453";
                                readonly id: 72799;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3734:13:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_bf169ab2ef12d57708bb5afe72ea54ba3ad2eccb91dd95f37571afa377c52483";
                                    readonly typeString: "literal_string \"ZERO_ASSETS\"";
                                };
                                readonly value: "ZERO_ASSETS";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_bf169ab2ef12d57708bb5afe72ea54ba3ad2eccb91dd95f37571afa377c52483";
                                    readonly typeString: "literal_string \"ZERO_ASSETS\"";
                                }];
                                readonly id: 72790;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3687:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 72800;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3687:61:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72801;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3687:61:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72803;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72754;
                                readonly src: "3774:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 72804;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72747;
                                readonly src: "3782:6:173";
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
                                readonly id: 72802;
                                readonly name: "beforeWithdraw";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73016;
                                readonly src: "3759:14:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,uint256)";
                                };
                            };
                            readonly id: 72805;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3759:30:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72806;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3759:30:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72808;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72751;
                                readonly src: "3806:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72809;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72747;
                                readonly src: "3813:6:173";
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
                                }];
                                readonly id: 72807;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72503;
                                readonly src: "3800:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 72810;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3800:20:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72811;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3800:20:173";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72813;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "3845:3:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72814;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3849:6:173";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3845:10:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72815;
                                readonly name: "receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72749;
                                readonly src: "3857:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72816;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72751;
                                readonly src: "3867:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72817;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72754;
                                readonly src: "3874:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 72818;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72747;
                                readonly src: "3882:6:173";
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
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 72812;
                                readonly name: "Withdraw";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72544;
                                readonly src: "3836:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,address,address,uint256,uint256)";
                                };
                            };
                            readonly id: 72819;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3836:53:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72820;
                        readonly nodeType: "EmitStatement";
                        readonly src: "3831:58:173";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72824;
                                readonly name: "receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72749;
                                readonly src: "3919:8:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72825;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72754;
                                readonly src: "3929:6:173";
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
                                }];
                                readonly expression: {
                                    readonly id: 72821;
                                    readonly name: "asset";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72547;
                                    readonly src: "3900:5:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC20_$72504";
                                        readonly typeString: "contract ERC20";
                                    };
                                };
                                readonly id: 72823;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3906:12:173";
                                readonly memberName: "safeTransfer";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 73248;
                                readonly src: "3900:18:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_ERC20_$72504_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$72504_$";
                                    readonly typeString: "function (contract ERC20,address,uint256)";
                                };
                            };
                            readonly id: 72826;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3900:36:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72827;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3900:36:173";
                    }];
                };
                readonly functionSelector: "ba087652";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "redeem";
                readonly nameLocation: "3239:6:173";
                readonly parameters: {
                    readonly id: 72752;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72747;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "3263:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72829;
                        readonly src: "3255:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72746;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3255:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72749;
                        readonly mutability: "mutable";
                        readonly name: "receiver";
                        readonly nameLocation: "3287:8:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72829;
                        readonly src: "3279:16:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72748;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3279:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72751;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "3313:5:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72829;
                        readonly src: "3305:13:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72750;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3305:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3245:79:173";
                };
                readonly returnParameters: {
                    readonly id: 72755;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72754;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "3357:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72829;
                        readonly src: "3349:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72753;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3349:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3348:16:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72834;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4133:61:173";
                readonly nodes: readonly [];
                readonly functionSelector: "01e1d114";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalAssets";
                readonly nameLocation: "4142:11:173";
                readonly parameters: {
                    readonly id: 72830;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4153:2:173";
                };
                readonly returnParameters: {
                    readonly id: 72833;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72832;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72834;
                        readonly src: "4185:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72831;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4185:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4184:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72858;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4200:257:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72857;
                    readonly nodeType: "Block";
                    readonly src: "4279:178:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [72842];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 72842;
                            readonly mutability: "mutable";
                            readonly name: "supply";
                            readonly nameLocation: "4297:6:173";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 72857;
                            readonly src: "4289:14:173";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 72841;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4289:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 72844;
                        readonly initialValue: {
                            readonly id: 72843;
                            readonly name: "totalSupply";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 72143;
                            readonly src: "4306:11:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4289:28:173";
                    }, {
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72847;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 72845;
                                    readonly name: "supply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72842;
                                    readonly src: "4387:6:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 72846;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4397:1:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4387:11:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 72851;
                                    readonly name: "supply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72842;
                                    readonly src: "4428:6:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 72852;
                                        readonly name: "totalAssets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72834;
                                        readonly src: "4436:11:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                            readonly typeString: "function () view returns (uint256)";
                                        };
                                    };
                                    readonly id: 72853;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4436:13:173";
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
                                    }];
                                    readonly expression: {
                                        readonly id: 72849;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72836;
                                        readonly src: "4410:6:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 72850;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4417:10:173";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 73115;
                                    readonly src: "4410:17:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 72854;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4410:40:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72855;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "4387:63:173";
                            readonly trueExpression: {
                                readonly id: 72848;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72836;
                                readonly src: "4401:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 72840;
                        readonly id: 72856;
                        readonly nodeType: "Return";
                        readonly src: "4380:70:173";
                    }];
                };
                readonly functionSelector: "c6e6f592";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "convertToShares";
                readonly nameLocation: "4209:15:173";
                readonly parameters: {
                    readonly id: 72837;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72836;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "4233:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72858;
                        readonly src: "4225:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72835;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4225:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4224:16:173";
                };
                readonly returnParameters: {
                    readonly id: 72840;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72839;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72858;
                        readonly src: "4270:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72838;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4270:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4269:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72882;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4463:257:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72881;
                    readonly nodeType: "Block";
                    readonly src: "4542:178:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [72866];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 72866;
                            readonly mutability: "mutable";
                            readonly name: "supply";
                            readonly nameLocation: "4560:6:173";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 72881;
                            readonly src: "4552:14:173";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 72865;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4552:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 72868;
                        readonly initialValue: {
                            readonly id: 72867;
                            readonly name: "totalSupply";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 72143;
                            readonly src: "4569:11:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4552:28:173";
                    }, {
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72871;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 72869;
                                    readonly name: "supply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72866;
                                    readonly src: "4650:6:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 72870;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4660:1:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4650:11:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 72875;
                                        readonly name: "totalAssets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72834;
                                        readonly src: "4691:11:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                            readonly typeString: "function () view returns (uint256)";
                                        };
                                    };
                                    readonly id: 72876;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4691:13:173";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 72877;
                                    readonly name: "supply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72866;
                                    readonly src: "4706:6:173";
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
                                        readonly id: 72873;
                                        readonly name: "shares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72860;
                                        readonly src: "4673:6:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 72874;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4680:10:173";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 73115;
                                    readonly src: "4673:17:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 72878;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4673:40:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72879;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "4650:63:173";
                            readonly trueExpression: {
                                readonly id: 72872;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72860;
                                readonly src: "4664:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 72864;
                        readonly id: 72880;
                        readonly nodeType: "Return";
                        readonly src: "4643:70:173";
                    }];
                };
                readonly functionSelector: "07a2d13a";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "convertToAssets";
                readonly nameLocation: "4472:15:173";
                readonly parameters: {
                    readonly id: 72861;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72860;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "4496:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72882;
                        readonly src: "4488:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72859;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4488:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4487:16:173";
                };
                readonly returnParameters: {
                    readonly id: 72864;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72863;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72882;
                        readonly src: "4533:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72862;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4533:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4532:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72894;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4726:125:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72893;
                    readonly nodeType: "Block";
                    readonly src: "4804:47:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72890;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72884;
                                readonly src: "4837:6:173";
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
                                readonly id: 72889;
                                readonly name: "convertToShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72858;
                                readonly src: "4821:15:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 72891;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4821:23:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 72888;
                        readonly id: 72892;
                        readonly nodeType: "Return";
                        readonly src: "4814:30:173";
                    }];
                };
                readonly functionSelector: "ef8b30f7";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewDeposit";
                readonly nameLocation: "4735:14:173";
                readonly parameters: {
                    readonly id: 72885;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72884;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "4758:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72894;
                        readonly src: "4750:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72883;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4750:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4749:16:173";
                };
                readonly returnParameters: {
                    readonly id: 72888;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72887;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72894;
                        readonly src: "4795:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72886;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4795:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4794:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72918;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4857:251:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72917;
                    readonly nodeType: "Block";
                    readonly src: "4932:176:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [72902];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 72902;
                            readonly mutability: "mutable";
                            readonly name: "supply";
                            readonly nameLocation: "4950:6:173";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 72917;
                            readonly src: "4942:14:173";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 72901;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4942:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 72904;
                        readonly initialValue: {
                            readonly id: 72903;
                            readonly name: "totalSupply";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 72143;
                            readonly src: "4959:11:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4942:28:173";
                    }, {
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72907;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 72905;
                                    readonly name: "supply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72902;
                                    readonly src: "5040:6:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 72906;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5050:1:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "5040:11:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 72911;
                                        readonly name: "totalAssets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72834;
                                        readonly src: "5079:11:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                            readonly typeString: "function () view returns (uint256)";
                                        };
                                    };
                                    readonly id: 72912;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5079:13:173";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 72913;
                                    readonly name: "supply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72902;
                                    readonly src: "5094:6:173";
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
                                        readonly id: 72909;
                                        readonly name: "shares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72896;
                                        readonly src: "5063:6:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 72910;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5070:8:173";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 73128;
                                    readonly src: "5063:15:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 72914;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5063:38:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72915;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "5040:61:173";
                            readonly trueExpression: {
                                readonly id: 72908;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72896;
                                readonly src: "5054:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 72900;
                        readonly id: 72916;
                        readonly nodeType: "Return";
                        readonly src: "5033:68:173";
                    }];
                };
                readonly functionSelector: "b3d7f6b9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewMint";
                readonly nameLocation: "4866:11:173";
                readonly parameters: {
                    readonly id: 72897;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72896;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "4886:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72918;
                        readonly src: "4878:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72895;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4878:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4877:16:173";
                };
                readonly returnParameters: {
                    readonly id: 72900;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72899;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72918;
                        readonly src: "4923:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72898;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4923:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4922:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72942;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5114:255:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72941;
                    readonly nodeType: "Block";
                    readonly src: "5193:176:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [72926];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 72926;
                            readonly mutability: "mutable";
                            readonly name: "supply";
                            readonly nameLocation: "5211:6:173";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 72941;
                            readonly src: "5203:14:173";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 72925;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5203:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 72928;
                        readonly initialValue: {
                            readonly id: 72927;
                            readonly name: "totalSupply";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 72143;
                            readonly src: "5220:11:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5203:28:173";
                    }, {
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72931;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 72929;
                                    readonly name: "supply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72926;
                                    readonly src: "5301:6:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 72930;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5311:1:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "5301:11:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 72935;
                                    readonly name: "supply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72926;
                                    readonly src: "5340:6:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 72936;
                                        readonly name: "totalAssets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72834;
                                        readonly src: "5348:11:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                            readonly typeString: "function () view returns (uint256)";
                                        };
                                    };
                                    readonly id: 72937;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5348:13:173";
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
                                    }];
                                    readonly expression: {
                                        readonly id: 72933;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72920;
                                        readonly src: "5324:6:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 72934;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5331:8:173";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 73128;
                                    readonly src: "5324:15:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 72938;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5324:38:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 72939;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "5301:61:173";
                            readonly trueExpression: {
                                readonly id: 72932;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72920;
                                readonly src: "5315:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 72924;
                        readonly id: 72940;
                        readonly nodeType: "Return";
                        readonly src: "5294:68:173";
                    }];
                };
                readonly functionSelector: "0a28a477";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewWithdraw";
                readonly nameLocation: "5123:15:173";
                readonly parameters: {
                    readonly id: 72921;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72920;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "5147:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72942;
                        readonly src: "5139:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72919;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5139:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5138:16:173";
                };
                readonly returnParameters: {
                    readonly id: 72924;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72923;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72942;
                        readonly src: "5184:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72922;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5184:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5183:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72954;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5375:124:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72953;
                    readonly nodeType: "Block";
                    readonly src: "5452:47:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 72950;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72944;
                                readonly src: "5485:6:173";
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
                                readonly id: 72949;
                                readonly name: "convertToAssets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72882;
                                readonly src: "5469:15:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 72951;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5469:23:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 72948;
                        readonly id: 72952;
                        readonly nodeType: "Return";
                        readonly src: "5462:30:173";
                    }];
                };
                readonly functionSelector: "4cdad506";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "previewRedeem";
                readonly nameLocation: "5384:13:173";
                readonly parameters: {
                    readonly id: 72945;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72944;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "5406:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72954;
                        readonly src: "5398:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72943;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5398:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5397:16:173";
                };
                readonly returnParameters: {
                    readonly id: 72948;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72947;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72954;
                        readonly src: "5443:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72946;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5443:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5442:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72968;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5696:108:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72967;
                    readonly nodeType: "Block";
                    readonly src: "5763:41:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly id: 72963;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5785:7:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 72962;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5785:7:173";
                                        readonly typeDescriptions: {};
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    }];
                                    readonly id: 72961;
                                    readonly name: "type";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -27;
                                    readonly src: "5780:4:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_metatype_pure$__$returns$__$";
                                        readonly typeString: "function () pure";
                                    };
                                };
                                readonly id: 72964;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5780:13:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_magic_meta_type_t_uint256";
                                    readonly typeString: "type(uint256)";
                                };
                            };
                            readonly id: 72965;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly memberLocation: "5794:3:173";
                            readonly memberName: "max";
                            readonly nodeType: "MemberAccess";
                            readonly src: "5780:17:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 72960;
                        readonly id: 72966;
                        readonly nodeType: "Return";
                        readonly src: "5773:24:173";
                    }];
                };
                readonly functionSelector: "402d267d";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxDeposit";
                readonly nameLocation: "5705:10:173";
                readonly parameters: {
                    readonly id: 72957;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72956;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72968;
                        readonly src: "5716:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72955;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5716:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5715:9:173";
                };
                readonly returnParameters: {
                    readonly id: 72960;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72959;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72968;
                        readonly src: "5754:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72958;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5754:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5753:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72982;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5810:105:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72981;
                    readonly nodeType: "Block";
                    readonly src: "5874:41:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly id: 72977;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5896:7:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 72976;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5896:7:173";
                                        readonly typeDescriptions: {};
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    }];
                                    readonly id: 72975;
                                    readonly name: "type";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -27;
                                    readonly src: "5891:4:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_metatype_pure$__$returns$__$";
                                        readonly typeString: "function () pure";
                                    };
                                };
                                readonly id: 72978;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5891:13:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_magic_meta_type_t_uint256";
                                    readonly typeString: "type(uint256)";
                                };
                            };
                            readonly id: 72979;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly memberLocation: "5905:3:173";
                            readonly memberName: "max";
                            readonly nodeType: "MemberAccess";
                            readonly src: "5891:17:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 72974;
                        readonly id: 72980;
                        readonly nodeType: "Return";
                        readonly src: "5884:24:173";
                    }];
                };
                readonly functionSelector: "c63d75b6";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxMint";
                readonly nameLocation: "5819:7:173";
                readonly parameters: {
                    readonly id: 72971;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72970;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72982;
                        readonly src: "5827:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72969;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5827:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5826:9:173";
                };
                readonly returnParameters: {
                    readonly id: 72974;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72973;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72982;
                        readonly src: "5865:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72972;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5865:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5864:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72996;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5921:131:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72995;
                    readonly nodeType: "Block";
                    readonly src: "5995:57:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly baseExpression: {
                                    readonly id: 72990;
                                    readonly name: "balanceOf";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72147;
                                    readonly src: "6028:9:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 72992;
                                readonly indexExpression: {
                                    readonly id: 72991;
                                    readonly name: "owner";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72984;
                                    readonly src: "6038:5:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "IndexAccess";
                                readonly src: "6028:16:173";
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
                                readonly id: 72989;
                                readonly name: "convertToAssets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72882;
                                readonly src: "6012:15:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 72993;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6012:33:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 72988;
                        readonly id: 72994;
                        readonly nodeType: "Return";
                        readonly src: "6005:40:173";
                    }];
                };
                readonly functionSelector: "ce96cb77";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxWithdraw";
                readonly nameLocation: "5930:11:173";
                readonly parameters: {
                    readonly id: 72985;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72984;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "5950:5:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72996;
                        readonly src: "5942:13:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72983;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5942:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5941:15:173";
                };
                readonly returnParameters: {
                    readonly id: 72988;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72987;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72996;
                        readonly src: "5986:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 72986;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5986:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5985:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 73008;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6058:112:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73007;
                    readonly nodeType: "Block";
                    readonly src: "6130:40:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly baseExpression: {
                                readonly id: 73003;
                                readonly name: "balanceOf";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72147;
                                readonly src: "6147:9:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                    readonly typeString: "mapping(address => uint256)";
                                };
                            };
                            readonly id: 73005;
                            readonly indexExpression: {
                                readonly id: 73004;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72998;
                                readonly src: "6157:5:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "IndexAccess";
                            readonly src: "6147:16:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 73002;
                        readonly id: 73006;
                        readonly nodeType: "Return";
                        readonly src: "6140:23:173";
                    }];
                };
                readonly functionSelector: "d905777e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maxRedeem";
                readonly nameLocation: "6067:9:173";
                readonly parameters: {
                    readonly id: 72999;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72998;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "6085:5:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73008;
                        readonly src: "6077:13:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72997;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6077:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6076:15:173";
                };
                readonly returnParameters: {
                    readonly id: 73002;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73001;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73008;
                        readonly src: "6121:7:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73000;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6121:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6120:9:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 73016;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6362:75:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73015;
                    readonly nodeType: "Block";
                    readonly src: "6435:2:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "beforeWithdraw";
                readonly nameLocation: "6371:14:173";
                readonly parameters: {
                    readonly id: 73013;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73010;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "6394:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73016;
                        readonly src: "6386:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73009;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6386:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73012;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "6410:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73016;
                        readonly src: "6402:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73011;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6402:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6385:32:173";
                };
                readonly returnParameters: {
                    readonly id: 73014;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6435:0:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 73024;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6443:73:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73023;
                    readonly nodeType: "Block";
                    readonly src: "6514:2:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "afterDeposit";
                readonly nameLocation: "6452:12:173";
                readonly parameters: {
                    readonly id: 73021;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73018;
                        readonly mutability: "mutable";
                        readonly name: "assets";
                        readonly nameLocation: "6473:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73024;
                        readonly src: "6465:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73017;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6465:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73020;
                        readonly mutability: "mutable";
                        readonly name: "shares";
                        readonly nameLocation: "6489:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73024;
                        readonly src: "6481:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73019;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6481:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6464:32:173";
                };
                readonly returnParameters: {
                    readonly id: 73022;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6514:0:173";
                };
                readonly scope: 73025;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 72514;
                    readonly name: "ERC20";
                    readonly nameLocations: readonly ["427:5:173"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 72504;
                    readonly src: "427:5:173";
                };
                readonly id: 72515;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "427:5:173";
            }];
            readonly canonicalName: "ERC4626";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 72513;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "240:158:173";
                readonly text: "@notice Minimal ERC4626 tokenized Vault implementation.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC4626.sol)";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [73025, 72504];
            readonly name: "ERC4626";
            readonly nameLocation: "416:7:173";
            readonly scope: 73026;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [72127, 72135, 72532, 72544];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 173;
};
//# sourceMappingURL=ERC4626.d.ts.map