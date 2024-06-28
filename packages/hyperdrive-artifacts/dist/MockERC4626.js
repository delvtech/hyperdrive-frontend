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
    bytecode: '0x6101206040523480156200001257600080fd5b506040516200301b3803806200301b833981016040819052620000359162000314565b823081818a8a8a8181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000a39190620003d7565b6000620000b1848262000492565b506001620000c0838262000492565b5060ff81166080524660a052620000d66200019a565b60c0525050506001600160a01b0392831660e0525050600680548483166001600160a01b0319918216811790925560078054938516939091169290921790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a3505050600c9490945542600d5590151561010052600e5550620005dc9350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001ce91906200055e565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b03811681146200024c57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200027757600080fd5b81516001600160401b03808211156200029457620002946200024f565b604051601f8301601f19908116603f01168101908282118183101715620002bf57620002bf6200024f565b81604052838152602092508683858801011115620002dc57600080fd5b600091505b83821015620003005785820183015181830184015290820190620002e1565b600093810190920192909252949350505050565b600080600080600080600060e0888a0312156200033057600080fd5b87516200033d8162000236565b60208901519097506001600160401b03808211156200035b57600080fd5b620003698b838c0162000265565b975060408a01519150808211156200038057600080fd5b506200038f8a828b0162000265565b955050606088015193506080880151620003a98162000236565b60a08901519093508015158114620003c057600080fd5b8092505060c0880151905092959891949750929550565b600060208284031215620003ea57600080fd5b815160ff81168114620003fc57600080fd5b9392505050565b600181811c908216806200041857607f821691505b6020821081036200043957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200048d57600081815260208120601f850160051c81016020861015620004685750805b601f850160051c820191505b81811015620004895782815560010162000474565b5050505b505050565b81516001600160401b03811115620004ae57620004ae6200024f565b620004c681620004bf845462000403565b846200043f565b602080601f831160018114620004fe5760008415620004e55750858301515b600019600386901b1c1916600185901b17855562000489565b600085815260208120601f198616915b828110156200052f578886015182559484019460019091019084016200050e565b50858210156200054e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008083546200056e8162000403565b600182811680156200058957600181146200059f57620005d0565b60ff1984168752821515830287019450620005d0565b8760005260208060002060005b85811015620005c75781548a820152908401908201620005ac565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161010051612975620006a6600039600081816105d80152818161093601528181610a7d01528181610d1f01528181610dda01528181610f31015281816113c801526114b20152600081816104d7015281816108b201528181610e9b01528181610f8901528181611328015281816114200152818161157301528181611b3c01528181611ccb01528181611ee501528181611f7d015281816120cf015261221101526000610db601526000610d860152600061048301526129756000f3fe608060405234801561001057600080fd5b506004361061035d5760003560e01c80637a8c63b5116101d3578063ba08765211610104578063d905777e116100a2578063ea7ca2761161007c578063ea7ca27614610815578063ed0d0efb1461084c578063ef8b30f71461086c578063f2fde38b1461087f57600080fd5b8063d905777e1461078b578063dd62ed3e146107b4578063e688747b146107df57600080fd5b8063c63d75b6116100de578063c63d75b614610511578063c6e6f59214610752578063ce96cb7714610765578063d505accf1461077857600080fd5b8063ba08765214610703578063bf7e214f14610716578063c53a39851461072957600080fd5b80639dc29fac11610171578063aed307771161014b578063aed30777146106a7578063b3d7f6b9146106ca578063b460af94146106dd578063b7009613146106f057600080fd5b80639dc29fac1461066e578063a0712d6814610681578063a9059cbb1461069457600080fd5b80638da5cb5b116101ad5780638da5cb5b1461062d578063946058571461064057806394bf804d1461065357806395d89b411461066657600080fd5b80637a8c63b5146105d35780637a9e5e4b146105fa5780637ecebe001461060d57600080fd5b8063313ce567116102ad5780634b5159da1161024b57806367aff4841161022557806367aff4841461057a5780636e553f651461058d57806370a08231146105a0578063728b952b146105c057600080fd5b80634b5159da1461054c5780634cdad5061461055f578063679aefce1461057257600080fd5b806338d52e0f1161028757806338d52e0f146104d2578063402d267d1461051157806340c10f191461052657806342966c681461053957600080fd5b8063313ce5671461047e57806334fcf437146104b75780633644e515146104ca57600080fd5b8063095ea7b31161031a5780630ea9b75b116102f45780630ea9b75b1461044657806318160ddd14610459578063239c70ae1461046257806323b872dd1461046b57600080fd5b8063095ea7b3146103ed5780630a28a477146104105780630bade8a41461042357600080fd5b806301e1d1141461036257806305f05a941461037d57806306a36aee1461039257806306fdde03146103b257806307a2d13a146103c7578063088a4ed0146103da575b600080fd5b61036a610892565b6040519081526020015b60405180910390f35b61039061038b3660046123a8565b610934565b005b61036a6103a03660046123e1565b60096020526000908152604090205481565b6103ba6109c0565b60405161037491906123fe565b61036a6103d536600461244c565b610a4e565b6103906103e836600461244c565b610a7b565b6104006103fb366004612465565b610ad8565b6040519015158152602001610374565b61036a61041e36600461244c565b610b45565b6104006104313660046124ae565b600a6020526000908152604090205460ff1681565b6103906104543660046124da565b610b65565b61036a60025481565b61036a600e5481565b610400610479366004612521565b610c3d565b6104a57f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610374565b6103906104c536600461244c565b610d1d565b61036a610d82565b6104f97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610374565b61036a61051f3660046123e1565b5060001990565b610390610534366004612465565b610dd8565b61039061054736600461244c565b610f2f565b61039061055a366004612562565b61101c565b61036a61056d36600461244c565b6110ae565b600c5461036a565b61039061058836600461257e565b6110b9565b61036a61059b3660046125ac565b611181565b61036a6105ae3660046123e1565b60036020526000908152604090205481565b6103906105ce3660046125d1565b611195565b6104007f000000000000000000000000000000000000000000000000000000000000000081565b6103906106083660046123e1565b61121e565b61036a61061b3660046123e1565b60056020526000908152604090205481565b6006546104f9906001600160a01b031681565b61036a61064e36600461244c565b611308565b61036a6106613660046125ac565b6113a5565b6103ba6113b9565b61039061067c366004612465565b6113c6565b61039061068f36600461244c565b6114b0565b6104006106a2366004612465565b611603565b6104006106b53660046123e1565b600f6020526000908152604090205460ff1681565b61036a6106d836600461244c565b611669565b61036a6106eb3660046125ff565b611688565b6104006106fe366004612636565b6116a5565b61036a6107113660046125ff565b6117a3565b6007546104f9906001600160a01b031681565b6104f96107373660046123e1565b6008602052600090815260409020546001600160a01b031681565b61036a61076036600461244c565b6117b8565b61036a6107733660046123e1565b6117d8565b61039061078636600461267d565b6117fa565b61036a6107993660046123e1565b6001600160a01b031660009081526003602052604090205490565b61036a6107c23660046125d1565b600460209081526000928352604080842090915290825290205481565b6104006107ed3660046126eb565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61040061082336600461271e565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61036a61085a3660046124ae565b600b6020526000908152604090205481565b61036a61087a36600461244c565b611a3e565b61039061088d3660046123e1565b611a49565b600061089d42611ac7565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610901573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610925919061274a565b61092f9190612779565b905090565b7f00000000000000000000000000000000000000000000000000000000000000001561099557610970336000356001600160e01b031916611bb5565b6109955760405162461bcd60e51b815260040161098c9061278c565b60405180910390fd5b6001600160a01b03919091166000908152600f60205260409020805460ff1916911515919091179055565b600080546109cd906127c3565b80601f01602080910402602001604051908101604052809291908181526020018280546109f9906127c3565b8015610a465780601f10610a1b57610100808354040283529160200191610a46565b820191906000526020600020905b815481529060010190602001808311610a2957829003601f168201915b505050505081565b6002546000908015610a7257610a6d610a65610892565b849083611c5e565b610a74565b825b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610ad357610ab7336000356001600160e01b031916611bb5565b610ad35760405162461bcd60e51b815260040161098c9061278c565b600e55565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610b339086815260200190565b60405180910390a35060015b92915050565b6002546000908015610a7257610a6d81610b5d610892565b859190611c7c565b610b7b336000356001600160e01b031916611bb5565b610b975760405162461bcd60e51b815260040161098c906127fd565b8015610bc7576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610bee565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610c30911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610c9957610c748382612823565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610cc1908490612823565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061292083398151915290610d0a9087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610d7557610d59336000356001600160e01b031916611bb5565b610d755760405162461bcd60e51b815260040161098c9061278c565b610d7d611ca2565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610db35761092f611d37565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000015610e3057610e14336000356001600160e01b031916611bb5565b610e305760405162461bcd60e51b815260040161098c9061278c565b336000908152600f602052604090205460ff16610e9957600e54811115610e995760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74604482015260640161098c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a0712d68610ed183610a4e565b6040518263ffffffff1660e01b8152600401610eef91815260200190565b600060405180830381600087803b158015610f0957600080fd5b505af1158015610f1d573d6000803e3d6000fd5b50505050610f2b8282611dd1565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610f8757610f6b336000356001600160e01b031916611bb5565b610f875760405162461bcd60e51b815260040161098c9061278c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166342966c68610fbf83610a4e565b6040518263ffffffff1660e01b8152600401610fdd91815260200190565b600060405180830381600087803b158015610ff757600080fd5b505af115801561100b573d6000803e3d6000fd5b505050506110193382611e2b565b50565b611032336000356001600160e01b031916611bb5565b61104e5760405162461bcd60e51b815260040161098c906127fd565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6000610b3f82610a4e565b6110cf336000356001600160e01b031916611bb5565b6110eb5760405162461bcd60e51b815260040161098c906127fd565b801561111a576001600160a01b03831660009081526009602052604090208054600160ff85161b179055611140565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610c30911515815260200190565b600061118b611ca2565b610a748383611e8d565b6111ab336000356001600160e01b031916611bb5565b6111c75760405162461bcd60e51b815260040161098c906127fd565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b03163314806112b3575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061127290339030906001600160e01b03196000351690600401612836565b602060405180830381865afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190612863565b6112bc57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061131382611ac7565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611377573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139b919061274a565b610b3f9190612779565b60006113af611ca2565b610a748383611f63565b600180546109cd906127c3565b7f00000000000000000000000000000000000000000000000000000000000000001561141e57611402336000356001600160e01b031916611bb5565b61141e5760405162461bcd60e51b815260040161098c9061278c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166342966c6861145683610a4e565b6040518263ffffffff1660e01b815260040161147491815260200190565b600060405180830381600087803b15801561148e57600080fd5b505af11580156114a2573d6000803e3d6000fd5b50505050610f2b8282611e2b565b7f000000000000000000000000000000000000000000000000000000000000000015611508576114ec336000356001600160e01b031916611bb5565b6115085760405162461bcd60e51b815260040161098c9061278c565b336000908152600f602052604090205460ff1661157157600e548111156115715760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74604482015260640161098c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a0712d686115a983610a4e565b6040518263ffffffff1660e01b81526004016115c791815260200190565b600060405180830381600087803b1580156115e157600080fd5b505af11580156115f5573d6000803e3d6000fd5b505050506110193382611dd1565b33600090815260036020526040812080548391908390611624908490612823565b90915550506001600160a01b0383166000818152600360205260409081902080548501905551339060008051602061292083398151915290610b339086815260200190565b6002546000908015610a7257610a6d611680610892565b849083611c7c565b6000611692611ca2565b61169d848484611ff2565b949350505050565b6001600160a01b0380831660009081526008602052604081205490911680156117415760405163b700961360e01b81526001600160a01b0382169063b7009613906116f890889088908890600401612836565b602060405180830381865afa158015611715573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117399190612863565b915050610a74565b6001600160e01b031983166000908152600a602052604090205460ff168061179a57506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b60006117ad611ca2565b61169d8484846120f6565b6002546000908015610a7257610a6d816117d0610892565b859190611c5e565b6001600160a01b038116600090815260036020526040812054610b3f90610a4e565b4284101561184a5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f45585049524544000000000000000000604482015260640161098c565b60006001611856610d82565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611962573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906119985750876001600160a01b0316816001600160a01b0316145b6119d55760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b604482015260640161098c565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6000610b3f826117b8565b611a5f336000356001600160e01b031916611bb5565b611a7b5760405162461bcd60e51b815260040161098c906127fd565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000600c54600003611adb57506000919050565b600d54821015611aed57506000919050565b6000611b0b6301e13380600d5485611b059190612823565b90612238565b9050600061169d611b2783600c5461224d90919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611baf919061274a565b9061224d565b6007546000906001600160a01b03168015801590611c3f575060405163b700961360e01b81526001600160a01b0382169063b700961390611bfe90879030908890600401612836565b602060405180830381865afa158015611c1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3f9190612863565b8061169d57506006546001600160a01b03858116911614949350505050565b6000826000190484118302158202611c7557600080fd5b5091020490565b6000826000190484118302158202611c9357600080fd5b50910281810615159190040190565b6000611cad42611ac7565b90508015611d305760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b158015611d1757600080fd5b505af1158015611d2b573d6000803e3d6000fd5b505050505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051611d699190612880565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8060026000828254611de39190612779565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061292083398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611e53908490612823565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061292083398151915290602001611e1f565b6000611e9883611a3e565b905080600003611ed85760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b604482015260640161098c565b611f0d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612262565b611f178282611dd1565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a3610b3f565b6000611f6e83611669565b9050611fa56001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084612262565b611faf8284611dd1565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611f56565b6000611ffd84610b45565b9050336001600160a01b0383161461206d576001600160a01b0382166000908152600460209081526040808320338452909152902054600019811461206b576120468282612823565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b6120778282611e2b565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a4610a746001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866122fe565b6000336001600160a01b03831614612166576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146121645761213f8582612823565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b61216f846110ae565b9050806000036121af5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b604482015260640161098c565b6121b98285611e2b565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a4610a746001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684836122fe565b6000610a7483670de0b6b3a764000084611c5e565b6000610a748383670de0b6b3a7640000611c5e565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806122f75760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b604482015260640161098c565b5050505050565b600060405163a9059cbb60e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061237f5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015260640161098c565b50505050565b6001600160a01b038116811461101957600080fd5b801515811461101957600080fd5b600080604083850312156123bb57600080fd5b82356123c681612385565b915060208301356123d68161239a565b809150509250929050565b6000602082840312156123f357600080fd5b8135610a7481612385565b600060208083528351808285015260005b8181101561242b5785810183015185820160400152820161240f565b506000604082860101526040601f19601f8301168501019250505092915050565b60006020828403121561245e57600080fd5b5035919050565b6000806040838503121561247857600080fd5b823561248381612385565b946020939093013593505050565b80356001600160e01b0319811681146124a957600080fd5b919050565b6000602082840312156124c057600080fd5b610a7482612491565b803560ff811681146124a957600080fd5b6000806000606084860312156124ef57600080fd5b6124f8846124c9565b925061250660208501612491565b915060408401356125168161239a565b809150509250925092565b60008060006060848603121561253657600080fd5b833561254181612385565b9250602084013561255181612385565b929592945050506040919091013590565b6000806040838503121561257557600080fd5b6123c683612491565b60008060006060848603121561259357600080fd5b833561259e81612385565b9250612506602085016124c9565b600080604083850312156125bf57600080fd5b8235915060208301356123d681612385565b600080604083850312156125e457600080fd5b82356125ef81612385565b915060208301356123d681612385565b60008060006060848603121561261457600080fd5b83359250602084013561262681612385565b9150604084013561251681612385565b60008060006060848603121561264b57600080fd5b833561265681612385565b9250602084013561266681612385565b915061267460408501612491565b90509250925092565b600080600080600080600060e0888a03121561269857600080fd5b87356126a381612385565b965060208801356126b381612385565b955060408801359450606088013593506126cf608089016124c9565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156126fe57600080fd5b612707836124c9565b915061271560208401612491565b90509250929050565b6000806040838503121561273157600080fd5b823561273c81612385565b9150612715602084016124c9565b60006020828403121561275c57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610b3f57610b3f612763565b6020808252601b908201527f4d6f636b455243343632363a206e6f7420617574686f72697a65640000000000604082015260600190565b600181811c908216806127d757607f821691505b6020821081036127f757634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b81810381811115610b3f57610b3f612763565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561287557600080fd5b8151610a748161239a565b600080835481600182811c91508083168061289c57607f831692505b602080841082036128bb57634e487b7160e01b86526022600452602486fd5b8180156128cf57600181146128e457612911565b60ff1986168952841515850289019650612911565b60008a81526020902060005b868110156129095781548b8201529085019083016128f0565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212205d9e032b3b430f8e6b81dd26cee313ad509bf8308c28c84ae08f21362608b54f64736f6c63430008140033',
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
