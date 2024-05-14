export const MockERC4626 = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "contract ERC20Mintable",
                    "name": "_asset",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_symbol",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_initialRate",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_admin",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_isCompetitionMode",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxMintAmount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "contract Authority",
                    "name": "newAuthority",
                    "type": "address"
                }
            ],
            "name": "AuthorityUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "Deposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "PublicCapabilityUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "indexed": true,
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "RoleCapabilityUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "contract Authority",
                    "name": "authority",
                    "type": "address"
                }
            ],
            "name": "TargetCustomAuthorityUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "UserRoleUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "Withdraw",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DOMAIN_SEPARATOR",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "asset",
            "outputs": [
                {
                    "internalType": "contract ERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "authority",
            "outputs": [
                {
                    "internalType": "contract Authority",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                }
            ],
            "name": "canCall",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "convertToAssets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                }
            ],
            "name": "convertToShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_assets",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                }
            ],
            "name": "deposit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                }
            ],
            "name": "doesRoleHaveCapability",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                }
            ],
            "name": "doesUserHaveRole",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "",
                    "type": "bytes4"
                }
            ],
            "name": "getRolesWithCapability",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "getTargetCustomAuthority",
            "outputs": [
                {
                    "internalType": "contract Authority",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "getUserRoles",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "",
                    "type": "bytes4"
                }
            ],
            "name": "isCapabilityPublic",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isCompetitionMode",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isUnrestricted",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "maxDeposit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "maxMint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxMintAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "maxRedeem",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "maxWithdraw",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_shares",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                }
            ],
            "name": "mint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "nonces",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                }
            ],
            "name": "previewDeposit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "previewMint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "previewRedeem",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "assets",
                    "type": "uint256"
                }
            ],
            "name": "previewWithdraw",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_shares",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "redeem",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract Authority",
                    "name": "newAuthority",
                    "type": "address"
                }
            ],
            "name": "setAuthority",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maxMintAmount",
                    "type": "uint256"
                }
            ],
            "name": "setMaxMintAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                },
                {
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "setPublicCapability",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rate_",
                    "type": "uint256"
                }
            ],
            "name": "setRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                },
                {
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "setRoleCapability",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "contract Authority",
                    "name": "customAuthority",
                    "type": "address"
                }
            ],
            "name": "setTargetCustomAuthority",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                }
            ],
            "name": "setUnrestrictedMintStatus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "role",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                }
            ],
            "name": "setUserRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalAssets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_assets",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "withdraw",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    bytecode: '0x6101206040523480156200001257600080fd5b5060405162002f3338038062002f33833981016040819052620000359162000314565b823081818a8a8a8181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000a39190620003d7565b6000620000b1848262000492565b506001620000c0838262000492565b5060ff81166080524660a052620000d66200019a565b60c0525050506001600160a01b0392831660e0525050600680548483166001600160a01b0319918216811790925560078054938516939091169290921790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a3505050600c9490945542600d5590151561010052600e5550620005dc9350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001ce91906200055e565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b03811681146200024c57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200027757600080fd5b81516001600160401b03808211156200029457620002946200024f565b604051601f8301601f19908116603f01168101908282118183101715620002bf57620002bf6200024f565b81604052838152602092508683858801011115620002dc57600080fd5b600091505b83821015620003005785820183015181830184015290820190620002e1565b600093810190920192909252949350505050565b600080600080600080600060e0888a0312156200033057600080fd5b87516200033d8162000236565b60208901519097506001600160401b03808211156200035b57600080fd5b620003698b838c0162000265565b975060408a01519150808211156200038057600080fd5b506200038f8a828b0162000265565b955050606088015193506080880151620003a98162000236565b60a08901519093508015158114620003c057600080fd5b8092505060c0880151905092959891949750929550565b600060208284031215620003ea57600080fd5b815160ff81168114620003fc57600080fd5b9392505050565b600181811c908216806200041857607f821691505b6020821081036200043957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200048d57600081815260208120601f850160051c81016020861015620004685750805b601f850160051c820191505b81811015620004895782815560010162000474565b5050505b505050565b81516001600160401b03811115620004ae57620004ae6200024f565b620004c681620004bf845462000403565b846200043f565b602080601f831160018114620004fe5760008415620004e55750858301515b600019600386901b1c1916600185901b17855562000489565b600085815260208120601f198616915b828110156200052f578886015182559484019460019091019084016200050e565b50858210156200054e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008083546200056e8162000403565b600182811680156200058957600181146200059f57620005d0565b60ff1984168752821515830287019450620005d0565b8760005260208060002060005b85811015620005c75781548a820152908401908201620005ac565b50505082870194505b50929695505050505050565b60805160a05160c05160e051610100516128946200069f600039600081816105bd0152818161090701528181610a4e01528181610cf001528181610dab01528181610f02015281816112fc01526113e60152600081816104bc0152818161088301528181610e6c01528181610f5a01528181611354015281816114a701528181611a5c01528181611bea01528181611e0401528181611e9c01528181611fee015261213001526000610d8701526000610d570152600061046801526128946000f3fe608060405234801561001057600080fd5b50600436106103425760003560e01c80637a8c63b5116101b8578063ba08765211610104578063d905777e116100a2578063ea7ca2761161007c578063ea7ca276146107e7578063ed0d0efb1461081e578063ef8b30f71461083e578063f2fde38b1461085157600080fd5b8063d905777e1461075d578063dd62ed3e14610786578063e688747b146107b157600080fd5b8063c63d75b6116100de578063c63d75b6146104f6578063c6e6f59214610724578063ce96cb7714610737578063d505accf1461074a57600080fd5b8063ba087652146106d5578063bf7e214f146106e8578063c53a3985146106fb57600080fd5b80639dc29fac11610171578063aed307771161014b578063aed3077714610679578063b3d7f6b91461069c578063b460af94146106af578063b7009613146106c257600080fd5b80639dc29fac14610640578063a0712d6814610653578063a9059cbb1461066657600080fd5b80637a8c63b5146105b85780637a9e5e4b146105df5780637ecebe00146105f25780638da5cb5b1461061257806394bf804d1461062557806395d89b411461063857600080fd5b8063313ce567116102925780634b5159da1161023057806367aff4841161020a57806367aff4841461055f5780636e553f651461057257806370a0823114610585578063728b952b146105a557600080fd5b80634b5159da146105315780634cdad50614610544578063679aefce1461055757600080fd5b806338d52e0f1161026c57806338d52e0f146104b7578063402d267d146104f657806340c10f191461050b57806342966c681461051e57600080fd5b8063313ce5671461046357806334fcf4371461049c5780633644e515146104af57600080fd5b8063095ea7b3116102ff5780630ea9b75b116102d95780630ea9b75b1461042b57806318160ddd1461043e578063239c70ae1461044757806323b872dd1461045057600080fd5b8063095ea7b3146103d25780630a28a477146103f55780630bade8a41461040857600080fd5b806301e1d1141461034757806305f05a941461036257806306a36aee1461037757806306fdde031461039757806307a2d13a146103ac578063088a4ed0146103bf575b600080fd5b61034f610864565b6040519081526020015b60405180910390f35b6103756103703660046122c7565b610905565b005b61034f610385366004612300565b60096020526000908152604090205481565b61039f610991565b604051610359919061231d565b61034f6103ba36600461236b565b610a1f565b6103756103cd36600461236b565b610a4c565b6103e56103e0366004612384565b610aa9565b6040519015158152602001610359565b61034f61040336600461236b565b610b16565b6103e56104163660046123cd565b600a6020526000908152604090205460ff1681565b6103756104393660046123f9565b610b36565b61034f60025481565b61034f600e5481565b6103e561045e366004612440565b610c0e565b61048a7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610359565b6103756104aa36600461236b565b610cee565b61034f610d53565b6104de7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610359565b61034f610504366004612300565b5060001990565b610375610519366004612384565b610da9565b61037561052c36600461236b565b610f00565b61037561053f366004612481565b610fed565b61034f61055236600461236b565b61107f565b600c5461034f565b61037561056d36600461249d565b61108a565b61034f6105803660046124cb565b611152565b61034f610593366004612300565b60036020526000908152604090205481565b6103756105b33660046124f0565b611166565b6103e57f000000000000000000000000000000000000000000000000000000000000000081565b6103756105ed366004612300565b6111ef565b61034f610600366004612300565b60056020526000908152604090205481565b6006546104de906001600160a01b031681565b61034f6106333660046124cb565b6112d9565b61039f6112ed565b61037561064e366004612384565b6112fa565b61037561066136600461236b565b6113e4565b6103e5610674366004612384565b611537565b6103e5610687366004612300565b600f6020526000908152604090205460ff1681565b61034f6106aa36600461236b565b61159d565b61034f6106bd36600461251e565b6115bc565b6103e56106d0366004612555565b6115d9565b61034f6106e336600461251e565b6116d7565b6007546104de906001600160a01b031681565b6104de610709366004612300565b6008602052600090815260409020546001600160a01b031681565b61034f61073236600461236b565b6116ec565b61034f610745366004612300565b61170c565b61037561075836600461259c565b61172e565b61034f61076b366004612300565b6001600160a01b031660009081526003602052604090205490565b61034f6107943660046124f0565b600460209081526000928352604080842090915290825290205481565b6103e56107bf36600461260a565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6103e56107f536600461263d565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61034f61082c3660046123cd565b600b6020526000908152604090205481565b61034f61084c36600461236b565b611972565b61037561085f366004612300565b61197d565b600061086e6119fb565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156108d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f69190612669565b6109009190612698565b905090565b7f00000000000000000000000000000000000000000000000000000000000000001561096657610941336000356001600160e01b031916611ad5565b6109665760405162461bcd60e51b815260040161095d906126ab565b60405180910390fd5b6001600160a01b03919091166000908152600f60205260409020805460ff1916911515919091179055565b6000805461099e906126e2565b80601f01602080910402602001604051908101604052809291908181526020018280546109ca906126e2565b8015610a175780601f106109ec57610100808354040283529160200191610a17565b820191906000526020600020905b8154815290600101906020018083116109fa57829003601f168201915b505050505081565b6002546000908015610a4357610a3e610a36610864565b849083611b7e565b610a45565b825b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610aa457610a88336000356001600160e01b031916611ad5565b610aa45760405162461bcd60e51b815260040161095d906126ab565b600e55565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610b049086815260200190565b60405180910390a35060015b92915050565b6002546000908015610a4357610a3e81610b2e610864565b859190611b9c565b610b4c336000356001600160e01b031916611ad5565b610b685760405162461bcd60e51b815260040161095d9061271c565b8015610b98576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610bbf565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610c01911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610c6a57610c458382612742565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610c92908490612742565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061283f83398151915290610cdb9087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610d4657610d2a336000356001600160e01b031916611ad5565b610d465760405162461bcd60e51b815260040161095d906126ab565b610d4e611bc2565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610d8457610900611c56565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000015610e0157610de5336000356001600160e01b031916611ad5565b610e015760405162461bcd60e51b815260040161095d906126ab565b336000908152600f602052604090205460ff16610e6a57600e54811115610e6a5760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74604482015260640161095d565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a0712d68610ea283610a1f565b6040518263ffffffff1660e01b8152600401610ec091815260200190565b600060405180830381600087803b158015610eda57600080fd5b505af1158015610eee573d6000803e3d6000fd5b50505050610efc8282611cf0565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610f5857610f3c336000356001600160e01b031916611ad5565b610f585760405162461bcd60e51b815260040161095d906126ab565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166342966c68610f9083610a1f565b6040518263ffffffff1660e01b8152600401610fae91815260200190565b600060405180830381600087803b158015610fc857600080fd5b505af1158015610fdc573d6000803e3d6000fd5b50505050610fea3382611d4a565b50565b611003336000356001600160e01b031916611ad5565b61101f5760405162461bcd60e51b815260040161095d9061271c565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6000610b1082610a1f565b6110a0336000356001600160e01b031916611ad5565b6110bc5760405162461bcd60e51b815260040161095d9061271c565b80156110eb576001600160a01b03831660009081526009602052604090208054600160ff85161b179055611111565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610c01911515815260200190565b600061115c611bc2565b610a458383611dac565b61117c336000356001600160e01b031916611ad5565b6111985760405162461bcd60e51b815260040161095d9061271c565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480611284575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061124390339030906001600160e01b03196000351690600401612755565b602060405180830381865afa158015611260573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112849190612782565b61128d57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b60006112e3611bc2565b610a458383611e82565b6001805461099e906126e2565b7f00000000000000000000000000000000000000000000000000000000000000001561135257611336336000356001600160e01b031916611ad5565b6113525760405162461bcd60e51b815260040161095d906126ab565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166342966c6861138a83610a1f565b6040518263ffffffff1660e01b81526004016113a891815260200190565b600060405180830381600087803b1580156113c257600080fd5b505af11580156113d6573d6000803e3d6000fd5b50505050610efc8282611d4a565b7f00000000000000000000000000000000000000000000000000000000000000001561143c57611420336000356001600160e01b031916611ad5565b61143c5760405162461bcd60e51b815260040161095d906126ab565b336000908152600f602052604090205460ff166114a557600e548111156114a55760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74604482015260640161095d565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a0712d686114dd83610a1f565b6040518263ffffffff1660e01b81526004016114fb91815260200190565b600060405180830381600087803b15801561151557600080fd5b505af1158015611529573d6000803e3d6000fd5b50505050610fea3382611cf0565b33600090815260036020526040812080548391908390611558908490612742565b90915550506001600160a01b0383166000818152600360205260409081902080548501905551339060008051602061283f83398151915290610b049086815260200190565b6002546000908015610a4357610a3e6115b4610864565b849083611b9c565b60006115c6611bc2565b6115d1848484611f11565b949350505050565b6001600160a01b0380831660009081526008602052604081205490911680156116755760405163b700961360e01b81526001600160a01b0382169063b70096139061162c90889088908890600401612755565b602060405180830381865afa158015611649573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061166d9190612782565b915050610a45565b6001600160e01b031983166000908152600a602052604090205460ff16806116ce57506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b60006116e1611bc2565b6115d1848484612015565b6002546000908015610a4357610a3e81611704610864565b859190611b7e565b6001600160a01b038116600090815260036020526040812054610b1090610a1f565b4284101561177e5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f45585049524544000000000000000000604482015260640161095d565b6000600161178a610d53565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611896573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906118cc5750876001600160a01b0316816001600160a01b0316145b6119095760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b604482015260640161095d565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6000610b10826116ec565b611993336000356001600160e01b031916611ad5565b6119af5760405162461bcd60e51b815260040161095d9061271c565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000600c54600003611a0d5750600090565b6000611a2b6301e13380600d5442611a259190612742565b90612157565b90506000610a45611a4783600c5461216c90919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611aab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611acf9190612669565b9061216c565b6007546000906001600160a01b03168015801590611b5f575060405163b700961360e01b81526001600160a01b0382169063b700961390611b1e90879030908890600401612755565b602060405180830381865afa158015611b3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5f9190612782565b806115d157506006546001600160a01b03858116911614949350505050565b6000826000190484118302158202611b9557600080fd5b5091020490565b6000826000190484118302158202611bb357600080fd5b50910281810615159190040190565b6000611bcc6119fb565b90508015611c4f5760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b158015611c3657600080fd5b505af1158015611c4a573d6000803e3d6000fd5b505050505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051611c88919061279f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8060026000828254611d029190612698565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061283f83398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611d72908490612742565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061283f83398151915290602001611d3e565b6000611db783611972565b905080600003611df75760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b604482015260640161095d565b611e2c6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612181565b611e368282611cf0565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a3610b10565b6000611e8d8361159d565b9050611ec46001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084612181565b611ece8284611cf0565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611e75565b6000611f1c84610b16565b9050336001600160a01b03831614611f8c576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114611f8a57611f658282612742565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b611f968282611d4a565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a4610a456001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848661221d565b6000336001600160a01b03831614612085576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146120835761205e8582612742565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b61208e8461107f565b9050806000036120ce5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b604482015260640161095d565b6120d88285611d4a565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a4610a456001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848361221d565b6000610a4583670de0b6b3a764000084611b7e565b6000610a458383670de0b6b3a7640000611b7e565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806122165760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b604482015260640161095d565b5050505050565b600060405163a9059cbb60e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061229e5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015260640161095d565b50505050565b6001600160a01b0381168114610fea57600080fd5b8015158114610fea57600080fd5b600080604083850312156122da57600080fd5b82356122e5816122a4565b915060208301356122f5816122b9565b809150509250929050565b60006020828403121561231257600080fd5b8135610a45816122a4565b600060208083528351808285015260005b8181101561234a5785810183015185820160400152820161232e565b506000604082860101526040601f19601f8301168501019250505092915050565b60006020828403121561237d57600080fd5b5035919050565b6000806040838503121561239757600080fd5b82356123a2816122a4565b946020939093013593505050565b80356001600160e01b0319811681146123c857600080fd5b919050565b6000602082840312156123df57600080fd5b610a45826123b0565b803560ff811681146123c857600080fd5b60008060006060848603121561240e57600080fd5b612417846123e8565b9250612425602085016123b0565b91506040840135612435816122b9565b809150509250925092565b60008060006060848603121561245557600080fd5b8335612460816122a4565b92506020840135612470816122a4565b929592945050506040919091013590565b6000806040838503121561249457600080fd5b6122e5836123b0565b6000806000606084860312156124b257600080fd5b83356124bd816122a4565b9250612425602085016123e8565b600080604083850312156124de57600080fd5b8235915060208301356122f5816122a4565b6000806040838503121561250357600080fd5b823561250e816122a4565b915060208301356122f5816122a4565b60008060006060848603121561253357600080fd5b833592506020840135612545816122a4565b91506040840135612435816122a4565b60008060006060848603121561256a57600080fd5b8335612575816122a4565b92506020840135612585816122a4565b9150612593604085016123b0565b90509250925092565b600080600080600080600060e0888a0312156125b757600080fd5b87356125c2816122a4565b965060208801356125d2816122a4565b955060408801359450606088013593506125ee608089016123e8565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561261d57600080fd5b612626836123e8565b9150612634602084016123b0565b90509250929050565b6000806040838503121561265057600080fd5b823561265b816122a4565b9150612634602084016123e8565b60006020828403121561267b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610b1057610b10612682565b6020808252601b908201527f4d6f636b455243343632363a206e6f7420617574686f72697a65640000000000604082015260600190565b600181811c908216806126f657607f821691505b60208210810361271657634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b81810381811115610b1057610b10612682565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561279457600080fd5b8151610a45816122b9565b600080835481600182811c9150808316806127bb57607f831692505b602080841082036127da57634e487b7160e01b86526022600452602486fd5b8180156127ee576001811461280357612830565b60ff1986168952841515850289019650612830565b60008a81526020902060005b868110156128285781548b82015290850190830161280f565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212208fc09fb63f2a28fcd45aeed86e0d1c6444620ce7d6cc89568aa57643b28e0d2364736f6c63430008140033',
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
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd",
        "transferOwnership(address)": "f2fde38b",
        "withdraw(uint256,address,address)": "b460af94"
    }
};
