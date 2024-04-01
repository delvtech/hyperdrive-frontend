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
            "inputs": [],
            "name": "UnsafeCastToInt256",
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
                    "internalType": "address",
                    "name": "destination",
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
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "basePayment",
                    "type": "uint256"
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
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
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
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "Sweep",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
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
            "inputs": [],
            "name": "domainSeparator",
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
        "object": "0x6102806040523480156200001257600080fd5b5060405162005b3638038062005b36833981016040819052620000359162000703565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001826001600160a01b03168152602001838152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e133808152602001620151808152602001620000cf66b1a2bc2ec500006301e133806200038b60201b60201c565b81526000602080830182905260408084018390526060808501849052815160808181018452858252818501869052818401869052818301869052958601526001845585516001600160a01b03908116865286840151811660a0908152878701516101a0908152818901516101c090815260c0808b01516101e052610100808c0151825260e0808d01518152610120808e01518352948d01805151865280518b015161014090815281518b015161016090815291518a01516101809081528f8c01518a16610200528f8b015161022052908f0151600a8054918b166001600160a01b0319928316179055918f015160088054918b16918416919091179055909d01516009805491891691909e1617909c558751928301885289835297820198909852928a1694830194909452918101899052670de0b6b3a76400009581018690529081019490945266038d7ea4c68000928401929092526301e133809383018490526201518090830152909190820190620002529066b1a2bc2ec50000906200038b565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160405180608001604052806000815260200160008152602001600081526020016000815250815250604051620002bd90620006f5565b620002c9919062000742565b604051809103906000f080158015620002e6573d6000803e3d6000fd5b506001600160a01b031661024052505060408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a09091019092528151910120610260526200089e565b600080620003c2620003b2620003a38660646200086e565b66a5bbed86c5a0009062000450565b6748cd4072281e0000906200046e565b9050620003d8670de0b6b3a7640000826200046e565b905062000446816200043f6200040b62000405620003ff89670de0b6b3a764000062000888565b62000485565b620004b4565b6200043862000405620004248a8a6301e13380620006d6565b620003ff90670de0b6b3a764000062000888565b906200046e565b9062000450565b9150505b92915050565b6000620004678383670de0b6b3a7640000620006d6565b9392505050565b60006200046783670de0b6b3a764000084620006d6565b60006001600160ff1b03821115620004b05760405163396ea70160e11b815260040160405180910390fd5b5090565b6000808213620004d75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c6001600160401b031060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906200055b9084901c62000485565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd190190910260016c0504a838426634cdd8738f543560611b03190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000826000190484118302158202620006ee57600080fd5b5091020490565b614805806200133183390190565b600080604083850312156200071757600080fd5b825160208401519092506001600160a01b03811681146200073757600080fd5b809150509250929050565b81516001600160a01b03168152610220810160208301516200076f60208401826001600160a01b03169052565b5060408301516200078b60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151620007f2828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e08501526060810151610200850152505092915050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200044a576200044a62000858565b808201808211156200044a576200044a62000858565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516109f26200093f60003960008181610231015261027c0152600081816087015261030d015260005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506109f26000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639032c7261161005b5780639032c726146101d257806394a97cdb146101e55780639eea5f6614610219578063f698da251461022c5761007d565b806330adf81f1461017157806358af4a0a146101aa578063836a1040146101bf575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516100bf929190610707565b600060405180830381855af49150503d80600081146100fa576040519150601f19603f3d011682016040523d82523d6000602084013e6100ff565b606091505b50915091508161016257600061011482610717565b90506001600160e01b03198116636e64089360e11b1461013657815160208301fd5b81516003198101600484019081529261015791810160200190602401610788565b935061016692505050565b9150505b915050805190602001f35b6101987f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b60405190815260200160405180910390f35b6101bd6101b8366004610851565b610253565b005b6101bd6101cd3660046108a8565b610267565b6101bd6101e03660046108dd565b610277565b6101bd6101f33660046108a8565b6000928352600d602090815260408085206001600160a01b039094168552929052912055565b6101bd6102273660046108a8565b6103c1565b6101987f000000000000000000000000000000000000000000000000000000000000000081565b61026085858585856103cc565b5050505050565b61027283838361058d565b505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610367919061095e565b600060405180830381855af49150503d80600081146103a2576040519150601f19603f3d011682016040523d82523d6000602084013e6103a7565b606091505b5091509150816103b957805160208201fd5b805160208201f35b610272838383610636565b6001600160a01b03841615806103e957506001600160a01b038316155b156104075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146104cb576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166104cb5760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146104c95760008681526010602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906104c3908490610990565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906104fd908490610990565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906105349084906109a9565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906105bf9084906109a9565b90915550506000838152600e6020526040812080548392906105e29084906109a9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915290205481111561067957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e909152812080548392906106bc908490610990565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610629565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156107465780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561077f578181015183820152602001610767565b50506000910152565b60006020828403121561079a57600080fd5b815167ffffffffffffffff808211156107b257600080fd5b818401915084601f8301126107c657600080fd5b8151818111156107d8576107d861074e565b604051601f8201601f19908116603f011681019083821181831017156108005761080061074e565b8160405282815287602084870101111561081957600080fd5b61082a836020830160208801610764565b979650505050505050565b80356001600160a01b038116811461084c57600080fd5b919050565b600080600080600060a0868803121561086957600080fd5b8535945061087960208701610835565b935061088760408701610835565b92506060860135915061089c60808701610835565b90509295509295909350565b6000806000606084860312156108bd57600080fd5b833592506108cd60208501610835565b9150604084013590509250925092565b600080600080600080600060e0888a0312156108f857600080fd5b61090188610835565b965061090f60208901610835565b95506040880135801515811461092457600080fd5b945060608801359350608088013560ff8116811461094157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008251610970818460208701610764565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b818103818111156109a3576109a361097a565b92915050565b808201808211156109a3576109a361097a56fea264697066735822122007e36690a09d4702e11184228d1ab3ce41e0dbe0fd8acbec5a5954d90787479264736f6c634300081400336102406040523480156200001257600080fd5b5060405162004805380380620048058339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516143f66200040f60003960008181610b690152611b1f015260008181610b420152611ae2015260008181610be30152611cd7015260008181610bbd0152611cb1015260008181610b930152611c8b01526000610d1301526000610cee01526000610cc901526000610ca6015260008181610c560152611cfd015260008181610c0901528181610e7a0152612412015260008181610c2f01526129c60152600081816105520152610b1601526000818161065a01528181610af101528181610e3b015281816120f6015281816122e70152818161233001528181612566015281816125af015281816126ed0152818161279901528181612885015261293101526143f66000f3fe608060405234801561001057600080fd5b50600436106102055760003560e01c80637ecebe001161011a578063becee9c3116100ad578063d81657431161007c578063d81657431461047b578063e44808bc14610490578063e4af29d1146104a3578063e985e9c5146104b6578063fba56008146104c957600080fd5b8063becee9c314610440578063c55dae6314610460578063c69e16ad146103c4578063cf210e651461046857600080fd5b8063a42dce80116100e9578063a42dce80146103f2578063ab033ea914610405578063b0d9658014610418578063bd85b0391461042d57600080fd5b80637ecebe00146103b15780638e67f87e146103c45780639cd241af146103cc578063a22cb465146103df57600080fd5b806321ff32a91161019d57806346fbf68e1161016c57806346fbf68e146103405780634e41a1fb146103635780634ed2d6ac1461037657806360246c88146103895780637180c8ca1461039e57600080fd5b806321ff32a9146102df578063313ce567146103005780633656eec21461031a5780633e691db91461032d57600080fd5b806314e5f07b116101d957806314e5f07b1461027b57806317fad7fc1461028e5780631c0f12b6146102a157806320fc4881146102b457600080fd5b8062ad800c1461020a57806301681a621461023357806302329a29146102485780630a4e14931461025b575b600080fd5b61021d6102183660046138c6565b6104f8565b60405161022a919061392f565b60405180910390f35b610246610241366004613957565b61052f565b005b610246610256366004613982565b61053b565b610263610544565b6040516001600160a01b03909116815260200161022a565b6102466102893660046139ae565b610587565b61024661029c366004613a82565b6105a3565b6102466102af366004613b17565b6105b9565b6102c76102c23660046138c6565b6105cc565b60405190516001600160801b0316815260200161022a565b6102f26102ed366004613b5f565b61060d565b60405190815260200161022a565b610308610653565b60405160ff909116815260200161022a565b6102f2610328366004613ba1565b6106ee565b6102f261033b366004613bd1565b610727565b61035361034e366004613957565b610732565b604051901515815260200161022a565b61021d6103713660046138c6565b610768565b610246610384366004613c0c565b610776565b6103916107c4565b60405161022a9190613c56565b6102466103ac366004613cf7565b6109f1565b6102f26103bf366004613957565b6109ff565b6102f2610a2b565b6102466103da366004613d25565b610a45565b6102466103ed366004613cf7565b610a56565b610246610400366004613957565b610ac2565b610246610413366004613957565b610acb565b610420610ad4565b60405161022a9190613d5d565b6102f261043b3660046138c6565b610d50565b61045361044e366004613e71565b610d72565b60405161022a9190613eb3565b610263610e2d565b6102f26104763660046138c6565b610e6d565b610483610eb6565b60405161022a9190613ef7565b61024661049e366004614008565b610fc2565b6102466104b1366004613957565b61100a565b6103536104c4366004614067565b611013565b6104d1611057565b6040805182516001600160801b03908116825260209384015116928101929092520161022a565b606061052a610506836110b6565b604051602001610516919061392f565b6040516020818303038152906040526111de565b919050565b61053881611202565b50565b6105388161138c565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105849101610516565b90565b61059889898989898989898961140f565b505050505050505050565b6105b1868686868686611606565b505050505050565b6105c684848484336116ba565b50505050565b60408051602081019091526000815261052a6007600084815260200190815260200160002060405160200161051691546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261064c9101610516565b9392505050565b60006105847f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da9190614095565b6040805160ff909216602083015201610516565b6000828152600d602090815260408083206001600160a01b03851684528252808320548151928301526107219101610516565b92915050565b60006107218261187b565b6001600160a01b0381166000908152600c6020908152604080832054905161052a926105169260ff169101901515815260200190565b606061052a610506836119a6565b8361078081611aa4565b6001600160a01b0316336001600160a01b0316146107b157604051632aab8bd360e01b815260040160405180910390fd5b6107bd85858585611b61565b5050505050565b61083d604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610847611bce565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108b291906140de565b6108bc91906140f1565b905060008083116108ce5760006108e9565b6108e9836108e36108de86611be6565b611d7c565b90611dac565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109bd576109b88486611dc1565b6109c0565b60005b81526002546001600160801b03166020918201526040519192506109ea9161051691849101613c56565b5050505090565b6109fb8282611dd6565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261052a9101610516565b6000610584600b5460405160200161051691815260200190565b610a5183838333611b61565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61053881611e5f565b61053881611ed3565b610adc6137f6565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a0830191909152915161058492610516929101613d5d565b6000818152600e602090815260408083205481519283015261052a9101610516565b606060008267ffffffffffffffff811115610d8f57610d8f614104565b604051908082528060200260200182016040528015610db8578160200160208202803683370190505b50905060005b83811015610e11576000858583818110610dda57610dda61411a565b90506020020135905060008154905080848481518110610dfc57610dfc61411a565b60209081029190910101525050600101610dbe565b50610e26816040516020016105169190613eb3565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105849101610516565b600061052a610ea4610e9f7f0000000000000000000000000000000000000000000000000000000000000000856140de565b611f47565b60405160200161051691815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105846001604051602001610516919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610fcc81611aa4565b6001600160a01b0316336001600160a01b031614610ffd57604051632aab8bd360e01b815260040160405180910390fd5b6105b186868686866116ba565b61053881611f8b565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107219101610516565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261058490606001610516565b606060f882901c6001600160f81b03831660006110d282611fff565b905060008360038111156110e8576110e86140b2565b0361111a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111d6565b600183600381111561112e5761112e6140b2565b0361115a57806040516020016111449190614130565b60405160208183030381529060405293506111d6565b600283600381111561116e5761116e6140b2565b0361118457806040516020016111449190614169565b6003836003811115611198576111986140b2565b036111d6576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016111f9919061392f565b60405180910390fd5b61120a6120b4565b336000908152600c602052604090205460ff1615801561123557506009546001600160a01b03163314155b801561124c5750600a546001600160a01b03163314155b15611269576040516282b42960e81b815260040160405180910390fd5b60006112736120de565b9050600061127f612169565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156112c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ed91906141a3565b60095490915061130a906001600160a01b0386811691168361217b565b826113136120de565b141580611327575081611324612169565b14155b15611345576040516313dd85ff60e31b815260040160405180910390fd5b6009546040516001600160a01b038087169216907f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09690600090a35050506105386001600055565b336000908152600c602052604090205460ff166113bb576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061140490831515815260200190565b60405180910390a150565b834211156114305760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114575760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611545573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461158357604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061162357506001600160a01b038516155b156116415760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116615760405163174861a760e31b815260040160405180910390fd5b60005b838110156116b1576116a98585838181106116815761168161411a565b90506020020135888886868681811061169c5761169c61411a565b90506020020135336116ba565b600101611664565b50505050505050565b6001600160a01b03841615806116d757506001600160a01b038316155b156116f55760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146117b9576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117b95760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117b75760008681526010602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906117b19084906140f1565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117eb9084906140f1565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906118229084906140de565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006118856120b4565b61188e826121cd565b6008546001600160a01b03166118a76020840184613957565b6001600160a01b0316146118ce57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118f957506008546001600160a01b03163314155b80156119105750600a546001600160a01b03163314155b1561192d576040516282b42960e81b815260040160405180910390fd5b6000611937611bce565b600b8054600090915590915061194e818386612203565b6008549093506001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e4761198985858861229d565b60405190815260200160405180910390a2505061052a6001600055565b606060f882901c6001600160f81b03831660006119c282611fff565b905060008360038111156119d8576119d86140b2565b03611a0a576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111d6565b6001836003811115611a1e57611a1e6140b2565b03611a34578060405160200161114491906141bc565b6002836003811115611a4857611a486140b2565b03611a5e578060405160200161114491906141f4565b6003836003811115611a7257611a726140b2565b036111d657505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611be1670de0b6b3a76400006122cc565b905090565b611c4a6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d4291166123c7565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d74929004166123c7565b905292915050565b6000806000611d8a8461243d565b9150915080610e2657604051635516328b60e11b815260040160405180910390fd5b600061064c8383670de0b6b3a76400006124ca565b600061064c83670de0b6b3a7640000846124ca565b600a546001600160a01b03163314611e00576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e89576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611efd576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f6f600e6000611f5b6002866124e8565b81526020019081526020016000205461251d565b611f81600e6000611f5b6001876124e8565b6107219190614220565b600a546001600160a01b03163314611fb5576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b84156120a65761203a600a86614256565b6120459060306140de565b60f81b82600161205584876140f1565b61205f91906140f1565b8151811061206f5761206f61411a565b60200101906001600160f81b031916908160001a905350806120908161426a565b915061209f9050600a86614283565b9450612029565b918290030190815292915050565b6002600054036120d757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612145573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611be191906141a3565b6000611be16121766120de565b61254b565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a51908490612634565b60006121dc6020830183613957565b6001600160a01b0316036105385760405163f0dd15fd60e01b815260040160405180910390fd5b6000806122108585611dac565b905061221b8161254b565b94508460000361222f57600091505061064c565b61223f6040840160208501613982565b1561226e57612267856122556020860186613957565b6122626040870187614297565b612697565b9150612295565b6122918561227f6020860186613957565b61228c6040870187614297565b612831565b8491505b509392505050565b60006122af6040830160208401613982565b156122bb57508261064c565b6122c58484611dac565b905061064c565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161231b5750476123a6565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561237f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123a391906141a3565b90505b6012546000036123b757600061064c565b60125461064c90849083906124ca565b600080670de0b6b3a76400006123db6129bf565b6123e591906142de565b90508083116123f55760006123ff565b6123ff81846140f1565b915061064c612436670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006142de565b8390611dc1565b600080600080600061244e866129f5565b915091508061246557506000958695509350505050565b6124728660a0015161251d565b61247b87612d2f565b83612489896000015161251d565b61249391906142f5565b61249d91906142f5565b6124a79190614220565b9250505060008112156124c05750600093849350915050565b9360019350915050565b60008260001904841183021582026124e157600080fd5b5091020490565b60006001600160f81b038211156125125760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156125475760405163396ea70160e11b815260040160405180910390fd5b5090565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161259a575047612625565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061262291906141a3565b90505b60125461064c908490836124ca565b60006126496001600160a01b03841683612d93565b9050805160001415801561266e57508080602001905181019061266c9190614315565b155b15610a5157604051635274afe760e01b81526001600160a01b03841660048201526024016111f9565b600060125485116126a857846126ac565b6012545b945060006126b9866122cc565b905085601260008282546126cd91906140f1565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612773576040516001600160a01b038716908390600081818185875af1925050503d8060008114612763576040519150601f19603f3d011682016040523d82523d6000602084013e612768565b606091505b505080915050612809565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156127e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128069190614315565b90505b80612827576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116128405783612844565b6012545b93506000612851856122cc565b9050846012600082825461286591906140f1565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161290b576040516001600160a01b038616908390600081818185875af1925050503d80600081146128fb576040519150601f19603f3d011682016040523d82523d6000602084013e612900565b606091505b5050809150506129a1565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561297a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061299e9190614315565b90505b806105b1576040516312171d8360e31b815260040160405180910390fd5b60006129eb7f000000000000000000000000000000000000000000000000000000000000000042614256565b611be190426140f1565b6000806000612a1f612a1a856101600151866101400151611dac90919063ffffffff16565b61251d565b612a3f612a1a866101200151876101000151612da190919063ffffffff16565b612a499190614220565b9050600080612a6086600001518760200151612db6565b9150915080612a7757506000958695509350505050565b6000831315612bc75760008390506000612ac5886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612ab691906140f1565b8d606001518e60800151612df5565b9350905082612ade575060009788975095505050505050565b818110612b7c576000612b18858a60400151858c60e00151670de0b6b3a7640000612b0991906140f1565b8d606001518e60800151612eee565b9450905083158015612b2d57508860c0015183105b15612b445750600098600198509650505050505050565b83612b5a57506000988998509650505050505050565b612b638161251d565b612b6c90614332565b9960019950975050505050505050565b6000886020015112612bb357612b9b8860a0015185612a1a91906140f1565b612ba490614332565b98600198509650505050505050565b60a08801518851612b9b91612a1a916140f1565b6000831215612d20576000612bdb84614332565b90506000612c0f8489604001518a60e00151670de0b6b3a7640000612c0091906140f1565b8b606001518c60800151612fb1565b9350905082612c28575060009788975095505050505050565b818110612cad576000612c62858a60400151858c60e00151670de0b6b3a7640000612c5391906140f1565b8d606001518e6080015161305d565b9450905083158015612c7757508860c0015183105b15612c8e5750600098600198509650505050505050565b83612ca457506000988998509650505050505050565b612b6c8161251d565b6000612cdf858a604001518b60e00151670de0b6b3a7640000612cd091906140f1565b8c606001518d60800151613134565b9450905083612cf957506000988998509650505050505050565b612b6c612d168a606001518486612d1091906140f1565b90611dc1565b612a1a90836140de565b50600095600195509350505050565b6000612d62612a1a836101200151670de0b6b3a7640000612d5091906140f1565b606085015161010086015191906131e3565b611f81612a1a846101600151670de0b6b3a7640000612d8191906140f1565b606086015161014087015191906124ca565b606061064c83836000613209565b600061064c8383670de0b6b3a76400006131e3565b600080600083612dc58661251d565b612dcf9190614220565b90506000811215612de7576000809250925050612dee565b9150600190505b9250929050565b6000806000881215612e1757612e0a88614332565b612e1490876140de565b95505b6000612e238a8a6132a6565b90506000612e34828a8989896132c7565b90506000612e57612e4f89612e49898d612da1565b906132f6565b8890886131e3565b905080821015612e705760008094509450505050612ee2565b808203670de0b6b3a76400008110612ea557612e9e612e97670de0b6b3a76400008b611dc1565b82906132f6565b9050612ebd565b612eba612e97670de0b6b3a76400008b613361565b90505b8a811015612ed5576000809550955050505050612ee2565b8a90039450600193505050505b97509795505050505050565b6000806000612f008989888888613376565b9050612f1086612e49898b6140de565b975087811015612f27576000809250925050612fa6565b878103612f358186886131e3565b9050670de0b6b3a76400008110612f6257612f5b612e97670de0b6b3a764000089613361565b9050612f7a565b612f77612e97670de0b6b3a764000089611dc1565b90505b612f848186613361565b9050808a1015612f9c57600080935093505050612fa6565b8903925060019150505b965096945050505050565b6000806000612fc38888888888613376565b90506000612fee670de0b6b3a7640000612fdd8888611dc1565b612fe791906140de565b8390613361565b9050670de0b6b3a7640000811061301b57613014612e97670de0b6b3a764000089613361565b9050613033565b613030612e97670de0b6b3a764000089611dc1565b90505b8088101561304957600080935093505050613053565b8703925060019150505b9550959350505050565b600080600061306f8989888888613376565b905086881015613086576000809250925050612fa6565b968690039661309588876132f6565b9750878110156130ac576000809250925050612fa6565b8781036130ba8186886131e3565b9050670de0b6b3a764000081106130e7576130e0612e97670de0b6b3a764000089613361565b90506130ff565b6130fc612e97670de0b6b3a764000089611dc1565b90505b6131098186613361565b90508981101561312157600080935093505050612fa6565b9890980398600198509650505050505050565b600080600061314688888888886132c7565b9050600061316a670de0b6b3a76400006131608888613361565b61243691906140de565b9050670de0b6b3a7640000811061319757613190612e97670de0b6b3a764000089611dc1565b90506131af565b6131ac612e97670de0b6b3a764000089613361565b90505b6131b98186611dc1565b9050888110156131d157600080935093505050613053565b97909703976001975095505050505050565b60008260001904841183021582026131fa57600080fd5b50910281810615159190040190565b60608147101561322e5760405163cd78605960e01b81523060048201526024016111f9565b600080856001600160a01b0316848660405161324a919061434e565b60006040518083038185875af1925050503d8060008114613287576040519150601f19603f3d011682016040523d82523d6000602084013e61328c565b606091505b509150915061329c86838361339b565b9695505050505050565b6000806132b38484612db6565b909250905080610e2657610e2660016133f7565b60006132d385856132f6565b6132ec6132e486612e49868b611dac565b8590856124ca565b61329c91906140de565b60008160000361330f5750670de0b6b3a7640000610721565b8260000361331f57506000610721565b600061332a8361251d565b9050600061333f61333a8661251d565b613412565b9050818102613356670de0b6b3a76400008261436a565b905061329c81613638565b600061064c83670de0b6b3a7640000846131e3565b600061338285856132f6565b6132ec61339386612e49868b612da1565b8590856131e3565b6060826133b0576133ab826137cd565b61064c565b81511580156133c757506001600160a01b0384163b155b156133f057604051639996b31560e01b81526001600160a01b03851660048201526024016111f9565b508061064c565b80604051633c06d78b60e11b81526004016111f99190614398565b60008082136134345760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906134b79084901c61251d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361365357506000919050565b680755bf798b4a1bf1e5821261367c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061329c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61251d565b8051156137dd5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016138c16040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000602082840312156138d857600080fd5b5035919050565b60005b838110156138fa5781810151838201526020016138e2565b50506000910152565b6000815180845261391b8160208601602086016138df565b601f01601f19169290920160200192915050565b60208152600061064c6020830184613903565b6001600160a01b038116811461053857600080fd5b60006020828403121561396957600080fd5b813561064c81613942565b801515811461053857600080fd5b60006020828403121561399457600080fd5b813561064c81613974565b60ff8116811461053857600080fd5b60008060008060008060008060006101208a8c0312156139cd57600080fd5b8935985060208a0135975060408a01356139e681613942565b965060608a01356139f681613942565b955060808a0135613a0681613974565b945060a08a0135935060c08a0135613a1d8161399f565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112613a4f57600080fd5b50813567ffffffffffffffff811115613a6757600080fd5b6020830191508360208260051b8501011115612dee57600080fd5b60008060008060008060808789031215613a9b57600080fd5b8635613aa681613942565b95506020870135613ab681613942565b9450604087013567ffffffffffffffff80821115613ad357600080fd5b613adf8a838b01613a3d565b90965094506060890135915080821115613af857600080fd5b50613b0589828a01613a3d565b979a9699509497509295939492505050565b60008060008060808587031215613b2d57600080fd5b843593506020850135613b3f81613942565b92506040850135613b4f81613942565b9396929550929360600135925050565b600080600060608486031215613b7457600080fd5b833592506020840135613b8681613942565b91506040840135613b9681613942565b809150509250925092565b60008060408385031215613bb457600080fd5b823591506020830135613bc681613942565b809150509250929050565b600060208284031215613be357600080fd5b813567ffffffffffffffff811115613bfa57600080fd5b82016060818503121561064c57600080fd5b60008060008060808587031215613c2257600080fd5b843593506020850135613c3481613942565b9250604085013591506060850135613c4b81613942565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b60008060408385031215613d0a57600080fd5b8235613d1581613942565b91506020830135613bc681613974565b600080600060608486031215613d3a57600080fd5b833592506020840135613d4c81613942565b929592945050506040919091013590565b81516001600160a01b0316815261022081016020830151613d8960208401826001600160a01b03169052565b506040830151613da460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613e0a828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613e8457600080fd5b823567ffffffffffffffff811115613e9b57600080fd5b613ea785828601613a3d565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613eeb57835183529284019291840191600101613ecf565b50909695505050505050565b81516001600160801b0316815261018081016020830151613f2360208401826001600160801b03169052565b506040830151613f3e60408401826001600160801b03169052565b506060830151613f5960608401826001600160801b03169052565b506080830151613f6e6080840182600f0b9052565b5060a0830151613f8960a08401826001600160801b03169052565b5060c0830151613fa460c08401826001600160801b03169052565b5060e0830151613fbf60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613e69565b600080600080600060a0868803121561402057600080fd5b85359450602086013561403281613942565b9350604086013561404281613942565b925060608601359150608086013561405981613942565b809150509295509295909350565b6000806040838503121561407a57600080fd5b823561408581613942565b91506020830135613bc681613942565b6000602082840312156140a757600080fd5b815161064c8161399f565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610721576107216140c8565b81810381811115610721576107216140c8565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161415c8160118501602087016138df565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516141968160128501602087016138df565b9190910160120192915050565b6000602082840312156141b557600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516141e78160108501602087016138df565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161415c8160118501602087016138df565b8181036000831280158383131683831282161715610e2657610e266140c8565b634e487b7160e01b600052601260045260246000fd5b60008261426557614265614240565b500690565b60006001820161427c5761427c6140c8565b5060010190565b60008261429257614292614240565b500490565b6000808335601e198436030181126142ae57600080fd5b83018035915067ffffffffffffffff8211156142c957600080fd5b602001915036819003821315612dee57600080fd5b8082028115828204841417610721576107216140c8565b8082018281126000831280158216821582161715613e6957613e696140c8565b60006020828403121561432757600080fd5b815161064c81613974565b6000600160ff1b8201614347576143476140c8565b5060000390565b600082516143608184602087016138df565b9190910192915050565b60008261437957614379614240565b600160ff1b821460001984141615614393576143936140c8565b500590565b60208101600483106143ba57634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220bb16e7166aaf35e6f1a328b85e6894237dbe6da7d649f63f00317e185a1933de64736f6c63430008140033",
        "sourceMap": "1289:7549:140:-:0;;;1815:2898;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1937:927;;;;;;;;2004:1;-1:-1:-1;;;;;1937:927:140;;;;;2058:1;-1:-1:-1;;;;;1937:927:140;;;;;2094:14;-1:-1:-1;;;;;1937:927:140;;;;;2142:15;1937:927;;;;2199:4;1937:927;;;;2243:4;1937:927;;;;2291:4;1937:927;;;;2331:8;1937:927;;;;2377:6;1937:927;;;;2414:112;2471:7;2500:8;2414:35;;;:112;;:::i;:::-;1937:927;;2564:1;1937:927;;;;;;;;;;;;;;;;;;;;;2676:173;;1937:927;2676:173;;;;;;;;;;;;;;;;;;;;;;;;;;1937:927;;;;1713:1:169;1917:21;;5298:17:118;;-1:-1:-1;;;;;5285:30:118;;;;;5345:24;;;;5325:44;;;;;;5459:30;;;;5433:56;;;;5912:28;;;;5888:52;;;;6228:32;;;;;6200:60;;6443:26;;;;;6421:48;;-1:-1:-1;6499:24:118;;;;6479:44;;-1:-1:-1;6548:19:118;;;;6533:34;;6632:12;;;;;:18;6620:30;;6671:12;;:17;;;6660:28;;;;6717:12;;:25;;;6698:44;;;;6775:12;;:29;;;6752:52;;;;-1:-1:-1;;;6881:21:118;6864:38;;;;-1:-1:-1;;;6930:22:118;6912:40;;7055:18;;;;7041:11;:32;;;;;-1:-1:-1;;;;;;7041:32:118;;;;;;7099:20;;;;7083:13;:36;;;;;;;;;;;;;;7147:22;;;;7129:15;:40;;;;;;;;;;;;;3003:1019:140;;;;::::1;::::0;;;;;;;::::1;::::0;;;;;;::::1;::::0;;;;;;;;;;;;;3285:4:::1;3003:1019:::0;;;;;;;;;;;;;3385:4:::1;3003:1019:::0;;;;;;;3429:8:::1;3003:1019:::0;;;;;;3479:6:::1;3003:1019:::0;;;;;;;;;;3520:124:::1;::::0;3581:7:::1;::::0;3520:35:::1;:124::i;:::-;3003:1019;;;;3686:1;-1:-1:-1::0;;;;;3003:1019:140::1;;;;;3732:1;-1:-1:-1::0;;;;;3003:1019:140::1;;;;;3780:1;-1:-1:-1::0;;;;;3003:1019:140::1;;;;;3810:193;;;;;;;;3860:1;3810:193;;;;3893:1;3810:193;;;;3934:1;3810:193;;;;3979:1;3810:193;;::::0;3003:1019:::1;;::::0;2960:1076:::1;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;;;2929:1117:140::1;;::::0;-1:-1:-1;;4609:10:140::1;::::0;;;;::::1;::::0;;::::1;::::0;;-1:-1:-1;;;4609:10:140::1;::::0;;::::1;::::0;4432:264;;4460:121:::1;4432:264:::0;;::::1;2575:25:234::0;4599:21:140;2616:18:234;;;2609:34;4638:13:140::1;2659:18:234::0;;;2652:34;4677:4:140::1;2702:18:234::0;;;;2695:60;;;;4432:264:140;;;;;;;;;;2547:19:234;;;;4432:264:140;;;4409:297;;;::::1;::::0;4391:315:::1;::::0;1289:7549;;1405:1330:123;1521:7;;1684:90;1725:39;1753:10;:4;1760:3;1753:10;:::i;:::-;1733;;1725:27;:39::i;:::-;1692:10;;1684:27;:90::i;:::-;1662:112;-1:-1:-1;1798:24:123;193:4:122;1662:112:123;1798:11;:24::i;:::-;1784:38;-1:-1:-1;2463:265:123;1784:38;2481:212;2663:28;:23;2664:10;2670:4;193::122;2664:10:123;:::i;:::-;2663:21;:23::i;:::-;:26;:28::i;:::-;2510:118;:88;2517:44;:4;2533:17;2552:8;2517:15;:44::i;:::-;2511:50;;193:4:122;2511:50:123;:::i;2510:118::-;2481:173;;:212::i;:::-;2463:252;;:265::i;:::-;2444:284;;;1405:1330;;;;;:::o;1610:118:122:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;:::-;1691:30;1610:118;-1:-1:-1;;;1610:118:122:o;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;2001:204:125:-;2053:8;-1:-1:-1;;;;;2079:1:125;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:125;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:125;2001:204::o;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;-1:-1:-1;;;;;9363:33:122;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;;;;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;898:556::-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;1289:7549:140:-;;;;;;;;:::o;14:351:234:-;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;193:16;;252:2;237:18;;231:25;193:16;;-1:-1:-1;;;;;;285:31:234;;275:42;;265:70;;331:1;328;321:12;265:70;354:5;344:15;;;14:351;;;;;:::o;749:1590::-;981:13;;-1:-1:-1;;;;;444:31:234;432:44;;941:3;926:19;;1053:4;1045:6;1041:17;1035:24;1068:62;1124:4;1113:9;1109:20;1095:12;-1:-1:-1;;;;;444:31:234;432:44;;370:112;1068:62;;1179:4;1171:6;1167:17;1161:24;1194:64;1252:4;1241:9;1237:20;1221:14;-1:-1:-1;;;;;444:31:234;432:44;;370:112;1194:64;;1314:4;1306:6;1302:17;1296:24;1289:4;1278:9;1274:20;1267:54;1377:4;1369:6;1365:17;1359:24;1352:4;1341:9;1337:20;1330:54;1440:4;1432:6;1428:17;1422:24;1415:4;1404:9;1400:20;1393:54;1503:4;1495:6;1491:17;1485:24;1478:4;1467:9;1463:20;1456:54;1566:4;1558:6;1554:17;1548:24;1541:4;1530:9;1526:20;1519:54;1592:6;1652:2;1644:6;1640:15;1634:22;1629:2;1618:9;1614:18;1607:50;;1676:6;1736:2;1728:6;1724:15;1718:22;1713:2;1702:9;1698:18;1691:50;;1760:6;1815:2;1807:6;1803:15;1797:22;1828:62;1886:2;1875:9;1871:18;1855:14;-1:-1:-1;;;;;444:31:234;432:44;;370:112;1828:62;-1:-1:-1;;1909:6:234;1952:15;;;1946:22;-1:-1:-1;;;;;444:31:234;;2020:18;;;432:44;-1:-1:-1;;2058:6:234;2101:15;;;2095:22;-1:-1:-1;;;;;444:31:234;;2169:18;;;432:44;-1:-1:-1;;2207:6:234;2250:15;;;2244:22;557:12;;2314:18;;;545:25;619:4;608:16;;602:23;586:14;;;579:47;675:4;664:16;;658:23;642:14;;;635:47;731:4;720:16;;714:23;698:14;;;691:47;2275:58;;749:1590;;;;:::o;2766:127::-;2827:10;2822:3;2818:20;2815:1;2808:31;2858:4;2855:1;2848:15;2882:4;2879:1;2872:15;2898:168;2971:9;;;3002;;3019:15;;;3013:22;;2999:37;2989:71;;3040:18;;:::i;3071:125::-;3136:9;;;3157:10;;;3154:36;;;3170:18;;:::i;3071:125::-;1289:7549:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80639032c7261161005b5780639032c726146101d257806394a97cdb146101e55780639eea5f6614610219578063f698da251461022c5761007d565b806330adf81f1461017157806358af4a0a146101aa578063836a1040146101bf575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516100bf929190610707565b600060405180830381855af49150503d80600081146100fa576040519150601f19603f3d011682016040523d82523d6000602084013e6100ff565b606091505b50915091508161016257600061011482610717565b90506001600160e01b03198116636e64089360e11b1461013657815160208301fd5b81516003198101600484019081529261015791810160200190602401610788565b935061016692505050565b9150505b915050805190602001f35b6101987f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b60405190815260200160405180910390f35b6101bd6101b8366004610851565b610253565b005b6101bd6101cd3660046108a8565b610267565b6101bd6101e03660046108dd565b610277565b6101bd6101f33660046108a8565b6000928352600d602090815260408085206001600160a01b039094168552929052912055565b6101bd6102273660046108a8565b6103c1565b6101987f000000000000000000000000000000000000000000000000000000000000000081565b61026085858585856103cc565b5050505050565b61027283838361058d565b505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610367919061095e565b600060405180830381855af49150503d80600081146103a2576040519150601f19603f3d011682016040523d82523d6000602084013e6103a7565b606091505b5091509150816103b957805160208201fd5b805160208201f35b610272838383610636565b6001600160a01b03841615806103e957506001600160a01b038316155b156104075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146104cb576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166104cb5760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146104c95760008681526010602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906104c3908490610990565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906104fd908490610990565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906105349084906109a9565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906105bf9084906109a9565b90915550506000838152600e6020526040812080548392906105e29084906109a9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915290205481111561067957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e909152812080548392906106bc908490610990565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610629565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156107465780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561077f578181015183820152602001610767565b50506000910152565b60006020828403121561079a57600080fd5b815167ffffffffffffffff808211156107b257600080fd5b818401915084601f8301126107c657600080fd5b8151818111156107d8576107d861074e565b604051601f8201601f19908116603f011681019083821181831017156108005761080061074e565b8160405282815287602084870101111561081957600080fd5b61082a836020830160208801610764565b979650505050505050565b80356001600160a01b038116811461084c57600080fd5b919050565b600080600080600060a0868803121561086957600080fd5b8535945061087960208701610835565b935061088760408701610835565b92506060860135915061089c60808701610835565b90509295509295909350565b6000806000606084860312156108bd57600080fd5b833592506108cd60208501610835565b9150604084013590509250925092565b600080600080600080600060e0888a0312156108f857600080fd5b61090188610835565b965061090f60208901610835565b95506040880135801515811461092457600080fd5b945060608801359350608088013560ff8116811461094157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008251610970818460208701610764565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b818103818111156109a3576109a361097a565b92915050565b808201808211156109a3576109a361097a56fea264697066735822122007e36690a09d4702e11184228d1ab3ce41e0dbe0fd8acbec5a5954d90787479264736f6c63430008140033",
        "sourceMap": "1289:7549:140:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4925:12;5079;5093:23;5120:7;-1:-1:-1;;;;;5120:20:140;5141:5;;5120:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5078:69;;;;5162:7;5157:658;;5185:15;5203:18;5210:10;5203:18;:::i;:::-;5185:36;-1:-1:-1;;;;;;;5239:43:140;;-1:-1:-1;;;5239:43:140;5235:176;;5367:10;5361:17;5356:2;5344:10;5340:19;5333:46;5235:176;5628:17;;-1:-1:-1;;5624:25:140;;5647:1;5602:20;;5595:55;;;5602:20;5741:31;;;;;;;;;;:::i;:::-;5728:44;-1:-1:-1;5787:17:140;;-1:-1:-1;;;5787:17:140;5157:658;5832:10;-1:-1:-1;;4876:973:140;;;;1289:7549;;;;;;1487:174;;1537:124;1487:174;;;;;2090:25:234;;;2078:2;2063:18;1487:174:140;;;;;;;8370:228;;;;;;:::i;:::-;;:::i;:::-;;8604:111;;;;;;:::i;:::-;;:::i;7307:867::-;;;;;;:::i;:::-;;:::i;8199:165::-;;;;;;:::i;:::-;8321:20;;;;:10;:20;;;;;;;;-1:-1:-1;;;;;8321:26:140;;;;;;;;;;:36;8199:165;8721:115;;;;;;:::i;:::-;;:::i;1725:40::-;;;;;8370:228;8543:48;8557:7;8566:4;8572:2;8576:6;8584;8543:13;:48::i;:::-;8370:228;;;;;:::o;8604:111::-;8682:26;8688:7;8697:2;8701:6;8682:5;:26::i;:::-;8604:111;;;:::o;7307:867::-;7579:372;;7681:15;7579:372;;;4268:25:234;1537:124:140;4309:18:234;;;4302:34;-1:-1:-1;;;;;4410:15:234;;;4390:18;;;4383:43;4462:15;;;4442:18;;;4435:43;4522:14;;4515:22;4494:19;;;4487:51;4554:19;;;4547:35;;;4631:4;4619:17;;4598:19;;;4591:46;4653:19;;;4646:35;;;4697:19;;;4690:35;;;7508:12:140;;;;7545:7;:20;;4240:19:234;;7579:372:140;;;-1:-1:-1;;7579:372:140;;;;;;;;;;;;;;-1:-1:-1;;;;;7579:372:140;-1:-1:-1;;;7579:372:140;;;7545:416;;;7579:372;7545:416;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7507:454;;;;7976:7;7971:117;;8056:6;8050:13;8045:2;8037:6;8033:15;8026:38;7971:117;8150:6;8144:13;8139:2;8131:6;8127:15;8120:38;8721:115;8801:28;8807:7;8816:4;8822:6;8801:5;:28::i;3315:1591:116:-;-1:-1:-1;;;;;3528:18:116;;;;:38;;-1:-1:-1;;;;;;3550:16:116;;;3528:38;3524:111;;;3589:35;;-1:-1:-1;;;3589:35:116;;;;;;;;;;;3524:111;3739:4;-1:-1:-1;;;;;3729:14:116;:6;-1:-1:-1;;;;;3729:14:116;;3725:888;;-1:-1:-1;;;;;3880:23:116;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3875:728;;3990:16;4009:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4009:33:116;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4125:29:116;;4121:468;;4519:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4519:33:116;;;;;;;;;;;:41;;;;;;;;;;:51;;4564:6;;4519:27;:51;;4564:6;;4519:51;:::i;:::-;;;;-1:-1:-1;;4121:468:116;3913:690;3875:728;4757:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4757:25:116;;;;;;;;;:35;;4786:6;;4757:19;:35;;4786:6;;4757:35;:::i;:::-;;;;-1:-1:-1;;4802:19:116;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4802:23:116;;;;;;;;;:33;;4829:6;;4802:19;:33;;4829:6;;4802:33;:::i;:::-;;;;-1:-1:-1;;4850:49:116;;;5597:25:234;;;5653:2;5638:18;;5631:34;;;-1:-1:-1;;;;;4850:49:116;;;;;;;;;;;;;;5570:18:234;4850:49:116;;;;;;;3315:1591;;;;;:::o;5934:316::-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:116;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:116;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:116;;;5597:25:234;;;5653:2;5638:18;;5631:34;;;-1:-1:-1;;;;;6184:59:116;;;6219:1;;6199:10;;6184:59;;5570:18:234;6184:59:116;;;;;;;;5934:316;;;:::o;6522:597::-;6722:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6722:25:116;;;;;;;;;;:34;-1:-1:-1;6718:105:116;;;6779:33;;-1:-1:-1;;;6779:33:116;;;;;;;;;;;6718:105;6906:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6906:25:116;;;;;;;;;:35;;;;;;;6961:21;;;:12;:21;;;;;:31;;6935:6;;6906:19;6961:31;;6935:6;;6961:31;:::i;:::-;;;;-1:-1:-1;;7051:61:116;;;5597:25:234;;;5653:2;5638:18;;5631:34;;;7092:1:116;;-1:-1:-1;;;;;7051:61:116;;;7066:10;;7051:61;;5570:18:234;7051:61:116;5423:248:234;14:271;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:234:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:234;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:234;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:234;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:234:o;2126:173::-;2194:20;;-1:-1:-1;;;;;2243:31:234;;2233:42;;2223:70;;2289:1;2286;2279:12;2223:70;2126:173;;;:::o;2304:472::-;2399:6;2407;2415;2423;2431;2484:3;2472:9;2463:7;2459:23;2455:33;2452:53;;;2501:1;2498;2491:12;2452:53;2537:9;2524:23;2514:33;;2566:38;2600:2;2589:9;2585:18;2566:38;:::i;:::-;2556:48;;2623:38;2657:2;2646:9;2642:18;2623:38;:::i;:::-;2613:48;;2708:2;2697:9;2693:18;2680:32;2670:42;;2731:39;2765:3;2754:9;2750:19;2731:39;:::i;:::-;2721:49;;2304:472;;;;;;;;:::o;2781:322::-;2858:6;2866;2874;2927:2;2915:9;2906:7;2902:23;2898:32;2895:52;;;2943:1;2940;2933:12;2895:52;2979:9;2966:23;2956:33;;3008:38;3042:2;3031:9;3027:18;3008:38;:::i;:::-;2998:48;;3093:2;3082:9;3078:18;3065:32;3055:42;;2781:322;;;;;:::o;3108:794::-;3216:6;3224;3232;3240;3248;3256;3264;3317:3;3305:9;3296:7;3292:23;3288:33;3285:53;;;3334:1;3331;3324:12;3285:53;3357:29;3376:9;3357:29;:::i;:::-;3347:39;;3405:38;3439:2;3428:9;3424:18;3405:38;:::i;:::-;3395:48;;3493:2;3482:9;3478:18;3465:32;3540:5;3533:13;3526:21;3519:5;3516:32;3506:60;;3562:1;3559;3552:12;3506:60;3585:5;-1:-1:-1;3637:2:234;3622:18;;3609:32;;-1:-1:-1;3693:3:234;3678:19;;3665:33;3742:4;3729:18;;3717:31;;3707:59;;3762:1;3759;3752:12;3707:59;3108:794;;;;-1:-1:-1;3108:794:234;;;;3785:7;3839:3;3824:19;;3811:33;;-1:-1:-1;3891:3:234;3876:19;;;3863:33;;3108:794;-1:-1:-1;;3108:794:234:o;4736:287::-;4865:3;4903:6;4897:13;4919:66;4978:6;4973:3;4966:4;4958:6;4954:17;4919:66;:::i;:::-;5001:16;;;;;4736:287;-1:-1:-1;;4736:287:234:o;5028:127::-;5089:10;5084:3;5080:20;5077:1;5070:31;5120:4;5117:1;5110:15;5144:4;5141:1;5134:15;5160:128;5227:9;;;5248:11;;;5245:37;;;5262:18;;:::i;:::-;5160:128;;;;:::o;5293:125::-;5358:9;;;5379:10;;;5376:36;;;5392:18;;:::i",
        "linkReferences": {},
        "immutableReferences": {
            "26660": [
                {
                    "start": 135,
                    "length": 32
                },
                {
                    "start": 781,
                    "length": 32
                }
            ],
            "26669": [
                {
                    "start": 561,
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
        "PERMIT_TYPEHASH()": "30adf81f",
        "__external_transferFrom(uint256,address,address,uint256,address)": "58af4a0a",
        "__setBalanceOf(uint256,address,uint256)": "94a97cdb",
        "burn(uint256,address,uint256)": "9eea5f66",
        "domainSeparator()": "f698da25",
        "mint(uint256,address,uint256)": "836a1040",
        "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_linkerFactory\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"__external_transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"__setBalanceOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"InsufficientBalance()\":[{\"notice\":\"Thrown when a user doesn't have a sufficient balance to perform         an action.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"__setBalanceOf(uint256,address,uint256)\":{\"notice\":\"Mocks ///\"},\"domainSeparator()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockMultiToken.sol\":\"MockMultiToken\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67\",\"dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e\",\"dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39\",\"dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886\",\"dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace\",\"dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S\"]},\"contracts/test/MockMultiToken.sol\":{\"keccak256\":\"0xe92baa5885ee351aa53df66d29fd1af2661bb36be2e26bf8b0d7af10861f0f6c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f03fbfd3f18154c004bb0930dd49333041ef3b40e605fc19479c9e30e9e5e52e\",\"dweb:/ipfs/QmWURBMkqRxVZVxru8JTzkj7tUTCkhKk97igor54AVH5D4\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}",
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
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt256"
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
                            "internalType": "address",
                            "name": "destination",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "name": "basePayment",
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
                            "name": "newFeeCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "FeeCollectorUpdated",
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
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool",
                            "indexed": false
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
                            "internalType": "address",
                            "name": "destination",
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
                            "internalType": "address",
                            "name": "destination",
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
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Sweep",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newSweepCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "SweepCollectorUpdated",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "domainSeparator",
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
                    "PERMIT_TYPEHASH()": {
                        "notice": "The typehash used to calculate the EIP712 hash for `permitForAll`."
                    },
                    "__setBalanceOf(uint256,address,uint256)": {
                        "notice": "Mocks ///"
                    },
                    "domainSeparator()": {
                        "notice": "This contract's EIP712 domain separator."
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
                "keccak256": "0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8",
                "urls": [
                    "bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67",
                    "dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92",
                "urls": [
                    "bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206",
                    "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget1.sol": {
                "keccak256": "0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da",
                "urls": [
                    "bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e",
                    "dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget2.sol": {
                "keccak256": "0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79",
                "urls": [
                    "bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39",
                    "dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget3.sol": {
                "keccak256": "0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1",
                "urls": [
                    "bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a",
                    "dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget4.sol": {
                "keccak256": "0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa",
                "urls": [
                    "bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886",
                    "dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN"
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
                "keccak256": "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71",
                "urls": [
                    "bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf",
                    "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
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
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
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
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d",
                "urls": [
                    "bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603",
                    "dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb",
                "urls": [
                    "bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6",
                    "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649",
                "urls": [
                    "bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7",
                    "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d",
                "urls": [
                    "bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2",
                    "dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832",
                "urls": [
                    "bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7",
                    "dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5",
                "urls": [
                    "bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006",
                    "dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4",
                "urls": [
                    "bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e",
                    "dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Constants.sol": {
                "keccak256": "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d",
                "urls": [
                    "bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418",
                    "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"
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
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab",
                "urls": [
                    "bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002",
                    "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067",
                "urls": [
                    "bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f",
                    "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
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
                "keccak256": "0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1",
                "urls": [
                    "bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace",
                    "dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockMultiToken.sol": {
                "keccak256": "0xe92baa5885ee351aa53df66d29fd1af2661bb36be2e26bf8b0d7af10861f0f6c",
                "urls": [
                    "bzz-raw://f03fbfd3f18154c004bb0930dd49333041ef3b40e605fc19479c9e30e9e5e52e",
                    "dweb:/ipfs/QmWURBMkqRxVZVxru8JTzkj7tUTCkhKk97igor54AVH5D4"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
                "urls": [
                    "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
                    "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
                "urls": [
                    "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
                    "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
                "urls": [
                    "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
                    "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
                "urls": [
                    "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
                    "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
                "urls": [
                    "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
                    "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
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
            "test/utils/HyperdriveUtils.sol": {
                "keccak256": "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04",
                "urls": [
                    "bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6",
                    "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockMultiToken.sol",
        "id": 26992,
        "exportedSymbols": {
            "HyperdriveMath": [
                19813
            ],
            "HyperdriveMultiToken": [
                16779
            ],
            "HyperdriveStorage": [
                17990
            ],
            "HyperdriveTarget0": [
                5333
            ],
            "HyperdriveUtils": [
                156416
            ],
            "IERC20": [
                9980
            ],
            "IHyperdrive": [
                10676
            ],
            "IMockMultiToken": [
                26654
            ],
            "IMultiToken": [
                11652
            ],
            "MockHyperdriveBase": [
                24933
            ],
            "MockHyperdriveTarget0": [
                25291
            ],
            "MockMultiToken": [
                26991
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:8800:140",
        "nodes": [
            {
                "id": 26591,
                "nodeType": "PragmaDirective",
                "src": "39:23:140",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 26593,
                "nodeType": "ImportDirective",
                "src": "64:81:140",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "contracts/src/external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26992,
                "sourceUnit": 5334,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26592,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5333,
                            "src": "73:17:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26595,
                "nodeType": "ImportDirective",
                "src": "146:61:140",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "contracts/src/interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26992,
                "sourceUnit": 9981,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26594,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9980,
                            "src": "155:6:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26597,
                "nodeType": "ImportDirective",
                "src": "208:71:140",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "contracts/src/interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26992,
                "sourceUnit": 10677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26596,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10676,
                            "src": "217:11:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26599,
                "nodeType": "ImportDirective",
                "src": "280:71:140",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiToken.sol",
                "file": "contracts/src/interfaces/IMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26992,
                "sourceUnit": 11653,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26598,
                            "name": "IMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11652,
                            "src": "289:11:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26601,
                "nodeType": "ImportDirective",
                "src": "352:87:140",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
                "file": "contracts/src/internal/HyperdriveMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26992,
                "sourceUnit": 16780,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26600,
                            "name": "HyperdriveMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16779,
                            "src": "361:20:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26603,
                "nodeType": "ImportDirective",
                "src": "440:81:140",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
                "file": "contracts/src/internal/HyperdriveStorage.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26992,
                "sourceUnit": 17991,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26602,
                            "name": "HyperdriveStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17990,
                            "src": "449:17:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26605,
                "nodeType": "ImportDirective",
                "src": "522:76:140",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "contracts/src/libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26992,
                "sourceUnit": 19814,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26604,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19813,
                            "src": "531:14:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26608,
                "nodeType": "ImportDirective",
                "src": "599:94:140",
                "nodes": [],
                "absolutePath": "contracts/test/MockHyperdrive.sol",
                "file": "contracts/test/MockHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26992,
                "sourceUnit": 25352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26606,
                            "name": "MockHyperdriveBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24933,
                            "src": "608:18:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 26607,
                            "name": "MockHyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25291,
                            "src": "628:21:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26610,
                "nodeType": "ImportDirective",
                "src": "694:65:140",
                "nodes": [],
                "absolutePath": "test/utils/HyperdriveUtils.sol",
                "file": "test/utils/HyperdriveUtils.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26992,
                "sourceUnit": 156417,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26609,
                            "name": "HyperdriveUtils",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 156416,
                            "src": "703:15:140",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26654,
                "nodeType": "ContractDefinition",
                "src": "807:480:140",
                "nodes": [
                    {
                        "id": 26622,
                        "nodeType": "FunctionDefinition",
                        "src": "854:112:140",
                        "nodes": [],
                        "functionSelector": "94a97cdb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "__setBalanceOf",
                        "nameLocation": "863:14:140",
                        "parameters": {
                            "id": 26620,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26615,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "895:8:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26622,
                                    "src": "887:16:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26614,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "887:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26617,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "921:4:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26622,
                                    "src": "913:12:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26616,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "913:7:140",
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
                                    "id": 26619,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "943:7:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26622,
                                    "src": "935:15:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26618,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "935:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "877:79:140"
                        },
                        "returnParameters": {
                            "id": 26621,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "965:0:140"
                        },
                        "scope": 26654,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26635,
                        "nodeType": "FunctionDefinition",
                        "src": "972:163:140",
                        "nodes": [],
                        "functionSelector": "58af4a0a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "__external_transferFrom",
                        "nameLocation": "981:23:140",
                        "parameters": {
                            "id": 26633,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26624,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "1022:7:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26635,
                                    "src": "1014:15:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26623,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1014:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26626,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1047:4:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26635,
                                    "src": "1039:12:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26625,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1039:7:140",
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
                                    "id": 26628,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1069:2:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26635,
                                    "src": "1061:10:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26627,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1061:7:140",
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
                                    "id": 26630,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1089:6:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26635,
                                    "src": "1081:14:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26629,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1081:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26632,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "1113:6:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26635,
                                    "src": "1105:14:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26631,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1105:7:140",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1004:121:140"
                        },
                        "returnParameters": {
                            "id": 26634,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1134:0:140"
                        },
                        "scope": 26654,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26644,
                        "nodeType": "FunctionDefinition",
                        "src": "1141:68:140",
                        "nodes": [],
                        "functionSelector": "836a1040",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "1150:4:140",
                        "parameters": {
                            "id": 26642,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26637,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "1163:7:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26644,
                                    "src": "1155:15:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26636,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1155:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26639,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1180:2:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26644,
                                    "src": "1172:10:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26638,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1172:7:140",
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
                                    "id": 26641,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1192:6:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26644,
                                    "src": "1184:14:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26640,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1184:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1154:45:140"
                        },
                        "returnParameters": {
                            "id": 26643,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1208:0:140"
                        },
                        "scope": 26654,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26653,
                        "nodeType": "FunctionDefinition",
                        "src": "1215:70:140",
                        "nodes": [],
                        "functionSelector": "9eea5f66",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "burn",
                        "nameLocation": "1224:4:140",
                        "parameters": {
                            "id": 26651,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26646,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "1237:7:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26653,
                                    "src": "1229:15:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26645,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1229:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26648,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1254:4:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26653,
                                    "src": "1246:12:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26647,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1246:7:140",
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
                                    "id": 26650,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1268:6:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26653,
                                    "src": "1260:14:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26649,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1260:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1228:47:140"
                        },
                        "returnParameters": {
                            "id": 26652,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1284:0:140"
                        },
                        "scope": 26654,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 26612,
                            "name": "IMultiToken",
                            "nameLocations": [
                                "836:11:140"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11652,
                            "src": "836:11:140"
                        },
                        "id": 26613,
                        "nodeType": "InheritanceSpecifier",
                        "src": "836:11:140"
                    }
                ],
                "canonicalName": "IMockMultiToken",
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": {
                    "id": 26611,
                    "nodeType": "StructuredDocumentation",
                    "src": "761:46:140",
                    "text": "DEPRECATED: Don't use this for new tests."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    26654,
                    11652,
                    11792,
                    11743,
                    11865,
                    11777
                ],
                "name": "IMockMultiToken",
                "nameLocation": "817:15:140",
                "scope": 26992,
                "usedErrors": [],
                "usedEvents": [
                    11758,
                    11767,
                    11776
                ]
            },
            {
                "id": 26991,
                "nodeType": "ContractDefinition",
                "src": "1289:7549:140",
                "nodes": [
                    {
                        "id": 26660,
                        "nodeType": "VariableDeclaration",
                        "src": "1363:34:140",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "target0",
                        "nameLocation": "1390:7:140",
                        "scope": 26991,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 26659,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1363:7:140",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 26666,
                        "nodeType": "VariableDeclaration",
                        "src": "1487:174:140",
                        "nodes": [],
                        "constant": true,
                        "documentation": {
                            "id": 26661,
                            "nodeType": "StructuredDocumentation",
                            "src": "1404:78:140",
                            "text": "@notice The typehash used to calculate the EIP712 hash for `permitForAll`."
                        },
                        "functionSelector": "30adf81f",
                        "mutability": "constant",
                        "name": "PERMIT_TYPEHASH",
                        "nameLocation": "1511:15:140",
                        "scope": 26991,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 26662,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1487:7:140",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "value": {
                            "arguments": [
                                {
                                    "hexValue": "5065726d6974466f72416c6c2861646472657373206f776e65722c61646472657373207370656e6465722c626f6f6c205f617070726f7665642c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529",
                                    "id": 26664,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1560:91:140",
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
                                "id": 26663,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "1537:9:140",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                            },
                            "id": 26665,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1537:124:140",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 26669,
                        "nodeType": "VariableDeclaration",
                        "src": "1725:40:140",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 26667,
                            "nodeType": "StructuredDocumentation",
                            "src": "1668:52:140",
                            "text": "@notice This contract's EIP712 domain separator."
                        },
                        "functionSelector": "f698da25",
                        "mutability": "immutable",
                        "name": "domainSeparator",
                        "nameLocation": "1750:15:140",
                        "scope": 26991,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 26668,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1725:7:140",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 26804,
                        "nodeType": "FunctionDefinition",
                        "src": "1815:2898:140",
                        "nodes": [],
                        "body": {
                            "id": 26803,
                            "nodeType": "Block",
                            "src": "2879:1834:140",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26778,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26724,
                                            "name": "target0",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26660,
                                            "src": "2929:7:140",
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
                                                                                    "id": 26735,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "kind": "number",
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "Literal",
                                                                                    "src": "3074:1:140",
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
                                                                                "id": 26734,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                                "src": "3066:7:140",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                                    "typeString": "type(address)"
                                                                                },
                                                                                "typeName": {
                                                                                    "id": 26733,
                                                                                    "name": "address",
                                                                                    "nodeType": "ElementaryTypeName",
                                                                                    "src": "3066:7:140",
                                                                                    "typeDescriptions": {}
                                                                                }
                                                                            },
                                                                            "id": 26736,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "3066:10:140",
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
                                                                        "id": 26732,
                                                                        "name": "IERC20",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 9980,
                                                                        "src": "3059:6:140",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IERC20_$9980_$",
                                                                            "typeString": "type(contract IERC20)"
                                                                        }
                                                                    },
                                                                    "id": 26737,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3059:18:140",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IERC20_$9980",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "hexValue": "30",
                                                                                    "id": 26741,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "kind": "number",
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "Literal",
                                                                                    "src": "3132:1:140",
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
                                                                                "id": 26740,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                                "src": "3124:7:140",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                                    "typeString": "type(address)"
                                                                                },
                                                                                "typeName": {
                                                                                    "id": 26739,
                                                                                    "name": "address",
                                                                                    "nodeType": "ElementaryTypeName",
                                                                                    "src": "3124:7:140",
                                                                                    "typeDescriptions": {}
                                                                                }
                                                                            },
                                                                            "id": 26742,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "3124:10:140",
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
                                                                        "id": 26738,
                                                                        "name": "IERC20",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 9980,
                                                                        "src": "3117:6:140",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IERC20_$9980_$",
                                                                            "typeString": "type(contract IERC20)"
                                                                        }
                                                                    },
                                                                    "id": 26743,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3117:18:140",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IERC20_$9980",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 26744,
                                                                    "name": "_linkerFactory",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 26673,
                                                                    "src": "3172:14:140",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 26745,
                                                                    "name": "_linkerCodeHash",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 26671,
                                                                    "src": "3224:15:140",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                {
                                                                    "hexValue": "31653138",
                                                                    "id": 26746,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3285:4:140",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                                        "typeString": "int_const 1000000000000000000"
                                                                    },
                                                                    "value": "1e18"
                                                                },
                                                                {
                                                                    "hexValue": "31653138",
                                                                    "id": 26747,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3333:4:140",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                                        "typeString": "int_const 1000000000000000000"
                                                                    },
                                                                    "value": "1e18"
                                                                },
                                                                {
                                                                    "hexValue": "31653135",
                                                                    "id": 26748,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3385:4:140",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_1000000000000000_by_1",
                                                                        "typeString": "int_const 1000000000000000"
                                                                    },
                                                                    "value": "1e15"
                                                                },
                                                                {
                                                                    "hexValue": "333635",
                                                                    "id": 26749,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3429:8:140",
                                                                    "subdenomination": "days",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_31536000_by_1",
                                                                        "typeString": "int_const 31536000"
                                                                    },
                                                                    "value": "365"
                                                                },
                                                                {
                                                                    "hexValue": "31",
                                                                    "id": 26750,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3479:6:140",
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
                                                                            "id": 26753,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3581:7:140",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_50000000000000000_by_1",
                                                                                "typeString": "int_const 50000000000000000"
                                                                            },
                                                                            "value": "0.05e18"
                                                                        },
                                                                        {
                                                                            "hexValue": "333635",
                                                                            "id": 26754,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3614:8:140",
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
                                                                            "id": 26751,
                                                                            "name": "HyperdriveMath",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 19813,
                                                                            "src": "3520:14:140",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                                                "typeString": "type(library HyperdriveMath)"
                                                                            }
                                                                        },
                                                                        "id": 26752,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "3535:20:140",
                                                                        "memberName": "calculateTimeStretch",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 19157,
                                                                        "src": "3520:35:140",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                        }
                                                                    },
                                                                    "id": 26755,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3520:124:140",
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
                                                                            "id": 26758,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3686:1:140",
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
                                                                        "id": 26757,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "3678:7:140",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 26756,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "3678:7:140",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 26759,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3678:10:140",
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
                                                                            "id": 26762,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3732:1:140",
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
                                                                        "id": 26761,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "3724:7:140",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 26760,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "3724:7:140",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 26763,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3724:10:140",
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
                                                                            "id": 26766,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3780:1:140",
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
                                                                        "id": 26765,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "3772:7:140",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 26764,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "3772:7:140",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 26767,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3772:10:140",
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
                                                                            "id": 26770,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3860:1:140",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 26771,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3893:1:140",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 26772,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3934:1:140",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 26773,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3979:1:140",
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
                                                                            "id": 26768,
                                                                            "name": "IHyperdrive",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 10676,
                                                                            "src": "3810:11:140",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                                "typeString": "type(contract IHyperdrive)"
                                                                            }
                                                                        },
                                                                        "id": 26769,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "3822:4:140",
                                                                        "memberName": "Fees",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 10381,
                                                                        "src": "3810:16:140",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_struct$_Fees_$10381_storage_ptr_$",
                                                                            "typeString": "type(struct IHyperdrive.Fees storage pointer)"
                                                                        }
                                                                    },
                                                                    "id": 26774,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "structConstructorCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [
                                                                        "3853:5:140",
                                                                        "3887:4:140",
                                                                        "3920:12:140",
                                                                        "3961:16:140"
                                                                    ],
                                                                    "names": [
                                                                        "curve",
                                                                        "flat",
                                                                        "governanceLP",
                                                                        "governanceZombie"
                                                                    ],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3810:193:140",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.Fees memory"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_IERC20_$9980",
                                                                        "typeString": "contract IERC20"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_contract$_IERC20_$9980",
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
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.Fees memory"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 26730,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 10676,
                                                                    "src": "3003:11:140",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 26731,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "3015:10:140",
                                                                "memberName": "PoolConfig",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10470,
                                                                "src": "3003:22:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_struct$_PoolConfig_$10470_storage_ptr_$",
                                                                    "typeString": "type(struct IHyperdrive.PoolConfig storage pointer)"
                                                                }
                                                            },
                                                            "id": 26775,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "structConstructorCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [
                                                                "3048:9:140",
                                                                "3099:16:140",
                                                                "3157:13:140",
                                                                "3208:14:140",
                                                                "3261:22:140",
                                                                "3311:20:140",
                                                                "3359:24:140",
                                                                "3411:16:140",
                                                                "3459:18:140",
                                                                "3507:11:140",
                                                                "3666:10:140",
                                                                "3710:12:140",
                                                                "3756:14:140",
                                                                "3804:4:140"
                                                            ],
                                                            "names": [
                                                                "baseToken",
                                                                "vaultSharesToken",
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
                                                                "sweepCollector",
                                                                "fees"
                                                            ],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3003:1019:140",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                            }
                                                        ],
                                                        "id": 26729,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "NewExpression",
                                                        "src": "2960:25:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10470_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25291_$",
                                                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)"
                                                        },
                                                        "typeName": {
                                                            "id": 26728,
                                                            "nodeType": "UserDefinedTypeName",
                                                            "pathNode": {
                                                                "id": 26727,
                                                                "name": "MockHyperdriveTarget0",
                                                                "nameLocations": [
                                                                    "2964:21:140"
                                                                ],
                                                                "nodeType": "IdentifierPath",
                                                                "referencedDeclaration": 25291,
                                                                "src": "2964:21:140"
                                                            },
                                                            "referencedDeclaration": 25291,
                                                            "src": "2964:21:140",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$25291",
                                                                "typeString": "contract MockHyperdriveTarget0"
                                                            }
                                                        }
                                                    },
                                                    "id": 26776,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2960:1076:140",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$25291",
                                                        "typeString": "contract MockHyperdriveTarget0"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$25291",
                                                        "typeString": "contract MockHyperdriveTarget0"
                                                    }
                                                ],
                                                "id": 26726,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2939:7:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 26725,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2939:7:140",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 26777,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2939:1107:140",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2929:1117:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 26779,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2929:1117:140"
                                },
                                {
                                    "expression": {
                                        "id": 26801,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26780,
                                            "name": "domainSeparator",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26669,
                                            "src": "4391:15:140",
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
                                                                    "id": 26785,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "4491:72:140",
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
                                                                "id": 26784,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "4460:9:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 26786,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4460:121:140",
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
                                                                            "id": 26790,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "string",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "4615:3:140",
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
                                                                        "id": 26789,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "4609:5:140",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                            "typeString": "type(bytes storage pointer)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 26788,
                                                                            "name": "bytes",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "4609:5:140",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 26791,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "4609:10:140",
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
                                                                "id": 26787,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "4599:9:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 26792,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4599:21:140",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 26793,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -4,
                                                                "src": "4638:5:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 26794,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4644:7:140",
                                                            "memberName": "chainid",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4638:13:140",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 26797,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "4677:4:140",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockMultiToken_$26991",
                                                                        "typeString": "contract MockMultiToken"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockMultiToken_$26991",
                                                                        "typeString": "contract MockMultiToken"
                                                                    }
                                                                ],
                                                                "id": 26796,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4669:7:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 26795,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4669:7:140",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 26798,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4669:13:140",
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
                                                            "id": 26782,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "4432:3:140",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 26783,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4436:6:140",
                                                        "memberName": "encode",
                                                        "nodeType": "MemberAccess",
                                                        "src": "4432:10:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 26799,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4432:264:140",
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
                                                "id": 26781,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "4409:9:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 26800,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4409:297:140",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "4391:315:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 26802,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4391:315:140"
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
                                                                "id": 26681,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "2004:1:140",
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
                                                            "id": 26680,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "1996:7:140",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 26679,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "1996:7:140",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 26682,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1996:10:140",
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
                                                    "id": 26678,
                                                    "name": "IERC20",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9980,
                                                    "src": "1989:6:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$9980_$",
                                                        "typeString": "type(contract IERC20)"
                                                    }
                                                },
                                                "id": 26683,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1989:18:140",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "30",
                                                                "id": 26687,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "2058:1:140",
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
                                                            "id": 26686,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2050:7:140",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 26685,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2050:7:140",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 26688,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2050:10:140",
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
                                                    "id": 26684,
                                                    "name": "IERC20",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9980,
                                                    "src": "2043:6:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$9980_$",
                                                        "typeString": "type(contract IERC20)"
                                                    }
                                                },
                                                "id": 26689,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2043:18:140",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "id": 26690,
                                                "name": "_linkerFactory",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26673,
                                                "src": "2094:14:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26691,
                                                "name": "_linkerCodeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26671,
                                                "src": "2142:15:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "hexValue": "31653138",
                                                "id": 26692,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2199:4:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000"
                                                },
                                                "value": "1e18"
                                            },
                                            {
                                                "hexValue": "31653138",
                                                "id": 26693,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2243:4:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000"
                                                },
                                                "value": "1e18"
                                            },
                                            {
                                                "hexValue": "31653135",
                                                "id": 26694,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2291:4:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000"
                                                },
                                                "value": "1e15"
                                            },
                                            {
                                                "hexValue": "333635",
                                                "id": 26695,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2331:8:140",
                                                "subdenomination": "days",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_31536000_by_1",
                                                    "typeString": "int_const 31536000"
                                                },
                                                "value": "365"
                                            },
                                            {
                                                "hexValue": "31",
                                                "id": 26696,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2377:6:140",
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
                                                        "id": 26699,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2471:7:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_50000000000000000_by_1",
                                                            "typeString": "int_const 50000000000000000"
                                                        },
                                                        "value": "0.05e18"
                                                    },
                                                    {
                                                        "hexValue": "333635",
                                                        "id": 26700,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2500:8:140",
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
                                                        "id": 26697,
                                                        "name": "HyperdriveMath",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 19813,
                                                        "src": "2414:14:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                            "typeString": "type(library HyperdriveMath)"
                                                        }
                                                    },
                                                    "id": 26698,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2429:20:140",
                                                    "memberName": "calculateTimeStretch",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 19157,
                                                    "src": "2414:35:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 26701,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2414:112:140",
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
                                                        "id": 26704,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2564:1:140",
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
                                                    "id": 26703,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2556:7:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 26702,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2556:7:140",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 26705,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2556:10:140",
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
                                                        "id": 26708,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2606:1:140",
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
                                                    "id": 26707,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2598:7:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 26706,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2598:7:140",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 26709,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2598:10:140",
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
                                                        "id": 26712,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2650:1:140",
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
                                                    "id": 26711,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2642:7:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 26710,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2642:7:140",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 26713,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2642:10:140",
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
                                                        "id": 26716,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2722:1:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    {
                                                        "hexValue": "30",
                                                        "id": 26717,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2751:1:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    {
                                                        "hexValue": "30",
                                                        "id": 26718,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2788:1:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    {
                                                        "hexValue": "30",
                                                        "id": 26719,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2829:1:140",
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
                                                        "id": 26714,
                                                        "name": "IHyperdrive",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10676,
                                                        "src": "2676:11:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                            "typeString": "type(contract IHyperdrive)"
                                                        }
                                                    },
                                                    "id": 26715,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2688:4:140",
                                                    "memberName": "Fees",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10381,
                                                    "src": "2676:16:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_Fees_$10381_storage_ptr_$",
                                                        "typeString": "type(struct IHyperdrive.Fees storage pointer)"
                                                    }
                                                },
                                                "id": 26720,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [
                                                    "2715:5:140",
                                                    "2745:4:140",
                                                    "2774:12:140",
                                                    "2811:16:140"
                                                ],
                                                "names": [
                                                    "curve",
                                                    "flat",
                                                    "governanceLP",
                                                    "governanceZombie"
                                                ],
                                                "nodeType": "FunctionCall",
                                                "src": "2676:173:140",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_contract$_IERC20_$9980",
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26676,
                                                "name": "IHyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10676,
                                                "src": "1937:11:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                    "typeString": "type(contract IHyperdrive)"
                                                }
                                            },
                                            "id": 26677,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1949:10:140",
                                            "memberName": "PoolConfig",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10470,
                                            "src": "1937:22:140",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_PoolConfig_$10470_storage_ptr_$",
                                                "typeString": "type(struct IHyperdrive.PoolConfig storage pointer)"
                                            }
                                        },
                                        "id": 26721,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "nameLocations": [
                                            "1978:9:140",
                                            "2025:16:140",
                                            "2079:13:140",
                                            "2126:14:140",
                                            "2175:22:140",
                                            "2221:20:140",
                                            "2265:24:140",
                                            "2313:16:140",
                                            "2357:18:140",
                                            "2401:11:140",
                                            "2544:10:140",
                                            "2584:12:140",
                                            "2626:14:140",
                                            "2670:4:140"
                                        ],
                                        "names": [
                                            "baseToken",
                                            "vaultSharesToken",
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
                                            "sweepCollector",
                                            "fees"
                                        ],
                                        "nodeType": "FunctionCall",
                                        "src": "1937:927:140",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 26722,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 26675,
                                    "name": "HyperdriveStorage",
                                    "nameLocations": [
                                        "1906:17:140"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 17990,
                                    "src": "1906:17:140"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1906:968:140"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 26674,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26671,
                                    "mutability": "mutable",
                                    "name": "_linkerCodeHash",
                                    "nameLocation": "1844:15:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26804,
                                    "src": "1836:23:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 26670,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1836:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26673,
                                    "mutability": "mutable",
                                    "name": "_linkerFactory",
                                    "nameLocation": "1877:14:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26804,
                                    "src": "1869:22:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26672,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1869:7:140",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1826:71:140"
                        },
                        "returnParameters": {
                            "id": 26723,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2879:0:140"
                        },
                        "scope": 26991,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 26855,
                        "nodeType": "FunctionDefinition",
                        "src": "4876:973:140",
                        "nodes": [],
                        "body": {
                            "id": 26854,
                            "nodeType": "Block",
                            "src": "4939:910:140",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        26812,
                                        26814
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26812,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "5084:7:140",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26854,
                                            "src": "5079:12:140",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 26811,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5079:4:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 26814,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "5106:10:140",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26854,
                                            "src": "5093:23:140",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 26813,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5093:5:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26819,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 26817,
                                                "name": "_data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26806,
                                                "src": "5141:5:140",
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
                                                "id": 26815,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26660,
                                                "src": "5120:7:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 26816,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5128:12:140",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "5120:20:140",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 26818,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5120:27:140",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5078:69:140"
                                },
                                {
                                    "condition": {
                                        "id": 26821,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "5161:8:140",
                                        "subExpression": {
                                            "id": 26820,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26812,
                                            "src": "5162:7:140",
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
                                    "id": 26851,
                                    "nodeType": "IfStatement",
                                    "src": "5157:658:140",
                                    "trueBody": {
                                        "id": 26850,
                                        "nodeType": "Block",
                                        "src": "5171:644:140",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    26823
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 26823,
                                                        "mutability": "mutable",
                                                        "name": "selector",
                                                        "nameLocation": "5192:8:140",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 26850,
                                                        "src": "5185:15:140",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        },
                                                        "typeName": {
                                                            "id": 26822,
                                                            "name": "bytes4",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5185:6:140",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes4",
                                                                "typeString": "bytes4"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 26828,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 26826,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 26814,
                                                            "src": "5210:10:140",
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
                                                        "id": 26825,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "5203:6:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_bytes4_$",
                                                            "typeString": "type(bytes4)"
                                                        },
                                                        "typeName": {
                                                            "id": 26824,
                                                            "name": "bytes4",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5203:6:140",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 26827,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5203:18:140",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes4",
                                                        "typeString": "bytes4"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "5185:36:140"
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes4",
                                                        "typeString": "bytes4"
                                                    },
                                                    "id": 26833,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 26829,
                                                        "name": "selector",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26823,
                                                        "src": "5239:8:140",
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
                                                                "id": 26830,
                                                                "name": "IHyperdrive",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 10676,
                                                                "src": "5251:11:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                    "typeString": "type(contract IHyperdrive)"
                                                                }
                                                            },
                                                            "id": 26831,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5263:10:140",
                                                            "memberName": "ReturnData",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10612,
                                                            "src": "5251:22:140",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                                                                "typeString": "function (bytes memory) pure"
                                                            }
                                                        },
                                                        "id": 26832,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5274:8:140",
                                                        "memberName": "selector",
                                                        "nodeType": "MemberAccess",
                                                        "src": "5251:31:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        }
                                                    },
                                                    "src": "5239:43:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 26836,
                                                "nodeType": "IfStatement",
                                                "src": "5235:176:140",
                                                "trueBody": {
                                                    "id": 26835,
                                                    "nodeType": "Block",
                                                    "src": "5284:127:140",
                                                    "statements": [
                                                        {
                                                            "AST": {
                                                                "nodeType": "YulBlock",
                                                                "src": "5311:86:140",
                                                                "statements": [
                                                                    {
                                                                        "expression": {
                                                                            "arguments": [
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "returndata",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "5344:10:140"
                                                                                        },
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "5356:2:140",
                                                                                            "type": "",
                                                                                            "value": "32"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "add",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "5340:3:140"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "5340:19:140"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "returndata",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "5367:10:140"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mload",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "5361:5:140"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "5361:17:140"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "revert",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "5333:6:140"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "5333:46:140"
                                                                        },
                                                                        "nodeType": "YulExpressionStatement",
                                                                        "src": "5333:46:140"
                                                                    }
                                                                ]
                                                            },
                                                            "evmVersion": "paris",
                                                            "externalReferences": [
                                                                {
                                                                    "declaration": 26814,
                                                                    "isOffset": false,
                                                                    "isSlot": false,
                                                                    "src": "5344:10:140",
                                                                    "valueSize": 1
                                                                },
                                                                {
                                                                    "declaration": 26814,
                                                                    "isOffset": false,
                                                                    "isSlot": false,
                                                                    "src": "5367:10:140",
                                                                    "valueSize": 1
                                                                }
                                                            ],
                                                            "id": 26834,
                                                            "nodeType": "InlineAssembly",
                                                            "src": "5302:95:140"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "5577:138:140",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "returndata",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "5606:10:140"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "5618:3:140",
                                                                                "type": "",
                                                                                "value": "0x4"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5602:3:140"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "5602:20:140"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "arguments": [
                                                                                    {
                                                                                        "name": "returndata",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "5634:10:140"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "mload",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "5628:5:140"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "5628:17:140"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "5647:1:140",
                                                                                "type": "",
                                                                                "value": "4"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "sub",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5624:3:140"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "5624:25:140"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "mstore",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5595:6:140"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "5595:55:140"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "5595:55:140"
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "5667:34:140",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "returndata",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "5685:10:140"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "5697:3:140",
                                                                        "type": "",
                                                                        "value": "0x4"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "add",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5681:3:140"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "5681:20:140"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "returndata",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5667:10:140"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 26814,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "5606:10:140",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 26814,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "5634:10:140",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 26814,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "5667:10:140",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 26814,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "5685:10:140",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 26837,
                                                "nodeType": "InlineAssembly",
                                                "src": "5568:147:140"
                                            },
                                            {
                                                "expression": {
                                                    "id": 26846,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 26838,
                                                        "name": "returndata",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26814,
                                                        "src": "5728:10:140",
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
                                                                "id": 26841,
                                                                "name": "returndata",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26814,
                                                                "src": "5752:10:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            {
                                                                "components": [
                                                                    {
                                                                        "id": 26843,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5765:5:140",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                            "typeString": "type(bytes storage pointer)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 26842,
                                                                            "name": "bytes",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5765:5:140",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    }
                                                                ],
                                                                "id": 26844,
                                                                "isConstant": false,
                                                                "isInlineArray": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "TupleExpression",
                                                                "src": "5764:7:140",
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
                                                                "id": 26839,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "5741:3:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 26840,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5745:6:140",
                                                            "memberName": "decode",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5741:10:140",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                                "typeString": "function () pure"
                                                            }
                                                        },
                                                        "id": 26845,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5741:31:140",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "src": "5728:44:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 26847,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5728:44:140"
                                            },
                                            {
                                                "expression": {
                                                    "id": 26848,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26814,
                                                    "src": "5794:10:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 26810,
                                                "id": 26849,
                                                "nodeType": "Return",
                                                "src": "5787:17:140"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 26852,
                                        "name": "returndata",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26814,
                                        "src": "5832:10:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 26810,
                                    "id": 26853,
                                    "nodeType": "Return",
                                    "src": "5825:17:140"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "fallback",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 26807,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26806,
                                    "mutability": "mutable",
                                    "name": "_data",
                                    "nameLocation": "4900:5:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26855,
                                    "src": "4885:20:140",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 26805,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4885:5:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4884:22:140"
                        },
                        "returnParameters": {
                            "id": 26810,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26809,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26855,
                                    "src": "4925:12:140",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 26808,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4925:5:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4924:14:140"
                        },
                        "scope": 26991,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26869,
                        "nodeType": "FunctionDefinition",
                        "src": "5986:132:140",
                        "nodes": [],
                        "body": {
                            "id": 26868,
                            "nodeType": "Block",
                            "src": "6093:25:140",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "hexValue": "30",
                                        "id": 26866,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6110:1:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "functionReturnParameters": 26865,
                                    "id": 26867,
                                    "nodeType": "Return",
                                    "src": "6103:8:140"
                                }
                            ]
                        },
                        "baseFunctions": [
                            13134
                        ],
                        "documentation": {
                            "id": 26856,
                            "nodeType": "StructuredDocumentation",
                            "src": "5855:18:140",
                            "text": "Overrides ///"
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_applyCheckpoint",
                        "nameLocation": "5995:16:140",
                        "overrides": {
                            "id": 26862,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "6066:8:140"
                        },
                        "parameters": {
                            "id": 26861,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26858,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26869,
                                    "src": "6021:7:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26857,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6021:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26860,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26869,
                                    "src": "6038:7:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26859,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6038:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6011:40:140"
                        },
                        "returnParameters": {
                            "id": 26865,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26864,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26869,
                                    "src": "6084:7:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26863,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6084:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6083:9:140"
                        },
                        "scope": 26991,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 26917,
                        "nodeType": "FunctionDefinition",
                        "src": "7307:867:140",
                        "nodes": [],
                        "body": {
                            "id": 26916,
                            "nodeType": "Block",
                            "src": "7497:677:140",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        26888,
                                        26890
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26888,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "7513:7:140",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26916,
                                            "src": "7508:12:140",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 26887,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7508:4:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 26890,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "7535:6:140",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26916,
                                            "src": "7522:19:140",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 26889,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7522:5:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26909,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 26895,
                                                            "name": "HyperdriveTarget0",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 5333,
                                                            "src": "7611:17:140",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_HyperdriveTarget0_$5333_$",
                                                                "typeString": "type(contract HyperdriveTarget0)"
                                                            }
                                                        },
                                                        "id": 26896,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7629:12:140",
                                                        "memberName": "permitForAll",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 4831,
                                                        "src": "7611:30:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                                                            "typeString": "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 26897,
                                                                "name": "domainSeparator",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26669,
                                                                "src": "7681:15:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 26898,
                                                                "name": "PERMIT_TYPEHASH",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26666,
                                                                "src": "7718:15:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 26899,
                                                                "name": "owner",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26872,
                                                                "src": "7755:5:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 26900,
                                                                "name": "spender",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26874,
                                                                "src": "7782:7:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 26901,
                                                                "name": "_approved",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26876,
                                                                "src": "7811:9:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            {
                                                                "id": 26902,
                                                                "name": "deadline",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26878,
                                                                "src": "7842:8:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 26903,
                                                                "name": "v",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26880,
                                                                "src": "7872:1:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint8",
                                                                    "typeString": "uint8"
                                                                }
                                                            },
                                                            {
                                                                "id": 26904,
                                                                "name": "r",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26882,
                                                                "src": "7895:1:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 26905,
                                                                "name": "s",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26884,
                                                                "src": "7918:1:140",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            }
                                                        ],
                                                        "id": 26906,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "7659:278:140",
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
                                                        "id": 26893,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "7579:3:140",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 26894,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7583:10:140",
                                                    "memberName": "encodeCall",
                                                    "nodeType": "MemberAccess",
                                                    "src": "7579:14:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 26907,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7579:372:140",
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
                                                "id": 26891,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26660,
                                                "src": "7545:7:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 26892,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7553:12:140",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "7545:20:140",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 26908,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7545:416:140",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7507:454:140"
                                },
                                {
                                    "condition": {
                                        "id": 26911,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "7975:8:140",
                                        "subExpression": {
                                            "id": 26910,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26888,
                                            "src": "7976:7:140",
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
                                    "id": 26914,
                                    "nodeType": "IfStatement",
                                    "src": "7971:117:140",
                                    "trueBody": {
                                        "id": 26913,
                                        "nodeType": "Block",
                                        "src": "7985:103:140",
                                        "statements": [
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "8008:70:140",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "result",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "8037:6:140"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "8045:2:140",
                                                                                "type": "",
                                                                                "value": "32"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8033:3:140"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "8033:15:140"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "result",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "8056:6:140"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mload",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8050:5:140"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "8050:13:140"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8026:6:140"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "8026:38:140"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "8026:38:140"
                                                        }
                                                    ]
                                                },
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 26890,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "8037:6:140",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 26890,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "8056:6:140",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 26912,
                                                "nodeType": "InlineAssembly",
                                                "src": "7999:79:140"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "8106:62:140",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "result",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8131:6:140"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "8139:2:140",
                                                                    "type": "",
                                                                    "value": "32"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8127:3:140"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8127:15:140"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "result",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8150:6:140"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mload",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8144:5:140"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8144:13:140"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "return",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8120:6:140"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8120:38:140"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "8120:38:140"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 26890,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8131:6:140",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 26890,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8150:6:140",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 26915,
                                    "nodeType": "InlineAssembly",
                                    "src": "8097:71:140"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 26870,
                            "nodeType": "StructuredDocumentation",
                            "src": "6148:1154:140",
                            "text": "@notice Allows a caller who is not the owner of an account to execute the\n      functionality of 'approve' for all assets with the owners signature.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported."
                        },
                        "functionSelector": "9032c726",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permitForAll",
                        "nameLocation": "7316:12:140",
                        "parameters": {
                            "id": 26885,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26872,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "7346:5:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26917,
                                    "src": "7338:13:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26871,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7338:7:140",
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
                                    "id": 26874,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "7369:7:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26917,
                                    "src": "7361:15:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26873,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7361:7:140",
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
                                    "id": 26876,
                                    "mutability": "mutable",
                                    "name": "_approved",
                                    "nameLocation": "7391:9:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26917,
                                    "src": "7386:14:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 26875,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7386:4:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26878,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "7418:8:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26917,
                                    "src": "7410:16:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26877,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7410:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26880,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "7442:1:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26917,
                                    "src": "7436:7:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 26879,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7436:5:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26882,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "7461:1:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26917,
                                    "src": "7453:9:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 26881,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7453:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26884,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "7480:1:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26917,
                                    "src": "7472:9:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 26883,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7472:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7328:159:140"
                        },
                        "returnParameters": {
                            "id": 26886,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7497:0:140"
                        },
                        "scope": 26991,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26936,
                        "nodeType": "FunctionDefinition",
                        "src": "8199:165:140",
                        "nodes": [],
                        "body": {
                            "id": 26935,
                            "nodeType": "Block",
                            "src": "8311:53:140",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26933,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 26927,
                                                    "name": "_balanceOf",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17866,
                                                    "src": "8321:10:140",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                        "typeString": "mapping(uint256 => mapping(address => uint256))"
                                                    }
                                                },
                                                "id": 26930,
                                                "indexExpression": {
                                                    "id": 26928,
                                                    "name": "_tokenId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26920,
                                                    "src": "8332:8:140",
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
                                                "src": "8321:20:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 26931,
                                            "indexExpression": {
                                                "id": 26929,
                                                "name": "_who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26922,
                                                "src": "8342:4:140",
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
                                            "src": "8321:26:140",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 26932,
                                            "name": "_amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26924,
                                            "src": "8350:7:140",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "8321:36:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26934,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8321:36:140"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 26918,
                            "nodeType": "StructuredDocumentation",
                            "src": "8180:14:140",
                            "text": "Mocks ///"
                        },
                        "functionSelector": "94a97cdb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "__setBalanceOf",
                        "nameLocation": "8208:14:140",
                        "parameters": {
                            "id": 26925,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26920,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "8240:8:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26936,
                                    "src": "8232:16:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26919,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8232:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26922,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "8266:4:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26936,
                                    "src": "8258:12:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26921,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8258:7:140",
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
                                    "id": 26924,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "8288:7:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26936,
                                    "src": "8280:15:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26923,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8280:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8222:79:140"
                        },
                        "returnParameters": {
                            "id": 26926,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8311:0:140"
                        },
                        "scope": 26991,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26958,
                        "nodeType": "FunctionDefinition",
                        "src": "8370:228:140",
                        "nodes": [],
                        "body": {
                            "id": 26957,
                            "nodeType": "Block",
                            "src": "8533:65:140",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26950,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26938,
                                                "src": "8557:7:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 26951,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26940,
                                                "src": "8566:4:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26952,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26942,
                                                "src": "8572:2:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26953,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26944,
                                                "src": "8576:6:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 26954,
                                                "name": "caller",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26946,
                                                "src": "8584:6:140",
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
                                            "id": 26949,
                                            "name": "_transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16503,
                                            "src": "8543:13:140",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,address,uint256,address)"
                                            }
                                        },
                                        "id": 26955,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8543:48:140",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26956,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8543:48:140"
                                }
                            ]
                        },
                        "functionSelector": "58af4a0a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "__external_transferFrom",
                        "nameLocation": "8379:23:140",
                        "parameters": {
                            "id": 26947,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26938,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "8420:7:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26958,
                                    "src": "8412:15:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26937,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8412:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26940,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "8445:4:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26958,
                                    "src": "8437:12:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26939,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8437:7:140",
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
                                    "id": 26942,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "8467:2:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26958,
                                    "src": "8459:10:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26941,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8459:7:140",
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
                                    "id": 26944,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "8487:6:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26958,
                                    "src": "8479:14:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26943,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8479:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26946,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "8511:6:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26958,
                                    "src": "8503:14:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26945,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8503:7:140",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8402:121:140"
                        },
                        "returnParameters": {
                            "id": 26948,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8533:0:140"
                        },
                        "scope": 26991,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26974,
                        "nodeType": "FunctionDefinition",
                        "src": "8604:111:140",
                        "nodes": [],
                        "body": {
                            "id": 26973,
                            "nodeType": "Block",
                            "src": "8672:43:140",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26968,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26960,
                                                "src": "8688:7:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 26969,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26962,
                                                "src": "8697:2:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26970,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26964,
                                                "src": "8701:6:140",
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
                                            "id": 26967,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16569,
                                            "src": "8682:5:140",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 26971,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8682:26:140",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26972,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8682:26:140"
                                }
                            ]
                        },
                        "functionSelector": "836a1040",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "8613:4:140",
                        "parameters": {
                            "id": 26965,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26960,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "8626:7:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26974,
                                    "src": "8618:15:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26959,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8618:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26962,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "8643:2:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26974,
                                    "src": "8635:10:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26961,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8635:7:140",
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
                                    "id": 26964,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "8655:6:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26974,
                                    "src": "8647:14:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26963,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8647:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8617:45:140"
                        },
                        "returnParameters": {
                            "id": 26966,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8672:0:140"
                        },
                        "scope": 26991,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26990,
                        "nodeType": "FunctionDefinition",
                        "src": "8721:115:140",
                        "nodes": [],
                        "body": {
                            "id": 26989,
                            "nodeType": "Block",
                            "src": "8791:45:140",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26984,
                                                "name": "tokenID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26976,
                                                "src": "8807:7:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 26985,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26978,
                                                "src": "8816:4:140",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26986,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26980,
                                                "src": "8822:6:140",
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
                                            "id": 26983,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16621,
                                            "src": "8801:5:140",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 26987,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8801:28:140",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26988,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8801:28:140"
                                }
                            ]
                        },
                        "functionSelector": "9eea5f66",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "burn",
                        "nameLocation": "8730:4:140",
                        "parameters": {
                            "id": 26981,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26976,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "8743:7:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26990,
                                    "src": "8735:15:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26975,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8735:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26978,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "8760:4:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26990,
                                    "src": "8752:12:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26977,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8752:7:140",
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
                                    "id": 26980,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "8774:6:140",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26990,
                                    "src": "8766:14:140",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26979,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8766:7:140",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8734:47:140"
                        },
                        "returnParameters": {
                            "id": 26982,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8791:0:140"
                        },
                        "scope": 26991,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 26655,
                            "name": "HyperdriveMultiToken",
                            "nameLocations": [
                                "1316:20:140"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 16779,
                            "src": "1316:20:140"
                        },
                        "id": 26656,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1316:20:140"
                    },
                    {
                        "baseName": {
                            "id": 26657,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "1338:18:140"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24933,
                            "src": "1338:18:140"
                        },
                        "id": 26658,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1338:18:140"
                    }
                ],
                "canonicalName": "MockMultiToken",
                "contractDependencies": [
                    25291
                ],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    26991,
                    24933,
                    16779,
                    13995,
                    17990,
                    71674,
                    11205,
                    11777
                ],
                "name": "MockMultiToken",
                "nameLocation": "1298:14:140",
                "scope": 26992,
                "usedErrors": [
                    10547,
                    10583,
                    10607,
                    10639,
                    71619
                ],
                "usedEvents": [
                    11025,
                    11040,
                    11059,
                    11074,
                    11091,
                    11110,
                    11129,
                    11150,
                    11163,
                    11170,
                    11175,
                    11180,
                    11185,
                    11192,
                    11197,
                    11204,
                    11758,
                    11767,
                    11776
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 140
};
