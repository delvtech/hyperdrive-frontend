export declare const MockMultiToken: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_linkerCodeHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_linkerFactory";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LnInvalidInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RestrictedZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
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
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
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
        }, {
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "__external_transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_who";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "__setBalanceOf";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "domainSeparator";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "bool";
            readonly name: "_approved";
            readonly type: "bool";
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
        readonly name: "permitForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x6102806040523480156200001257600080fd5b5060405162005acb38038062005acb833981016040819052620000359162000703565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001826001600160a01b03168152602001838152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e133808152602001620151808152602001620000cf66b1a2bc2ec500006301e133806200038b60201b60201c565b81526000602080830182905260408084018390526060808501849052815160808181018452858252818501869052818401869052818301869052958601526001845585516001600160a01b03908116865286840151811660a0908152878701516101a0908152818901516101c090815260c0808b01516101e052610100808c0151825260e0808d01518152610120808e01518352948d01805151865280518b015161014090815281518b015161016090815291518a01516101809081528f8c01518a16610200528f8b015161022052908f0151600a8054918b166001600160a01b0319928316179055918f015160088054918b16918416919091179055909d01516009805491891691909e1617909c558751928301885289835297820198909852928a1694830194909452918101899052670de0b6b3a76400009581018690529081019490945266038d7ea4c68000928401929092526301e133809383018490526201518090830152909190820190620002529066b1a2bc2ec50000906200038b565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160405180608001604052806000815260200160008152602001600081526020016000815250815250604051620002bd90620006f5565b620002c9919062000742565b604051809103906000f080158015620002e6573d6000803e3d6000fd5b506001600160a01b031661024052505060408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a09091019092528151910120610260526200089e565b600080620003c2620003b2620003a38660646200086e565b66a5bbed86c5a0009062000450565b6748cd4072281e0000906200046e565b9050620003d8670de0b6b3a7640000826200046e565b905062000446816200043f6200040b62000405620003ff89670de0b6b3a764000062000888565b62000485565b620004b4565b6200043862000405620004248a8a6301e13380620006d6565b620003ff90670de0b6b3a764000062000888565b906200046e565b9062000450565b9150505b92915050565b6000620004678383670de0b6b3a7640000620006d6565b9392505050565b60006200046783670de0b6b3a764000084620006d6565b60006001600160ff1b03821115620004b05760405163396ea70160e11b815260040160405180910390fd5b5090565b6000808213620004d75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c6001600160401b031060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906200055b9084901c62000485565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd190190910260016c0504a838426634cdd8738f543560611b03190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000826000190484118302158202620006ee57600080fd5b5091020490565b61479a806200133183390190565b600080604083850312156200071757600080fd5b825160208401519092506001600160a01b03811681146200073757600080fd5b809150509250929050565b81516001600160a01b03168152610220810160208301516200076f60208401826001600160a01b03169052565b5060408301516200078b60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151620007f2828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e08501526060810151610200850152505092915050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200044a576200044a62000858565b808201808211156200044a576200044a62000858565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516109f26200093f60003960008181610231015261027c0152600081816087015261030d015260005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506109f26000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639032c7261161005b5780639032c726146101d257806394a97cdb146101e55780639eea5f6614610219578063f698da251461022c5761007d565b806330adf81f1461017157806358af4a0a146101aa578063836a1040146101bf575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516100bf929190610707565b600060405180830381855af49150503d80600081146100fa576040519150601f19603f3d011682016040523d82523d6000602084013e6100ff565b606091505b50915091508161016257600061011482610717565b90506001600160e01b03198116636e64089360e11b1461013657815160208301fd5b81516003198101600484019081529261015791810160200190602401610788565b935061016692505050565b9150505b915050805190602001f35b6101987f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b60405190815260200160405180910390f35b6101bd6101b8366004610851565b610253565b005b6101bd6101cd3660046108a8565b610267565b6101bd6101e03660046108dd565b610277565b6101bd6101f33660046108a8565b6000928352600d602090815260408085206001600160a01b039094168552929052912055565b6101bd6102273660046108a8565b6103c1565b6101987f000000000000000000000000000000000000000000000000000000000000000081565b61026085858585856103cc565b5050505050565b61027283838361058d565b505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610367919061095e565b600060405180830381855af49150503d80600081146103a2576040519150601f19603f3d011682016040523d82523d6000602084013e6103a7565b606091505b5091509150816103b957805160208201fd5b805160208201f35b610272838383610636565b6001600160a01b03841615806103e957506001600160a01b038316155b156104075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146104cb576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166104cb5760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146104c95760008681526010602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906104c3908490610990565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906104fd908490610990565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906105349084906109a9565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906105bf9084906109a9565b90915550506000838152600e6020526040812080548392906105e29084906109a9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915290205481111561067957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e909152812080548392906106bc908490610990565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610629565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156107465780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561077f578181015183820152602001610767565b50506000910152565b60006020828403121561079a57600080fd5b815167ffffffffffffffff808211156107b257600080fd5b818401915084601f8301126107c657600080fd5b8151818111156107d8576107d861074e565b604051601f8201601f19908116603f011681019083821181831017156108005761080061074e565b8160405282815287602084870101111561081957600080fd5b61082a836020830160208801610764565b979650505050505050565b80356001600160a01b038116811461084c57600080fd5b919050565b600080600080600060a0868803121561086957600080fd5b8535945061087960208701610835565b935061088760408701610835565b92506060860135915061089c60808701610835565b90509295509295909350565b6000806000606084860312156108bd57600080fd5b833592506108cd60208501610835565b9150604084013590509250925092565b600080600080600080600060e0888a0312156108f857600080fd5b61090188610835565b965061090f60208901610835565b95506040880135801515811461092457600080fd5b945060608801359350608088013560ff8116811461094157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008251610970818460208701610764565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b818103818111156109a3576109a361097a565b92915050565b808201808211156109a3576109a361097a56fea2646970667358221220e8079abebff1f6eceb771161bdb551b2efc71814fa2ee59c6a160ad825c9f6f664736f6c634300081400336102406040523480156200001257600080fd5b506040516200479a3803806200479a8339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161438b6200040f60003960008181610b690152611b08015260008181610b420152611acb015260008181610be30152611cc0015260008181610bbd0152611c9a015260008181610b930152611c7401526000610d1301526000610cee01526000610cc901526000610ca6015260008181610c560152611ce6015260008181610c0901528181610e7a01526123f2015260008181610c2f01526129a60152600081816105520152610b1601526000818161065a01528181610af101528181610e3b015281816120eb015281816122c701528181612310015281816125460152818161258f015281816126cd01528181612779015281816128650152612911015261438b6000f3fe608060405234801561001057600080fd5b50600436106102055760003560e01c80637ecebe001161011a578063becee9c3116100ad578063d81657431161007c578063d81657431461047b578063e44808bc14610490578063e4af29d1146104a3578063e985e9c5146104b6578063fba56008146104c957600080fd5b8063becee9c314610440578063c55dae6314610460578063c69e16ad146103c4578063cf210e651461046857600080fd5b8063a42dce80116100e9578063a42dce80146103f2578063ab033ea914610405578063b0d9658014610418578063bd85b0391461042d57600080fd5b80637ecebe00146103b15780638e67f87e146103c45780639cd241af146103cc578063a22cb465146103df57600080fd5b806321ff32a91161019d57806346fbf68e1161016c57806346fbf68e146103405780634e41a1fb146103635780634ed2d6ac1461037657806360246c88146103895780637180c8ca1461039e57600080fd5b806321ff32a9146102df578063313ce567146103005780633656eec21461031a5780633e691db91461032d57600080fd5b806314e5f07b116101d957806314e5f07b1461027b57806317fad7fc1461028e5780631c0f12b6146102a157806320fc4881146102b457600080fd5b8062ad800c1461020a57806301681a621461023357806302329a29146102485780630a4e14931461025b575b600080fd5b61021d610218366004613883565b6104f8565b60405161022a91906138ec565b60405180910390f35b610246610241366004613914565b61052f565b005b61024661025636600461393f565b61053b565b610263610544565b6040516001600160a01b03909116815260200161022a565b61024661028936600461396b565b610587565b61024661029c366004613a3f565b6105a3565b6102466102af366004613ad4565b6105b9565b6102c76102c2366004613883565b6105cc565b60405190516001600160801b0316815260200161022a565b6102f26102ed366004613b1c565b61060d565b60405190815260200161022a565b610308610653565b60405160ff909116815260200161022a565b6102f2610328366004613b5e565b6106ee565b6102f261033b366004613b8e565b610727565b61035361034e366004613914565b610732565b604051901515815260200161022a565b61021d610371366004613883565b610768565b610246610384366004613bc9565b610776565b6103916107c4565b60405161022a9190613c13565b6102466103ac366004613cb4565b6109f1565b6102f26103bf366004613914565b6109ff565b6102f2610a2b565b6102466103da366004613ce2565b610a45565b6102466103ed366004613cb4565b610a56565b610246610400366004613914565b610ac2565b610246610413366004613914565b610acb565b610420610ad4565b60405161022a9190613d1a565b6102f261043b366004613883565b610d50565b61045361044e366004613e2e565b610d72565b60405161022a9190613e70565b610263610e2d565b6102f2610476366004613883565b610e6d565b610483610eb6565b60405161022a9190613eb4565b61024661049e366004613fc5565b610fc2565b6102466104b1366004613914565b61100a565b6103536104c4366004614024565b611013565b6104d1611057565b6040805182516001600160801b03908116825260209384015116928101929092520161022a565b606061052a610506836110b6565b60405160200161051691906138ec565b6040516020818303038152906040526111de565b919050565b61053881611202565b50565b61053881611378565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105849101610516565b90565b6105988989898989898989896113fb565b505050505050505050565b6105b18686868686866115f2565b505050505050565b6105c684848484336116a6565b50505050565b60408051602081019091526000815261052a6007600084815260200190815260200160002060405160200161051691546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261064c9101610516565b9392505050565b60006105847f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da9190614052565b6040805160ff909216602083015201610516565b6000828152600d602090815260408083206001600160a01b03851684528252808320548151928301526107219101610516565b92915050565b600061072182611867565b6001600160a01b0381166000908152600c6020908152604080832054905161052a926105169260ff169101901515815260200190565b606061052a6105068361198f565b8361078081611a8d565b6001600160a01b0316336001600160a01b0316146107b157604051632aab8bd360e01b815260040160405180910390fd5b6107bd85858585611b4a565b5050505050565b61083d604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610847611bb7565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108b2919061409b565b6108bc91906140ae565b905060008083116108ce5760006108e9565b6108e9836108e36108de86611bcf565b611d65565b90611d95565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109bd576109b88486611daa565b6109c0565b60005b81526002546001600160801b03166020918201526040519192506109ea9161051691849101613c13565b5050505090565b6109fb8282611dbf565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261052a9101610516565b6000610584600b5460405160200161051691815260200190565b610a5183838333611b4a565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61053881611e48565b61053881611ebc565b610adc6137b3565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a0830191909152915161058492610516929101613d1a565b6000818152600e602090815260408083205481519283015261052a9101610516565b606060008267ffffffffffffffff811115610d8f57610d8f6140c1565b604051908082528060200260200182016040528015610db8578160200160208202803683370190505b50905060005b83811015610e11576000858583818110610dda57610dda6140d7565b90506020020135905060008154905080848481518110610dfc57610dfc6140d7565b60209081029190910101525050600101610dbe565b50610e26816040516020016105169190613e70565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105849101610516565b600061052a610ea4610e9f7f00000000000000000000000000000000000000000000000000000000000000008561409b565b611f30565b60405160200161051691815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105846001604051602001610516919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610fcc81611a8d565b6001600160a01b0316336001600160a01b031614610ffd57604051632aab8bd360e01b815260040160405180910390fd5b6105b186868686866116a6565b61053881611f74565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107219101610516565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261058490606001610516565b606060f882901c6001600160f81b03831660006110d282611fe8565b905060008360038111156110e8576110e861406f565b0361111a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111d6565b600183600381111561112e5761112e61406f565b0361115a578060405160200161114491906140ed565b60405160208183030381529060405293506111d6565b600283600381111561116e5761116e61406f565b0361118457806040516020016111449190614126565b60038360038111156111985761119861406f565b036111d6576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016111f991906138ec565b60405180910390fd5b61120a61209d565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156112425750336001600160a01b03821614155b80156112595750600a546001600160a01b03163314155b15611276576040516282b42960e81b815260040160405180910390fd5b60006112806120c7565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156112ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ee9190614160565b90506113046001600160a01b038516848361215b565b8161130d6120c7565b1461132b576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105386001600055565b336000908152600c602052604090205460ff166113a7576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906113f090831515815260200190565b60405180910390a150565b8342111561141c5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114435760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611531573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461156f57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061160f57506001600160a01b038516155b1561162d5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461164d5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561169d5761169585858381811061166d5761166d6140d7565b905060200201358888868686818110611688576116886140d7565b90506020020135336116a6565b600101611650565b50505050505050565b6001600160a01b03841615806116c357506001600160a01b038316155b156116e15760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146117a5576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117a55760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117a35760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061179d9084906140ae565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117d79084906140ae565b90915550506000858152600d602090815260408083206001600160a01b03871684529091528120805484929061180e90849061409b565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600061187161209d565b61187a826121ad565b6008546001600160a01b0316806118946020850185613914565b6001600160a01b0316146118bb57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118e45750336001600160a01b03821614155b80156118fb5750600a546001600160a01b03163314155b15611918576040516282b42960e81b815260040160405180910390fd5b6000611922611bb7565b600b805460009091559091506119398183876121e3565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e4761197186858961227d565b60405190815260200160405180910390a250505061052a6001600055565b606060f882901c6001600160f81b03831660006119ab82611fe8565b905060008360038111156119c1576119c161406f565b036119f3576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111d6565b6001836003811115611a0757611a0761406f565b03611a1d57806040516020016111449190614179565b6002836003811115611a3157611a3161406f565b03611a47578060405160200161114491906141b1565b6003836003811115611a5b57611a5b61406f565b036111d657505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611bca670de0b6b3a76400006122ac565b905090565b611c336040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d2b91166123a7565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d5d929004166123a7565b905292915050565b6000806000611d738461241d565b9150915080610e2657604051635516328b60e11b815260040160405180910390fd5b600061064c8383670de0b6b3a76400006124aa565b600061064c83670de0b6b3a7640000846124aa565b600a546001600160a01b03163314611de9576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e72576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611ee6576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f58600e6000611f446002866124c8565b8152602001908152602001600020546124fd565b611f6a600e6000611f446001876124c8565b61072191906141dd565b600a546001600160a01b03163314611f9e576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561208f57612023600a86614213565b61202e90603061409b565b60f81b82600161203e84876140ae565b61204891906140ae565b81518110612058576120586140d7565b60200101906001600160f81b031916908160001a9053508061207981614227565b91506120889050600a86614240565b9450612012565b918290030190815292915050565b6002600054036120c057604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b8152306004820152600090611bca906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015612132573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121569190614160565b61252b565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a51908490612614565b60006121bc6020830183613914565b6001600160a01b0316036105385760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121f08585611d95565b90506121fb8161252b565b94508460000361220f57600091505061064c565b61221f604084016020850161393f565b1561224e57612247856122356020860186613914565b6122426040870187614254565b612677565b9150612275565b6122718561225f6020860186613914565b61226c6040870187614254565b612811565b8491505b509392505050565b600061228f604083016020840161393f565b1561229b57508261064c565b6122a58484611d95565b905061064c565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016122fb575047612386565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561235f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123839190614160565b90505b60125460000361239757600061064c565b60125461064c90849083906124aa565b600080670de0b6b3a76400006123bb61299f565b6123c5919061429b565b90508083116123d55760006123df565b6123df81846140ae565b915061064c612416670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061429b565b8390611daa565b600080600080600061242e866129d5565b915091508061244557506000958695509350505050565b6124528660a001516124fd565b61245b87612d0f565b8361246989600001516124fd565b61247391906142b2565b61247d91906142b2565b61248791906141dd565b9250505060008112156124a05750600093849350915050565b9360019350915050565b60008260001904841183021582026124c157600080fd5b5091020490565b60006001600160f81b038211156124f25760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156125275760405163396ea70160e11b815260040160405180910390fd5b5090565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161257a575047612605565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126029190614160565b90505b60125461064c908490836124aa565b60006126296001600160a01b03841683612d73565b9050805160001415801561264e57508080602001905181019061264c91906142d2565b155b15610a5157604051635274afe760e01b81526001600160a01b03841660048201526024016111f9565b60006012548511612688578461268c565b6012545b94506000612699866122ac565b905085601260008282546126ad91906140ae565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612753576040516001600160a01b038716908390600081818185875af1925050503d8060008114612743576040519150601f19603f3d011682016040523d82523d6000602084013e612748565b606091505b5050809150506127e9565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156127c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127e691906142d2565b90505b80612807576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116128205783612824565b6012545b93506000612831856122ac565b9050846012600082825461284591906140ae565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128eb576040516001600160a01b038616908390600081818185875af1925050503d80600081146128db576040519150601f19603f3d011682016040523d82523d6000602084013e6128e0565b606091505b505080915050612981565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561295a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061297e91906142d2565b90505b806105b1576040516312171d8360e31b815260040160405180910390fd5b60006129cb7f000000000000000000000000000000000000000000000000000000000000000042614213565b611bca90426140ae565b60008060006129ff6129fa856101600151866101400151611d9590919063ffffffff16565b6124fd565b612a1f6129fa866101200151876101000151612d8190919063ffffffff16565b612a2991906141dd565b9050600080612a4086600001518760200151612d96565b9150915080612a5757506000958695509350505050565b6000831315612ba75760008390506000612aa5886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612a9691906140ae565b8d606001518e60800151612dd5565b9350905082612abe575060009788975095505050505050565b818110612b5c576000612af8858a60400151858c60e00151670de0b6b3a7640000612ae991906140ae565b8d606001518e60800151612ee7565b9450905083158015612b0d57508860c0015183105b15612b245750600098600198509650505050505050565b83612b3a57506000988998509650505050505050565b612b43816124fd565b612b4c906142ef565b9960019950975050505050505050565b6000886020015112612b9357612b7b8860a00151856129fa91906140ae565b612b84906142ef565b98600198509650505050505050565b60a08801518851612b7b916129fa916140ae565b6000831215612d00576000612bbb846142ef565b90506000612bef8489604001518a60e00151670de0b6b3a7640000612be091906140ae565b8b606001518c60800151612faa565b9350905082612c08575060009788975095505050505050565b818110612c8d576000612c42858a60400151858c60e00151670de0b6b3a7640000612c3391906140ae565b8d606001518e60800151613056565b9450905083158015612c5757508860c0015183105b15612c6e5750600098600198509650505050505050565b83612c8457506000988998509650505050505050565b612b4c816124fd565b6000612cbf858a604001518b60e00151670de0b6b3a7640000612cb091906140ae565b8c606001518d6080015161312d565b9450905083612cd957506000988998509650505050505050565b612b4c612cf68a606001518486612cf091906140ae565b90611daa565b6129fa908361409b565b50600095600195509350505050565b6000612d426129fa836101200151670de0b6b3a7640000612d3091906140ae565b606085015161010086015191906131dc565b611f6a6129fa846101600151670de0b6b3a7640000612d6191906140ae565b606086015161014087015191906124aa565b606061064c83836000613202565b600061064c8383670de0b6b3a76400006131dc565b600080600083612da5866124fd565b612daf91906141dd565b90506000811215612dc7576000809250925050612dce565b9150600190505b9250929050565b6000806000881215612df757612dea886142ef565b612df4908761409b565b95505b600080612e048b8b612d96565b9150915080612e1b57600080935093505050612edb565b6000612e2a838b8a8a8a61329f565b90506000612e4d612e458a612e3f8a8e612d81565b906132ce565b8990896131dc565b905080821015612e67576000809550955050505050612edb565b808203670de0b6b3a76400008110612e9c57612e95612e8e670de0b6b3a76400008c611daa565b82906132ce565b9050612eb4565b612eb1612e8e670de0b6b3a76400008c613339565b90505b8b811015612ecd57600080965096505050505050612edb565b8b9003955060019450505050505b97509795505050505050565b6000806000612ef9898988888861334e565b9050612f0986612e3f898b61409b565b975087811015612f20576000809250925050612f9f565b878103612f2e8186886131dc565b9050670de0b6b3a76400008110612f5b57612f54612e8e670de0b6b3a764000089613339565b9050612f73565b612f70612e8e670de0b6b3a764000089611daa565b90505b612f7d8186613339565b9050808a1015612f9557600080935093505050612f9f565b8903925060019150505b965096945050505050565b6000806000612fbc888888888861334e565b90506000612fe7670de0b6b3a7640000612fd68888611daa565b612fe0919061409b565b8390613339565b9050670de0b6b3a764000081106130145761300d612e8e670de0b6b3a764000089613339565b905061302c565b613029612e8e670de0b6b3a764000089611daa565b90505b808810156130425760008093509350505061304c565b8703925060019150505b9550959350505050565b6000806000613068898988888861334e565b90508688101561307f576000809250925050612f9f565b968690039661308e88876132ce565b9750878110156130a5576000809250925050612f9f565b8781036130b38186886131dc565b9050670de0b6b3a764000081106130e0576130d9612e8e670de0b6b3a764000089613339565b90506130f8565b6130f5612e8e670de0b6b3a764000089611daa565b90505b6131028186613339565b90508981101561311a57600080935093505050612f9f565b9890980398600198509650505050505050565b600080600061313f888888888861329f565b90506000613163670de0b6b3a76400006131598888613339565b612416919061409b565b9050670de0b6b3a7640000811061319057613189612e8e670de0b6b3a764000089611daa565b90506131a8565b6131a5612e8e670de0b6b3a764000089613339565b90505b6131b28186611daa565b9050888110156131ca5760008093509350505061304c565b97909703976001975095505050505050565b60008260001904841183021582026131f357600080fd5b50910281810615159190040190565b6060814710156132275760405163cd78605960e01b81523060048201526024016111f9565b600080856001600160a01b03168486604051613243919061430b565b60006040518083038185875af1925050503d8060008114613280576040519150601f19603f3d011682016040523d82523d6000602084013e613285565b606091505b5091509150613295868383613373565b9695505050505050565b60006132ab85856132ce565b6132c46132bc86612e3f868b611d95565b8590856124aa565b613295919061409b565b6000816000036132e75750670de0b6b3a7640000610721565b826000036132f757506000610721565b6000613302836124fd565b90506000613317613312866124fd565b6133cf565b905081810261332e670de0b6b3a764000082614327565b9050613295816135f5565b600061064c83670de0b6b3a7640000846131dc565b600061335a85856132ce565b6132c461336b86612e3f868b612d81565b8590856131dc565b606082613388576133838261378a565b61064c565b815115801561339f57506001600160a01b0384163b155b156133c857604051639996b31560e01b81526001600160a01b03851660048201526024016111f9565b508061064c565b60008082136133f15760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906134749084901c6124fd565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361361057506000919050565b680755bf798b4a1bf1e58212613639576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061329574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6124fd565b80511561379a5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161387e6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561389557600080fd5b5035919050565b60005b838110156138b757818101518382015260200161389f565b50506000910152565b600081518084526138d881602086016020860161389c565b601f01601f19169290920160200192915050565b60208152600061064c60208301846138c0565b6001600160a01b038116811461053857600080fd5b60006020828403121561392657600080fd5b813561064c816138ff565b801515811461053857600080fd5b60006020828403121561395157600080fd5b813561064c81613931565b60ff8116811461053857600080fd5b60008060008060008060008060006101208a8c03121561398a57600080fd5b8935985060208a0135975060408a01356139a3816138ff565b965060608a01356139b3816138ff565b955060808a01356139c381613931565b945060a08a0135935060c08a01356139da8161395c565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112613a0c57600080fd5b50813567ffffffffffffffff811115613a2457600080fd5b6020830191508360208260051b8501011115612dce57600080fd5b60008060008060008060808789031215613a5857600080fd5b8635613a63816138ff565b95506020870135613a73816138ff565b9450604087013567ffffffffffffffff80821115613a9057600080fd5b613a9c8a838b016139fa565b90965094506060890135915080821115613ab557600080fd5b50613ac289828a016139fa565b979a9699509497509295939492505050565b60008060008060808587031215613aea57600080fd5b843593506020850135613afc816138ff565b92506040850135613b0c816138ff565b9396929550929360600135925050565b600080600060608486031215613b3157600080fd5b833592506020840135613b43816138ff565b91506040840135613b53816138ff565b809150509250925092565b60008060408385031215613b7157600080fd5b823591506020830135613b83816138ff565b809150509250929050565b600060208284031215613ba057600080fd5b813567ffffffffffffffff811115613bb757600080fd5b82016060818503121561064c57600080fd5b60008060008060808587031215613bdf57600080fd5b843593506020850135613bf1816138ff565b9250604085013591506060850135613c08816138ff565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b60008060408385031215613cc757600080fd5b8235613cd2816138ff565b91506020830135613b8381613931565b600080600060608486031215613cf757600080fd5b833592506020840135613d09816138ff565b929592945050506040919091013590565b81516001600160a01b0316815261022081016020830151613d4660208401826001600160a01b03169052565b506040830151613d6160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613dc7828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613e4157600080fd5b823567ffffffffffffffff811115613e5857600080fd5b613e64858286016139fa565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613ea857835183529284019291840191600101613e8c565b50909695505050505050565b81516001600160801b0316815261018081016020830151613ee060208401826001600160801b03169052565b506040830151613efb60408401826001600160801b03169052565b506060830151613f1660608401826001600160801b03169052565b506080830151613f2b6080840182600f0b9052565b5060a0830151613f4660a08401826001600160801b03169052565b5060c0830151613f6160c08401826001600160801b03169052565b5060e0830151613f7c60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613e26565b600080600080600060a08688031215613fdd57600080fd5b853594506020860135613fef816138ff565b93506040860135613fff816138ff565b9250606086013591506080860135614016816138ff565b809150509295509295909350565b6000806040838503121561403757600080fd5b8235614042816138ff565b91506020830135613b83816138ff565b60006020828403121561406457600080fd5b815161064c8161395c565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561072157610721614085565b8181038181111561072157610721614085565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161411981601185016020870161389c565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81526000825161415381601285016020870161389c565b9190910160120192915050565b60006020828403121561417257600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516141a481601085016020870161389c565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161411981601185016020870161389c565b8181036000831280158383131683831282161715610e2657610e26614085565b634e487b7160e01b600052601260045260246000fd5b600082614222576142226141fd565b500690565b60006001820161423957614239614085565b5060010190565b60008261424f5761424f6141fd565b500490565b6000808335601e1984360301811261426b57600080fd5b83018035915067ffffffffffffffff82111561428657600080fd5b602001915036819003821315612dce57600080fd5b808202811582820484141761072157610721614085565b8082018281126000831280158216821582161715613e2657613e26614085565b6000602082840312156142e457600080fd5b815161064c81613931565b6000600160ff1b820161430457614304614085565b5060000390565b6000825161431d81846020870161389c565b9190910192915050565b600082614336576143366141fd565b600160ff1b82146000198414161561435057614350614085565b50059056fea26469706673582212202942d2fdadb24e3033a4a25d7fa361fbe1ac28004e4393f0fb403234ea05080164736f6c63430008140033";
        readonly sourceMap: "1223:7566:140:-:0;;;1749:2898;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1871:927;;;;;;;;1938:1;-1:-1:-1;;;;;1871:927:140;;;;;1992:1;-1:-1:-1;;;;;1871:927:140;;;;;2028:14;-1:-1:-1;;;;;1871:927:140;;;;;2076:15;1871:927;;;;2133:4;1871:927;;;;2177:4;1871:927;;;;2225:4;1871:927;;;;2265:8;1871:927;;;;2311:6;1871:927;;;;2348:112;2405:7;2434:8;2348:35;;;:112;;:::i;:::-;1871:927;;2498:1;1871:927;;;;;;;;;;;;;;;;;;;;;2610:173;;1871:927;2610:173;;;;;;;;;;;;;;;;;;;;;;;;;;1871:927;;;;1713:1:169;1917:21;;5227:17:118;;-1:-1:-1;;;;;5214:30:118;;;;;5274:24;;;;5254:44;;;;;;5388:30;;;;5362:56;;;;5841:28;;;;5817:52;;;;6157:32;;;;;6129:60;;6372:26;;;;;6350:48;;-1:-1:-1;6428:24:118;;;;6408:44;;-1:-1:-1;6477:19:118;;;;6462:34;;6561:12;;;;;:18;6549:30;;6600:12;;:17;;;6589:28;;;;6646:12;;:25;;;6627:44;;;;6704:12;;:29;;;6681:52;;;;-1:-1:-1;;;6810:21:118;6793:38;;;;-1:-1:-1;;;6859:22:118;6841:40;;6984:18;;;;6970:11;:32;;;;;-1:-1:-1;;;;;;6970:32:118;;;;;;7028:20;;;;7012:13;:36;;;;;;;;;;;;;;7076:22;;;;7058:15;:40;;;;;;;;;;;;;2937:1019:140;;;;::::1;::::0;;;;;;;::::1;::::0;;;;;;::::1;::::0;;;;;;;;;;;;;3219:4:::1;2937:1019:::0;;;;;;;;;;;;;3319:4:::1;2937:1019:::0;;;;;;;3363:8:::1;2937:1019:::0;;;;;;3413:6:::1;2937:1019:::0;;;;;;;;;;3454:124:::1;::::0;3515:7:::1;::::0;3454:35:::1;:124::i;:::-;2937:1019;;;;3620:1;-1:-1:-1::0;;;;;2937:1019:140::1;;;;;3666:1;-1:-1:-1::0;;;;;2937:1019:140::1;;;;;3714:1;-1:-1:-1::0;;;;;2937:1019:140::1;;;;;3744:193;;;;;;;;3794:1;3744:193;;;;3827:1;3744:193;;;;3868:1;3744:193;;;;3913:1;3744:193;;::::0;2937:1019:::1;;::::0;2894:1076:::1;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;;;2863:1117:140::1;;::::0;-1:-1:-1;;4543:10:140::1;::::0;;;;::::1;::::0;;::::1;::::0;;-1:-1:-1;;;4543:10:140::1;::::0;;::::1;::::0;4366:264;;4394:121:::1;4366:264:::0;;::::1;2575:25:234::0;4533:21:140;2616:18:234;;;2609:34;4572:13:140::1;2659:18:234::0;;;2652:34;4611:4:140::1;2702:18:234::0;;;;2695:60;;;;4366:264:140;;;;;;;;;;2547:19:234;;;;4366:264:140;;;4343:297;;;::::1;::::0;4325:315:::1;::::0;1223:7566;;1405:1330:123;1521:7;;1684:90;1725:39;1753:10;:4;1760:3;1753:10;:::i;:::-;1733;;1725:27;:39::i;:::-;1692:10;;1684:27;:90::i;:::-;1662:112;-1:-1:-1;1798:24:123;193:4:122;1662:112:123;1798:11;:24::i;:::-;1784:38;-1:-1:-1;2463:265:123;1784:38;2481:212;2663:28;:23;2664:10;2670:4;193::122;2664:10:123;:::i;:::-;2663:21;:23::i;:::-;:26;:28::i;:::-;2510:118;:88;2517:44;:4;2533:17;2552:8;2517:15;:44::i;:::-;2511:50;;193:4:122;2511:50:123;:::i;2510:118::-;2481:173;;:212::i;:::-;2463:252;;:265::i;:::-;2444:284;;;1405:1330;;;;;:::o;1610:118:122:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;:::-;1691:30;1610:118;-1:-1:-1;;;1610:118:122:o;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;2004:200:125:-;2056:8;-1:-1:-1;;;;;2080:1:125;:29;2076:99;;;2132:32;;-1:-1:-1;;;2132:32:125;;;;;;;;;;;2076:99;-1:-1:-1;2195:1:125;2004:200::o;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;-1:-1:-1;;;;;9363:33:122;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;;;;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;898:556::-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;1223:7566:140:-;;;;;;;;:::o;14:351:234:-;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;193:16;;252:2;237:18;;231:25;193:16;;-1:-1:-1;;;;;;285:31:234;;275:42;;265:70;;331:1;328;321:12;265:70;354:5;344:15;;;14:351;;;;;:::o;749:1590::-;981:13;;-1:-1:-1;;;;;444:31:234;432:44;;941:3;926:19;;1053:4;1045:6;1041:17;1035:24;1068:62;1124:4;1113:9;1109:20;1095:12;-1:-1:-1;;;;;444:31:234;432:44;;370:112;1068:62;;1179:4;1171:6;1167:17;1161:24;1194:64;1252:4;1241:9;1237:20;1221:14;-1:-1:-1;;;;;444:31:234;432:44;;370:112;1194:64;;1314:4;1306:6;1302:17;1296:24;1289:4;1278:9;1274:20;1267:54;1377:4;1369:6;1365:17;1359:24;1352:4;1341:9;1337:20;1330:54;1440:4;1432:6;1428:17;1422:24;1415:4;1404:9;1400:20;1393:54;1503:4;1495:6;1491:17;1485:24;1478:4;1467:9;1463:20;1456:54;1566:4;1558:6;1554:17;1548:24;1541:4;1530:9;1526:20;1519:54;1592:6;1652:2;1644:6;1640:15;1634:22;1629:2;1618:9;1614:18;1607:50;;1676:6;1736:2;1728:6;1724:15;1718:22;1713:2;1702:9;1698:18;1691:50;;1760:6;1815:2;1807:6;1803:15;1797:22;1828:62;1886:2;1875:9;1871:18;1855:14;-1:-1:-1;;;;;444:31:234;432:44;;370:112;1828:62;-1:-1:-1;;1909:6:234;1952:15;;;1946:22;-1:-1:-1;;;;;444:31:234;;2020:18;;;432:44;-1:-1:-1;;2058:6:234;2101:15;;;2095:22;-1:-1:-1;;;;;444:31:234;;2169:18;;;432:44;-1:-1:-1;;2207:6:234;2250:15;;;2244:22;557:12;;2314:18;;;545:25;619:4;608:16;;602:23;586:14;;;579:47;675:4;664:16;;658:23;642:14;;;635:47;731:4;720:16;;714:23;698:14;;;691:47;2275:58;;749:1590;;;;:::o;2766:127::-;2827:10;2822:3;2818:20;2815:1;2808:31;2858:4;2855:1;2848:15;2882:4;2879:1;2872:15;2898:168;2971:9;;;3002;;3019:15;;;3013:22;;2999:37;2989:71;;3040:18;;:::i;3071:125::-;3136:9;;;3157:10;;;3154:36;;;3170:18;;:::i;3071:125::-;1223:7566:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80639032c7261161005b5780639032c726146101d257806394a97cdb146101e55780639eea5f6614610219578063f698da251461022c5761007d565b806330adf81f1461017157806358af4a0a146101aa578063836a1040146101bf575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516100bf929190610707565b600060405180830381855af49150503d80600081146100fa576040519150601f19603f3d011682016040523d82523d6000602084013e6100ff565b606091505b50915091508161016257600061011482610717565b90506001600160e01b03198116636e64089360e11b1461013657815160208301fd5b81516003198101600484019081529261015791810160200190602401610788565b935061016692505050565b9150505b915050805190602001f35b6101987f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b60405190815260200160405180910390f35b6101bd6101b8366004610851565b610253565b005b6101bd6101cd3660046108a8565b610267565b6101bd6101e03660046108dd565b610277565b6101bd6101f33660046108a8565b6000928352600d602090815260408085206001600160a01b039094168552929052912055565b6101bd6102273660046108a8565b6103c1565b6101987f000000000000000000000000000000000000000000000000000000000000000081565b61026085858585856103cc565b5050505050565b61027283838361058d565b505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610367919061095e565b600060405180830381855af49150503d80600081146103a2576040519150601f19603f3d011682016040523d82523d6000602084013e6103a7565b606091505b5091509150816103b957805160208201fd5b805160208201f35b610272838383610636565b6001600160a01b03841615806103e957506001600160a01b038316155b156104075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146104cb576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166104cb5760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146104c95760008681526010602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906104c3908490610990565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906104fd908490610990565b90915550506000858152600d602090815260408083206001600160a01b0387168452909152812080548492906105349084906109a9565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906105bf9084906109a9565b90915550506000838152600e6020526040812080548392906105e29084906109a9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915290205481111561067957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e909152812080548392906106bc908490610990565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610629565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156107465780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561077f578181015183820152602001610767565b50506000910152565b60006020828403121561079a57600080fd5b815167ffffffffffffffff808211156107b257600080fd5b818401915084601f8301126107c657600080fd5b8151818111156107d8576107d861074e565b604051601f8201601f19908116603f011681019083821181831017156108005761080061074e565b8160405282815287602084870101111561081957600080fd5b61082a836020830160208801610764565b979650505050505050565b80356001600160a01b038116811461084c57600080fd5b919050565b600080600080600060a0868803121561086957600080fd5b8535945061087960208701610835565b935061088760408701610835565b92506060860135915061089c60808701610835565b90509295509295909350565b6000806000606084860312156108bd57600080fd5b833592506108cd60208501610835565b9150604084013590509250925092565b600080600080600080600060e0888a0312156108f857600080fd5b61090188610835565b965061090f60208901610835565b95506040880135801515811461092457600080fd5b945060608801359350608088013560ff8116811461094157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008251610970818460208701610764565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b818103818111156109a3576109a361097a565b92915050565b808201808211156109a3576109a361097a56fea2646970667358221220e8079abebff1f6eceb771161bdb551b2efc71814fa2ee59c6a160ad825c9f6f664736f6c63430008140033";
        readonly sourceMap: "1223:7566:140:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4859:12;5013;5027:23;5054:7;-1:-1:-1;;;;;5054:20:140;5075:5;;5054:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5012:69;;;;5096:7;5091:658;;5119:15;5137:18;5144:10;5137:18;:::i;:::-;5119:36;-1:-1:-1;;;;;;;5173:43:140;;-1:-1:-1;;;5173:43:140;5169:176;;5301:10;5295:17;5290:2;5278:10;5274:19;5267:46;5169:176;5562:17;;-1:-1:-1;;5558:25:140;;5581:1;5536:20;;5529:55;;;5536:20;5675:31;;;;;;;;;;:::i;:::-;5662:44;-1:-1:-1;5721:17:140;;-1:-1:-1;;;5721:17:140;5091:658;5766:10;-1:-1:-1;;4810:973:140;;;;1223:7566;;;;;;1421:174;;1471:124;1421:174;;;;;2090:25:234;;;2078:2;2063:18;1421:174:140;;;;;;;8321:228;;;;;;:::i;:::-;;:::i;:::-;;8555:111;;;;;;:::i;:::-;;:::i;7258:867::-;;;;;;:::i;:::-;;:::i;8150:165::-;;;;;;:::i;:::-;8272:20;;;;:10;:20;;;;;;;;-1:-1:-1;;;;;8272:26:140;;;;;;;;;;:36;8150:165;8672:115;;;;;;:::i;:::-;;:::i;1659:40::-;;;;;8321:228;8494:48;8508:7;8517:4;8523:2;8527:6;8535;8494:13;:48::i;:::-;8321:228;;;;;:::o;8555:111::-;8633:26;8639:7;8648:2;8652:6;8633:5;:26::i;:::-;8555:111;;;:::o;7258:867::-;7530:372;;7632:15;7530:372;;;4268:25:234;1471:124:140;4309:18:234;;;4302:34;-1:-1:-1;;;;;4410:15:234;;;4390:18;;;4383:43;4462:15;;;4442:18;;;4435:43;4522:14;;4515:22;4494:19;;;4487:51;4554:19;;;4547:35;;;4631:4;4619:17;;4598:19;;;4591:46;4653:19;;;4646:35;;;4697:19;;;4690:35;;;7459:12:140;;;;7496:7;:20;;4240:19:234;;7530:372:140;;;-1:-1:-1;;7530:372:140;;;;;;;;;;;;;;-1:-1:-1;;;;;7530:372:140;-1:-1:-1;;;7530:372:140;;;7496:416;;;7530:372;7496:416;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7458:454;;;;7927:7;7922:117;;8007:6;8001:13;7996:2;7988:6;7984:15;7977:38;7922:117;8101:6;8095:13;8090:2;8082:6;8078:15;8071:38;8672:115;8752:28;8758:7;8767:4;8773:6;8752:5;:28::i;3315:1591:116:-;-1:-1:-1;;;;;3528:18:116;;;;:38;;-1:-1:-1;;;;;;3550:16:116;;;3528:38;3524:111;;;3589:35;;-1:-1:-1;;;3589:35:116;;;;;;;;;;;3524:111;3739:4;-1:-1:-1;;;;;3729:14:116;:6;-1:-1:-1;;;;;3729:14:116;;3725:888;;-1:-1:-1;;;;;3880:23:116;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3875:728;;3990:16;4009:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4009:33:116;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4125:29:116;;4121:468;;4519:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4519:33:116;;;;;;;;;;;:41;;;;;;;;;;:51;;4564:6;;4519:27;:51;;4564:6;;4519:51;:::i;:::-;;;;-1:-1:-1;;4121:468:116;3913:690;3875:728;4757:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4757:25:116;;;;;;;;;:35;;4786:6;;4757:19;:35;;4786:6;;4757:35;:::i;:::-;;;;-1:-1:-1;;4802:19:116;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4802:23:116;;;;;;;;;:33;;4829:6;;4802:19;:33;;4829:6;;4802:33;:::i;:::-;;;;-1:-1:-1;;4850:49:116;;;5597:25:234;;;5653:2;5638:18;;5631:34;;;-1:-1:-1;;;;;4850:49:116;;;;;;;;;;;;;;5570:18:234;4850:49:116;;;;;;;3315:1591;;;;;:::o;5934:316::-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:116;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:116;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:116;;;5597:25:234;;;5653:2;5638:18;;5631:34;;;-1:-1:-1;;;;;6184:59:116;;;6219:1;;6199:10;;6184:59;;5570:18:234;6184:59:116;;;;;;;;5934:316;;;:::o;6522:597::-;6722:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6722:25:116;;;;;;;;;;:34;-1:-1:-1;6718:105:116;;;6779:33;;-1:-1:-1;;;6779:33:116;;;;;;;;;;;6718:105;6906:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6906:25:116;;;;;;;;;:35;;;;;;;6961:21;;;:12;:21;;;;;:31;;6935:6;;6906:19;6961:31;;6935:6;;6961:31;:::i;:::-;;;;-1:-1:-1;;7051:61:116;;;5597:25:234;;;5653:2;5638:18;;5631:34;;;7092:1:116;;-1:-1:-1;;;;;7051:61:116;;;7066:10;;7051:61;;5570:18:234;7051:61:116;5423:248:234;14:271;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:234:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:234;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:234;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:234;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:234:o;2126:173::-;2194:20;;-1:-1:-1;;;;;2243:31:234;;2233:42;;2223:70;;2289:1;2286;2279:12;2223:70;2126:173;;;:::o;2304:472::-;2399:6;2407;2415;2423;2431;2484:3;2472:9;2463:7;2459:23;2455:33;2452:53;;;2501:1;2498;2491:12;2452:53;2537:9;2524:23;2514:33;;2566:38;2600:2;2589:9;2585:18;2566:38;:::i;:::-;2556:48;;2623:38;2657:2;2646:9;2642:18;2623:38;:::i;:::-;2613:48;;2708:2;2697:9;2693:18;2680:32;2670:42;;2731:39;2765:3;2754:9;2750:19;2731:39;:::i;:::-;2721:49;;2304:472;;;;;;;;:::o;2781:322::-;2858:6;2866;2874;2927:2;2915:9;2906:7;2902:23;2898:32;2895:52;;;2943:1;2940;2933:12;2895:52;2979:9;2966:23;2956:33;;3008:38;3042:2;3031:9;3027:18;3008:38;:::i;:::-;2998:48;;3093:2;3082:9;3078:18;3065:32;3055:42;;2781:322;;;;;:::o;3108:794::-;3216:6;3224;3232;3240;3248;3256;3264;3317:3;3305:9;3296:7;3292:23;3288:33;3285:53;;;3334:1;3331;3324:12;3285:53;3357:29;3376:9;3357:29;:::i;:::-;3347:39;;3405:38;3439:2;3428:9;3424:18;3405:38;:::i;:::-;3395:48;;3493:2;3482:9;3478:18;3465:32;3540:5;3533:13;3526:21;3519:5;3516:32;3506:60;;3562:1;3559;3552:12;3506:60;3585:5;-1:-1:-1;3637:2:234;3622:18;;3609:32;;-1:-1:-1;3693:3:234;3678:19;;3665:33;3742:4;3729:18;;3717:31;;3707:59;;3762:1;3759;3752:12;3707:59;3108:794;;;;-1:-1:-1;3108:794:234;;;;3785:7;3839:3;3824:19;;3811:33;;-1:-1:-1;3891:3:234;3876:19;;;3863:33;;3108:794;-1:-1:-1;;3108:794:234:o;4736:287::-;4865:3;4903:6;4897:13;4919:66;4978:6;4973:3;4966:4;4958:6;4954:17;4919:66;:::i;:::-;5001:16;;;;;4736:287;-1:-1:-1;;4736:287:234:o;5028:127::-;5089:10;5084:3;5080:20;5077:1;5070:31;5120:4;5117:1;5110:15;5144:4;5141:1;5134:15;5160:128;5227:9;;;5248:11;;;5245:37;;;5262:18;;:::i;:::-;5160:128;;;;:::o;5293:125::-;5358:9;;;5379:10;;;5376:36;;;5392:18;;:::i";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "26562": readonly [{
                readonly start: 135;
                readonly length: 32;
            }, {
                readonly start: 781;
                readonly length: 32;
            }];
            readonly "26571": readonly [{
                readonly start: 561;
                readonly length: 32;
            }, {
                readonly start: 636;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "PERMIT_TYPEHASH()": "30adf81f";
        readonly "__external_transferFrom(uint256,address,address,uint256,address)": "58af4a0a";
        readonly "__setBalanceOf(uint256,address,uint256)": "94a97cdb";
        readonly "burn(uint256,address,uint256)": "9eea5f66";
        readonly "domainSeparator()": "f698da25";
        readonly "mint(uint256,address,uint256)": "836a1040";
        readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_linkerFactory\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"__external_transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"__setBalanceOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"InsufficientBalance()\":[{\"notice\":\"Thrown when a user doesn't have a sufficient balance to perform         an action.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"__setBalanceOf(uint256,address,uint256)\":{\"notice\":\"Mocks ///\"},\"domainSeparator()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockMultiToken.sol\":\"MockMultiToken\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10\",\"dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec\",\"dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6\",\"dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c\",\"dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0\",\"dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd\",\"dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334\",\"dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c\",\"dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0\",\"dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES\"]},\"contracts/test/MockMultiToken.sol\":{\"keccak256\":\"0xc9b7e896f14f1ce9487faeee729ac6973a6f25fffcede51a5ae23f3230c95bf2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dd69d17e3ce0bb31b79cb36cde618c5a166ea3ed25a37d1372d7e690f33158d\",\"dweb:/ipfs/QmQgDTMECvqYS1QMEGSuPETwH6ii26dZqBC6UUBgzT4Lok\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_linkerCodeHash";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "address";
                    readonly name: "_linkerFactory";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InsufficientBalance";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "LnInvalidInput";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "RestrictedZeroAddress";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt256";
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
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "fallback";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "PERMIT_TYPEHASH";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
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
                }, {
                    readonly internalType: "address";
                    readonly name: "caller";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "__external_transferFrom";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_who";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "__setBalanceOf";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "burn";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "domainSeparator";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
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
                readonly name: "mint";
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
                    readonly internalType: "bool";
                    readonly name: "_approved";
                    readonly type: "bool";
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
                readonly name: "permitForAll";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        readonly details: "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.";
                        readonly params: {
                            readonly _approved: "A boolean of the approval status to set to.";
                            readonly deadline: "The timestamp which the signature must be submitted by        to be valid.";
                            readonly owner: "The owner of the account which is having the new approval set.";
                            readonly r: "The r component of the ECDSA signature.";
                            readonly s: "The s component of the ECDSA signature.";
                            readonly spender: "The address which will be allowed to spend owner's tokens.";
                            readonly v: "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "PERMIT_TYPEHASH()": {
                        readonly notice: "The typehash used to calculate the EIP712 hash for `permitForAll`.";
                    };
                    readonly "__setBalanceOf(uint256,address,uint256)": {
                        readonly notice: "Mocks ///";
                    };
                    readonly "domainSeparator()": {
                        readonly notice: "This contract's EIP712 domain separator.";
                    };
                    readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        readonly notice: "Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.";
                    };
                };
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
                readonly "contracts/test/MockMultiToken.sol": "MockMultiToken";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/external/Hyperdrive.sol": {
                readonly keccak256: "0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4";
                readonly urls: readonly ["bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10", "dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92";
                readonly urls: readonly ["bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206", "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget1.sol": {
                readonly keccak256: "0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf";
                readonly urls: readonly ["bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec", "dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget2.sol": {
                readonly keccak256: "0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39";
                readonly urls: readonly ["bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6", "dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget3.sol": {
                readonly keccak256: "0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78";
                readonly urls: readonly ["bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c", "dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget4.sol": {
                readonly keccak256: "0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f";
                readonly urls: readonly ["bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0", "dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM"];
                readonly license: "Apache-2.0";
            };
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
            readonly "contracts/src/internal/HyperdriveAdmin.sol": {
                readonly keccak256: "0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8";
                readonly urls: readonly ["bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd", "dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3";
                readonly urls: readonly ["bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186", "dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveCheckpoint.sol": {
                readonly keccak256: "0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7";
                readonly urls: readonly ["bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334", "dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P"];
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
            readonly "contracts/src/internal/HyperdriveShort.sol": {
                readonly keccak256: "0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c";
                readonly urls: readonly ["bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c", "dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx"];
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
            readonly "contracts/src/libraries/Constants.sol": {
                readonly keccak256: "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d";
                readonly urls: readonly ["bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418", "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"];
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
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d";
                readonly urls: readonly ["bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df", "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdrive.sol": {
                readonly keccak256: "0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500";
                readonly urls: readonly ["bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0", "dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockMultiToken.sol": {
                readonly keccak256: "0xc9b7e896f14f1ce9487faeee729ac6973a6f25fffcede51a5ae23f3230c95bf2";
                readonly urls: readonly ["bzz-raw://4dd69d17e3ce0bb31b79cb36cde618c5a166ea3ed25a37d1372d7e690f33158d", "dweb:/ipfs/QmQgDTMECvqYS1QMEGSuPETwH6ii26dZqBC6UUBgzT4Lok"];
                readonly license: "Apache-2.0";
            };
            readonly "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                readonly keccak256: "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7";
                readonly urls: readonly ["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f", "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                readonly keccak256: "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80";
                readonly urls: readonly ["bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229", "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                readonly keccak256: "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70";
                readonly urls: readonly ["bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c", "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                readonly keccak256: "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2";
                readonly urls: readonly ["bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850", "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                readonly keccak256: "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff";
                readonly urls: readonly ["bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d", "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                readonly keccak256: "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386";
                readonly urls: readonly ["bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0", "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                readonly keccak256: "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721";
                readonly urls: readonly ["bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245", "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                readonly keccak256: "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2";
                readonly urls: readonly ["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12", "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                readonly keccak256: "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236";
                readonly urls: readonly ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"];
                readonly license: "MIT";
            };
            readonly "lib/solmate/src/auth/Auth.sol": {
                readonly keccak256: "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c";
                readonly urls: readonly ["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac", "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                readonly keccak256: "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3";
                readonly urls: readonly ["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef", "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/tokens/ERC20.sol": {
                readonly keccak256: "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10";
                readonly urls: readonly ["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35", "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "test/utils/HyperdriveUtils.sol": {
                readonly keccak256: "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04";
                readonly urls: readonly ["bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6", "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockMultiToken.sol";
        readonly id: 26896;
        readonly exportedSymbols: {
            readonly HyperdriveMath: readonly [19567];
            readonly HyperdriveMultiToken: readonly [16538];
            readonly HyperdriveStorage: readonly [17734];
            readonly HyperdriveTarget0: readonly [5190];
            readonly IERC20: readonly [9666];
            readonly IHyperdrive: readonly [10351];
            readonly IMockMultiToken: readonly [26556];
            readonly IMultiToken: readonly [11334];
            readonly MockHyperdriveBase: readonly [24803];
            readonly MockHyperdriveTarget0: readonly [25161];
            readonly MockMultiToken: readonly [26895];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:8751:140";
        readonly nodes: readonly [{
            readonly id: 26495;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:140";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 26497;
            readonly nodeType: "ImportDirective";
            readonly src: "64:81:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "contracts/src/external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 5191;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26496;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5190;
                    readonly src: "73:17:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26499;
            readonly nodeType: "ImportDirective";
            readonly src: "146:61:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "contracts/src/interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 9667;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26498;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 9666;
                    readonly src: "155:6:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26501;
            readonly nodeType: "ImportDirective";
            readonly src: "208:71:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26500;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "217:11:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26503;
            readonly nodeType: "ImportDirective";
            readonly src: "280:71:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IMultiToken.sol";
            readonly file: "contracts/src/interfaces/IMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 11335;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26502;
                    readonly name: "IMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11334;
                    readonly src: "289:11:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26505;
            readonly nodeType: "ImportDirective";
            readonly src: "352:87:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveMultiToken.sol";
            readonly file: "contracts/src/internal/HyperdriveMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 16539;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26504;
                    readonly name: "HyperdriveMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 16538;
                    readonly src: "361:20:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26507;
            readonly nodeType: "ImportDirective";
            readonly src: "440:81:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveStorage.sol";
            readonly file: "contracts/src/internal/HyperdriveStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 17735;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26506;
                    readonly name: "HyperdriveStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 17734;
                    readonly src: "449:17:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26509;
            readonly nodeType: "ImportDirective";
            readonly src: "522:76:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "contracts/src/libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 19568;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26508;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19567;
                    readonly src: "531:14:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26512;
            readonly nodeType: "ImportDirective";
            readonly src: "599:94:140";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/MockHyperdrive.sol";
            readonly file: "contracts/test/MockHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26896;
            readonly sourceUnit: 25222;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26510;
                    readonly name: "MockHyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 24803;
                    readonly src: "608:18:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 26511;
                    readonly name: "MockHyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 25161;
                    readonly src: "628:21:140";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26556;
            readonly nodeType: "ContractDefinition";
            readonly src: "741:480:140";
            readonly nodes: readonly [{
                readonly id: 26524;
                readonly nodeType: "FunctionDefinition";
                readonly src: "788:112:140";
                readonly nodes: readonly [];
                readonly functionSelector: "94a97cdb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__setBalanceOf";
                readonly nameLocation: "797:14:140";
                readonly parameters: {
                    readonly id: 26522;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26517;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "829:8:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26524;
                        readonly src: "821:16:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26516;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "821:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26519;
                        readonly mutability: "mutable";
                        readonly name: "_who";
                        readonly nameLocation: "855:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26524;
                        readonly src: "847:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26518;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "847:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26521;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "877:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26524;
                        readonly src: "869:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26520;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "869:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "811:79:140";
                };
                readonly returnParameters: {
                    readonly id: 26523;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "899:0:140";
                };
                readonly scope: 26556;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26537;
                readonly nodeType: "FunctionDefinition";
                readonly src: "906:163:140";
                readonly nodes: readonly [];
                readonly functionSelector: "58af4a0a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__external_transferFrom";
                readonly nameLocation: "915:23:140";
                readonly parameters: {
                    readonly id: 26535;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26526;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "956:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "948:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26525;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "948:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26528;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "981:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "973:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26527;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "973:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26530;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1003:2:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "995:10:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26529;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "995:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26532;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1023:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "1015:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26531;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1015:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26534;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "1047:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26537;
                        readonly src: "1039:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26533;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1039:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "938:121:140";
                };
                readonly returnParameters: {
                    readonly id: 26536;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1068:0:140";
                };
                readonly scope: 26556;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26546;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1075:68:140";
                readonly nodes: readonly [];
                readonly functionSelector: "836a1040";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "1084:4:140";
                readonly parameters: {
                    readonly id: 26544;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26539;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "1097:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26546;
                        readonly src: "1089:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26538;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1089:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26541;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1114:2:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26546;
                        readonly src: "1106:10:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26540;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1106:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26543;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1126:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26546;
                        readonly src: "1118:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26542;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1118:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1088:45:140";
                };
                readonly returnParameters: {
                    readonly id: 26545;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1142:0:140";
                };
                readonly scope: 26556;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26555;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1149:70:140";
                readonly nodes: readonly [];
                readonly functionSelector: "9eea5f66";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "burn";
                readonly nameLocation: "1158:4:140";
                readonly parameters: {
                    readonly id: 26553;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26548;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "1171:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26555;
                        readonly src: "1163:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26547;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1163:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26550;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1188:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26555;
                        readonly src: "1180:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26549;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1180:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26552;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1202:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26555;
                        readonly src: "1194:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26551;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1194:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1162:47:140";
                };
                readonly returnParameters: {
                    readonly id: 26554;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1218:0:140";
                };
                readonly scope: 26556;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 26514;
                    readonly name: "IMultiToken";
                    readonly nameLocations: readonly ["770:11:140"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11334;
                    readonly src: "770:11:140";
                };
                readonly id: 26515;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "770:11:140";
            }];
            readonly canonicalName: "IMockMultiToken";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 26513;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "695:46:140";
                readonly text: "DEPRECATED: Don't use this for new tests.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [26556, 11334, 11474, 11425, 11547, 11459];
            readonly name: "IMockMultiToken";
            readonly nameLocation: "751:15:140";
            readonly scope: 26896;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [11440, 11449, 11458];
        }, {
            readonly id: 26895;
            readonly nodeType: "ContractDefinition";
            readonly src: "1223:7566:140";
            readonly nodes: readonly [{
                readonly id: 26562;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1297:34:140";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "immutable";
                readonly name: "target0";
                readonly nameLocation: "1324:7:140";
                readonly scope: 26895;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 26561;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1297:7:140";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 26568;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1421:174:140";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly documentation: {
                    readonly id: 26563;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1338:78:140";
                    readonly text: "@notice The typehash used to calculate the EIP712 hash for `permitForAll`.";
                };
                readonly functionSelector: "30adf81f";
                readonly mutability: "constant";
                readonly name: "PERMIT_TYPEHASH";
                readonly nameLocation: "1445:15:140";
                readonly scope: 26895;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 26564;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1421:7:140";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly hexValue: "5065726d6974466f72416c6c2861646472657373206f776e65722c61646472657373207370656e6465722c626f6f6c205f617070726f7665642c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529";
                        readonly id: 26566;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "string";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "1494:91:140";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673";
                            readonly typeString: "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\"";
                        };
                        readonly value: "PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)";
                    }];
                    readonly expression: {
                        readonly argumentTypes: readonly [{
                            readonly typeIdentifier: "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673";
                            readonly typeString: "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\"";
                        }];
                        readonly id: 26565;
                        readonly name: "keccak256";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: -8;
                        readonly src: "1471:9:140";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                        };
                    };
                    readonly id: 26567;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "functionCall";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1471:124:140";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 26571;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1659:40:140";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 26569;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1602:52:140";
                    readonly text: "@notice This contract's EIP712 domain separator.";
                };
                readonly functionSelector: "f698da25";
                readonly mutability: "immutable";
                readonly name: "domainSeparator";
                readonly nameLocation: "1684:15:140";
                readonly scope: 26895;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 26570;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1659:7:140";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 26706;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1749:2898:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26705;
                    readonly nodeType: "Block";
                    readonly src: "2813:1834:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26680;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26626;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26562;
                                readonly src: "2863:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "30";
                                                    readonly id: 26637;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "3008:1:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    };
                                                    readonly value: "0";
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    }];
                                                    readonly id: 26636;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3000:7:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 26635;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3000:7:140";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 26638;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3000:10:140";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                }];
                                                readonly id: 26634;
                                                readonly name: "IERC20";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9666;
                                                readonly src: "2993:6:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$9666_$";
                                                    readonly typeString: "type(contract IERC20)";
                                                };
                                            };
                                            readonly id: 26639;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2993:18:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "30";
                                                    readonly id: 26643;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "3066:1:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    };
                                                    readonly value: "0";
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    }];
                                                    readonly id: 26642;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3058:7:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 26641;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3058:7:140";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 26644;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3058:10:140";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                }];
                                                readonly id: 26640;
                                                readonly name: "IERC20";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9666;
                                                readonly src: "3051:6:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$9666_$";
                                                    readonly typeString: "type(contract IERC20)";
                                                };
                                            };
                                            readonly id: 26645;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3051:18:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }, {
                                            readonly id: 26646;
                                            readonly name: "_linkerFactory";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26575;
                                            readonly src: "3106:14:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 26647;
                                            readonly name: "_linkerCodeHash";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26573;
                                            readonly src: "3158:15:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }, {
                                            readonly hexValue: "31653138";
                                            readonly id: 26648;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3219:4:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        }, {
                                            readonly hexValue: "31653138";
                                            readonly id: 26649;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3267:4:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        }, {
                                            readonly hexValue: "31653135";
                                            readonly id: 26650;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3319:4:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000";
                                            };
                                            readonly value: "1e15";
                                        }, {
                                            readonly hexValue: "333635";
                                            readonly id: 26651;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3363:8:140";
                                            readonly subdenomination: "days";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                                readonly typeString: "int_const 31536000";
                                            };
                                            readonly value: "365";
                                        }, {
                                            readonly hexValue: "31";
                                            readonly id: 26652;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3413:6:140";
                                            readonly subdenomination: "days";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_86400_by_1";
                                                readonly typeString: "int_const 86400";
                                            };
                                            readonly value: "1";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "302e3035653138";
                                                readonly id: 26655;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3515:7:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                                    readonly typeString: "int_const 50000000000000000";
                                                };
                                                readonly value: "0.05e18";
                                            }, {
                                                readonly hexValue: "333635";
                                                readonly id: 26656;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3548:8:140";
                                                readonly subdenomination: "days";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                                    readonly typeString: "int_const 31536000";
                                                };
                                                readonly value: "365";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                                    readonly typeString: "int_const 50000000000000000";
                                                }, {
                                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                                    readonly typeString: "int_const 31536000";
                                                }];
                                                readonly expression: {
                                                    readonly id: 26653;
                                                    readonly name: "HyperdriveMath";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19567;
                                                    readonly src: "3454:14:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                                        readonly typeString: "type(library HyperdriveMath)";
                                                    };
                                                };
                                                readonly id: 26654;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "3469:20:140";
                                                readonly memberName: "calculateTimeStretch";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18914;
                                                readonly src: "3454:35:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 26657;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3454:124:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 26660;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3620:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 26659;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3612:7:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26658;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3612:7:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26661;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3612:10:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 26664;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3666:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 26663;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3658:7:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26662;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3658:7:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26665;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3658:10:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 26668;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3714:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 26667;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3706:7:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26666;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3706:7:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26669;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3706:10:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 26672;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3794:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 26673;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3827:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 26674;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3868:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 26675;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3913:1:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }, {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }, {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }, {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly expression: {
                                                    readonly id: 26670;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10351;
                                                    readonly src: "3744:11:140";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 26671;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "3756:4:140";
                                                readonly memberName: "Fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10065;
                                                readonly src: "3744:16:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_struct$_Fees_$10065_storage_ptr_$";
                                                    readonly typeString: "type(struct IHyperdrive.Fees storage pointer)";
                                                };
                                            };
                                            readonly id: 26676;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "structConstructorCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly ["3787:5:140", "3821:4:140", "3854:12:140", "3895:16:140"];
                                            readonly names: readonly ["curve", "flat", "governanceLP", "governanceZombie"];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3744:193:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                readonly typeString: "contract IERC20";
                                            }, {
                                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                readonly typeString: "contract IERC20";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            }, {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            }, {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            }, {
                                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000";
                                            }, {
                                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                                readonly typeString: "int_const 31536000";
                                            }, {
                                                readonly typeIdentifier: "t_rational_86400_by_1";
                                                readonly typeString: "int_const 86400";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 26632;
                                                readonly name: "IHyperdrive";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 10351;
                                                readonly src: "2937:11:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                    readonly typeString: "type(contract IHyperdrive)";
                                                };
                                            };
                                            readonly id: 26633;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2949:10:140";
                                            readonly memberName: "PoolConfig";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10154;
                                            readonly src: "2937:22:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_struct$_PoolConfig_$10154_storage_ptr_$";
                                                readonly typeString: "type(struct IHyperdrive.PoolConfig storage pointer)";
                                            };
                                        };
                                        readonly id: 26677;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "structConstructorCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly ["2982:9:140", "3033:16:140", "3091:13:140", "3142:14:140", "3195:22:140", "3245:20:140", "3293:24:140", "3345:16:140", "3393:18:140", "3441:11:140", "3600:10:140", "3644:12:140", "3690:14:140", "3738:4:140"];
                                        readonly names: readonly ["baseToken", "vaultSharesToken", "linkerFactory", "linkerCodeHash", "initialVaultSharePrice", "minimumShareReserves", "minimumTransactionAmount", "positionDuration", "checkpointDuration", "timeStretch", "governance", "feeCollector", "sweepCollector", "fees"];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2937:1019:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        }];
                                        readonly id: 26631;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "NewExpression";
                                        readonly src: "2894:25:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25161_$";
                                            readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)";
                                        };
                                        readonly typeName: {
                                            readonly id: 26630;
                                            readonly nodeType: "UserDefinedTypeName";
                                            readonly pathNode: {
                                                readonly id: 26629;
                                                readonly name: "MockHyperdriveTarget0";
                                                readonly nameLocations: readonly ["2898:21:140"];
                                                readonly nodeType: "IdentifierPath";
                                                readonly referencedDeclaration: 25161;
                                                readonly src: "2898:21:140";
                                            };
                                            readonly referencedDeclaration: 25161;
                                            readonly src: "2898:21:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25161";
                                                readonly typeString: "contract MockHyperdriveTarget0";
                                            };
                                        };
                                    };
                                    readonly id: 26678;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2894:1076:140";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25161";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25161";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    }];
                                    readonly id: 26628;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2873:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26627;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2873:7:140";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26679;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2873:1107:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2863:1117:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 26681;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2863:1117:140";
                    }, {
                        readonly expression: {
                            readonly id: 26703;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26682;
                                readonly name: "domainSeparator";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26571;
                                readonly src: "4325:15:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly hexValue: "454950373132446f6d61696e28737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";
                                            readonly id: 26687;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "4425:72:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd";
                                                readonly typeString: "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\"";
                                            };
                                            readonly value: "EIP712Domain(string version,uint256 chainId,address verifyingContract)";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd";
                                                readonly typeString: "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\"";
                                            }];
                                            readonly id: 26686;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4394:9:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 26688;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4394:121:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "31";
                                                readonly id: 26692;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "4549:3:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6";
                                                    readonly typeString: "literal_string \"1\"";
                                                };
                                                readonly value: "1";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6";
                                                    readonly typeString: "literal_string \"1\"";
                                                }];
                                                readonly id: 26691;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4543:5:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26690;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4543:5:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26693;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4543:10:140";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }];
                                            readonly id: 26689;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4533:9:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 26694;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4533:21:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 26695;
                                            readonly name: "block";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -4;
                                            readonly src: "4572:5:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_block";
                                                readonly typeString: "block";
                                            };
                                        };
                                        readonly id: 26696;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4578:7:140";
                                        readonly memberName: "chainid";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4572:13:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 26699;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "4611:4:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockMultiToken_$26895";
                                                readonly typeString: "contract MockMultiToken";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_MockMultiToken_$26895";
                                                readonly typeString: "contract MockMultiToken";
                                            }];
                                            readonly id: 26698;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4603:7:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 26697;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4603:7:140";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 26700;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4603:13:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }, {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }];
                                        readonly expression: {
                                            readonly id: 26684;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4366:3:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 26685;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4370:6:140";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4366:10:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 26701;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4366:264:140";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 26683;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "4343:9:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 26702;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4343:297:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "4325:315:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 26704;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4325:315:140";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 26583;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "1938:1:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    }];
                                    readonly id: 26582;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1930:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26581;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1930:7:140";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26584;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1930:10:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 26580;
                                readonly name: "IERC20";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9666;
                                readonly src: "1923:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$9666_$";
                                    readonly typeString: "type(contract IERC20)";
                                };
                            };
                            readonly id: 26585;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1923:18:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 26589;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "1992:1:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    }];
                                    readonly id: 26588;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1984:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26587;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1984:7:140";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26590;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1984:10:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 26586;
                                readonly name: "IERC20";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9666;
                                readonly src: "1977:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$9666_$";
                                    readonly typeString: "type(contract IERC20)";
                                };
                            };
                            readonly id: 26591;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1977:18:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            };
                        }, {
                            readonly id: 26592;
                            readonly name: "_linkerFactory";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26575;
                            readonly src: "2028:14:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly id: 26593;
                            readonly name: "_linkerCodeHash";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26573;
                            readonly src: "2076:15:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        }, {
                            readonly hexValue: "31653138";
                            readonly id: 26594;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2133:4:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            };
                            readonly value: "1e18";
                        }, {
                            readonly hexValue: "31653138";
                            readonly id: 26595;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2177:4:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            };
                            readonly value: "1e18";
                        }, {
                            readonly hexValue: "31653135";
                            readonly id: 26596;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2225:4:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000";
                            };
                            readonly value: "1e15";
                        }, {
                            readonly hexValue: "333635";
                            readonly id: 26597;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2265:8:140";
                            readonly subdenomination: "days";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                readonly typeString: "int_const 31536000";
                            };
                            readonly value: "365";
                        }, {
                            readonly hexValue: "31";
                            readonly id: 26598;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2311:6:140";
                            readonly subdenomination: "days";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_86400_by_1";
                                readonly typeString: "int_const 86400";
                            };
                            readonly value: "1";
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "302e3035653138";
                                readonly id: 26601;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2405:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                    readonly typeString: "int_const 50000000000000000";
                                };
                                readonly value: "0.05e18";
                            }, {
                                readonly hexValue: "333635";
                                readonly id: 26602;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2434:8:140";
                                readonly subdenomination: "days";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                    readonly typeString: "int_const 31536000";
                                };
                                readonly value: "365";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                    readonly typeString: "int_const 50000000000000000";
                                }, {
                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                    readonly typeString: "int_const 31536000";
                                }];
                                readonly expression: {
                                    readonly id: 26599;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "2348:14:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 26600;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2363:20:140";
                                readonly memberName: "calculateTimeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18914;
                                readonly src: "2348:35:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26603;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2348:112:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 26606;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2498:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }];
                                readonly id: 26605;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "2490:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 26604;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2490:7:140";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26607;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2490:10:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 26610;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2540:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }];
                                readonly id: 26609;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "2532:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 26608;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2532:7:140";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26611;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2532:10:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 26614;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2584:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }];
                                readonly id: 26613;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "2576:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 26612;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2576:7:140";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26615;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2576:10:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 26618;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2656:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }, {
                                readonly hexValue: "30";
                                readonly id: 26619;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2685:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }, {
                                readonly hexValue: "30";
                                readonly id: 26620;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2722:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }, {
                                readonly hexValue: "30";
                                readonly id: 26621;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2763:1:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }, {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }, {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }, {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }];
                                readonly expression: {
                                    readonly id: 26616;
                                    readonly name: "IHyperdrive";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 10351;
                                    readonly src: "2610:11:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                        readonly typeString: "type(contract IHyperdrive)";
                                    };
                                };
                                readonly id: 26617;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2622:4:140";
                                readonly memberName: "Fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10065;
                                readonly src: "2610:16:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_struct$_Fees_$10065_storage_ptr_$";
                                    readonly typeString: "type(struct IHyperdrive.Fees storage pointer)";
                                };
                            };
                            readonly id: 26622;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "structConstructorCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly ["2649:5:140", "2679:4:140", "2708:12:140", "2745:16:140"];
                            readonly names: readonly ["curve", "flat", "governanceLP", "governanceZombie"];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2610:173:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            }, {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            }, {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            }, {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            }, {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            }, {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            }, {
                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000";
                            }, {
                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                readonly typeString: "int_const 31536000";
                            }, {
                                readonly typeIdentifier: "t_rational_86400_by_1";
                                readonly typeString: "int_const 86400";
                            }, {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            }, {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            }, {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            }, {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            }, {
                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            }];
                            readonly expression: {
                                readonly id: 26578;
                                readonly name: "IHyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 10351;
                                readonly src: "1871:11:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                    readonly typeString: "type(contract IHyperdrive)";
                                };
                            };
                            readonly id: 26579;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "1883:10:140";
                            readonly memberName: "PoolConfig";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 10154;
                            readonly src: "1871:22:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_struct$_PoolConfig_$10154_storage_ptr_$";
                                readonly typeString: "type(struct IHyperdrive.PoolConfig storage pointer)";
                            };
                        };
                        readonly id: 26623;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "structConstructorCall";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly ["1912:9:140", "1959:16:140", "2013:13:140", "2060:14:140", "2109:22:140", "2155:20:140", "2199:24:140", "2247:16:140", "2291:18:140", "2335:11:140", "2478:10:140", "2518:12:140", "2560:14:140", "2604:4:140"];
                        readonly names: readonly ["baseToken", "vaultSharesToken", "linkerFactory", "linkerCodeHash", "initialVaultSharePrice", "minimumShareReserves", "minimumTransactionAmount", "positionDuration", "checkpointDuration", "timeStretch", "governance", "feeCollector", "sweepCollector", "fees"];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1871:927:140";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 26624;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 26577;
                        readonly name: "HyperdriveStorage";
                        readonly nameLocations: readonly ["1840:17:140"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 17734;
                        readonly src: "1840:17:140";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1840:968:140";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 26576;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26573;
                        readonly mutability: "mutable";
                        readonly name: "_linkerCodeHash";
                        readonly nameLocation: "1778:15:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26706;
                        readonly src: "1770:23:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 26572;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1770:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26575;
                        readonly mutability: "mutable";
                        readonly name: "_linkerFactory";
                        readonly nameLocation: "1811:14:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26706;
                        readonly src: "1803:22:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26574;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1803:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1760:71:140";
                };
                readonly returnParameters: {
                    readonly id: 26625;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2813:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 26757;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4810:973:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26756;
                    readonly nodeType: "Block";
                    readonly src: "4873:910:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26714, 26716];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26714;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5018:7:140";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26756;
                            readonly src: "5013:12:140";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 26713;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5013:4:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 26716;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "5040:10:140";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26756;
                            readonly src: "5027:23:140";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 26715;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5027:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26721;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 26719;
                                readonly name: "_data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26708;
                                readonly src: "5075:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_calldata_ptr";
                                    readonly typeString: "bytes calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_calldata_ptr";
                                    readonly typeString: "bytes calldata";
                                }];
                                readonly expression: {
                                    readonly id: 26717;
                                    readonly name: "target0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26562;
                                    readonly src: "5054:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 26718;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5062:12:140";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5054:20:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 26720;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5054:27:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5012:69:140";
                    }, {
                        readonly condition: {
                            readonly id: 26723;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "5095:8:140";
                            readonly subExpression: {
                                readonly id: 26722;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26714;
                                readonly src: "5096:7:140";
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
                        readonly id: 26753;
                        readonly nodeType: "IfStatement";
                        readonly src: "5091:658:140";
                        readonly trueBody: {
                            readonly id: 26752;
                            readonly nodeType: "Block";
                            readonly src: "5105:644:140";
                            readonly statements: readonly [{
                                readonly assignments: readonly [26725];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 26725;
                                    readonly mutability: "mutable";
                                    readonly name: "selector";
                                    readonly nameLocation: "5126:8:140";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 26752;
                                    readonly src: "5119:15:140";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                    readonly typeName: {
                                        readonly id: 26724;
                                        readonly name: "bytes4";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5119:6:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 26730;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 26728;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26716;
                                        readonly src: "5144:10:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 26727;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5137:6:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_bytes4_$";
                                            readonly typeString: "type(bytes4)";
                                        };
                                        readonly typeName: {
                                            readonly id: 26726;
                                            readonly name: "bytes4";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5137:6:140";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 26729;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5137:18:140";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "5119:36:140";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                    readonly id: 26735;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 26731;
                                        readonly name: "selector";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26725;
                                        readonly src: "5173:8:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "!=";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly expression: {
                                                readonly id: 26732;
                                                readonly name: "IHyperdrive";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 10351;
                                                readonly src: "5185:11:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                    readonly typeString: "type(contract IHyperdrive)";
                                                };
                                            };
                                            readonly id: 26733;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5197:10:140";
                                            readonly memberName: "ReturnData";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10287;
                                            readonly src: "5185:22:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$";
                                                readonly typeString: "function (bytes memory) pure";
                                            };
                                        };
                                        readonly id: 26734;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5208:8:140";
                                        readonly memberName: "selector";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5185:31:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    };
                                    readonly src: "5173:43:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 26738;
                                readonly nodeType: "IfStatement";
                                readonly src: "5169:176:140";
                                readonly trueBody: {
                                    readonly id: 26737;
                                    readonly nodeType: "Block";
                                    readonly src: "5218:127:140";
                                    readonly statements: readonly [{
                                        readonly AST: {
                                            readonly nodeType: "YulBlock";
                                            readonly src: "5245:86:140";
                                            readonly statements: readonly [{
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly name: "returndata";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5278:10:140";
                                                        }, {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "5290:2:140";
                                                            readonly type: "";
                                                            readonly value: "32";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "add";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5274:3:140";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "5274:19:140";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "returndata";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5301:10:140";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mload";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5295:5:140";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "5295:17:140";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "revert";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5267:6:140";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5267:46:140";
                                                };
                                                readonly nodeType: "YulExpressionStatement";
                                                readonly src: "5267:46:140";
                                            }];
                                        };
                                        readonly evmVersion: "paris";
                                        readonly externalReferences: readonly [{
                                            readonly declaration: 26716;
                                            readonly isOffset: false;
                                            readonly isSlot: false;
                                            readonly src: "5278:10:140";
                                            readonly valueSize: 1;
                                        }, {
                                            readonly declaration: 26716;
                                            readonly isOffset: false;
                                            readonly isSlot: false;
                                            readonly src: "5301:10:140";
                                            readonly valueSize: 1;
                                        }];
                                        readonly id: 26736;
                                        readonly nodeType: "InlineAssembly";
                                        readonly src: "5236:95:140";
                                    }];
                                };
                            }, {
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "5511:138:140";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "returndata";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5540:10:140";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5552:3:140";
                                                    readonly type: "";
                                                    readonly value: "0x4";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5536:3:140";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5536:20:140";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly name: "returndata";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5568:10:140";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5562:5:140";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5562:17:140";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5581:1:140";
                                                    readonly type: "";
                                                    readonly value: "4";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "sub";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5558:3:140";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5558:25:140";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mstore";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5529:6:140";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5529:55:140";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "5529:55:140";
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "5601:34:140";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly name: "returndata";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5619:10:140";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "5631:3:140";
                                                readonly type: "";
                                                readonly value: "0x4";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5615:3:140";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5615:20:140";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "returndata";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5601:10:140";
                                        }];
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 26716;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5540:10:140";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 26716;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5568:10:140";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 26716;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5601:10:140";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 26716;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5619:10:140";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 26739;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "5502:147:140";
                            }, {
                                readonly expression: {
                                    readonly id: 26748;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 26740;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26716;
                                        readonly src: "5662:10:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 26743;
                                            readonly name: "returndata";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26716;
                                            readonly src: "5686:10:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 26745;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5699:5:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26744;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5699:5:140";
                                                    readonly typeDescriptions: {};
                                                };
                                            }];
                                            readonly id: 26746;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "5698:7:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }, {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            }];
                                            readonly expression: {
                                                readonly id: 26741;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "5675:3:140";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 26742;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5679:6:140";
                                            readonly memberName: "decode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5675:10:140";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                readonly typeString: "function () pure";
                                            };
                                        };
                                        readonly id: 26747;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5675:31:140";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly src: "5662:44:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 26749;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5662:44:140";
                            }, {
                                readonly expression: {
                                    readonly id: 26750;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26716;
                                    readonly src: "5728:10:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly functionReturnParameters: 26712;
                                readonly id: 26751;
                                readonly nodeType: "Return";
                                readonly src: "5721:17:140";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 26754;
                            readonly name: "returndata";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26716;
                            readonly src: "5766:10:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 26712;
                        readonly id: 26755;
                        readonly nodeType: "Return";
                        readonly src: "5759:17:140";
                    }];
                };
                readonly implemented: true;
                readonly kind: "fallback";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 26709;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26708;
                        readonly mutability: "mutable";
                        readonly name: "_data";
                        readonly nameLocation: "4834:5:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26757;
                        readonly src: "4819:20:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 26707;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4819:5:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4818:22:140";
                };
                readonly returnParameters: {
                    readonly id: 26712;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26711;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26757;
                        readonly src: "4859:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 26710;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4859:5:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4858:14:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26773;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5920:149:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26772;
                    readonly nodeType: "Block";
                    readonly src: "6044:25:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly hexValue: "30";
                            readonly id: 26770;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "6061:1:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly functionReturnParameters: 26769;
                        readonly id: 26771;
                        readonly nodeType: "Return";
                        readonly src: "6054:8:140";
                    }];
                };
                readonly baseFunctions: readonly [12806];
                readonly documentation: {
                    readonly id: 26758;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5789:18:140";
                    readonly text: "Overrides ///";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_applyCheckpoint";
                readonly nameLocation: "5929:16:140";
                readonly overrides: {
                    readonly id: 26766;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "6017:8:140";
                };
                readonly parameters: {
                    readonly id: 26765;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26760;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26773;
                        readonly src: "5955:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26759;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5955:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26762;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26773;
                        readonly src: "5972:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26761;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5972:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26764;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26773;
                        readonly src: "5989:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26763;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5989:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5945:57:140";
                };
                readonly returnParameters: {
                    readonly id: 26769;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26768;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26773;
                        readonly src: "6035:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26767;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6035:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6034:9:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 26821;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7258:867:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26820;
                    readonly nodeType: "Block";
                    readonly src: "7448:677:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26792, 26794];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26792;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "7464:7:140";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26820;
                            readonly src: "7459:12:140";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 26791;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7459:4:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 26794;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "7486:6:140";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26820;
                            readonly src: "7473:19:140";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 26793;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7473:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26813;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 26799;
                                        readonly name: "HyperdriveTarget0";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5190;
                                        readonly src: "7562:17:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveTarget0_$5190_$";
                                            readonly typeString: "type(contract HyperdriveTarget0)";
                                        };
                                    };
                                    readonly id: 26800;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7580:12:140";
                                    readonly memberName: "permitForAll";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 4688;
                                    readonly src: "7562:30:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$";
                                        readonly typeString: "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 26801;
                                        readonly name: "domainSeparator";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26571;
                                        readonly src: "7632:15:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 26802;
                                        readonly name: "PERMIT_TYPEHASH";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26568;
                                        readonly src: "7669:15:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 26803;
                                        readonly name: "owner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26776;
                                        readonly src: "7706:5:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 26804;
                                        readonly name: "spender";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26778;
                                        readonly src: "7733:7:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 26805;
                                        readonly name: "_approved";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26780;
                                        readonly src: "7762:9:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }, {
                                        readonly id: 26806;
                                        readonly name: "deadline";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26782;
                                        readonly src: "7793:8:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 26807;
                                        readonly name: "v";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26784;
                                        readonly src: "7823:1:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint8";
                                            readonly typeString: "uint8";
                                        };
                                    }, {
                                        readonly id: 26808;
                                        readonly name: "r";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26786;
                                        readonly src: "7846:1:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 26809;
                                        readonly name: "s";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26788;
                                        readonly src: "7869:1:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }];
                                    readonly id: 26810;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "7610:278:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$";
                                        readonly typeString: "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$";
                                        readonly typeString: "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    }, {
                                        readonly typeIdentifier: "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$";
                                        readonly typeString: "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    }];
                                    readonly expression: {
                                        readonly id: 26797;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "7530:3:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 26798;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7534:10:140";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "7530:14:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 26811;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7530:372:140";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly expression: {
                                    readonly id: 26795;
                                    readonly name: "target0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26562;
                                    readonly src: "7496:7:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 26796;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7504:12:140";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "7496:20:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 26812;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7496:416:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7458:454:140";
                    }, {
                        readonly condition: {
                            readonly id: 26815;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "7926:8:140";
                            readonly subExpression: {
                                readonly id: 26814;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26792;
                                readonly src: "7927:7:140";
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
                        readonly id: 26818;
                        readonly nodeType: "IfStatement";
                        readonly src: "7922:117:140";
                        readonly trueBody: {
                            readonly id: 26817;
                            readonly nodeType: "Block";
                            readonly src: "7936:103:140";
                            readonly statements: readonly [{
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "7959:70:140";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7988:6:140";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "7996:2:140";
                                                    readonly type: "";
                                                    readonly value: "32";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7984:3:140";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "7984:15:140";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "8007:6:140";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mload";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "8001:5:140";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "8001:13:140";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "7977:6:140";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "7977:38:140";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "7977:38:140";
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 26794;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "7988:6:140";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 26794;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "8007:6:140";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 26816;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "7950:79:140";
                            }];
                        };
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "8057:62:140";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8082:6:140";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "8090:2:140";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8078:3:140";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8078:15:140";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8101:6:140";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mload";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8095:5:140";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8095:13:140";
                                    }];
                                    readonly functionName: {
                                        readonly name: "return";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8071:6:140";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8071:38:140";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "8071:38:140";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 26794;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8082:6:140";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 26794;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8101:6:140";
                            readonly valueSize: 1;
                        }];
                        readonly id: 26819;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "8048:71:140";
                    }];
                };
                readonly documentation: {
                    readonly id: 26774;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6099:1154:140";
                    readonly text: "@notice Allows a caller who is not the owner of an account to execute the\n      functionality of 'approve' for all assets with the owners signature.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported.";
                };
                readonly functionSelector: "9032c726";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "permitForAll";
                readonly nameLocation: "7267:12:140";
                readonly parameters: {
                    readonly id: 26789;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26776;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "7297:5:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7289:13:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26775;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7289:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26778;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "7320:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7312:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26777;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7312:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26780;
                        readonly mutability: "mutable";
                        readonly name: "_approved";
                        readonly nameLocation: "7342:9:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7337:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 26779;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7337:4:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26782;
                        readonly mutability: "mutable";
                        readonly name: "deadline";
                        readonly nameLocation: "7369:8:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7361:16:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26781;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7361:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26784;
                        readonly mutability: "mutable";
                        readonly name: "v";
                        readonly nameLocation: "7393:1:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7387:7:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 26783;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7387:5:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26786;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "7412:1:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7404:9:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 26785;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7404:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26788;
                        readonly mutability: "mutable";
                        readonly name: "s";
                        readonly nameLocation: "7431:1:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26821;
                        readonly src: "7423:9:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 26787;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7423:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7279:159:140";
                };
                readonly returnParameters: {
                    readonly id: 26790;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7448:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26840;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8150:165:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26839;
                    readonly nodeType: "Block";
                    readonly src: "8262:53:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26837;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly baseExpression: {
                                        readonly id: 26831;
                                        readonly name: "_balanceOf";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17610;
                                        readonly src: "8272:10:140";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                                            readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                                        };
                                    };
                                    readonly id: 26834;
                                    readonly indexExpression: {
                                        readonly id: 26832;
                                        readonly name: "_tokenId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26824;
                                        readonly src: "8283:8:140";
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
                                    readonly src: "8272:20:140";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 26835;
                                readonly indexExpression: {
                                    readonly id: 26833;
                                    readonly name: "_who";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26826;
                                    readonly src: "8293:4:140";
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
                                readonly src: "8272:26:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 26836;
                                readonly name: "_amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26828;
                                readonly src: "8301:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "8272:36:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 26838;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8272:36:140";
                    }];
                };
                readonly documentation: {
                    readonly id: 26822;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8131:14:140";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "94a97cdb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__setBalanceOf";
                readonly nameLocation: "8159:14:140";
                readonly parameters: {
                    readonly id: 26829;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26824;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "8191:8:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26840;
                        readonly src: "8183:16:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26823;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8183:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26826;
                        readonly mutability: "mutable";
                        readonly name: "_who";
                        readonly nameLocation: "8217:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26840;
                        readonly src: "8209:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26825;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8209:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26828;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "8239:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26840;
                        readonly src: "8231:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26827;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8231:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8173:79:140";
                };
                readonly returnParameters: {
                    readonly id: 26830;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8262:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26862;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8321:228:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26861;
                    readonly nodeType: "Block";
                    readonly src: "8484:65:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26854;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26842;
                                readonly src: "8508:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26855;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26844;
                                readonly src: "8517:4:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26856;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26846;
                                readonly src: "8523:2:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26857;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26848;
                                readonly src: "8527:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26858;
                                readonly name: "caller";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26850;
                                readonly src: "8535:6:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
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
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 26853;
                                readonly name: "_transferFrom";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16262;
                                readonly src: "8494:13:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$";
                                    readonly typeString: "function (uint256,address,address,uint256,address)";
                                };
                            };
                            readonly id: 26859;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8494:48:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26860;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8494:48:140";
                    }];
                };
                readonly functionSelector: "58af4a0a";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__external_transferFrom";
                readonly nameLocation: "8330:23:140";
                readonly parameters: {
                    readonly id: 26851;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26842;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "8371:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8363:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26841;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8363:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26844;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "8396:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8388:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26843;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8388:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26846;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "8418:2:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8410:10:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26845;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8410:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26848;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "8438:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8430:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26847;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8430:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26850;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "8462:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26862;
                        readonly src: "8454:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26849;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8454:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8353:121:140";
                };
                readonly returnParameters: {
                    readonly id: 26852;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8484:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26878;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8555:111:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26877;
                    readonly nodeType: "Block";
                    readonly src: "8623:43:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26872;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26864;
                                readonly src: "8639:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26873;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26866;
                                readonly src: "8648:2:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26874;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26868;
                                readonly src: "8652:6:140";
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
                                readonly id: 26871;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16328;
                                readonly src: "8633:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256)";
                                };
                            };
                            readonly id: 26875;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8633:26:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26876;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8633:26:140";
                    }];
                };
                readonly functionSelector: "836a1040";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "8564:4:140";
                readonly parameters: {
                    readonly id: 26869;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26864;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "8577:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26878;
                        readonly src: "8569:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26863;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8569:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26866;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "8594:2:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26878;
                        readonly src: "8586:10:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26865;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8586:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26868;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "8606:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26878;
                        readonly src: "8598:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26867;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8598:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8568:45:140";
                };
                readonly returnParameters: {
                    readonly id: 26870;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8623:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26894;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8672:115:140";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26893;
                    readonly nodeType: "Block";
                    readonly src: "8742:45:140";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26888;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26880;
                                readonly src: "8758:7:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26889;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26882;
                                readonly src: "8767:4:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26890;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26884;
                                readonly src: "8773:6:140";
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
                                readonly id: 26887;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16380;
                                readonly src: "8752:5:140";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256)";
                                };
                            };
                            readonly id: 26891;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8752:28:140";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26892;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8752:28:140";
                    }];
                };
                readonly functionSelector: "9eea5f66";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "burn";
                readonly nameLocation: "8681:4:140";
                readonly parameters: {
                    readonly id: 26885;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26880;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "8694:7:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26894;
                        readonly src: "8686:15:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26879;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8686:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26882;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "8711:4:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26894;
                        readonly src: "8703:12:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26881;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8703:7:140";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26884;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "8725:6:140";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26894;
                        readonly src: "8717:14:140";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26883;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8717:7:140";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8685:47:140";
                };
                readonly returnParameters: {
                    readonly id: 26886;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8742:0:140";
                };
                readonly scope: 26895;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 26557;
                    readonly name: "HyperdriveMultiToken";
                    readonly nameLocations: readonly ["1250:20:140"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 16538;
                    readonly src: "1250:20:140";
                };
                readonly id: 26558;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1250:20:140";
            }, {
                readonly baseName: {
                    readonly id: 26559;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["1272:18:140"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24803;
                    readonly src: "1272:18:140";
                };
                readonly id: 26560;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1272:18:140";
            }];
            readonly canonicalName: "MockMultiToken";
            readonly contractDependencies: readonly [25161];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [26895, 24803, 16538, 13667, 17734, 71639, 10887, 11459];
            readonly name: "MockMultiToken";
            readonly nameLocation: "1232:14:140";
            readonly scope: 26896;
            readonly usedErrors: readonly [10225, 10258, 10282, 10314, 71584];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 140;
};
//# sourceMappingURL=MockMultiToken.d.ts.map