export const MockMultiToken = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_linkerCodeHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_linkerFactory",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LnInvalidInput",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RestrictedZeroAddress",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
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
                    "name": "value",
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
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fees",
                    "type": "uint256"
                }
            ],
            "name": "CollectGovernanceFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "checkpointTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedShorts",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedLongs",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "CreateCheckpoint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newGovernance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "apr",
                    "type": "uint256"
                }
            ],
            "name": "Initialize",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isPaused",
                    "type": "bool"
                }
            ],
            "name": "PauseStatusUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newPauser",
                    "type": "address"
                }
            ],
            "name": "PauserUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "RedeemWithdrawalShares",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
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
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
        },
        {
            "stateMutability": "nonpayable",
            "type": "fallback"
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
            "inputs": [],
            "name": "PERMIT_TYPEHASH",
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
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
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
                },
                {
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                }
            ],
            "name": "__external_transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_who",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "__setBalanceOf",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "from",
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
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
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
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "internalType": "bool",
                    "name": "_approved",
                    "type": "bool"
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
            "name": "permitForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x6102806040523480156200001257600080fd5b506040516200540038038062005400833981016040819052620000359162000996565b60405180610180016040528060006001600160a01b03168152602001826001600160a01b03168152602001838152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e133808152602001620151808152602001620000bf66b1a2bc2ec500006301e133806200033960201b60201c565b81526000602080830182905260408084018390528051608080820183528482528184018590528183018590526060808301869052958601919091526001845585516001600160a01b03908116825286860151610180908152878301516101a05260a0808901516101c05260e0808a0151825260c0808b01518152610100808c01518352610160808d01805151835280518b015161012090815281518b015161014090815291518e01519092528d8b01518816610200528d8a015161022052908d0151600880546001600160a01b031916918916919091179055909b015185166101e05286519384018752978352928a1695820195909552928301899052670de0b6b3a76400009583018690529082019490945266038d7ea4c68000918101919091526301e1338091810182905262015180928101929092529091820190620002109066b1a2bc2ec500009062000339565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001604051806080016040528060008152602001600081526020016000815260200160008152508152506040516200026b9062000988565b620002779190620009d5565b604051809103906000f08015801562000294573d6000803e3d6000fd5b506001600160a01b031661024052505060408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a090910190925281519101206102605262000b58565b60008062000370620003606200035186606462000ac9565b66a5bbed86c5a000906200043f565b6748cd4072281e0000906200045d565b905062000386670de0b6b3a7640000826200045d565b9050826301e13380036200039c57905062000439565b6000620003d7620003b386866301e133806200046f565b620003c790670de0b6b3a764000062000ae3565b670de0b6b3a7640000906200045d565b90506000620003fa620003c7670de0b6b3a764000080896301e13380886200048e565b9050620004336200040b826200053e565b620004169062000af9565b62000421846200053e565b6200042c9062000af9565b906200045d565b93505050505b92915050565b6000620004568383670de0b6b3a76400006200046f565b9392505050565b60006200045683670de0b6b3a7640000845b60008260001904841183021582026200048757600080fd5b5091020490565b600080620004a1846301e133806200045d565b90506000620004b186836200043f565b620004c590670de0b6b3a764000062000ae3565b9050670de0b6b3a76400008110620004ff57620004f7620004ef670de0b6b3a7640000866200045d565b82906200074b565b90506200051a565b62000517620004ef670de0b6b3a764000086620007ac565b90505b62000532816200052b898b6200043f565b906200043f565b98975050505050505050565b6000808213620005615760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c6001600160401b031060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd19010260016c0504a838426634cdd8738f543560611b03190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b600081600003620007665750670de0b6b3a764000062000439565b82600003620007785750600062000439565b81600062000786856200053e565b90508181026200079f670de0b6b3a76400008262000b18565b90506200043381620007c3565b60006200045683670de0b6b3a76400008462000961565b6000680248ce36a70cb26b3e198213620007df57506000919050565b680755bf798b4a1bf1e5821262000809576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056b80000000000000000000000001901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb7401964500190910279d835ebba824c98fb31b83b2ca45c000000000000000000000000010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008260001904841183021582026200097957600080fd5b50910281810615159190040190565b613e0380620015fd83390190565b60008060408385031215620009aa57600080fd5b825160208401519092506001600160a01b0381168114620009ca57600080fd5b809150509250929050565b81516001600160a01b031681526101e08101602083015162000a0260208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000a67828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016092830151805193830193909352602083015161018083015260408301516101a08301526060909201516101c09091015290565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141762000439576200043962000ab3565b8082018082111562000439576200043962000ab3565b6000600160ff1b820162000b115762000b1162000ab3565b5060000390565b60008262000b3657634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161562000b535762000b5362000ab3565b500590565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610a0462000bf9600039600081816101af015261027c0152600081816087015261030d01526000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050610a046000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063836a10401161005b578063836a1040146101e65780639032c726146101f957806394a97cdb1461020c5780639eea5f66146102405761007d565b806330adf81f146101715780633644e515146101aa57806358af4a0a146101d1575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516100bf929190610719565b600060405180830381855af49150503d80600081146100fa576040519150601f19603f3d011682016040523d82523d6000602084013e6100ff565b606091505b50915091508161016257600061011482610729565b90506001600160e01b03198116636e64089360e11b1461013657815160208301fd5b8151600319810160048401908152926101579181016020019060240161079a565b935061016692505050565b9150505b915050805190602001f35b6101987f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b60405190815260200160405180910390f35b6101987f000000000000000000000000000000000000000000000000000000000000000081565b6101e46101df366004610863565b610253565b005b6101e46101f43660046108ba565b610267565b6101e46102073660046108ef565b610277565b6101e461021a3660046108ba565b6000928352600b602090815260408085206001600160a01b039094168552929052912055565b6101e461024e3660046108ba565b6103c1565b61026085858585856103cc565b5050505050565b61027283838361058d565b505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516103679190610970565b600060405180830381855af49150503d80600081146103a2576040519150601f19603f3d011682016040523d82523d6000602084013e6103a7565b606091505b5091509150816103b957805160208201fd5b805160208201f35b610272838383610636565b6001600160a01b03841615806103e957506001600160a01b038316155b156104075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146104cb576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff166104cb576000858152600e602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146104c9576000868152600e602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906104c39084906109a2565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906104fd9084906109a2565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906105349084906109bb565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906105bf9084906109bb565b90915550506000838152600c6020526040812080548392906105e29084906109bb565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600b602090815260408083206001600160a01b038616845290915290205481111561067957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906106ab9084906109a2565b90915550506000838152600c6020526040812080548392906106ce9084906109a2565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610629565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156107585780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610791578181015183820152602001610779565b50506000910152565b6000602082840312156107ac57600080fd5b815167ffffffffffffffff808211156107c457600080fd5b818401915084601f8301126107d857600080fd5b8151818111156107ea576107ea610760565b604051601f8201601f19908116603f0116810190838211818310171561081257610812610760565b8160405282815287602084870101111561082b57600080fd5b61083c836020830160208801610776565b979650505050505050565b80356001600160a01b038116811461085e57600080fd5b919050565b600080600080600060a0868803121561087b57600080fd5b8535945061088b60208701610847565b935061089960408701610847565b9250606086013591506108ae60808701610847565b90509295509295909350565b6000806000606084860312156108cf57600080fd5b833592506108df60208501610847565b9150604084013590509250925092565b600080600080600080600060e0888a03121561090a57600080fd5b61091388610847565b965061092160208901610847565b95506040880135801515811461093657600080fd5b945060608801359350608088013560ff8116811461095357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008251610982818460208701610776565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b818103818111156109b5576109b561098c565b92915050565b808201808211156109b5576109b561098c56fea2646970667358221220f63608ba8f68249afd92d500641ad9f98b98c11ae0cb19423bb7b5ee6390055864736f6c634300081400336102406040523480156200001257600080fd5b5060405162003e0338038062003e038339810160408190526200003591620001b9565b600160005580516001600160a01b03908116608090815260608084015161018052908301516101a05260a0808401516101c05260e08085015190915260c08085015190526101008085015190915261016080850180515190925281516020908101516101209081528351604090810151610140908152945190950151909252850151841661020052918401516102205290830151600880546001600160a01b03191691841691909117905590910151166101e05262000283565b60405161018081016001600160401b03811182821017156200012157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013f57600080fd5b919050565b6000608082840312156200015757600080fd5b604051608081016001600160401b03811182821017156200018857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620001cd57600080fd5b620001d7620000ef565b620001e28362000127565b8152620001f26020840162000127565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200024f81850162000127565b908201526101406200026384820162000127565b90820152610160620002788585830162000144565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051613a53620003b060003960008181610a8c015261193d015260008181610a5d0152611900015260008181610bba01528181611669015281816116e3015261175f01526000610afe015260008181610ad80152611baf015260008181610ab20152611b8901526000610c6601526000610c4001526000610c1a01526000610bf4015260008181610b700152611bd5015260008181610b2401528181610dc50152612290015260008181610b4a015261238f0152600081816105a101528181610a2e01528181610d8601528181611a0701528181611a5001528181611f3301528181611f7c0152818161207c015261211a0152613a536000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80637ecebe0011610104578063becee9c3116100a2578063d816574311610071578063d816574314610421578063e44808bc14610436578063e985e9c514610449578063fba560081461045c57600080fd5b8063becee9c3146103ce578063c55dae63146103ee578063c69e16ad14610365578063cf210e651461040e57600080fd5b8063a22cb465116100de578063a22cb46514610380578063ab033ea914610393578063b0d96580146103a6578063bd85b039146103bb57600080fd5b80637ecebe00146103525780638e67f87e146103655780639cd241af1461036d57600080fd5b8063313ce5671161017c5780634e41a1fb1161014b5780634e41a1fb146103045780634ed2d6ac1461031757806360246c881461032a5780637180c8ca1461033f57600080fd5b8063313ce567146102a15780633656eec2146102bb5780633e691db9146102ce57806346fbf68e146102e157600080fd5b806317fad7fc116101b857806317fad7fc1461022f5780631c0f12b61461024257806320fc48811461025557806321ff32a91461028057600080fd5b8062ad800c146101de57806302329a291461020757806314e5f07b1461021c575b600080fd5b6101f16101ec366004612fd6565b61048b565b6040516101fe919061303f565b60405180910390f35b61021a610215366004613060565b6104c2565b005b61021a61022a3660046130a3565b6104ce565b61021a61023d36600461317a565b6104ea565b61021a61025036600461320b565b610500565b610268610263366004612fd6565b610513565b60405190516001600160801b031681526020016101fe565b61029361028e36600461324f565b610554565b6040519081526020016101fe565b6102a961059a565b60405160ff90911681526020016101fe565b6102936102c936600461328b565b610638565b6102936102dc3660046132b7565b610671565b6102f46102ef3660046132f2565b61067c565b60405190151581526020016101fe565b6101f1610312366004612fd6565b6106b2565b61021a61032536600461330d565b6106c0565b61033261070e565b6040516101fe9190613353565b61021a61034d3660046133f4565b61093b565b6102936103603660046132f2565b610949565b610293610975565b61021a61037b36600461342b565b61098f565b61021a61038e3660046133f4565b6109a0565b61021a6103a13660046132f2565b610a0c565b6103ae610a15565b6040516101fe9190613460565b6102936103c9366004612fd6565b610c9b565b6103e16103dc36600461353d565b610cbd565b6040516101fe919061357f565b6103f6610d78565b6040516001600160a01b0390911681526020016101fe565b61029361041c366004612fd6565b610db8565b610429610e01565b6040516101fe91906135c3565b61021a6104443660046136d4565b610f0d565b6102f461045736600461372b565b610f55565b610464610f99565b6040805182516001600160801b0390811682526020938401511692810192909252016101fe565b60606104bd61049983610ff8565b6040516020016104a9919061303f565b604051602081830303815290604052611126565b919050565b6104cb8161114a565b50565b6104df8989898989898989896111cd565b505050505050505050565b6104f88686868686866113e0565b505050505050565b61050d8484848433611494565b50505050565b6040805160208101909152600081526104bd600760008481526020019081526020016000206040516020016104a991546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261059391016104a9565b9392505050565b60006106357f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106219190613755565b6040805160ff9092166020830152016104a9565b90565b6000828152600b602090815260408083206001600160a01b038516845282528083205481519283015261066b91016104a9565b92915050565b600061066b82611655565b6001600160a01b0381166000908152600a602090815260408083205490516104bd926104a99260ff169101901515815260200190565b60606104bd610499836117d0565b836106ca816118c2565b6001600160a01b0316336001600160a01b0316146106fb57604051632aab8bd360e01b815260040160405180910390fd5b6107078585858561197f565b5050505050565b610787604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006107916119ec565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916107fc919061379e565b61080691906137b1565b90506000808311610818576000610833565b6108338361082d61082886611aeb565b611c53565b90611c83565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610907576109028486611c98565b61090a565b60005b81526002546001600160801b0316602091820152604051919250610934916104a991849101613353565b5050505090565b6109458282611cad565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104bd91016104a9565b60006106356009546040516020016104a991815260200190565b61099b8383833361197f565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6104cb81611d25565b610a1d612f26565b6106356040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104a99190613460565b6000818152600c60209081526040808320548151928301526104bd91016104a9565b606060008267ffffffffffffffff811115610cda57610cda6137c4565b604051908082528060200260200182016040528015610d03578160200160208202803683370190505b50905060005b83811015610d5c576000858583818110610d2557610d256137da565b90506020020135905060008154905080848481518110610d4757610d476137da565b60209081029190910101525050600101610d09565b50610d71816040516020016104a9919061357f565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161063591016104a9565b60006104bd610def610dea7f00000000000000000000000000000000000000000000000000000000000000008561379e565b611d99565b6040516020016104a991815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261063560016040516020016104a9919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610f17816118c2565b6001600160a01b0316336001600160a01b031614610f4857604051632aab8bd360e01b815260040160405180910390fd5b6104f88686868686611494565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff909116151591810191909152909161066b91016104a9565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610635906060016104a9565b606060f882901c6001600160f81b038316600061101482611de1565b9050600083600381111561102a5761102a613772565b0361105c576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061111e565b600183600381111561107057611070613772565b0361109c578060405160200161108691906137f0565b604051602081830303815290604052935061111e565b60028360038111156110b0576110b0613772565b036110c657806040516020016110869190613829565b60038360038111156110da576110da613772565b0361111e576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b8152600401611141919061303f565b60405180910390fd5b336000908152600a602052604090205460ff16611179576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906111c290831515815260200190565b60405180910390a150565b834211156111ee5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166112155760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611303573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461134157604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f60205260408120805490919061136790613863565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806113fd57506001600160a01b038516155b1561141b5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461143b5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561148b5761148385858381811061145b5761145b6137da565b905060200201358888868686818110611476576114766137da565b9050602002013533611494565b60010161143e565b50505050505050565b6001600160a01b03841615806114b157506001600160a01b038316155b156114cf5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611593576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611593576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611591576000868152600e602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061158b9084906137b1565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906115c59084906137b1565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906115fc90849061379e565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600061165f611eee565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001661169660208401846132f2565b6001600160a01b0316146116bd57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156117065750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b801561171d57506008546001600160a01b03163314155b1561173a576040516282b42960e81b815260040160405180910390fd5b60006117446119ec565b60098054600090915590915061175b818386611f18565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e476117b3858588612216565b60405190815260200160405180910390a250506104bd6001600055565b606060f882901c6001600160f81b03831660006117ec82611de1565b9050600083600381111561180257611802613772565b03611834576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061111e565b600183600381111561184857611848613772565b0361185e5780604051602001611086919061387c565b600283600381111561187257611872613772565b03611888578060405160200161108691906138b4565b600383600381111561189c5761189c613772565b0361111e576040516c485950455244524956452d575360981b6020820152602d0161110c565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a3b575047611ac6565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac391906138e0565b90505b601054600003611ad7576000611ae5565b601054611ae5908290611c98565b91505090565b611b4860405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e08201526004549091610100830191611c199116612245565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611c4b92900416612245565b905292915050565b6000806000611c61846122bb565b9150915080610d715760405163aeeb825d60e01b815260040160405180910390fd5b60006105938383670de0b6b3a7640000612335565b600061059383670de0b6b3a764000084612335565b6008546001600160a01b03163314611cd7576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611d4f576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c6000611daa600285612353565b815260200190815260200160002054600c6000611dc8600186612353565b81526020019081526020016000205461066b91906138f9565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611e13600a8561392f565b611e1e90603061379e565b60f81b81611e2d6001856137b1565b81518110611e3d57611e3d6137da565b60200101906001600160f81b031916908160001a905350611e5f600a85613943565b935060015b8415611ee057611e75600a8661392f565b611e8090603061379e565b60f81b826001611e9084876137b1565b611e9a91906137b1565b81518110611eaa57611eaa6137da565b60200101906001600160f81b031916908160001a905350611ecc600a86613943565b945080611ed881613863565b915050611e64565b918290030190815292915050565b600260005403611f1157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611f67575047611ff2565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611fcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fef91906138e0565b90505b6000611ffe8686611c83565b60105490915061201090829084612335565b955060105486116120215785612025565b6010545b9550601054600003612038576000612048565b6010546120489087908490612335565b9250856010600082825461205c91906137b1565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612110576120b660208601866132f2565b6001600160a01b03168460405160006040518083038185875af1925050503d8060008114612100576040519150601f19603f3d011682016040523d82523d6000602084013e612105565b606091505b5050809150506121c0565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb61214c60208801886132f2565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018790526044016020604051808303816000875af1158015612199573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121bd9190613957565b90505b806121de576040516312171d8360e31b815260040160405180910390fd5b6121ee6040860160208701613060565b612209576122046121fd6119ec565b8590611c98565b61220b565b835b979650505050505050565b60006122286040830160208401613060565b15612234575082610593565b61223e8484611c83565b9050610593565b600080670de0b6b3a7640000612259612388565b6122639190613974565b905080831161227357600061227d565b61227d81846137b1565b91506105936122b4670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613974565b8390611c98565b60008060008060006122cc866123c3565b91509150806122e357506000958695509350505050565b8560a001516122f187612606565b87516122fe90859061398b565b612308919061398b565b61231291906138f9565b92505050600081121561232b5750600093849350915050565b9360019350915050565b600082600019048411830215820261234c57600080fd5b5091020490565b60006001600160f81b0382111561237d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006123b47f00000000000000000000000000000000000000000000000000000000000000004261392f565b6123be90426137b1565b905090565b60008060006123e5846101400151856101200151611c8390919063ffffffff16565b61010085015160e08601516123f99161266d565b61240391906138f9565b9050600061241985600001518660200151612682565b9050600082131561251c57600082905060008061246a886000015189602001518a604001518b60a001518c60c00151670de0b6b3a764000061245b91906137b1565b8d606001518e6080015161269f565b9150915080612483575060009788975095505050505050565b8282106124d85760006124bd858a60400151868c60c00151670de0b6b3a76400006124ae91906137b1565b8d606001518e6080015161278e565b90506124c8816139ab565b9960019950975050505050505050565b600088602001511261250b5760a08801516124f390856137b1565b6124fc906139ab565b98600198509650505050505050565b60a088015188516124f391906137b1565b60008212156125f8576000612530836139ab565b905060006125648388604001518960c00151670de0b6b3a764000061255591906137b1565b8a606001518b608001516127be565b90508181106125a05760006124fc848960400151858b60c00151670de0b6b3a764000061259191906137b1565b8c606001518d60800151612854565b60006125d28489604001518a60c00151670de0b6b3a76400006125c391906137b1565b8b606001518c6080015161292c565b90506125ee886060015183856125e891906137b1565b90611c98565b6124fc908261379e565b506000946001945092505050565b6000612635826101000151670de0b6b3a764000061262491906137b1565b606084015160e085015191906129bb565b612663836101400151670de0b6b3a764000061265191906137b1565b60608501516101208601519190612335565b61066b91906138f9565b60006105938383670de0b6b3a76400006129bb565b60008061268f83856138f9565b9050600081121561059357600080fd5b60008060008812156126c1576126b4886139ab565b6126be908761379e565b95505b60006126cd8a8a612682565b905060006126de828a8989896129e1565b905060006127016126f9896126f3898d61266d565b90612a1a565b8890886129bb565b61270b90836137b1565b9050670de0b6b3a7640000811061273f57612738612731670de0b6b3a76400008a611c98565b8290612a1a565b9050612757565b612754612731670de0b6b3a76400008a612a71565b90505b8981101561276e5760008094509450505050612782565b6127788a826137b1565b6001945094505050505b97509795505050505050565b60008061279f888888888888612a86565b9092509050806127b3576127b36000612b48565b509695505050505050565b6000806127ce8787878787612b63565b905060006127f9670de0b6b3a76400006127e88787611c98565b6127f2919061379e565b8390612a71565b9050670de0b6b3a764000081106128265761281f612731670de0b6b3a764000088612a71565b905061283e565b61283b612731670de0b6b3a764000088611c98565b90505b61284881886137b1565b98975050505050505050565b6000806128648888878787612b63565b905085871015612878576128786000612b48565b612886856126f3888a6137b1565b96508681101561289a5761289a6000612b48565b60006128b284866128ab8b866137b1565b91906129bb565b9050670de0b6b3a764000081106128df576128d8612731670de0b6b3a764000088612a71565b90506128f7565b6128f4612731670de0b6b3a764000088611c98565b90505b6129018185612a71565b905088811015612915576129156000612b48565b61291f89826137b1565b9998505050505050505050565b60008061293c87878787876129e1565b90506000612960670de0b6b3a76400006129568787612a71565b6122b4919061379e565b9050670de0b6b3a7640000811061298d57612986612731670de0b6b3a764000088611c98565b90506129a5565b6129a2612731670de0b6b3a764000088612a71565b90505b6129af8185611c98565b905061284888826137b1565b60008260001904841183021582026129d257600080fd5b50910281810615159190040190565b60006129ed8585612a1a565b612a066129fe866126f3868b611c83565b859085612335565b612a10919061379e565b9695505050505050565b600081600003612a335750670de0b6b3a764000061066b565b82600003612a435750600061066b565b816000612a4f85612b88565b9050818102612a66670de0b6b3a7640000826139c7565b9050612a1081612d9b565b600061059383670de0b6b3a7640000846129bb565b6000806000612a988989888888612b63565b9050612aa8866126f3898b61379e565b975087811015612abf576000809250925050612b3d565b6000612ad085876128ab8c866137b1565b9050670de0b6b3a76400008110612afd57612af6612731670de0b6b3a764000089612a71565b9050612b15565b612b12612731670de0b6b3a764000089611c98565b90505b612b1f8186612a71565b9050808a1115612b3657612b33818b6137b1565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b815260040161114191906139f5565b6000612b6f8585612a1a565b612a06612b80866126f3868b61266d565b8590856129bb565b6000808213612baa5760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213612db657506000919050565b680755bf798b4a1bf1e58212612ddf576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612fd16040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612fe857600080fd5b5035919050565b60005b8381101561300a578181015183820152602001612ff2565b50506000910152565b6000815180845261302b816020860160208601612fef565b601f01601f19169290920160200192915050565b6020815260006105936020830184613013565b80151581146104cb57600080fd5b60006020828403121561307257600080fd5b813561059381613052565b80356001600160a01b03811681146104bd57600080fd5b60ff811681146104cb57600080fd5b60008060008060008060008060006101208a8c0312156130c257600080fd5b8935985060208a013597506130d960408b0161307d565b96506130e760608b0161307d565b955060808a01356130f781613052565b945060a08a0135935060c08a013561310e81613094565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261314057600080fd5b50813567ffffffffffffffff81111561315857600080fd5b6020830191508360208260051b850101111561317357600080fd5b9250929050565b6000806000806000806080878903121561319357600080fd5b61319c8761307d565b95506131aa6020880161307d565b9450604087013567ffffffffffffffff808211156131c757600080fd5b6131d38a838b0161312e565b909650945060608901359150808211156131ec57600080fd5b506131f989828a0161312e565b979a9699509497509295939492505050565b6000806000806080858703121561322157600080fd5b843593506132316020860161307d565b925061323f6040860161307d565b9396929550929360600135925050565b60008060006060848603121561326457600080fd5b833592506132746020850161307d565b91506132826040850161307d565b90509250925092565b6000806040838503121561329e57600080fd5b823591506132ae6020840161307d565b90509250929050565b6000602082840312156132c957600080fd5b813567ffffffffffffffff8111156132e057600080fd5b82016060818503121561059357600080fd5b60006020828403121561330457600080fd5b6105938261307d565b6000806000806080858703121561332357600080fd5b843593506133336020860161307d565b9250604085013591506133486060860161307d565b905092959194509250565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561340757600080fd5b6134108361307d565b9150602083013561342081613052565b809150509250929050565b60008060006060848603121561344057600080fd5b833592506134506020850161307d565b9150604084013590509250925092565b81516001600160a01b031681526101e08101602083015161348c60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516134f0828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b6000806020838503121561355057600080fd5b823567ffffffffffffffff81111561356757600080fd5b6135738582860161312e565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156135b75783518352928401929184019160010161359b565b50909695505050505050565b81516001600160801b03168152610180810160208301516135ef60208401826001600160801b03169052565b50604083015161360a60408401826001600160801b03169052565b50606083015161362560608401826001600160801b03169052565b50608083015161363a6080840182600f0b9052565b5060a083015161365560a08401826001600160801b03169052565b5060c083015161367060c08401826001600160801b03169052565b5060e083015161368b60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613535565b600080600080600060a086880312156136ec57600080fd5b853594506136fc6020870161307d565b935061370a6040870161307d565b92506060860135915061371f6080870161307d565b90509295509295909350565b6000806040838503121561373e57600080fd5b6137478361307d565b91506132ae6020840161307d565b60006020828403121561376757600080fd5b815161059381613094565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561066b5761066b613788565b8181038181111561066b5761066b613788565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161381c816011850160208701612fef565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613856816012850160208701612fef565b9190910160120192915050565b60006001820161387557613875613788565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516138a7816010850160208701612fef565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161381c816011850160208701612fef565b6000602082840312156138f257600080fd5b5051919050565b8181036000831280158383131683831282161715610d7157610d71613788565b634e487b7160e01b600052601260045260246000fd5b60008261393e5761393e613919565b500690565b60008261395257613952613919565b500490565b60006020828403121561396957600080fd5b815161059381613052565b808202811582820484141761066b5761066b613788565b808201828112600083128015821682158216171561353557613535613788565b6000600160ff1b82016139c0576139c0613788565b5060000390565b6000826139d6576139d6613919565b600160ff1b8214600019841416156139f0576139f0613788565b500590565b6020810160048310613a1757634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220495e8a1e60ff3b0205f132f97d227b7b3a2111737905af5bbfb62582ca6894aa64736f6c63430008140033",
        "sourceMap": "1289:7348:91:-:0;;;1816:2695;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1938:829;;;;;;;;2005:1;-1:-1:-1;;;;;1938:829:91;;;;;2041:14;-1:-1:-1;;;;;1938:829:91;;;;;2089:15;1938:829;;;;2146:4;1938:829;;;;2190:4;1938:829;;;;2238:4;1938:829;;;;2278:8;1938:829;;;;2324:6;1938:829;;;;2361:112;2418:7;2447:8;2361:35;;;:112;;:::i;:::-;1938:829;;2511:1;1938:829;;;;;;;;;;;;;;2579:173;;;;;;;;;;;;;;;;;;;;;;;1938:829;2579:173;;;;;;1938:829;;;;;;;1713:1:120;1917:21;;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;5216;;;;5190:56;;;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;6389:12;;;;;;:18;6377:30;;6428:12;;:17;;;-1:-1:-1;6417:28:70;;;6474:12;;:25;;;6455:44;;;;6532:12;;:29;;;6509:52;;;-1:-1:-1;;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;2906:913:91;;;;::::1;::::0;;;;;;;::::1;::::0;;::::1;::::0;;;;;;;;;;3130:4:::1;2906:913:::0;;;;;;;;;;;;;3230:4:::1;2906:913:::0;;;;;;;3274:8:::1;2906:913:::0;;;;;;3324:6:::1;2906:913:::0;;;;;;;;;;;;3365:124:::1;::::0;3426:7:::1;::::0;3365:35:::1;:124::i;:::-;2906:913;;;;3531:1;-1:-1:-1::0;;;;;2906:913:91::1;;;;;3577:1;-1:-1:-1::0;;;;;2906:913:91::1;;;;;3607:193;;;;;;;;3657:1;3607:193;;;;3690:1;3607:193;;;;3731:1;3607:193;;;;3776:1;3607:193;;::::0;2906:913:::1;;::::0;2863:970:::1;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;;;2832:1011:91::1;;::::0;-1:-1:-1;;4407:10:91::1;::::0;;;;::::1;::::0;;::::1;::::0;;-1:-1:-1;;;4407:10:91::1;::::0;;::::1;::::0;4230:264;;4258:121:::1;4230:264:::0;;::::1;2275:25:182::0;4397:21:91;2316:18:182;;;2309:34;4436:13:91::1;2359:18:182::0;;;2352:34;4475:4:91::1;2402:18:182::0;;;;2395:60;;;;4230:264:91;;;;;;;;;;2247:19:182;;;;4230:264:91;;;4207:297;;;::::1;::::0;4188:316:::1;::::0;1289:7348;;1366:1813:74;1482:7;;1645:90;1686:39;1714:10;:4;1721:3;1714:10;:::i;:::-;1694;;1686:27;:39::i;:::-;1653:10;;1645:27;:90::i;:::-;1623:112;-1:-1:-1;1759:24:74;150:4:73;1623:112:74;1759:11;:24::i;:::-;1745:38;;1874:17;1895:8;1874:29;1870:78;;1926:11;-1:-1:-1;1919:18:74;;1870:78;2766:23;2792:85;2823:44;:4;2839:17;2858:8;2823:15;:44::i;:::-;2817:50;;150:4:73;2817:50:74;:::i;:::-;150:4:73;;2792:11:74;:85::i;:::-;2766:111;-1:-1:-1;2887:29:74;2919:102;2944:67;150:4:73;;2983::74;2989:8;2999:11;2944:28;:67::i;2919:102::-;2887:134;-1:-1:-1;3050:122:74;3123:34;2887:134;3123:32;:34::i;:::-;3122:35;;;:::i;:::-;3059:28;3066:15;3059:26;:28::i;:::-;3058:29;;;:::i;:::-;3050:46;;:122::i;:::-;3031:141;;;;;1366:1813;;;;;:::o;1535:119:73:-;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;:::-;1616:31;1535:119;-1:-1:-1;;;1535:119:73:o;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;823:556;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;7896:1272:74:-;8132:20;;8370:35;:17;8396:8;8370:25;:35::i;:::-;8358:47;-1:-1:-1;8545:13:74;8567:15;:4;8358:47;8567:12;:15::i;:::-;8561:21;;150:4:73;8561:21:74;:::i;:::-;8545:37;;150:4:73;8596:5:74;:12;8592:300;;8703:36;8713:25;150:4:73;8725:12:74;8713:11;:25::i;:::-;8703:5;;:9;:36::i;:::-;8695:44;;8592:300;;;8847:34;8857:23;150:4:73;8867:12:74;8857:9;:23::i;8847:34::-;8839:42;;8592:300;9060:101;9142:5;9060:56;:23;9092;9060:31;:56::i;:::-;:64;;:101::i;:::-;9041:120;7896:1272;-1:-1:-1;;;;;;;;7896:1272:74:o;8345:3611:73:-;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;-1:-1:-1;;;;;;;8890:1:73;8886:49;8993:9;;;-1:-1:-1;;;;;8970:33:73;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;;;;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;3740:838::-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;-1:-1:-1;4561:9:73;4469:19;4561:3;:9::i;3390:115::-;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;6031:7;5987:51;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;6594:40;6585:50;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;2211:748::-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;1289:7348:91:-;;;;;;;;:::o;14:351:182:-;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;193:16;;252:2;237:18;;231:25;193:16;;-1:-1:-1;;;;;;285:31:182;;275:42;;265:70;;331:1;328;321:12;265:70;354:5;344:15;;;14:351;;;;;:::o;749:1290::-;979:13;;-1:-1:-1;;;;;444:31:182;432:44;;939:3;924:19;;1051:4;1043:6;1039:17;1033:24;1066:62;1122:4;1111:9;1107:20;1093:12;-1:-1:-1;;;;;444:31:182;432:44;;370:112;1066:62;;1184:4;1176:6;1172:17;1166:24;1159:4;1148:9;1144:20;1137:54;1247:4;1239:6;1235:17;1229:24;1222:4;1211:9;1207:20;1200:54;1310:4;1302:6;1298:17;1292:24;1285:4;1274:9;1270:20;1263:54;1373:4;1365:6;1361:17;1355:24;1348:4;1337:9;1333:20;1326:54;1436:4;1428:6;1424:17;1418:24;1411:4;1400:9;1396:20;1389:54;1499:4;1491:6;1487:17;1481:24;1474:4;1463:9;1459:20;1452:54;1525:6;1585:2;1577:6;1573:15;1567:22;1562:2;1551:9;1547:18;1540:50;;1609:6;1664:2;1656:6;1652:15;1646:22;1677:62;1735:2;1724:9;1720:18;1704:14;-1:-1:-1;;;;;444:31:182;432:44;;370:112;1677:62;-1:-1:-1;;1758:6:182;1801:15;;;1795:22;-1:-1:-1;;;;;444:31:182;1869:18;;;432:44;1907:6;1950:15;;;1944:22;557:12;;2014:18;;;545:25;;;;619:4;608:16;;602:23;586:14;;;579:47;675:4;664:16;;658:23;642:14;;;635:47;731:4;720:16;;;714:23;698:14;;;;691:47;749:1290;:::o;2466:127::-;2527:10;2522:3;2518:20;2515:1;2508:31;2558:4;2555:1;2548:15;2582:4;2579:1;2572:15;2598:168;2671:9;;;2702;;2719:15;;;2713:22;;2699:37;2689:71;;2740:18;;:::i;2771:125::-;2836:9;;;2857:10;;;2854:36;;;2870:18;;:::i;2901:136::-;2936:3;-1:-1:-1;;;2957:22:182;;2954:48;;2982:18;;:::i;:::-;-1:-1:-1;3022:1:182;3018:13;;2901:136::o;3174:290::-;3213:1;3239;3229:132;;3283:10;3278:3;3274:20;3271:1;3264:31;3318:4;3315:1;3308:15;3346:4;3343:1;3336:15;3229:132;-1:-1:-1;;;3377:18:182;;-1:-1:-1;;3397:13:182;;3373:38;3370:64;;;3414:18;;:::i;:::-;-1:-1:-1;3448:10:182;;3174:290::o;:::-;1289:7348:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c8063836a10401161005b578063836a1040146101e65780639032c726146101f957806394a97cdb1461020c5780639eea5f66146102405761007d565b806330adf81f146101715780633644e515146101aa57806358af4a0a146101d1575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516100bf929190610719565b600060405180830381855af49150503d80600081146100fa576040519150601f19603f3d011682016040523d82523d6000602084013e6100ff565b606091505b50915091508161016257600061011482610729565b90506001600160e01b03198116636e64089360e11b1461013657815160208301fd5b8151600319810160048401908152926101579181016020019060240161079a565b935061016692505050565b9150505b915050805190602001f35b6101987f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b60405190815260200160405180910390f35b6101987f000000000000000000000000000000000000000000000000000000000000000081565b6101e46101df366004610863565b610253565b005b6101e46101f43660046108ba565b610267565b6101e46102073660046108ef565b610277565b6101e461021a3660046108ba565b6000928352600b602090815260408085206001600160a01b039094168552929052912055565b6101e461024e3660046108ba565b6103c1565b61026085858585856103cc565b5050505050565b61027283838361058d565b505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516103679190610970565b600060405180830381855af49150503d80600081146103a2576040519150601f19603f3d011682016040523d82523d6000602084013e6103a7565b606091505b5091509150816103b957805160208201fd5b805160208201f35b610272838383610636565b6001600160a01b03841615806103e957506001600160a01b038316155b156104075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146104cb576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff166104cb576000858152600e602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146104c9576000868152600e602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906104c39084906109a2565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906104fd9084906109a2565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906105349084906109bb565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906105bf9084906109bb565b90915550506000838152600c6020526040812080548392906105e29084906109bb565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600b602090815260408083206001600160a01b038616845290915290205481111561067957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906106ab9084906109a2565b90915550506000838152600c6020526040812080548392906106ce9084906109a2565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610629565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156107585780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610791578181015183820152602001610779565b50506000910152565b6000602082840312156107ac57600080fd5b815167ffffffffffffffff808211156107c457600080fd5b818401915084601f8301126107d857600080fd5b8151818111156107ea576107ea610760565b604051601f8201601f19908116603f0116810190838211818310171561081257610812610760565b8160405282815287602084870101111561082b57600080fd5b61083c836020830160208801610776565b979650505050505050565b80356001600160a01b038116811461085e57600080fd5b919050565b600080600080600060a0868803121561087b57600080fd5b8535945061088b60208701610847565b935061089960408701610847565b9250606086013591506108ae60808701610847565b90509295509295909350565b6000806000606084860312156108cf57600080fd5b833592506108df60208501610847565b9150604084013590509250925092565b600080600080600080600060e0888a03121561090a57600080fd5b61091388610847565b965061092160208901610847565b95506040880135801515811461093657600080fd5b945060608801359350608088013560ff8116811461095357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008251610982818460208701610776565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b818103818111156109b5576109b561098c565b92915050565b808201808211156109b5576109b561098c56fea2646970667358221220f63608ba8f68249afd92d500641ad9f98b98c11ae0cb19423bb7b5ee6390055864736f6c63430008140033",
        "sourceMap": "1289:7348:91:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4723:12;4877;4891:23;4918:7;-1:-1:-1;;;;;4918:20:91;4939:5;;4918:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4876:69;;;;4960:7;4955:658;;4983:15;5001:18;5008:10;5001:18;:::i;:::-;4983:36;-1:-1:-1;;;;;;;5037:43:91;;-1:-1:-1;;;5037:43:91;5033:176;;5165:10;5159:17;5154:2;5142:10;5138:19;5131:46;5033:176;5426:17;;-1:-1:-1;;5422:25:91;;5445:1;5400:20;;5393:55;;;5400:20;5539:31;;;;;;;;;;:::i;:::-;5526:44;-1:-1:-1;5585:17:91;;-1:-1:-1;;;5585:17:91;4955:658;5630:10;-1:-1:-1;;4674:973:91;;;;1289:7348;;;;;;1487:174;;1537:124;1487:174;;;;;2090:25:182;;;2078:2;2063:18;1487:174:91;;;;;;;1725:41;;;;;8169:228;;;;;;:::i;:::-;;:::i;:::-;;8403:111;;;;;;:::i;:::-;;:::i;7105:868::-;;;;;;:::i;:::-;;:::i;7998:165::-;;;;;;:::i;:::-;8120:20;;;;:10;:20;;;;;;;;-1:-1:-1;;;;;8120:26:91;;;;;;;;;;:36;7998:165;8520:115;;;;;;:::i;:::-;;:::i;8169:228::-;8342:48;8356:7;8365:4;8371:2;8375:6;8383;8342:13;:48::i;:::-;8169:228;;;;;:::o;8403:111::-;8481:26;8487:7;8496:2;8500:6;8481:5;:26::i;:::-;8403:111;;;:::o;7105:868::-;7377:373;;7479:16;7377:373;;;4268:25:182;1537:124:91;4309:18:182;;;4302:34;-1:-1:-1;;;;;4410:15:182;;;4390:18;;;4383:43;4462:15;;;4442:18;;;4435:43;4522:14;;4515:22;4494:19;;;4487:51;4554:19;;;4547:35;;;4631:4;4619:17;;4598:19;;;4591:46;4653:19;;;4646:35;;;4697:19;;;4690:35;;;7306:12:91;;;;7343:7;:20;;4240:19:182;;7377:373:91;;;-1:-1:-1;;7377:373:91;;;;;;;;;;;;;;-1:-1:-1;;;;;7377:373:91;-1:-1:-1;;;7377:373:91;;;7343:417;;;7377:373;7343:417;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7305:455;;;;7775:7;7770:117;;7855:6;7849:13;7844:2;7836:6;7832:15;7825:38;7770:117;7949:6;7943:13;7938:2;7930:6;7926:15;7919:38;8520:115;8600:28;8606:7;8615:4;8621:6;8600:5;:28::i;3314:1579:68:-;-1:-1:-1;;;;;3527:18:68;;;;:38;;-1:-1:-1;;;;;;3549:16:68;;;3527:38;3523:98;;;3586:35;;-1:-1:-1;;;3586:35:68;;;;;;;;;;;3523:98;3726:4;-1:-1:-1;;;;;3716:14:68;:6;-1:-1:-1;;;;;3716:14:68;;3712:888;;-1:-1:-1;;;;;3867:23:68;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3862:728;;3977:16;3996:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;3996:33:68;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4112:29:68;;4108:468;;4506:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4506:33:68;;;;;;;;;;;:41;;;;;;;;;;:51;;4551:6;;4506:27;:51;;4551:6;;4506:51;:::i;:::-;;;;-1:-1:-1;;4108:468:68;3900:690;3862:728;4744:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4744:25:68;;;;;;;;;:35;;4773:6;;4744:19;:35;;4773:6;;4744:35;:::i;:::-;;;;-1:-1:-1;;4789:19:68;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4789:23:68;;;;;;;;;:33;;4816:6;;4789:19;:33;;4816:6;;4789:33;:::i;:::-;;;;-1:-1:-1;;4837:49:68;;;5597:25:182;;;5653:2;5638:18;;5631:34;;;-1:-1:-1;;;;;4837:49:68;;;;;;;;;;;;;;5570:18:182;4837:49:68;;;;;;;3314:1579;;;;;:::o;5921:316::-;6038:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6038:23:68;;;;;;;;;:33;;6065:6;;6038:19;:33;;6065:6;;6038:33;:::i;:::-;;;;-1:-1:-1;;6081:21:68;;;;:12;:21;;;;;:31;;6106:6;;6081:21;:31;;6106:6;;6081:31;:::i;:::-;;;;-1:-1:-1;;6171:59:68;;;5597:25:182;;;5653:2;5638:18;;5631:34;;;-1:-1:-1;;;;;6171:59:68;;;6206:1;;6186:10;;6171:59;;5570:18:182;6171:59:68;;;;;;;;5921:316;;;:::o;6509:563::-;6709:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6709:25:68;;;;;;;;;;:34;-1:-1:-1;6705:105:68;;;6766:33;;-1:-1:-1;;;6766:33:68;;;;;;;;;;;6705:105;6869:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6869:25:68;;;;;;;;;:35;;6898:6;;6869:19;:35;;6898:6;;6869:35;:::i;:::-;;;;-1:-1:-1;;6914:21:68;;;;:12;:21;;;;;:31;;6939:6;;6914:21;:31;;6939:6;;6914:31;:::i;:::-;;;;-1:-1:-1;;7004:61:68;;;5597:25:182;;;5653:2;5638:18;;5631:34;;;7045:1:68;;-1:-1:-1;;;;;7004:61:68;;;7019:10;;7004:61;;5570:18:182;7004:61:68;5423:248:182;14:271;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:182:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:182;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:182;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:182;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:182:o;2126:173::-;2194:20;;-1:-1:-1;;;;;2243:31:182;;2233:42;;2223:70;;2289:1;2286;2279:12;2223:70;2126:173;;;:::o;2304:472::-;2399:6;2407;2415;2423;2431;2484:3;2472:9;2463:7;2459:23;2455:33;2452:53;;;2501:1;2498;2491:12;2452:53;2537:9;2524:23;2514:33;;2566:38;2600:2;2589:9;2585:18;2566:38;:::i;:::-;2556:48;;2623:38;2657:2;2646:9;2642:18;2623:38;:::i;:::-;2613:48;;2708:2;2697:9;2693:18;2680:32;2670:42;;2731:39;2765:3;2754:9;2750:19;2731:39;:::i;:::-;2721:49;;2304:472;;;;;;;;:::o;2781:322::-;2858:6;2866;2874;2927:2;2915:9;2906:7;2902:23;2898:32;2895:52;;;2943:1;2940;2933:12;2895:52;2979:9;2966:23;2956:33;;3008:38;3042:2;3031:9;3027:18;3008:38;:::i;:::-;2998:48;;3093:2;3082:9;3078:18;3065:32;3055:42;;2781:322;;;;;:::o;3108:794::-;3216:6;3224;3232;3240;3248;3256;3264;3317:3;3305:9;3296:7;3292:23;3288:33;3285:53;;;3334:1;3331;3324:12;3285:53;3357:29;3376:9;3357:29;:::i;:::-;3347:39;;3405:38;3439:2;3428:9;3424:18;3405:38;:::i;:::-;3395:48;;3493:2;3482:9;3478:18;3465:32;3540:5;3533:13;3526:21;3519:5;3516:32;3506:60;;3562:1;3559;3552:12;3506:60;3585:5;-1:-1:-1;3637:2:182;3622:18;;3609:32;;-1:-1:-1;3693:3:182;3678:19;;3665:33;3742:4;3729:18;;3717:31;;3707:59;;3762:1;3759;3752:12;3707:59;3108:794;;;;-1:-1:-1;3108:794:182;;;;3785:7;3839:3;3824:19;;3811:33;;-1:-1:-1;3891:3:182;3876:19;;;3863:33;;3108:794;-1:-1:-1;;3108:794:182:o;4736:287::-;4865:3;4903:6;4897:13;4919:66;4978:6;4973:3;4966:4;4958:6;4954:17;4919:66;:::i;:::-;5001:16;;;;;4736:287;-1:-1:-1;;4736:287:182:o;5028:127::-;5089:10;5084:3;5080:20;5077:1;5070:31;5120:4;5117:1;5110:15;5144:4;5141:1;5134:15;5160:128;5227:9;;;5248:11;;;5245:37;;;5262:18;;:::i;:::-;5160:128;;;;:::o;5293:125::-;5358:9;;;5379:10;;;5376:36;;;5392:18;;:::i",
        "linkReferences": {},
        "immutableReferences": {
            "22375": [
                {
                    "start": 135,
                    "length": 32
                },
                {
                    "start": 781,
                    "length": 32
                }
            ],
            "22384": [
                {
                    "start": 431,
                    "length": 32
                },
                {
                    "start": 636,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "DOMAIN_SEPARATOR()": "3644e515",
        "PERMIT_TYPEHASH()": "30adf81f",
        "__external_transferFrom(uint256,address,address,uint256,address)": "58af4a0a",
        "__setBalanceOf(uint256,address,uint256)": "94a97cdb",
        "burn(uint256,address,uint256)": "9eea5f66",
        "mint(uint256,address,uint256)": "836a1040",
        "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_linkerFactory\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"__external_transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"__setBalanceOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientBalance()\":[{\"notice\":\"Thrown when a user doesn't have a sufficient balance to perform         an action.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"__setBalanceOf(uint256,address,uint256)\":{\"notice\":\"Mocks ///\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockMultiToken.sol\":\"MockMultiToken\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0xc2189f1a4de63dd1562ac9939de0c141cfd19bab10ac2fac2a02b7fd927ee965\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d37667c5618cad0f45ad3b2cdc551a1154f5072e04d40f3cfba1445f45e40634\",\"dweb:/ipfs/QmaWRpwFzJysShBUzxH4K3aWrUw68HBnmR2T8q6S85tc4Z\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x0908c7dee96e4a426e073dd92b524b6198a4c39a584b013e87921ae1d02530e3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d0d4b3b851253d4da44cd30070b772e6adabc71a9ec298ff27848a319dedc3f\",\"dweb:/ipfs/QmcejBXXwRKSU4D2utpgrdhGjahL2tcjoxd552Ga5YQ3qk\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x100ce6f7fbc10a19226304986165fdf13491004498e77ad1d2b21a051eeca0da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9e1565462744d053668571275afd83a8a338efc9662aebb433a25199229e2a6d\",\"dweb:/ipfs/QmT5Db8WDETyjbr3x2yDPD5r6pzytJddSgtjjd6U7pwRqn\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0x970a42b84aa146359b457ff80292cf63da4fec87dd40f0c381b895e6a7164c5c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c0c345a61d801ece680c772e18239a09182aba02f1faef9c80a97efd9d12fde3\",\"dweb:/ipfs/QmQf22pfDV1ssU87RD9JHX5cx4xmSfZNmA68dy4FX8SpTn\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x749c0fe26a04df4e52f4dc0372e9108a249d3c52d511f95e2001504552ed1d75\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c50e131b6b775d34f0c63e46e23af0ec877d1881f2f62e54fd7e839737fcbe45\",\"dweb:/ipfs/QmPT5r3JK6t44WH66HKGfmRZqTTXToTHWVq1QsxAhdGk3m\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0x9af0ad4e06ec7b67b731854bfdee2224bab03bf64803ea4bd801ea71cc8fbccf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e3deb01021351fe7adb1a7273ae483467476be845aa191a76256df5f8f168c58\",\"dweb:/ipfs/QmNfA2XYuzTJTc8AGbVHbX5hCvrgShb7bCaNeJvWfs5uAG\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc\",\"dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc\",\"dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc\",\"dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626\",\"dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11\",\"dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f\",\"dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0xc4d712ed08255a2c1cda9b2b0256a4d4eb5f201438d9afc56437f5a6a413df09\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e60c40a7c62d90779112453b593b7d49cb1d94bce647b027e64c7945fa042fb0\",\"dweb:/ipfs/QmVgCNq21QdcBTF6z5ET6fPAiRX4MstMnMmZPXcVqJZ5Ua\"]},\"contracts/test/MockMultiToken.sol\":{\"keccak256\":\"0x0fea0af6cfbd5433a9b626bdfacc2f38f376f89abe59ff0e0ceb1ef024ee345d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6e23c94329b4cd155acd41195cd3beaa51c335ba71d937d85a60e84f8d7153a6\",\"dweb:/ipfs/QmSarZwH5C2mLDQ4HoqsDqXLZtxwLdkY2PeJ3HLMxC4VQC\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/Constants.sol\":{\"keccak256\":\"0x1d2e53dc74e1efce3175255e993195d06f25a94b779b8bdf88705056f40c231b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db06c971fbc6394cf5686c661e5cddc44818113134dfb56a5324495239f86ca8\",\"dweb:/ipfs/QmY25XsnomyJic1hFMZSqLzzi8NYmYfZVgLBgcXk5Ggejc\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x8984493923a9412c6cca272d1b425aa36aa03744c9f0ca2be204f7f0b71c1526\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ce3273e691814ffda079752f1b15bcf64a0ae911fe8a58903d34ce6210ba053b\",\"dweb:/ipfs/QmRAXXNPy9vyG9duP9ET9WrDfrmq3fds7mxfGdsSYZ1tVv\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "_linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "address",
                            "name": "_linkerFactory",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ExpInvalidExponent"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InsufficientBalance"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "LnInvalidInput"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ReentrancyGuardReentrantCall"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "RestrictedZeroAddress"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "AddLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "fees",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CollectGovernanceFee",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "checkpointTime",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedShorts",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedLongs",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CreateCheckpoint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newGovernance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "apr",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Initialize",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseProceeds",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "isPaused",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauseStatusUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newPauser",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "PauserUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RedeemWithdrawalShares",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RemoveLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TransferSingle",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "fallback"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "DOMAIN_SEPARATOR",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "PERMIT_TYPEHASH",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
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
                        },
                        {
                            "internalType": "address",
                            "name": "caller",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "__external_transferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_who",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "__setBalanceOf"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "burn"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
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
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "mint"
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
                            "internalType": "bool",
                            "name": "_approved",
                            "type": "bool"
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
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "permitForAll"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "details": "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.",
                        "params": {
                            "_approved": "A boolean of the approval status to set to.",
                            "deadline": "The timestamp which the signature must be submitted by        to be valid.",
                            "owner": "The owner of the account which is having the new approval set.",
                            "r": "The r component of the ECDSA signature.",
                            "s": "The s component of the ECDSA signature.",
                            "spender": "The address which will be allowed to spend owner's tokens.",
                            "v": "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "DOMAIN_SEPARATOR()": {
                        "notice": "This contract's EIP712 domain separator."
                    },
                    "PERMIT_TYPEHASH()": {
                        "notice": "The typehash used to calculate the EIP712 hash for `permitForAll`."
                    },
                    "__setBalanceOf(uint256,address,uint256)": {
                        "notice": "Mocks ///"
                    },
                    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "notice": "Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/test/MockMultiToken.sol": "MockMultiToken"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/Hyperdrive.sol": {
                "keccak256": "0xc2189f1a4de63dd1562ac9939de0c141cfd19bab10ac2fac2a02b7fd927ee965",
                "urls": [
                    "bzz-raw://d37667c5618cad0f45ad3b2cdc551a1154f5072e04d40f3cfba1445f45e40634",
                    "dweb:/ipfs/QmaWRpwFzJysShBUzxH4K3aWrUw68HBnmR2T8q6S85tc4Z"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0x0908c7dee96e4a426e073dd92b524b6198a4c39a584b013e87921ae1d02530e3",
                "urls": [
                    "bzz-raw://3d0d4b3b851253d4da44cd30070b772e6adabc71a9ec298ff27848a319dedc3f",
                    "dweb:/ipfs/QmcejBXXwRKSU4D2utpgrdhGjahL2tcjoxd552Ga5YQ3qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget1.sol": {
                "keccak256": "0x100ce6f7fbc10a19226304986165fdf13491004498e77ad1d2b21a051eeca0da",
                "urls": [
                    "bzz-raw://9e1565462744d053668571275afd83a8a338efc9662aebb433a25199229e2a6d",
                    "dweb:/ipfs/QmT5Db8WDETyjbr3x2yDPD5r6pzytJddSgtjjd6U7pwRqn"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget2.sol": {
                "keccak256": "0x970a42b84aa146359b457ff80292cf63da4fec87dd40f0c381b895e6a7164c5c",
                "urls": [
                    "bzz-raw://c0c345a61d801ece680c772e18239a09182aba02f1faef9c80a97efd9d12fde3",
                    "dweb:/ipfs/QmQf22pfDV1ssU87RD9JHX5cx4xmSfZNmA68dy4FX8SpTn"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget3.sol": {
                "keccak256": "0x749c0fe26a04df4e52f4dc0372e9108a249d3c52d511f95e2001504552ed1d75",
                "urls": [
                    "bzz-raw://c50e131b6b775d34f0c63e46e23af0ec877d1881f2f62e54fd7e839737fcbe45",
                    "dweb:/ipfs/QmPT5r3JK6t44WH66HKGfmRZqTTXToTHWVq1QsxAhdGk3m"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget4.sol": {
                "keccak256": "0x9af0ad4e06ec7b67b731854bfdee2224bab03bf64803ea4bd801ea71cc8fbccf",
                "urls": [
                    "bzz-raw://e3deb01021351fe7adb1a7273ae483467476be845aa191a76256df5f8f168c58",
                    "dweb:/ipfs/QmNfA2XYuzTJTc8AGbVHbX5hCvrgShb7bCaNeJvWfs5uAG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94",
                "urls": [
                    "bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb",
                    "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3",
                "urls": [
                    "bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660",
                    "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5",
                "urls": [
                    "bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171",
                    "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28",
                "urls": [
                    "bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2",
                    "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec",
                "urls": [
                    "bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c",
                    "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5",
                "urls": [
                    "bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc",
                    "dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717",
                "urls": [
                    "bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc",
                    "dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582",
                "urls": [
                    "bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e",
                    "dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf",
                "urls": [
                    "bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc",
                    "dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370",
                "urls": [
                    "bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626",
                    "dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058",
                "urls": [
                    "bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11",
                    "dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982",
                "urls": [
                    "bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f",
                    "dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f",
                "urls": [
                    "bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d",
                    "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2",
                "urls": [
                    "bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b",
                    "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
                "urls": [
                    "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
                    "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744",
                "urls": [
                    "bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a",
                    "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266",
                "urls": [
                    "bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244",
                    "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b",
                "urls": [
                    "bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1",
                    "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346",
                "urls": [
                    "bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6",
                    "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/ERC20Mintable.sol": {
                "keccak256": "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d",
                "urls": [
                    "bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df",
                    "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockHyperdrive.sol": {
                "keccak256": "0xc4d712ed08255a2c1cda9b2b0256a4d4eb5f201438d9afc56437f5a6a413df09",
                "urls": [
                    "bzz-raw://e60c40a7c62d90779112453b593b7d49cb1d94bce647b027e64c7945fa042fb0",
                    "dweb:/ipfs/QmVgCNq21QdcBTF6z5ET6fPAiRX4MstMnMmZPXcVqJZ5Ua"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockMultiToken.sol": {
                "keccak256": "0x0fea0af6cfbd5433a9b626bdfacc2f38f376f89abe59ff0e0ceb1ef024ee345d",
                "urls": [
                    "bzz-raw://6e23c94329b4cd155acd41195cd3beaa51c335ba71d937d85a60e84f8d7153a6",
                    "dweb:/ipfs/QmSarZwH5C2mLDQ4HoqsDqXLZtxwLdkY2PeJ3HLMxC4VQC"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            },
            "lib/solmate/src/auth/Auth.sol": {
                "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
                "urls": [
                    "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
                    "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
                "urls": [
                    "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
                    "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/tokens/ERC20.sol": {
                "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
                "urls": [
                    "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
                    "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
                ],
                "license": "AGPL-3.0-only"
            },
            "test/utils/Constants.sol": {
                "keccak256": "0x1d2e53dc74e1efce3175255e993195d06f25a94b779b8bdf88705056f40c231b",
                "urls": [
                    "bzz-raw://db06c971fbc6394cf5686c661e5cddc44818113134dfb56a5324495239f86ca8",
                    "dweb:/ipfs/QmY25XsnomyJic1hFMZSqLzzi8NYmYfZVgLBgcXk5Ggejc"
                ],
                "license": "Apache-2.0"
            },
            "test/utils/HyperdriveUtils.sol": {
                "keccak256": "0x8984493923a9412c6cca272d1b425aa36aa03744c9f0ca2be204f7f0b71c1526",
                "urls": [
                    "bzz-raw://ce3273e691814ffda079752f1b15bcf64a0ae911fe8a58903d34ce6210ba053b",
                    "dweb:/ipfs/QmRAXXNPy9vyG9duP9ET9WrDfrmq3fds7mxfGdsSYZ1tVv"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockMultiToken.sol",
        "id": 22687,
        "exportedSymbols": {
            "HyperdriveMath": [
                15315
            ],
            "HyperdriveMultiToken": [
                12387
            ],
            "HyperdriveStorage": [
                13478
            ],
            "HyperdriveTarget0": [
                3146
            ],
            "HyperdriveUtils": [
                144357
            ],
            "IERC20": [
                6793
            ],
            "IHyperdrive": [
                7480
            ],
            "IMockMultiToken": [
                22369
            ],
            "IMultiToken": [
                8357
            ],
            "MockHyperdriveBase": [
                20737
            ],
            "MockHyperdriveTarget0": [
                21097
            ],
            "MockMultiToken": [
                22686
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:8599:91",
        "nodes": [
            {
                "id": 22306,
                "nodeType": "PragmaDirective",
                "src": "39:23:91",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 22308,
                "nodeType": "ImportDirective",
                "src": "64:81:91",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "contracts/src/external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22687,
                "sourceUnit": 3147,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22307,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3146,
                            "src": "73:17:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22310,
                "nodeType": "ImportDirective",
                "src": "146:61:91",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "contracts/src/interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22687,
                "sourceUnit": 6794,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22309,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6793,
                            "src": "155:6:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22312,
                "nodeType": "ImportDirective",
                "src": "208:71:91",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "contracts/src/interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22687,
                "sourceUnit": 7481,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22311,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7480,
                            "src": "217:11:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22314,
                "nodeType": "ImportDirective",
                "src": "280:71:91",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiToken.sol",
                "file": "contracts/src/interfaces/IMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22687,
                "sourceUnit": 8358,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22313,
                            "name": "IMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8357,
                            "src": "289:11:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22316,
                "nodeType": "ImportDirective",
                "src": "352:87:91",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
                "file": "contracts/src/internal/HyperdriveMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22687,
                "sourceUnit": 12388,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22315,
                            "name": "HyperdriveMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12387,
                            "src": "361:20:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22318,
                "nodeType": "ImportDirective",
                "src": "440:81:91",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
                "file": "contracts/src/internal/HyperdriveStorage.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22687,
                "sourceUnit": 13479,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22317,
                            "name": "HyperdriveStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13478,
                            "src": "449:17:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22320,
                "nodeType": "ImportDirective",
                "src": "522:76:91",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "contracts/src/libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22687,
                "sourceUnit": 15316,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22319,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15315,
                            "src": "531:14:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22323,
                "nodeType": "ImportDirective",
                "src": "599:94:91",
                "nodes": [],
                "absolutePath": "contracts/test/MockHyperdrive.sol",
                "file": "contracts/test/MockHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22687,
                "sourceUnit": 21158,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22321,
                            "name": "MockHyperdriveBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20737,
                            "src": "608:18:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 22322,
                            "name": "MockHyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21097,
                            "src": "628:21:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22325,
                "nodeType": "ImportDirective",
                "src": "694:65:91",
                "nodes": [],
                "absolutePath": "test/utils/HyperdriveUtils.sol",
                "file": "test/utils/HyperdriveUtils.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22687,
                "sourceUnit": 144358,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22324,
                            "name": "HyperdriveUtils",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 144357,
                            "src": "703:15:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22369,
                "nodeType": "ContractDefinition",
                "src": "807:480:91",
                "nodes": [
                    {
                        "id": 22337,
                        "nodeType": "FunctionDefinition",
                        "src": "854:112:91",
                        "nodes": [],
                        "functionSelector": "94a97cdb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "__setBalanceOf",
                        "nameLocation": "863:14:91",
                        "parameters": {
                            "id": 22335,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22330,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "895:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22337,
                                    "src": "887:16:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22329,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "887:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22332,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "921:4:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22337,
                                    "src": "913:12:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22331,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "913:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22334,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "943:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22337,
                                    "src": "935:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22333,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "935:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "877:79:91"
                        },
                        "returnParameters": {
                            "id": 22336,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "965:0:91"
                        },
                        "scope": 22369,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 22350,
                        "nodeType": "FunctionDefinition",
                        "src": "972:163:91",
                        "nodes": [],
                        "functionSelector": "58af4a0a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "__external_transferFrom",
                        "nameLocation": "981:23:91",
                        "parameters": {
                            "id": 22348,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22339,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "1022:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22350,
                                    "src": "1014:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22338,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1014:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22341,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1047:4:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22350,
                                    "src": "1039:12:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22340,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1039:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22343,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1069:2:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22350,
                                    "src": "1061:10:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22342,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1061:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22345,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1089:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22350,
                                    "src": "1081:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22344,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1081:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22347,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "1113:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22350,
                                    "src": "1105:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22346,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1105:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1004:121:91"
                        },
                        "returnParameters": {
                            "id": 22349,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1134:0:91"
                        },
                        "scope": 22369,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 22359,
                        "nodeType": "FunctionDefinition",
                        "src": "1141:68:91",
                        "nodes": [],
                        "functionSelector": "836a1040",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "1150:4:91",
                        "parameters": {
                            "id": 22357,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22352,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "1163:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22359,
                                    "src": "1155:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22351,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1155:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22354,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1180:2:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22359,
                                    "src": "1172:10:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22353,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1172:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22356,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1192:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22359,
                                    "src": "1184:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22355,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1184:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1154:45:91"
                        },
                        "returnParameters": {
                            "id": 22358,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1208:0:91"
                        },
                        "scope": 22369,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 22368,
                        "nodeType": "FunctionDefinition",
                        "src": "1215:70:91",
                        "nodes": [],
                        "functionSelector": "9eea5f66",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "burn",
                        "nameLocation": "1224:4:91",
                        "parameters": {
                            "id": 22366,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22361,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "1237:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22368,
                                    "src": "1229:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22360,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1229:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22363,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1254:4:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22368,
                                    "src": "1246:12:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22362,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1246:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22365,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1268:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22368,
                                    "src": "1260:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22364,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1260:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1228:47:91"
                        },
                        "returnParameters": {
                            "id": 22367,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1284:0:91"
                        },
                        "scope": 22369,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 22327,
                            "name": "IMultiToken",
                            "nameLocations": [
                                "836:11:91"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8357,
                            "src": "836:11:91"
                        },
                        "id": 22328,
                        "nodeType": "InheritanceSpecifier",
                        "src": "836:11:91"
                    }
                ],
                "canonicalName": "IMockMultiToken",
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": {
                    "id": 22326,
                    "nodeType": "StructuredDocumentation",
                    "src": "761:46:91",
                    "text": "DEPRECATED: Don't use this for new tests."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    22369,
                    8357,
                    8497,
                    8448,
                    8570,
                    8482
                ],
                "name": "IMockMultiToken",
                "nameLocation": "817:15:91",
                "scope": 22687,
                "usedErrors": [],
                "usedEvents": [
                    8463,
                    8472,
                    8481
                ]
            },
            {
                "id": 22686,
                "nodeType": "ContractDefinition",
                "src": "1289:7348:91",
                "nodes": [
                    {
                        "id": 22375,
                        "nodeType": "VariableDeclaration",
                        "src": "1363:34:91",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "target0",
                        "nameLocation": "1390:7:91",
                        "scope": 22686,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 22374,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1363:7:91",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 22381,
                        "nodeType": "VariableDeclaration",
                        "src": "1487:174:91",
                        "nodes": [],
                        "constant": true,
                        "documentation": {
                            "id": 22376,
                            "nodeType": "StructuredDocumentation",
                            "src": "1404:78:91",
                            "text": "@notice The typehash used to calculate the EIP712 hash for `permitForAll`."
                        },
                        "functionSelector": "30adf81f",
                        "mutability": "constant",
                        "name": "PERMIT_TYPEHASH",
                        "nameLocation": "1511:15:91",
                        "scope": 22686,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 22377,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1487:7:91",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "value": {
                            "arguments": [
                                {
                                    "hexValue": "5065726d6974466f72416c6c2861646472657373206f776e65722c61646472657373207370656e6465722c626f6f6c205f617070726f7665642c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529",
                                    "id": 22379,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1560:91:91",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673",
                                        "typeString": "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\""
                                    },
                                    "value": "PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)"
                                }
                            ],
                            "expression": {
                                "argumentTypes": [
                                    {
                                        "typeIdentifier": "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673",
                                        "typeString": "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\""
                                    }
                                ],
                                "id": 22378,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "1537:9:91",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                            },
                            "id": 22380,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1537:124:91",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 22384,
                        "nodeType": "VariableDeclaration",
                        "src": "1725:41:91",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 22382,
                            "nodeType": "StructuredDocumentation",
                            "src": "1668:52:91",
                            "text": "@notice This contract's EIP712 domain separator."
                        },
                        "functionSelector": "3644e515",
                        "mutability": "immutable",
                        "name": "DOMAIN_SEPARATOR",
                        "nameLocation": "1750:16:91",
                        "scope": 22686,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 22383,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1725:7:91",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 22499,
                        "nodeType": "FunctionDefinition",
                        "src": "1816:2695:91",
                        "nodes": [],
                        "body": {
                            "id": 22498,
                            "nodeType": "Block",
                            "src": "2782:1729:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 22473,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22429,
                                            "name": "target0",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22375,
                                            "src": "2832:7:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "hexValue": "30",
                                                                                    "id": 22440,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "kind": "number",
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "Literal",
                                                                                    "src": "2977:1:91",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_rational_0_by_1",
                                                                                        "typeString": "int_const 0"
                                                                                    },
                                                                                    "value": "0"
                                                                                }
                                                                            ],
                                                                            "expression": {
                                                                                "argumentTypes": [
                                                                                    {
                                                                                        "typeIdentifier": "t_rational_0_by_1",
                                                                                        "typeString": "int_const 0"
                                                                                    }
                                                                                ],
                                                                                "id": 22439,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                                "src": "2969:7:91",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                                    "typeString": "type(address)"
                                                                                },
                                                                                "typeName": {
                                                                                    "id": 22438,
                                                                                    "name": "address",
                                                                                    "nodeType": "ElementaryTypeName",
                                                                                    "src": "2969:7:91",
                                                                                    "typeDescriptions": {}
                                                                                }
                                                                            },
                                                                            "id": 22441,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "2969:10:91",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        ],
                                                                        "id": 22437,
                                                                        "name": "IERC20",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 6793,
                                                                        "src": "2962:6:91",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IERC20_$6793_$",
                                                                            "typeString": "type(contract IERC20)"
                                                                        }
                                                                    },
                                                                    "id": 22442,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "2962:18:91",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IERC20_$6793",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 22443,
                                                                    "name": "_linkerFactory",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 22388,
                                                                    "src": "3017:14:91",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 22444,
                                                                    "name": "_linkerCodeHash",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 22386,
                                                                    "src": "3069:15:91",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                {
                                                                    "hexValue": "31653138",
                                                                    "id": 22445,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3130:4:91",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                                        "typeString": "int_const 1000000000000000000"
                                                                    },
                                                                    "value": "1e18"
                                                                },
                                                                {
                                                                    "hexValue": "31653138",
                                                                    "id": 22446,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3178:4:91",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                                        "typeString": "int_const 1000000000000000000"
                                                                    },
                                                                    "value": "1e18"
                                                                },
                                                                {
                                                                    "hexValue": "31653135",
                                                                    "id": 22447,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3230:4:91",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_1000000000000000_by_1",
                                                                        "typeString": "int_const 1000000000000000"
                                                                    },
                                                                    "value": "1e15"
                                                                },
                                                                {
                                                                    "hexValue": "333635",
                                                                    "id": 22448,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3274:8:91",
                                                                    "subdenomination": "days",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_31536000_by_1",
                                                                        "typeString": "int_const 31536000"
                                                                    },
                                                                    "value": "365"
                                                                },
                                                                {
                                                                    "hexValue": "31",
                                                                    "id": 22449,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3324:6:91",
                                                                    "subdenomination": "days",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_86400_by_1",
                                                                        "typeString": "int_const 86400"
                                                                    },
                                                                    "value": "1"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "302e3035653138",
                                                                            "id": 22452,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3426:7:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_50000000000000000_by_1",
                                                                                "typeString": "int_const 50000000000000000"
                                                                            },
                                                                            "value": "0.05e18"
                                                                        },
                                                                        {
                                                                            "hexValue": "333635",
                                                                            "id": 22453,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3459:8:91",
                                                                            "subdenomination": "days",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_31536000_by_1",
                                                                                "typeString": "int_const 31536000"
                                                                            },
                                                                            "value": "365"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_50000000000000000_by_1",
                                                                                "typeString": "int_const 50000000000000000"
                                                                            },
                                                                            {
                                                                                "typeIdentifier": "t_rational_31536000_by_1",
                                                                                "typeString": "int_const 31536000"
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "id": 22450,
                                                                            "name": "HyperdriveMath",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 15315,
                                                                            "src": "3365:14:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$15315_$",
                                                                                "typeString": "type(library HyperdriveMath)"
                                                                            }
                                                                        },
                                                                        "id": 22451,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "3380:20:91",
                                                                        "memberName": "calculateTimeStretch",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 14698,
                                                                        "src": "3365:35:91",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                        }
                                                                    },
                                                                    "id": 22454,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3365:124:91",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 22457,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3531:1:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            }
                                                                        ],
                                                                        "id": 22456,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "3523:7:91",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 22455,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "3523:7:91",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 22458,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3523:10:91",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 22461,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3577:1:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            }
                                                                        ],
                                                                        "id": 22460,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "3569:7:91",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 22459,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "3569:7:91",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 22462,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3569:10:91",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 22465,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3657:1:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 22466,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3690:1:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 22467,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3731:1:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 22468,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3776:1:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "id": 22463,
                                                                            "name": "IHyperdrive",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 7480,
                                                                            "src": "3607:11:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7480_$",
                                                                                "typeString": "type(contract IHyperdrive)"
                                                                            }
                                                                        },
                                                                        "id": 22464,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "3619:4:91",
                                                                        "memberName": "Fees",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 7205,
                                                                        "src": "3607:16:91",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_struct$_Fees_$7205_storage_ptr_$",
                                                                            "typeString": "type(struct IHyperdrive.Fees storage pointer)"
                                                                        }
                                                                    },
                                                                    "id": 22469,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "structConstructorCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [
                                                                        "3650:5:91",
                                                                        "3684:4:91",
                                                                        "3717:12:91",
                                                                        "3758:16:91"
                                                                    ],
                                                                    "names": [
                                                                        "curve",
                                                                        "flat",
                                                                        "governanceLP",
                                                                        "governanceZombie"
                                                                    ],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3607:193:91",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.Fees memory"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_IERC20_$6793",
                                                                        "typeString": "contract IERC20"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                                        "typeString": "int_const 1000000000000000000"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                                        "typeString": "int_const 1000000000000000000"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_rational_1000000000000000_by_1",
                                                                        "typeString": "int_const 1000000000000000"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_rational_31536000_by_1",
                                                                        "typeString": "int_const 31536000"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_rational_86400_by_1",
                                                                        "typeString": "int_const 86400"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.Fees memory"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 22435,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 7480,
                                                                    "src": "2906:11:91",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7480_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 22436,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "2918:10:91",
                                                                "memberName": "PoolConfig",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 7280,
                                                                "src": "2906:22:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_struct$_PoolConfig_$7280_storage_ptr_$",
                                                                    "typeString": "type(struct IHyperdrive.PoolConfig storage pointer)"
                                                                }
                                                            },
                                                            "id": 22470,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "structConstructorCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [
                                                                "2951:9:91",
                                                                "3002:13:91",
                                                                "3053:14:91",
                                                                "3106:22:91",
                                                                "3156:20:91",
                                                                "3204:24:91",
                                                                "3256:16:91",
                                                                "3304:18:91",
                                                                "3352:11:91",
                                                                "3511:10:91",
                                                                "3555:12:91",
                                                                "3601:4:91"
                                                            ],
                                                            "names": [
                                                                "baseToken",
                                                                "linkerFactory",
                                                                "linkerCodeHash",
                                                                "initialVaultSharePrice",
                                                                "minimumShareReserves",
                                                                "minimumTransactionAmount",
                                                                "positionDuration",
                                                                "checkpointDuration",
                                                                "timeStretch",
                                                                "governance",
                                                                "feeCollector",
                                                                "fees"
                                                            ],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2906:913:91",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                            }
                                                        ],
                                                        "id": 22434,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "NewExpression",
                                                        "src": "2863:25:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$21097_$",
                                                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)"
                                                        },
                                                        "typeName": {
                                                            "id": 22433,
                                                            "nodeType": "UserDefinedTypeName",
                                                            "pathNode": {
                                                                "id": 22432,
                                                                "name": "MockHyperdriveTarget0",
                                                                "nameLocations": [
                                                                    "2867:21:91"
                                                                ],
                                                                "nodeType": "IdentifierPath",
                                                                "referencedDeclaration": 21097,
                                                                "src": "2867:21:91"
                                                            },
                                                            "referencedDeclaration": 21097,
                                                            "src": "2867:21:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$21097",
                                                                "typeString": "contract MockHyperdriveTarget0"
                                                            }
                                                        }
                                                    },
                                                    "id": 22471,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2863:970:91",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$21097",
                                                        "typeString": "contract MockHyperdriveTarget0"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$21097",
                                                        "typeString": "contract MockHyperdriveTarget0"
                                                    }
                                                ],
                                                "id": 22431,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2842:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 22430,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2842:7:91",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 22472,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2842:1001:91",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2832:1011:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 22474,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2832:1011:91"
                                },
                                {
                                    "expression": {
                                        "id": 22496,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22475,
                                            "name": "DOMAIN_SEPARATOR",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22384,
                                            "src": "4188:16:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "hexValue": "454950373132446f6d61696e28737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                                                                    "id": 22480,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "4289:72:91",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd",
                                                                        "typeString": "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\""
                                                                    },
                                                                    "value": "EIP712Domain(string version,uint256 chainId,address verifyingContract)"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd",
                                                                        "typeString": "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\""
                                                                    }
                                                                ],
                                                                "id": 22479,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "4258:9:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 22481,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4258:121:91",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "31",
                                                                            "id": 22485,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "string",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "4413:3:91",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                                                                "typeString": "literal_string \"1\""
                                                                            },
                                                                            "value": "1"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                                                                "typeString": "literal_string \"1\""
                                                                            }
                                                                        ],
                                                                        "id": 22484,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "4407:5:91",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                            "typeString": "type(bytes storage pointer)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 22483,
                                                                            "name": "bytes",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "4407:5:91",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 22486,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "4407:10:91",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                ],
                                                                "id": 22482,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "4397:9:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 22487,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4397:21:91",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 22488,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -4,
                                                                "src": "4436:5:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 22489,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4442:7:91",
                                                            "memberName": "chainid",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4436:13:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 22492,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "4475:4:91",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockMultiToken_$22686",
                                                                        "typeString": "contract MockMultiToken"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockMultiToken_$22686",
                                                                        "typeString": "contract MockMultiToken"
                                                                    }
                                                                ],
                                                                "id": 22491,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4467:7:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 22490,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4467:7:91",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 22493,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4467:13:91",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 22477,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "4230:3:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 22478,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4234:6:91",
                                                        "memberName": "encode",
                                                        "nodeType": "MemberAccess",
                                                        "src": "4230:10:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 22494,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4230:264:91",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "id": 22476,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "4207:9:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 22495,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4207:297:91",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "4188:316:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 22497,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4188:316:91"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "30",
                                                                "id": 22396,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "2005:1:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                }
                                                            ],
                                                            "id": 22395,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "1997:7:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 22394,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "1997:7:91",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 22397,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1997:10:91",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "id": 22393,
                                                    "name": "IERC20",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 6793,
                                                    "src": "1990:6:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$6793_$",
                                                        "typeString": "type(contract IERC20)"
                                                    }
                                                },
                                                "id": 22398,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1990:18:91",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$6793",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "id": 22399,
                                                "name": "_linkerFactory",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22388,
                                                "src": "2041:14:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 22400,
                                                "name": "_linkerCodeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22386,
                                                "src": "2089:15:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "hexValue": "31653138",
                                                "id": 22401,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2146:4:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000"
                                                },
                                                "value": "1e18"
                                            },
                                            {
                                                "hexValue": "31653138",
                                                "id": 22402,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2190:4:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000"
                                                },
                                                "value": "1e18"
                                            },
                                            {
                                                "hexValue": "31653135",
                                                "id": 22403,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2238:4:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000"
                                                },
                                                "value": "1e15"
                                            },
                                            {
                                                "hexValue": "333635",
                                                "id": 22404,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2278:8:91",
                                                "subdenomination": "days",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_31536000_by_1",
                                                    "typeString": "int_const 31536000"
                                                },
                                                "value": "365"
                                            },
                                            {
                                                "hexValue": "31",
                                                "id": 22405,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2324:6:91",
                                                "subdenomination": "days",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_86400_by_1",
                                                    "typeString": "int_const 86400"
                                                },
                                                "value": "1"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "302e3035653138",
                                                        "id": 22408,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2418:7:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_50000000000000000_by_1",
                                                            "typeString": "int_const 50000000000000000"
                                                        },
                                                        "value": "0.05e18"
                                                    },
                                                    {
                                                        "hexValue": "333635",
                                                        "id": 22409,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2447:8:91",
                                                        "subdenomination": "days",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_31536000_by_1",
                                                            "typeString": "int_const 31536000"
                                                        },
                                                        "value": "365"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_50000000000000000_by_1",
                                                            "typeString": "int_const 50000000000000000"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_31536000_by_1",
                                                            "typeString": "int_const 31536000"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 22406,
                                                        "name": "HyperdriveMath",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15315,
                                                        "src": "2361:14:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$15315_$",
                                                            "typeString": "type(library HyperdriveMath)"
                                                        }
                                                    },
                                                    "id": 22407,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2376:20:91",
                                                    "memberName": "calculateTimeStretch",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 14698,
                                                    "src": "2361:35:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 22410,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2361:112:91",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "30",
                                                        "id": 22413,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2511:1:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "id": 22412,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2503:7:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 22411,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2503:7:91",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 22414,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2503:10:91",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "30",
                                                        "id": 22417,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2553:1:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "id": 22416,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2545:7:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 22415,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2545:7:91",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 22418,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2545:10:91",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "30",
                                                        "id": 22421,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2625:1:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    {
                                                        "hexValue": "30",
                                                        "id": 22422,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2654:1:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    {
                                                        "hexValue": "30",
                                                        "id": 22423,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2691:1:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    {
                                                        "hexValue": "30",
                                                        "id": 22424,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2732:1:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 22419,
                                                        "name": "IHyperdrive",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 7480,
                                                        "src": "2579:11:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7480_$",
                                                            "typeString": "type(contract IHyperdrive)"
                                                        }
                                                    },
                                                    "id": 22420,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2591:4:91",
                                                    "memberName": "Fees",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7205,
                                                    "src": "2579:16:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_Fees_$7205_storage_ptr_$",
                                                        "typeString": "type(struct IHyperdrive.Fees storage pointer)"
                                                    }
                                                },
                                                "id": 22425,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [
                                                    "2618:5:91",
                                                    "2648:4:91",
                                                    "2677:12:91",
                                                    "2714:16:91"
                                                ],
                                                "names": [
                                                    "curve",
                                                    "flat",
                                                    "governanceLP",
                                                    "governanceZombie"
                                                ],
                                                "nodeType": "FunctionCall",
                                                "src": "2579:173:91",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_IERC20_$6793",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_1000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_31536000_by_1",
                                                    "typeString": "int_const 31536000"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_86400_by_1",
                                                    "typeString": "int_const 86400"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 22391,
                                                "name": "IHyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 7480,
                                                "src": "1938:11:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7480_$",
                                                    "typeString": "type(contract IHyperdrive)"
                                                }
                                            },
                                            "id": 22392,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1950:10:91",
                                            "memberName": "PoolConfig",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7280,
                                            "src": "1938:22:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_PoolConfig_$7280_storage_ptr_$",
                                                "typeString": "type(struct IHyperdrive.PoolConfig storage pointer)"
                                            }
                                        },
                                        "id": 22426,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "nameLocations": [
                                            "1979:9:91",
                                            "2026:13:91",
                                            "2073:14:91",
                                            "2122:22:91",
                                            "2168:20:91",
                                            "2212:24:91",
                                            "2260:16:91",
                                            "2304:18:91",
                                            "2348:11:91",
                                            "2491:10:91",
                                            "2531:12:91",
                                            "2573:4:91"
                                        ],
                                        "names": [
                                            "baseToken",
                                            "linkerFactory",
                                            "linkerCodeHash",
                                            "initialVaultSharePrice",
                                            "minimumShareReserves",
                                            "minimumTransactionAmount",
                                            "positionDuration",
                                            "checkpointDuration",
                                            "timeStretch",
                                            "governance",
                                            "feeCollector",
                                            "fees"
                                        ],
                                        "nodeType": "FunctionCall",
                                        "src": "1938:829:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 22427,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 22390,
                                    "name": "HyperdriveStorage",
                                    "nameLocations": [
                                        "1907:17:91"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 13478,
                                    "src": "1907:17:91"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1907:870:91"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 22389,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22386,
                                    "mutability": "mutable",
                                    "name": "_linkerCodeHash",
                                    "nameLocation": "1845:15:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22499,
                                    "src": "1837:23:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 22385,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1837:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22388,
                                    "mutability": "mutable",
                                    "name": "_linkerFactory",
                                    "nameLocation": "1878:14:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22499,
                                    "src": "1870:22:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22387,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1870:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1827:71:91"
                        },
                        "returnParameters": {
                            "id": 22428,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2782:0:91"
                        },
                        "scope": 22686,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 22550,
                        "nodeType": "FunctionDefinition",
                        "src": "4674:973:91",
                        "nodes": [],
                        "body": {
                            "id": 22549,
                            "nodeType": "Block",
                            "src": "4737:910:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22507,
                                        22509
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22507,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "4882:7:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22549,
                                            "src": "4877:12:91",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 22506,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4877:4:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 22509,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4904:10:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22549,
                                            "src": "4891:23:91",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 22508,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4891:5:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22514,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 22512,
                                                "name": "_data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22501,
                                                "src": "4939:5:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            ],
                                            "expression": {
                                                "id": 22510,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22375,
                                                "src": "4918:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 22511,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4926:12:91",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "4918:20:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 22513,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4918:27:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4876:69:91"
                                },
                                {
                                    "condition": {
                                        "id": 22516,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "4959:8:91",
                                        "subExpression": {
                                            "id": 22515,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22507,
                                            "src": "4960:7:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22546,
                                    "nodeType": "IfStatement",
                                    "src": "4955:658:91",
                                    "trueBody": {
                                        "id": 22545,
                                        "nodeType": "Block",
                                        "src": "4969:644:91",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    22518
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 22518,
                                                        "mutability": "mutable",
                                                        "name": "selector",
                                                        "nameLocation": "4990:8:91",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 22545,
                                                        "src": "4983:15:91",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        },
                                                        "typeName": {
                                                            "id": 22517,
                                                            "name": "bytes4",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "4983:6:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes4",
                                                                "typeString": "bytes4"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 22523,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 22521,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22509,
                                                            "src": "5008:10:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 22520,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "5001:6:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_bytes4_$",
                                                            "typeString": "type(bytes4)"
                                                        },
                                                        "typeName": {
                                                            "id": 22519,
                                                            "name": "bytes4",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5001:6:91",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 22522,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5001:18:91",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes4",
                                                        "typeString": "bytes4"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "4983:36:91"
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes4",
                                                        "typeString": "bytes4"
                                                    },
                                                    "id": 22528,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 22524,
                                                        "name": "selector",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22518,
                                                        "src": "5037:8:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "!=",
                                                    "rightExpression": {
                                                        "expression": {
                                                            "expression": {
                                                                "id": 22525,
                                                                "name": "IHyperdrive",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 7480,
                                                                "src": "5049:11:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7480_$",
                                                                    "typeString": "type(contract IHyperdrive)"
                                                                }
                                                            },
                                                            "id": 22526,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5061:10:91",
                                                            "memberName": "ReturnData",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7425,
                                                            "src": "5049:22:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                                                                "typeString": "function (bytes memory) pure"
                                                            }
                                                        },
                                                        "id": 22527,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5072:8:91",
                                                        "memberName": "selector",
                                                        "nodeType": "MemberAccess",
                                                        "src": "5049:31:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        }
                                                    },
                                                    "src": "5037:43:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 22531,
                                                "nodeType": "IfStatement",
                                                "src": "5033:176:91",
                                                "trueBody": {
                                                    "id": 22530,
                                                    "nodeType": "Block",
                                                    "src": "5082:127:91",
                                                    "statements": [
                                                        {
                                                            "AST": {
                                                                "nodeType": "YulBlock",
                                                                "src": "5109:86:91",
                                                                "statements": [
                                                                    {
                                                                        "expression": {
                                                                            "arguments": [
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "returndata",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "5142:10:91"
                                                                                        },
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "5154:2:91",
                                                                                            "type": "",
                                                                                            "value": "32"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "add",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "5138:3:91"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "5138:19:91"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "returndata",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "5165:10:91"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mload",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "5159:5:91"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "5159:17:91"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "revert",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "5131:6:91"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "5131:46:91"
                                                                        },
                                                                        "nodeType": "YulExpressionStatement",
                                                                        "src": "5131:46:91"
                                                                    }
                                                                ]
                                                            },
                                                            "evmVersion": "paris",
                                                            "externalReferences": [
                                                                {
                                                                    "declaration": 22509,
                                                                    "isOffset": false,
                                                                    "isSlot": false,
                                                                    "src": "5142:10:91",
                                                                    "valueSize": 1
                                                                },
                                                                {
                                                                    "declaration": 22509,
                                                                    "isOffset": false,
                                                                    "isSlot": false,
                                                                    "src": "5165:10:91",
                                                                    "valueSize": 1
                                                                }
                                                            ],
                                                            "id": 22529,
                                                            "nodeType": "InlineAssembly",
                                                            "src": "5100:95:91"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "5375:138:91",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "returndata",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "5404:10:91"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "5416:3:91",
                                                                                "type": "",
                                                                                "value": "0x4"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5400:3:91"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "5400:20:91"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "arguments": [
                                                                                    {
                                                                                        "name": "returndata",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "5432:10:91"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "mload",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "5426:5:91"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "5426:17:91"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "5445:1:91",
                                                                                "type": "",
                                                                                "value": "4"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "sub",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5422:3:91"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "5422:25:91"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "mstore",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5393:6:91"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "5393:55:91"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "5393:55:91"
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "5465:34:91",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "returndata",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "5483:10:91"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "5495:3:91",
                                                                        "type": "",
                                                                        "value": "0x4"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "add",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5479:3:91"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "5479:20:91"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "returndata",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5465:10:91"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 22509,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "5404:10:91",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 22509,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "5432:10:91",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 22509,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "5465:10:91",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 22509,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "5483:10:91",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 22532,
                                                "nodeType": "InlineAssembly",
                                                "src": "5366:147:91"
                                            },
                                            {
                                                "expression": {
                                                    "id": 22541,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22533,
                                                        "name": "returndata",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22509,
                                                        "src": "5526:10:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "id": 22536,
                                                                "name": "returndata",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22509,
                                                                "src": "5550:10:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            {
                                                                "components": [
                                                                    {
                                                                        "id": 22538,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5563:5:91",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                            "typeString": "type(bytes storage pointer)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 22537,
                                                                            "name": "bytes",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5563:5:91",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    }
                                                                ],
                                                                "id": 22539,
                                                                "isConstant": false,
                                                                "isInlineArray": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "TupleExpression",
                                                                "src": "5562:7:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                    "typeString": "type(bytes storage pointer)"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                    "typeString": "type(bytes storage pointer)"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 22534,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "5539:3:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 22535,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5543:6:91",
                                                            "memberName": "decode",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5539:10:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                                "typeString": "function () pure"
                                                            }
                                                        },
                                                        "id": 22540,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5539:31:91",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "src": "5526:44:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 22542,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5526:44:91"
                                            },
                                            {
                                                "expression": {
                                                    "id": 22543,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22509,
                                                    "src": "5592:10:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 22505,
                                                "id": 22544,
                                                "nodeType": "Return",
                                                "src": "5585:17:91"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22547,
                                        "name": "returndata",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 22509,
                                        "src": "5630:10:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 22505,
                                    "id": 22548,
                                    "nodeType": "Return",
                                    "src": "5623:17:91"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "fallback",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 22502,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22501,
                                    "mutability": "mutable",
                                    "name": "_data",
                                    "nameLocation": "4698:5:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22550,
                                    "src": "4683:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 22500,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4683:5:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4682:22:91"
                        },
                        "returnParameters": {
                            "id": 22505,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22504,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22550,
                                    "src": "4723:12:91",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 22503,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4723:5:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4722:14:91"
                        },
                        "scope": 22686,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 22564,
                        "nodeType": "FunctionDefinition",
                        "src": "5784:132:91",
                        "nodes": [],
                        "body": {
                            "id": 22563,
                            "nodeType": "Block",
                            "src": "5891:25:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "hexValue": "30",
                                        "id": 22561,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "5908:1:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "functionReturnParameters": 22560,
                                    "id": 22562,
                                    "nodeType": "Return",
                                    "src": "5901:8:91"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8888
                        ],
                        "documentation": {
                            "id": 22551,
                            "nodeType": "StructuredDocumentation",
                            "src": "5653:18:91",
                            "text": "Overrides ///"
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_applyCheckpoint",
                        "nameLocation": "5793:16:91",
                        "overrides": {
                            "id": 22557,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "5864:8:91"
                        },
                        "parameters": {
                            "id": 22556,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22553,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22564,
                                    "src": "5819:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22552,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5819:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22555,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22564,
                                    "src": "5836:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22554,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5836:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5809:40:91"
                        },
                        "returnParameters": {
                            "id": 22560,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22559,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22564,
                                    "src": "5882:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22558,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5882:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5881:9:91"
                        },
                        "scope": 22686,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22612,
                        "nodeType": "FunctionDefinition",
                        "src": "7105:868:91",
                        "nodes": [],
                        "body": {
                            "id": 22611,
                            "nodeType": "Block",
                            "src": "7295:678:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22583,
                                        22585
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22583,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "7311:7:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22611,
                                            "src": "7306:12:91",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 22582,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7306:4:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 22585,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "7333:6:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22611,
                                            "src": "7320:19:91",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 22584,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7320:5:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22604,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 22590,
                                                            "name": "HyperdriveTarget0",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3146,
                                                            "src": "7409:17:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_HyperdriveTarget0_$3146_$",
                                                                "typeString": "type(contract HyperdriveTarget0)"
                                                            }
                                                        },
                                                        "id": 22591,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7427:12:91",
                                                        "memberName": "permitForAll",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 2660,
                                                        "src": "7409:30:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                                                            "typeString": "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 22592,
                                                                "name": "DOMAIN_SEPARATOR",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22384,
                                                                "src": "7479:16:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 22593,
                                                                "name": "PERMIT_TYPEHASH",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22381,
                                                                "src": "7517:15:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 22594,
                                                                "name": "owner",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22567,
                                                                "src": "7554:5:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 22595,
                                                                "name": "spender",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22569,
                                                                "src": "7581:7:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 22596,
                                                                "name": "_approved",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22571,
                                                                "src": "7610:9:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            {
                                                                "id": 22597,
                                                                "name": "deadline",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22573,
                                                                "src": "7641:8:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 22598,
                                                                "name": "v",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22575,
                                                                "src": "7671:1:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint8",
                                                                    "typeString": "uint8"
                                                                }
                                                            },
                                                            {
                                                                "id": 22599,
                                                                "name": "r",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22577,
                                                                "src": "7694:1:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 22600,
                                                                "name": "s",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22579,
                                                                "src": "7717:1:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            }
                                                        ],
                                                        "id": 22601,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "7457:279:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$",
                                                            "typeString": "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                                                            "typeString": "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$",
                                                            "typeString": "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 22588,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "7377:3:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 22589,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7381:10:91",
                                                    "memberName": "encodeCall",
                                                    "nodeType": "MemberAccess",
                                                    "src": "7377:14:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 22602,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7377:373:91",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 22586,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22375,
                                                "src": "7343:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 22587,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7351:12:91",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "7343:20:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 22603,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7343:417:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7305:455:91"
                                },
                                {
                                    "condition": {
                                        "id": 22606,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "7774:8:91",
                                        "subExpression": {
                                            "id": 22605,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22583,
                                            "src": "7775:7:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22609,
                                    "nodeType": "IfStatement",
                                    "src": "7770:117:91",
                                    "trueBody": {
                                        "id": 22608,
                                        "nodeType": "Block",
                                        "src": "7784:103:91",
                                        "statements": [
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "7807:70:91",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "result",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "7836:6:91"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "7844:2:91",
                                                                                "type": "",
                                                                                "value": "32"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "7832:3:91"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "7832:15:91"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "result",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "7855:6:91"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mload",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "7849:5:91"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "7849:13:91"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7825:6:91"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "7825:38:91"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "7825:38:91"
                                                        }
                                                    ]
                                                },
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 22585,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "7836:6:91",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 22585,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "7855:6:91",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 22607,
                                                "nodeType": "InlineAssembly",
                                                "src": "7798:79:91"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "7905:62:91",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "result",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7930:6:91"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "7938:2:91",
                                                                    "type": "",
                                                                    "value": "32"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7926:3:91"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "7926:15:91"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "result",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7949:6:91"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mload",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7943:5:91"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "7943:13:91"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "return",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7919:6:91"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7919:38:91"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "7919:38:91"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 22585,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7930:6:91",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 22585,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7949:6:91",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 22610,
                                    "nodeType": "InlineAssembly",
                                    "src": "7896:71:91"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22565,
                            "nodeType": "StructuredDocumentation",
                            "src": "5946:1154:91",
                            "text": "@notice Allows a caller who is not the owner of an account to execute the\n      functionality of 'approve' for all assets with the owners signature.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported."
                        },
                        "functionSelector": "9032c726",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permitForAll",
                        "nameLocation": "7114:12:91",
                        "parameters": {
                            "id": 22580,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22567,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "7144:5:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22612,
                                    "src": "7136:13:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22566,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7136:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22569,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "7167:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22612,
                                    "src": "7159:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22568,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7159:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22571,
                                    "mutability": "mutable",
                                    "name": "_approved",
                                    "nameLocation": "7189:9:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22612,
                                    "src": "7184:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 22570,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7184:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22573,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "7216:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22612,
                                    "src": "7208:16:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22572,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7208:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22575,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "7240:1:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22612,
                                    "src": "7234:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 22574,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7234:5:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22577,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "7259:1:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22612,
                                    "src": "7251:9:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 22576,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7251:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22579,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "7278:1:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22612,
                                    "src": "7270:9:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 22578,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7270:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7126:159:91"
                        },
                        "returnParameters": {
                            "id": 22581,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7295:0:91"
                        },
                        "scope": 22686,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 22631,
                        "nodeType": "FunctionDefinition",
                        "src": "7998:165:91",
                        "nodes": [],
                        "body": {
                            "id": 22630,
                            "nodeType": "Block",
                            "src": "8110:53:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 22628,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 22622,
                                                    "name": "_balanceOf",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13364,
                                                    "src": "8120:10:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                        "typeString": "mapping(uint256 => mapping(address => uint256))"
                                                    }
                                                },
                                                "id": 22625,
                                                "indexExpression": {
                                                    "id": 22623,
                                                    "name": "_tokenId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22615,
                                                    "src": "8131:8:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "8120:20:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 22626,
                                            "indexExpression": {
                                                "id": 22624,
                                                "name": "_who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22617,
                                                "src": "8141:4:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "8120:26:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 22627,
                                            "name": "_amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22619,
                                            "src": "8149:7:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "8120:36:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22629,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8120:36:91"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22613,
                            "nodeType": "StructuredDocumentation",
                            "src": "7979:14:91",
                            "text": "Mocks ///"
                        },
                        "functionSelector": "94a97cdb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "__setBalanceOf",
                        "nameLocation": "8007:14:91",
                        "parameters": {
                            "id": 22620,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22615,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "8039:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22631,
                                    "src": "8031:16:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22614,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8031:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22617,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "8065:4:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22631,
                                    "src": "8057:12:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22616,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8057:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22619,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "8087:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22631,
                                    "src": "8079:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22618,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8079:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8021:79:91"
                        },
                        "returnParameters": {
                            "id": 22621,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8110:0:91"
                        },
                        "scope": 22686,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 22653,
                        "nodeType": "FunctionDefinition",
                        "src": "8169:228:91",
                        "nodes": [],
                        "body": {
                            "id": 22652,
                            "nodeType": "Block",
                            "src": "8332:65:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 22645,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22633,
                                                "src": "8356:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22646,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22635,
                                                "src": "8365:4:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 22647,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22637,
                                                "src": "8371:2:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 22648,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22639,
                                                "src": "8375:6:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22649,
                                                "name": "caller",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22641,
                                                "src": "8383:6:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 22644,
                                            "name": "_transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12113,
                                            "src": "8342:13:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,address,uint256,address)"
                                            }
                                        },
                                        "id": 22650,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8342:48:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 22651,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8342:48:91"
                                }
                            ]
                        },
                        "functionSelector": "58af4a0a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "__external_transferFrom",
                        "nameLocation": "8178:23:91",
                        "parameters": {
                            "id": 22642,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22633,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "8219:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22653,
                                    "src": "8211:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22632,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8211:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22635,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "8244:4:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22653,
                                    "src": "8236:12:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22634,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8236:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22637,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "8266:2:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22653,
                                    "src": "8258:10:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22636,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8258:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22639,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "8286:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22653,
                                    "src": "8278:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22638,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8278:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22641,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "8310:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22653,
                                    "src": "8302:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22640,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8302:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8201:121:91"
                        },
                        "returnParameters": {
                            "id": 22643,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8332:0:91"
                        },
                        "scope": 22686,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 22669,
                        "nodeType": "FunctionDefinition",
                        "src": "8403:111:91",
                        "nodes": [],
                        "body": {
                            "id": 22668,
                            "nodeType": "Block",
                            "src": "8471:43:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 22663,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22655,
                                                "src": "8487:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22664,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22657,
                                                "src": "8496:2:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 22665,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22659,
                                                "src": "8500:6:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 22662,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12179,
                                            "src": "8481:5:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 22666,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8481:26:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 22667,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8481:26:91"
                                }
                            ]
                        },
                        "functionSelector": "836a1040",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "8412:4:91",
                        "parameters": {
                            "id": 22660,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22655,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "8425:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22669,
                                    "src": "8417:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22654,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8417:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22657,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "8442:2:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22669,
                                    "src": "8434:10:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22656,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8434:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22659,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "8454:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22669,
                                    "src": "8446:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22658,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8446:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8416:45:91"
                        },
                        "returnParameters": {
                            "id": 22661,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8471:0:91"
                        },
                        "scope": 22686,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 22685,
                        "nodeType": "FunctionDefinition",
                        "src": "8520:115:91",
                        "nodes": [],
                        "body": {
                            "id": 22684,
                            "nodeType": "Block",
                            "src": "8590:45:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 22679,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22671,
                                                "src": "8606:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22680,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22673,
                                                "src": "8615:4:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 22681,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22675,
                                                "src": "8621:6:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 22678,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12230,
                                            "src": "8600:5:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 22682,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8600:28:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 22683,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8600:28:91"
                                }
                            ]
                        },
                        "functionSelector": "9eea5f66",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "burn",
                        "nameLocation": "8529:4:91",
                        "parameters": {
                            "id": 22676,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22671,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "8542:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22685,
                                    "src": "8534:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22670,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8534:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22673,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "8559:4:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22685,
                                    "src": "8551:12:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22672,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8551:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22675,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "8573:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22685,
                                    "src": "8565:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22674,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8565:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8533:47:91"
                        },
                        "returnParameters": {
                            "id": 22677,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8590:0:91"
                        },
                        "scope": 22686,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 22370,
                            "name": "HyperdriveMultiToken",
                            "nameLocations": [
                                "1316:20:91"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 12387,
                            "src": "1316:20:91"
                        },
                        "id": 22371,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1316:20:91"
                    },
                    {
                        "baseName": {
                            "id": 22372,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "1338:18:91"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 20737,
                            "src": "1338:18:91"
                        },
                        "id": 22373,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1338:18:91"
                    }
                ],
                "canonicalName": "MockMultiToken",
                "contractDependencies": [
                    21097
                ],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    22686,
                    20737,
                    12387,
                    9728,
                    13478,
                    67358,
                    7924,
                    8482
                ],
                "name": "MockMultiToken",
                "nameLocation": "1298:14:91",
                "scope": 22687,
                "usedErrors": [
                    7351,
                    7357,
                    7393,
                    7420,
                    67303
                ],
                "usedEvents": [
                    7773,
                    7788,
                    7805,
                    7818,
                    7835,
                    7854,
                    7871,
                    7888,
                    7901,
                    7908,
                    7913,
                    7918,
                    7923,
                    8463,
                    8472,
                    8481
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 91
};
