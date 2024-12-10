export const MockERC4626 = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_asset",
                    "type": "address",
                    "internalType": "contract ERC20Mintable"
                },
                {
                    "name": "_name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_symbol",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_initialRate",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_admin",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_isCompetitionMode",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "_maxMintAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "DOMAIN_SEPARATOR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "allowance",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "asset",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ERC20"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "authority",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract Authority"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "burn",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "burn",
            "inputs": [
                {
                    "name": "destination",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "canCall",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "convertToAssets",
            "inputs": [
                {
                    "name": "shares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "convertToShares",
            "inputs": [
                {
                    "name": "assets",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "deposit",
            "inputs": [
                {
                    "name": "_assets",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "doesRoleHaveCapability",
            "inputs": [
                {
                    "name": "role",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "doesUserHaveRole",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "role",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRate",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRolesWithCapability",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getTargetCustomAuthority",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract Authority"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUserRoles",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isCapabilityPublic",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isCompetitionMode",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isUnrestricted",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxDeposit",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxMint",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxMintAmount",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxRedeem",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxWithdraw",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "mint",
            "inputs": [
                {
                    "name": "destination",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mint",
            "inputs": [
                {
                    "name": "_shares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mint",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "nonces",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "permit",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "previewDeposit",
            "inputs": [
                {
                    "name": "assets",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "previewMint",
            "inputs": [
                {
                    "name": "shares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "previewRedeem",
            "inputs": [
                {
                    "name": "shares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "previewWithdraw",
            "inputs": [
                {
                    "name": "assets",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "redeem",
            "inputs": [
                {
                    "name": "_shares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setAuthority",
            "inputs": [
                {
                    "name": "newAuthority",
                    "type": "address",
                    "internalType": "contract Authority"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setMaxMintAmount",
            "inputs": [
                {
                    "name": "_maxMintAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPublicCapability",
            "inputs": [
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "internalType": "bytes4"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setRate",
            "inputs": [
                {
                    "name": "_rate_",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setRoleCapability",
            "inputs": [
                {
                    "name": "role",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "internalType": "bytes4"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setTargetCustomAuthority",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "customAuthority",
                    "type": "address",
                    "internalType": "contract Authority"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setUnrestrictedMintStatus",
            "inputs": [
                {
                    "name": "_target",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_status",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setUserRole",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "role",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "totalAssets",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "totalAssets",
            "inputs": [
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "totalSupply",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transfer",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "withdraw",
            "inputs": [
                {
                    "name": "_assets",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "AuthorityUpdated",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newAuthority",
                    "type": "address",
                    "indexed": true,
                    "internalType": "contract Authority"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Deposit",
            "inputs": [
                {
                    "name": "caller",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assets",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "shares",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PublicCapabilityUpdated",
            "inputs": [
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "indexed": true,
                    "internalType": "bytes4"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RoleCapabilityUpdated",
            "inputs": [
                {
                    "name": "role",
                    "type": "uint8",
                    "indexed": true,
                    "internalType": "uint8"
                },
                {
                    "name": "functionSig",
                    "type": "bytes4",
                    "indexed": true,
                    "internalType": "bytes4"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "TargetCustomAuthorityUpdated",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "authority",
                    "type": "address",
                    "indexed": true,
                    "internalType": "contract Authority"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "UserRoleUpdated",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "role",
                    "type": "uint8",
                    "indexed": true,
                    "internalType": "uint8"
                },
                {
                    "name": "enabled",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Withdraw",
            "inputs": [
                {
                    "name": "caller",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "receiver",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assets",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "shares",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        }
    ],
    bytecode: '0x61012060405234801562000011575f80fd5b5060405162002f1138038062002f11833981016040819052620000349162000307565b823081818a8a8a8181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620000a09190620003c2565b5f620000ad848262000475565b506001620000bc838262000475565b5060ff81166080524660a052620000d262000194565b60c0525050506001600160a01b0392831660e0525050600680548483166001600160a01b0319918216811790925560078054938516939091169290921790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a3505050600c9490945542600d5590151561010052600e5550620005bb9350505050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051620001c6919062000541565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b038116811462000243575f80fd5b50565b634e487b7160e01b5f52604160045260245ffd5b5f82601f8301126200026a575f80fd5b81516001600160401b038082111562000287576200028762000246565b604051601f8301601f19908116603f01168101908282118183101715620002b257620002b262000246565b8160405283815260209250866020858801011115620002cf575f80fd5b5f91505b83821015620002f25785820183015181830184015290820190620002d3565b5f602085830101528094505050505092915050565b5f805f805f805f60e0888a0312156200031e575f80fd5b87516200032b816200022e565b60208901519097506001600160401b038082111562000348575f80fd5b620003568b838c016200025a565b975060408a01519150808211156200036c575f80fd5b506200037b8a828b016200025a565b95505060608801519350608088015162000395816200022e565b60a08901519093508015158114620003ab575f80fd5b8092505060c0880151905092959891949750929550565b5f60208284031215620003d3575f80fd5b815160ff81168114620003e4575f80fd5b9392505050565b600181811c908216806200040057607f821691505b6020821081036200041f57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200047057805f5260205f20601f840160051c810160208510156200044c5750805b601f840160051c820191505b818110156200046d575f815560010162000458565b50505b505050565b81516001600160401b0381111562000491576200049162000246565b620004a981620004a28454620003eb565b8462000425565b602080601f831160018114620004df575f8415620004c75750858301515b5f19600386901b1c1916600185901b17855562000539565b5f85815260208120601f198616915b828110156200050f57888601518255948401946001909101908401620004ee565b50858210156200052d57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f8083546200055081620003eb565b600182811680156200056b57600181146200058157620005af565b60ff1984168752821515830287019450620005af565b875f526020805f205f5b85811015620005a65781548a8201529084019082016200058b565b50505082870194505b50929695505050505050565b60805160a05160c05160e051610100516128936200067e5f395f81816105c30152818161091601528181610a5701528181610ced01528181610da601528181610ef601528181611375015261145901525f81816104c40152818161089401528181610e6501528181610f4d015281816112d8015281816113cc0152818161151801528181611ac001528181611c4301528181611e4e01528181611ee501528181612033015261217001525f610d8201525f610d5201525f61047001526128935ff3fe608060405234801561000f575f80fd5b506004361061034d575f3560e01c80637a8c63b5116101c9578063ba087652116100fe578063d905777e1161009e578063ea7ca27611610079578063ea7ca276146107fa578063ed0d0efb14610830578063ef8b30f71461084f578063f2fde38b14610862575f80fd5b8063d905777e14610773578063dd62ed3e1461079b578063e688747b146107c5575f80fd5b8063c63d75b6116100d9578063c63d75b6146104fe578063c6e6f5921461073a578063ce96cb771461074d578063d505accf14610760575f80fd5b8063ba087652146106ec578063bf7e214f146106ff578063c53a398514610712575f80fd5b80639dc29fac11610169578063aed3077711610144578063aed3077714610691578063b3d7f6b9146106b3578063b460af94146106c6578063b7009613146106d9575f80fd5b80639dc29fac14610658578063a0712d681461066b578063a9059cbb1461067e575f80fd5b80638da5cb5b116101a45780638da5cb5b14610617578063946058571461062a57806394bf804d1461063d57806395d89b4114610650575f80fd5b80637a8c63b5146105be5780637a9e5e4b146105e55780637ecebe00146105f8575f80fd5b8063313ce5671161029f5780634b5159da1161023f57806367aff4841161021a57806367aff484146105665780636e553f651461057957806370a082311461058c578063728b952b146105ab575f80fd5b80634b5159da146105385780634cdad5061461054b578063679aefce1461055e575f80fd5b806338d52e0f1161027a57806338d52e0f146104bf578063402d267d146104fe57806340c10f191461051257806342966c6814610525575f80fd5b8063313ce5671461046b57806334fcf437146104a45780633644e515146104b7575f80fd5b8063095ea7b31161030a5780630ea9b75b116102e55780630ea9b75b1461043357806318160ddd14610446578063239c70ae1461044f57806323b872dd14610458575f80fd5b8063095ea7b3146103db5780630a28a477146103fe5780630bade8a414610411575f80fd5b806301e1d1141461035157806305f05a941461036c57806306a36aee1461038157806306fdde03146103a057806307a2d13a146103b5578063088a4ed0146103c8575b5f80fd5b610359610875565b6040519081526020015b60405180910390f35b61037f61037a3660046122fb565b610914565b005b61035961038f366004612332565b60096020525f908152604090205481565b6103a861099e565b604051610363919061234d565b6103596103c3366004612399565b610a29565b61037f6103d6366004612399565b610a55565b6103ee6103e93660046123b0565b610ab1565b6040519015158152602001610363565b61035961040c366004612399565b610b1d565b6103ee61041f3660046123f6565b600a6020525f908152604090205460ff1681565b61037f61044136600461241f565b610b3c565b61035960025481565b610359600e5481565b6103ee610466366004612463565b610c11565b6104927f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610363565b61037f6104b2366004612399565b610ceb565b610359610d4f565b6104e67f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610363565b61035961050c366004612332565b505f1990565b61037f6105203660046123b0565b610da4565b61037f610533366004612399565b610ef4565b61037f6105463660046124a1565b610fdb565b610359610559366004612399565b61106b565b600c54610359565b61037f6105743660046124bb565b611075565b6103596105873660046124e6565b61113a565b61035961059a366004612332565b60036020525f908152604090205481565b61037f6105b9366004612509565b61114d565b6103ee7f000000000000000000000000000000000000000000000000000000000000000081565b61037f6105f3366004612332565b6111d4565b610359610606366004612332565b60056020525f908152604090205481565b6006546104e6906001600160a01b031681565b610359610638366004612399565b6112b9565b61035961064b3660046124e6565b611353565b6103a8611366565b61037f6106663660046123b0565b611373565b61037f610679366004612399565b611457565b6103ee61068c3660046123b0565b6115a3565b6103ee61069f366004612332565b600f6020525f908152604090205460ff1681565b6103596106c1366004612399565b611606565b6103596106d4366004612535565b611624565b6103ee6106e7366004612569565b611640565b6103596106fa366004612535565b611739565b6007546104e6906001600160a01b031681565b6104e6610720366004612332565b60086020525f90815260409020546001600160a01b031681565b610359610748366004612399565b61174d565b61035961075b366004612332565b61176c565b61037f61076e3660046125ad565b61178d565b610359610781366004612332565b6001600160a01b03165f9081526003602052604090205490565b6103596107a9366004612509565b600460209081525f928352604080842090915290825290205481565b6103ee6107d3366004612616565b6001600160e01b0319165f908152600b602052604090205460ff919091161c600116151590565b6103ee610808366004612647565b6001600160a01b03919091165f90815260096020526040902054600160ff9092161c16151590565b61035961083e3660046123f6565b600b6020525f908152604090205481565b61035961085d366004612399565b6119cb565b61037f610870366004612332565b6119d5565b5f61087f42611a51565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156108e1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109059190612671565b61090f919061269c565b905090565b7f0000000000000000000000000000000000000000000000000000000000000000156109745761094f335f356001600160e01b031916611b37565b6109745760405162461bcd60e51b815260040161096b906126af565b60405180910390fd5b6001600160a01b03919091165f908152600f60205260409020805460ff1916911515919091179055565b5f80546109aa906126e6565b80601f01602080910402602001604051908101604052809291908181526020018280546109d6906126e6565b8015610a215780601f106109f857610100808354040283529160200191610a21565b820191905f5260205f20905b815481529060010190602001808311610a0457829003601f168201915b505050505081565b6002545f908015610a4c57610a47610a3f610875565b849083611bdd565b610a4e565b825b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610aac57610a90335f356001600160e01b031916611b37565b610aac5760405162461bcd60e51b815260040161096b906126af565b600e55565b335f8181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610b0b9086815260200190565b60405180910390a35060015b92915050565b6002545f908015610a4c57610a4781610b34610875565b859190611bf8565b610b51335f356001600160e01b031916611b37565b610b6d5760405162461bcd60e51b815260040161096b9061271e565b8015610b9c576001600160e01b031982165f908152600b602052604090208054600160ff86161b179055610bc2565b6001600160e01b031982165f908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610c04911515815260200190565b60405180910390a3505050565b6001600160a01b0383165f9081526004602090815260408083203384529091528120545f198114610c6a57610c468382612744565b6001600160a01b0386165f9081526004602090815260408083203384529091529020555b6001600160a01b0385165f9081526003602052604081208054859290610c91908490612744565b90915550506001600160a01b038085165f81815260036020526040908190208054870190555190918716905f8051602061283e83398151915290610cd89087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610d4257610d26335f356001600160e01b031916611b37565b610d425760405162461bcd60e51b815260040161096b906126af565b610d4a611c1b565b600c55565b5f7f00000000000000000000000000000000000000000000000000000000000000004614610d7f5761090f611caa565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000015610dfb57610ddf335f356001600160e01b031916611b37565b610dfb5760405162461bcd60e51b815260040161096b906126af565b335f908152600f602052604090205460ff16610e6357600e54811115610e635760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74604482015260640161096b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a0712d68610e9b83610a29565b6040518263ffffffff1660e01b8152600401610eb991815260200190565b5f604051808303815f87803b158015610ed0575f80fd5b505af1158015610ee2573d5f803e3d5ffd5b50505050610ef08282611d42565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610f4b57610f2f335f356001600160e01b031916611b37565b610f4b5760405162461bcd60e51b815260040161096b906126af565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166342966c68610f8383610a29565b6040518263ffffffff1660e01b8152600401610fa191815260200190565b5f604051808303815f87803b158015610fb8575f80fd5b505af1158015610fca573d5f803e3d5ffd5b50505050610fd83382611d99565b50565b610ff0335f356001600160e01b031916611b37565b61100c5760405162461bcd60e51b815260040161096b9061271e565b6001600160e01b031982165f818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b5f610b1782610a29565b61108a335f356001600160e01b031916611b37565b6110a65760405162461bcd60e51b815260040161096b9061271e565b80156110d4576001600160a01b0383165f9081526009602052604090208054600160ff85161b1790556110f9565b6001600160a01b0383165f9081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610c04911515815260200190565b5f611143611c1b565b610a4e8383611df8565b611162335f356001600160e01b031916611b37565b61117e5760405162461bcd60e51b815260040161096b9061271e565b6001600160a01b038281165f8181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480611266575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061122790339030906001600160e01b03195f351690600401612757565b602060405180830381865afa158015611242573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112669190612784565b61126e575f80fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a350565b5f6112c382611a51565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611325573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113499190612671565b610b17919061269c565b5f61135c611c1b565b610a4e8383611ecc565b600180546109aa906126e6565b7f0000000000000000000000000000000000000000000000000000000000000000156113ca576113ae335f356001600160e01b031916611b37565b6113ca5760405162461bcd60e51b815260040161096b906126af565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166342966c6861140283610a29565b6040518263ffffffff1660e01b815260040161142091815260200190565b5f604051808303815f87803b158015611437575f80fd5b505af1158015611449573d5f803e3d5ffd5b50505050610ef08282611d99565b7f0000000000000000000000000000000000000000000000000000000000000000156114ae57611492335f356001600160e01b031916611b37565b6114ae5760405162461bcd60e51b815260040161096b906126af565b335f908152600f602052604090205460ff1661151657600e548111156115165760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74604482015260640161096b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a0712d6861154e83610a29565b6040518263ffffffff1660e01b815260040161156c91815260200190565b5f604051808303815f87803b158015611583575f80fd5b505af1158015611595573d5f803e3d5ffd5b50505050610fd83382611d42565b335f908152600360205260408120805483919083906115c3908490612744565b90915550506001600160a01b0383165f81815260036020526040908190208054850190555133905f8051602061283e83398151915290610b0b9086815260200190565b6002545f908015610a4c57610a4761161c610875565b849083611bf8565b5f61162d611c1b565b611638848484611f5a565b949350505050565b6001600160a01b038083165f9081526008602052604081205490911680156116d95760405163b700961360e01b81526001600160a01b0382169063b70096139061169290889088908890600401612757565b602060405180830381865afa1580156116ad573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116d19190612784565b915050610a4e565b6001600160e01b031983165f908152600a602052604090205460ff168061173057506001600160e01b031983165f908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b5f611742611c1b565b61163884848461205a565b6002545f908015610a4c57610a4781611764610875565b859190611bdd565b6001600160a01b0381165f90815260036020526040812054610b1790610a29565b428410156117dd5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f45585049524544000000000000000000604482015260640161096b565b5f60016117e8610d4f565b6001600160a01b038a81165f8181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f1981840301815282825280516020918201205f84529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156118f0573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116158015906119265750876001600160a01b0316816001600160a01b0316145b6119635760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b604482015260640161096b565b6001600160a01b039081165f9081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b5f610b178261174d565b6119ea335f356001600160e01b031916611b37565b611a065760405162461bcd60e51b815260040161096b9061271e565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a350565b5f600c545f03611a6257505f919050565b600d54821015611a7357505f919050565b5f611a906301e13380600d5485611a8a9190612744565b90612197565b90505f611638611aab83600c546121ab90919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611b0d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b319190612671565b906121ab565b6007545f906001600160a01b03168015801590611bbe575060405163b700961360e01b81526001600160a01b0382169063b700961390611b7f90879030908890600401612757565b602060405180830381865afa158015611b9a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611bbe9190612784565b8061163857506006546001600160a01b03858116911614949350505050565b5f825f190484118302158202611bf1575f80fd5b5091020490565b5f825f190484118302158202611c0c575f80fd5b50910281810615159190040190565b5f611c2542611a51565b90508015611ca35760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d68906024015f604051808303815f87803b158015611c8c575f80fd5b505af1158015611c9e573d5f803e3d5ffd5b505050505b5042600d55565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051611cda919061279f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8060025f828254611d53919061269c565b90915550506001600160a01b0382165f818152600360209081526040808320805486019055518481525f8051602061283e83398151915291015b60405180910390a35050565b6001600160a01b0382165f9081526003602052604081208054839290611dc0908490612744565b90915550506002805482900390556040518181525f906001600160a01b038416905f8051602061283e83398151915290602001611d8d565b5f611e02836119cb565b9050805f03611e415760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b604482015260640161096b565b611e766001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866121bf565b611e808282611d42565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a3610b17565b5f611ed683611606565b9050611f0d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330846121bf565b611f178284611d42565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611ebf565b5f611f6484610b1d565b9050336001600160a01b03831614611fd1576001600160a01b0382165f9081526004602090815260408083203384529091529020545f198114611fcf57611fab8282612744565b6001600160a01b0384165f9081526004602090815260408083203384529091529020555b505b611fdb8282611d99565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a4610a4e6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612257565b5f336001600160a01b038316146120c6576001600160a01b0382165f9081526004602090815260408083203384529091529020545f1981146120c4576120a08582612744565b6001600160a01b0384165f9081526004602090815260408083203384529091529020555b505b6120cf8461106b565b9050805f0361210e5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b604482015260640161096b565b6121188285611d99565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a4610a4e6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483612257565b5f610a4e83670de0b6b3a764000084611bdd565b5f610a4e8383670de0b6b3a7640000611bdd565b5f6040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b038416602482015282604482015260205f6064835f8a5af13d15601f3d1160015f5114161716915050806122505760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b604482015260640161096b565b5050505050565b5f60405163a9059cbb60e01b81526001600160a01b038416600482015282602482015260205f6044835f895af13d15601f3d1160015f5114161716915050806122d45760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015260640161096b565b50505050565b6001600160a01b0381168114610fd8575f80fd5b8015158114610fd8575f80fd5b5f806040838503121561230c575f80fd5b8235612317816122da565b91506020830135612327816122ee565b809150509250929050565b5f60208284031215612342575f80fd5b8135610a4e816122da565b5f602080835283518060208501525f5b818110156123795785810183015185820160400152820161235d565b505f604082860101526040601f19601f8301168501019250505092915050565b5f602082840312156123a9575f80fd5b5035919050565b5f80604083850312156123c1575f80fd5b82356123cc816122da565b946020939093013593505050565b80356001600160e01b0319811681146123f1575f80fd5b919050565b5f60208284031215612406575f80fd5b610a4e826123da565b803560ff811681146123f1575f80fd5b5f805f60608486031215612431575f80fd5b61243a8461240f565b9250612448602085016123da565b91506040840135612458816122ee565b809150509250925092565b5f805f60608486031215612475575f80fd5b8335612480816122da565b92506020840135612490816122da565b929592945050506040919091013590565b5f80604083850312156124b2575f80fd5b612317836123da565b5f805f606084860312156124cd575f80fd5b83356124d8816122da565b92506124486020850161240f565b5f80604083850312156124f7575f80fd5b823591506020830135612327816122da565b5f806040838503121561251a575f80fd5b8235612525816122da565b91506020830135612327816122da565b5f805f60608486031215612547575f80fd5b833592506020840135612559816122da565b91506040840135612458816122da565b5f805f6060848603121561257b575f80fd5b8335612586816122da565b92506020840135612596816122da565b91506125a4604085016123da565b90509250925092565b5f805f805f805f60e0888a0312156125c3575f80fd5b87356125ce816122da565b965060208801356125de816122da565b955060408801359450606088013593506125fa6080890161240f565b925060a0880135915060c0880135905092959891949750929550565b5f8060408385031215612627575f80fd5b6126308361240f565b915061263e602084016123da565b90509250929050565b5f8060408385031215612658575f80fd5b8235612663816122da565b915061263e6020840161240f565b5f60208284031215612681575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b80820180821115610b1757610b17612688565b6020808252601b908201527f4d6f636b455243343632363a206e6f7420617574686f72697a65640000000000604082015260600190565b600181811c908216806126fa57607f821691505b60208210810361271857634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b81810381811115610b1757610b17612688565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b5f60208284031215612794575f80fd5b8151610a4e816122ee565b5f8083545f60018260011c915060018316806127bc57607f831692505b602080841082036127db57634e487b7160e01b5f52602260045260245ffd5b8180156127ef57600181146128045761282f565b60ff198616895284151585028901965061282f565b5f8a8152602090205f5b868110156128275781548b82015290850190830161280e565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220b220b2d5d9ce4fd8847df228ec894fd939f3199032d19ba586c75609726f1c8364736f6c63430008160033',
    methodIdentifiers: {
        "DOMAIN_SEPARATOR()": "3644e515",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "asset()": "38d52e0f",
        "authority()": "bf7e214f",
        "balanceOf(address)": "70a08231",
        "burn(address,uint256)": "9dc29fac",
        "burn(uint256)": "42966c68",
        "canCall(address,address,bytes4)": "b7009613",
        "convertToAssets(uint256)": "07a2d13a",
        "convertToShares(uint256)": "c6e6f592",
        "decimals()": "313ce567",
        "deposit(uint256,address)": "6e553f65",
        "doesRoleHaveCapability(uint8,bytes4)": "e688747b",
        "doesUserHaveRole(address,uint8)": "ea7ca276",
        "getRate()": "679aefce",
        "getRolesWithCapability(bytes4)": "ed0d0efb",
        "getTargetCustomAuthority(address)": "c53a3985",
        "getUserRoles(address)": "06a36aee",
        "isCapabilityPublic(bytes4)": "0bade8a4",
        "isCompetitionMode()": "7a8c63b5",
        "isUnrestricted(address)": "aed30777",
        "maxDeposit(address)": "402d267d",
        "maxMint(address)": "c63d75b6",
        "maxMintAmount()": "239c70ae",
        "maxRedeem(address)": "d905777e",
        "maxWithdraw(address)": "ce96cb77",
        "mint(address,uint256)": "40c10f19",
        "mint(uint256)": "a0712d68",
        "mint(uint256,address)": "94bf804d",
        "name()": "06fdde03",
        "nonces(address)": "7ecebe00",
        "owner()": "8da5cb5b",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "previewDeposit(uint256)": "ef8b30f7",
        "previewMint(uint256)": "b3d7f6b9",
        "previewRedeem(uint256)": "4cdad506",
        "previewWithdraw(uint256)": "0a28a477",
        "redeem(uint256,address,address)": "ba087652",
        "setAuthority(address)": "7a9e5e4b",
        "setMaxMintAmount(uint256)": "088a4ed0",
        "setPublicCapability(bytes4,bool)": "4b5159da",
        "setRate(uint256)": "34fcf437",
        "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
        "setTargetCustomAuthority(address,address)": "728b952b",
        "setUnrestrictedMintStatus(address,bool)": "05f05a94",
        "setUserRole(address,uint8,bool)": "67aff484",
        "symbol()": "95d89b41",
        "totalAssets()": "01e1d114",
        "totalAssets(uint256)": "94605857",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd",
        "transferOwnership(address)": "f2fde38b",
        "withdraw(uint256,address,address)": "b460af94"
    }
};
