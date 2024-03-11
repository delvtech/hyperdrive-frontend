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
        readonly object: "0x6102806040523480156200001257600080fd5b506040516200522d3803806200522d8339810160408190526200003591620006b1565b60405180610180016040528060006001600160a01b03168152602001826001600160a01b03168152602001838152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e133808152602001620151808152602001620000bf66b1a2bc2ec500006301e133806200033960201b60201c565b81526000602080830182905260408084018390528051608080820183528482528184018590528183018590526060808301869052958601919091526001845585516001600160a01b03908116825286860151610180908152878301516101a05260a0808901516101c05260e0808a0151825260c0808b01518152610100808c01518352610160808d01805151835280518b015161012090815281518b015161014090815291518e01519092528d8b01518816610200528d8a015161022052908d0151600880546001600160a01b031916918916919091179055909b015185166101e05286519384018752978352928a1695820195909552928301899052670de0b6b3a76400009583018690529082019490945266038d7ea4c68000918101919091526301e1338091810182905262015180928101929092529091820190620002109066b1a2bc2ec500009062000339565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001604051806080016040528060008152602001600081526020016000815260200160008152508152506040516200026b90620006a3565b620002779190620006f0565b604051809103906000f08015801562000294573d6000803e3d6000fd5b506001600160a01b031661024052505060408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a090910190925281519101206102605262000814565b600080620003706200036062000351866064620007e4565b66a5bbed86c5a00090620003fe565b6748cd4072281e0000906200041c565b905062000386670de0b6b3a7640000826200041c565b9050620003f481620003ed620003b9620003b3620003ad89670de0b6b3a7640000620007fe565b62000433565b62000462565b620003e6620003b3620003d28a8a6301e1338062000684565b620003ad90670de0b6b3a7640000620007fe565b906200041c565b90620003fe565b9150505b92915050565b6000620004158383670de0b6b3a764000062000684565b9392505050565b60006200041583670de0b6b3a76400008462000684565b60006001600160ff1b038211156200045e5760405163396ea70160e11b815260040160405180910390fd5b5090565b6000808213620004855760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c6001600160401b031060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190620005099084901c62000433565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd190190910260016c0504a838426634cdd8738f543560611b03190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60008260001904841183021582026200069c57600080fd5b5091020490565b613f8680620012a783390190565b60008060408385031215620006c557600080fd5b825160208401519092506001600160a01b0381168114620006e557600080fd5b809150509250929050565b81516001600160a01b031681526101e0810160208301516200071d60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000782828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016092830151805193830193909352602083015161018083015260408301516101a08301526060909201516101c09091015290565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417620003f857620003f8620007ce565b80820180821115620003f857620003f8620007ce565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516109f2620008b560003960008181610231015261027c0152600081816087015261030d015260005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506109f26000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639032c7261161005b5780639032c726146101d257806394a97cdb146101e55780639eea5f6614610219578063f698da251461022c5761007d565b806330adf81f1461017157806358af4a0a146101aa578063836a1040146101bf575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516100bf929190610707565b600060405180830381855af49150503d80600081146100fa576040519150601f19603f3d011682016040523d82523d6000602084013e6100ff565b606091505b50915091508161016257600061011482610717565b90506001600160e01b03198116636e64089360e11b1461013657815160208301fd5b81516003198101600484019081529261015791810160200190602401610788565b935061016692505050565b9150505b915050805190602001f35b6101987f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b60405190815260200160405180910390f35b6101bd6101b8366004610851565b610253565b005b6101bd6101cd3660046108a8565b610267565b6101bd6101e03660046108dd565b610277565b6101bd6101f33660046108a8565b6000928352600b602090815260408085206001600160a01b039094168552929052912055565b6101bd6102273660046108a8565b6103c1565b6101987f000000000000000000000000000000000000000000000000000000000000000081565b61026085858585856103cc565b5050505050565b61027283838361058d565b505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610367919061095e565b600060405180830381855af49150503d80600081146103a2576040519150601f19603f3d011682016040523d82523d6000602084013e6103a7565b606091505b5091509150816103b957805160208201fd5b805160208201f35b610272838383610636565b6001600160a01b03841615806103e957506001600160a01b038316155b156104075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146104cb576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff166104cb576000858152600e602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146104c9576000868152600e602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906104c3908490610990565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906104fd908490610990565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906105349084906109a9565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906105bf9084906109a9565b90915550506000838152600c6020526040812080548392906105e29084906109a9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600b602090815260408083206001600160a01b038616845290915290205481111561067957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600b602090815260408083206001600160a01b0386168452825280832080548590039055858352600c909152812080548392906106bc908490610990565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610629565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156107465780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561077f578181015183820152602001610767565b50506000910152565b60006020828403121561079a57600080fd5b815167ffffffffffffffff808211156107b257600080fd5b818401915084601f8301126107c657600080fd5b8151818111156107d8576107d861074e565b604051601f8201601f19908116603f011681019083821181831017156108005761080061074e565b8160405282815287602084870101111561081957600080fd5b61082a836020830160208801610764565b979650505050505050565b80356001600160a01b038116811461084c57600080fd5b919050565b600080600080600060a0868803121561086957600080fd5b8535945061087960208701610835565b935061088760408701610835565b92506060860135915061089c60808701610835565b90509295509295909350565b6000806000606084860312156108bd57600080fd5b833592506108cd60208501610835565b9150604084013590509250925092565b600080600080600080600060e0888a0312156108f857600080fd5b61090188610835565b965061090f60208901610835565b95506040880135801515811461092457600080fd5b945060608801359350608088013560ff8116811461094157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008251610970818460208701610764565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b818103818111156109a3576109a361097a565b92915050565b808201808211156109a3576109a361097a56fea26469706673582212204ee2326888d06b3ba7e3386043e2430f782b813b0084dc59e5bf01c1ac35b2c364736f6c634300081400336102406040523480156200001257600080fd5b5060405162003f8638038062003f868339810160408190526200003591620001b9565b600160005580516001600160a01b03908116608090815260608084015161018052908301516101a05260a0808401516101c05260e08085015190915260c08085015190526101008085015190915261016080850180515190925281516020908101516101209081528351604090810151610140908152945190950151909252850151841661020052918401516102205290830151600880546001600160a01b03191691841691909117905590910151166101e05262000283565b60405161018081016001600160401b03811182821017156200012157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013f57600080fd5b919050565b6000608082840312156200015757600080fd5b604051608081016001600160401b03811182821017156200018857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620001cd57600080fd5b620001d7620000ef565b620001e28362000127565b8152620001f26020840162000127565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200024f81850162000127565b908201526101406200026384820162000127565b90820152610160620002788585830162000144565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051613bcf620003b760003960008181610a8c0152611930015260008181610a5d01526118f3015260008181610bba01528181611650015281816116ca0152611746015260008181610afe0152611bcf015260008181610ad80152611ba9015260008181610ab20152611b8301526000610c6601526000610c4001526000610c1a01526000610bf4015260008181610b700152611bf5015260008181610b2401528181610dc5015261229c015260008181610b4a01526123dc0152600081816105a101528181610a2e01528181610d86015281816119fa01528181611a4301528181611f3f01528181611f880152818161208801526121260152613bcf6000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80637ecebe0011610104578063becee9c3116100a2578063d816574311610071578063d816574314610421578063e44808bc14610436578063e985e9c514610449578063fba560081461045c57600080fd5b8063becee9c3146103ce578063c55dae63146103ee578063c69e16ad14610365578063cf210e651461040e57600080fd5b8063a22cb465116100de578063a22cb46514610380578063ab033ea914610393578063b0d96580146103a6578063bd85b039146103bb57600080fd5b80637ecebe00146103525780638e67f87e146103655780639cd241af1461036d57600080fd5b8063313ce5671161017c5780634e41a1fb1161014b5780634e41a1fb146103045780634ed2d6ac1461031757806360246c881461032a5780637180c8ca1461033f57600080fd5b8063313ce567146102a15780633656eec2146102bb5780633e691db9146102ce57806346fbf68e146102e157600080fd5b806317fad7fc116101b857806317fad7fc1461022f5780631c0f12b61461024257806320fc48811461025557806321ff32a91461028057600080fd5b8062ad800c146101de57806302329a291461020757806314e5f07b1461021c575b600080fd5b6101f16101ec366004613152565b61048b565b6040516101fe91906131bb565b60405180910390f35b61021a6102153660046131dc565b6104c2565b005b61021a61022a36600461321f565b6104ce565b61021a61023d3660046132f6565b6104ea565b61021a610250366004613387565b610500565b610268610263366004613152565b610513565b60405190516001600160801b031681526020016101fe565b61029361028e3660046133cb565b610554565b6040519081526020016101fe565b6102a961059a565b60405160ff90911681526020016101fe565b6102936102c9366004613407565b610638565b6102936102dc366004613433565b610671565b6102f46102ef36600461346e565b61067c565b60405190151581526020016101fe565b6101f1610312366004613152565b6106b2565b61021a610325366004613489565b6106c0565b61033261070e565b6040516101fe91906134cf565b61021a61034d366004613570565b61093b565b61029361036036600461346e565b610949565b610293610975565b61021a61037b3660046135a7565b61098f565b61021a61038e366004613570565b6109a0565b61021a6103a136600461346e565b610a0c565b6103ae610a15565b6040516101fe91906135dc565b6102936103c9366004613152565b610c9b565b6103e16103dc3660046136b9565b610cbd565b6040516101fe91906136fb565b6103f6610d78565b6040516001600160a01b0390911681526020016101fe565b61029361041c366004613152565b610db8565b610429610e01565b6040516101fe919061373f565b61021a610444366004613850565b610f0d565b6102f46104573660046138a7565b610f55565b610464610f99565b6040805182516001600160801b0390811682526020938401511692810192909252016101fe565b60606104bd61049983610ff8565b6040516020016104a991906131bb565b604051602081830303815290604052611120565b919050565b6104cb81611144565b50565b6104df8989898989898989896111c7565b505050505050505050565b6104f88686868686866113be565b505050505050565b61050d8484848433611472565b50505050565b6040805160208101909152600081526104bd600760008481526020019081526020016000206040516020016104a991546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261059391016104a9565b9392505050565b60006106357f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062191906138d1565b6040805160ff9092166020830152016104a9565b90565b6000828152600b602090815260408083206001600160a01b038516845282528083205481519283015261066b91016104a9565b92915050565b600061066b82611633565b6001600160a01b0381166000908152600a602090815260408083205490516104bd926104a99260ff169101901515815260200190565b60606104bd610499836117b7565b836106ca816118b5565b6001600160a01b0316336001600160a01b0316146106fb57604051632aab8bd360e01b815260040160405180910390fd5b61070785858585611972565b5050505050565b610787604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006107916119df565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916107fc919061391a565b610806919061392d565b90506000808311610818576000610833565b6108338361082d61082886611ade565b611c74565b90611ca4565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610907576109028486611cb9565b61090a565b60005b81526002546001600160801b0316602091820152604051919250610934916104a9918491016134cf565b5050505090565b6109458282611cce565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104bd91016104a9565b60006106356009546040516020016104a991815260200190565b61099b83838333611972565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6104cb81611d57565b610a1d6130a2565b6106356040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104a991906135dc565b6000818152600c60209081526040808320548151928301526104bd91016104a9565b606060008267ffffffffffffffff811115610cda57610cda613940565b604051908082528060200260200182016040528015610d03578160200160208202803683370190505b50905060005b83811015610d5c576000858583818110610d2557610d25613956565b90506020020135905060008154905080848481518110610d4757610d47613956565b60209081029190910101525050600101610d09565b50610d71816040516020016104a991906136fb565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161063591016104a9565b60006104bd610def610dea7f00000000000000000000000000000000000000000000000000000000000000008561391a565b611dcb565b6040516020016104a991815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261063560016040516020016104a9919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610f17816118b5565b6001600160a01b0316336001600160a01b031614610f4857604051632aab8bd360e01b815260040160405180910390fd5b6104f88686868686611472565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff909116151591810191909152909161066b91016104a9565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610635906060016104a9565b606060f882901c6001600160f81b038316600061101482611e0f565b9050600083600381111561102a5761102a6138ee565b0361105c576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611118565b6001836003811115611070576110706138ee565b0361109c5780604051602001611086919061396c565b6040516020818303038152906040529350611118565b60028360038111156110b0576110b06138ee565b036110c6578060405160200161108691906139a5565b60038360038111156110da576110da6138ee565b03611118576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161113b91906131bb565b60405180910390fd5b336000908152600a602052604090205460ff16611173576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906111bc90831515815260200190565b60405180910390a150565b834211156111e85760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661120f5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156112fd573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461133b57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600f6020908152604080832080546001019055600d8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806113db57506001600160a01b038516155b156113f95760405163f0dd15fd60e01b815260040160405180910390fd5b8281146114195760405163174861a760e31b815260040160405180910390fd5b60005b838110156114695761146185858381811061143957611439613956565b90506020020135888886868681811061145457611454613956565b9050602002013533611472565b60010161141c565b50505050505050565b6001600160a01b038416158061148f57506001600160a01b038316155b156114ad5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611571576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611571576000858152600e602090815260408083206001600160a01b0380891685529083528184209085168452909152902054600019811461156f576000868152600e602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061156990849061392d565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906115a390849061392d565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906115da90849061391a565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600061163d611ec4565b61164682611eee565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001661167d602084018461346e565b6001600160a01b0316146116a457604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156116ed5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b801561170457506008546001600160a01b03163314155b15611721576040516282b42960e81b815260040160405180910390fd5b600061172b6119df565b600980546000909155909150611742818386611f24565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e4761179a858588612222565b60405190815260200160405180910390a250506104bd6001600055565b606060f882901c6001600160f81b03831660006117d382611e0f565b905060008360038111156117e9576117e96138ee565b0361181b576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611118565b600183600381111561182f5761182f6138ee565b03611845578060405160200161108691906139df565b6002836003811115611859576118596138ee565b0361186f57806040516020016110869190613a17565b6003836003811115611883576118836138ee565b0361111857505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a2e575047611ab9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ab69190613a43565b90505b601054600003611aca576000611ad8565b601054611ad8908290611cb9565b91505090565b611b426040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611c3a9116612251565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611c6c92900416612251565b905292915050565b6000806000611c82846122c7565b9150915080610d7157604051635516328b60e11b815260040160405180910390fd5b60006105938383670de0b6b3a7640000612354565b600061059383670de0b6b3a764000084612354565b6008546001600160a01b03163314611cf8576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b6008546001600160a01b03163314611d81576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611df3600c6000611ddf600286612372565b8152602001908152602001600020546123a7565b611e05600c6000611ddf600187612372565b61066b9190613a5c565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415611eb657611e4a600a86613a92565b611e5590603061391a565b60f81b826001611e65848761392d565b611e6f919061392d565b81518110611e7f57611e7f613956565b60200101906001600160f81b031916908160001a90535080611ea081613aa6565b9150611eaf9050600a86613abf565b9450611e39565b918290030190815292915050565b600260005403611ee757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000611efd602083018361346e565b6001600160a01b0316036104cb5760405163f0dd15fd60e01b815260040160405180910390fd5b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611f73575047611ffe565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611fd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ffb9190613a43565b90505b600061200a8686611ca4565b60105490915061201c90829084612354565b9550601054861161202d5785612031565b6010545b9550601054600003612044576000612054565b6010546120549087908490612354565b92508560106000828254612068919061392d565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161211c576120c2602086018661346e565b6001600160a01b03168460405160006040518083038185875af1925050503d806000811461210c576040519150601f19603f3d011682016040523d82523d6000602084013e612111565b606091505b5050809150506121cc565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb612158602088018861346e565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018790526044016020604051808303816000875af11580156121a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c99190613ad3565b90505b806121ea576040516312171d8360e31b815260040160405180910390fd5b6121fa60408601602087016131dc565b612215576122106122096119df565b8590611cb9565b612217565b835b979650505050505050565b600061223460408301602084016131dc565b15612240575082610593565b61224a8484611ca4565b9050610593565b600080670de0b6b3a76400006122656123d5565b61226f9190613af0565b905080831161227f576000612289565b612289818461392d565b91506105936122c0670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613af0565b8390611cb9565b60008060008060006122d886612410565b91509150806122ef57506000958695509350505050565b6122fc8660a001516123a7565b61230587612735565b8361231389600001516123a7565b61231d9190613b07565b6123279190613b07565b6123319190613a5c565b92505050600081121561234a5750600093849350915050565b9360019350915050565b600082600019048411830215820261236b57600080fd5b5091020490565b60006001600160f81b0382111561239c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156123d15760405163396ea70160e11b815260040160405180910390fd5b5090565b60006124017f000000000000000000000000000000000000000000000000000000000000000042613a92565b61240b904261392d565b905090565b600080600061243a612435856101600151866101400151611ca490919063ffffffff16565b6123a7565b61245a61243586610120015187610100015161279990919063ffffffff16565b6124649190613a5c565b9050600061247a856000015186602001516127ae565b905060008213156125cd5760008290506000806124cb886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006124bc919061392d565b8d606001518e608001516127da565b91509150806124e4575060009788975095505050505050565b82821061258257600061251e858a60400151868c60e00151670de0b6b3a764000061250f919061392d565b8d606001518e608001516128d3565b925090508115801561253357508860c0015184105b1561254a5750600098600198509650505050505050565b8161256057506000988998509650505050505050565b612569816123a7565b61257290613b27565b9960019950975050505050505050565b60008860200151126125b9576125a18860a0015185612435919061392d565b6125aa90613b27565b98600198509650505050505050565b60a088015188516125a1916124359161392d565b60008212156127275760006125e183613b27565b90506000806126168489604001518a60e00151670de0b6b3a7640000612607919061392d565b8b606001518c60800151612996565b915091508061262f575060009788975095505050505050565b8282106126b4576000612669858a60400151868c60e00151670de0b6b3a764000061265a919061392d565b8d606001518e60800151612a42565b925090508115801561267e57508860c0015184105b156126955750600098600198509650505050505050565b816126ab57506000988998509650505050505050565b612572816123a7565b60006126e6858a604001518b60e00151670de0b6b3a76400006126d7919061392d565b8c606001518d60800151612b19565b925090508161270057506000988998509650505050505050565b61257261271d8a606001518587612717919061392d565b90611cb9565b612435908361391a565b506000946001945092505050565b6000612768612435836101200151670de0b6b3a7640000612756919061392d565b60608501516101008601519190612bc8565b611e05612435846101600151670de0b6b3a7640000612787919061392d565b60608601516101408701519190612354565b60006105938383670de0b6b3a7640000612bc8565b600080826127bb856123a7565b6127c59190613a5c565b90506000811215610593576105936001612bee565b60008060008812156127fc576127ef88613b27565b6127f9908761391a565b95505b60006128088a8a6127ae565b90506000612819828a898989612c09565b9050600061283c6128348961282e898d612799565b90612c42565b889088612bc8565b90508082101561285557600080945094505050506128c7565b808203670de0b6b3a7640000811061288a5761288361287c670de0b6b3a76400008b611cb9565b8290612c42565b90506128a2565b61289f61287c670de0b6b3a76400008b612cad565b90505b8a8110156128ba5760008095509550505050506128c7565b8a90039450600193505050505b97509795505050505050565b60008060006128e58989888888612cc2565b90506128f58661282e898b61391a565b97508781101561290c57600080925092505061298b565b87810361291a818688612bc8565b9050670de0b6b3a764000081106129475761294061287c670de0b6b3a764000089612cad565b905061295f565b61295c61287c670de0b6b3a764000089611cb9565b90505b6129698186612cad565b9050808a10156129815760008093509350505061298b565b8903925060019150505b965096945050505050565b60008060006129a88888888888612cc2565b905060006129d3670de0b6b3a76400006129c28888611cb9565b6129cc919061391a565b8390612cad565b9050670de0b6b3a76400008110612a00576129f961287c670de0b6b3a764000089612cad565b9050612a18565b612a1561287c670de0b6b3a764000089611cb9565b90505b80881015612a2e57600080935093505050612a38565b8703925060019150505b9550959350505050565b6000806000612a548989888888612cc2565b905086881015612a6b57600080925092505061298b565b9686900396612a7a8887612c42565b975087811015612a9157600080925092505061298b565b878103612a9f818688612bc8565b9050670de0b6b3a76400008110612acc57612ac561287c670de0b6b3a764000089612cad565b9050612ae4565b612ae161287c670de0b6b3a764000089611cb9565b90505b612aee8186612cad565b905089811015612b065760008093509350505061298b565b9890980398600198509650505050505050565b6000806000612b2b8888888888612c09565b90506000612b4f670de0b6b3a7640000612b458888612cad565b6122c0919061391a565b9050670de0b6b3a76400008110612b7c57612b7561287c670de0b6b3a764000089611cb9565b9050612b94565b612b9161287c670de0b6b3a764000089612cad565b90505b612b9e8186611cb9565b905088811015612bb657600080935093505050612a38565b97909703976001975095505050505050565b6000826000190484118302158202612bdf57600080fd5b50910281810615159190040190565b80604051633c06d78b60e11b815260040161113b9190613b43565b6000612c158585612c42565b612c2e612c268661282e868b611ca4565b859085612354565b612c38919061391a565b9695505050505050565b600081600003612c5b5750670de0b6b3a764000061066b565b82600003612c6b5750600061066b565b6000612c76836123a7565b90506000612c8b612c86866123a7565b612ce7565b9050818102612ca2670de0b6b3a764000082613b6b565b9050612c3881612f0d565b600061059383670de0b6b3a764000084612bc8565b6000612cce8585612c42565b612c2e612cdf8661282e868b612799565b859085612bc8565b6000808213612d095760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612d8c9084901c6123a7565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612f2857506000919050565b680755bf798b4a1bf1e58212612f51576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612c3874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6123a7565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161314d6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561316457600080fd5b5035919050565b60005b8381101561318657818101518382015260200161316e565b50506000910152565b600081518084526131a781602086016020860161316b565b601f01601f19169290920160200192915050565b602081526000610593602083018461318f565b80151581146104cb57600080fd5b6000602082840312156131ee57600080fd5b8135610593816131ce565b80356001600160a01b03811681146104bd57600080fd5b60ff811681146104cb57600080fd5b60008060008060008060008060006101208a8c03121561323e57600080fd5b8935985060208a0135975061325560408b016131f9565b965061326360608b016131f9565b955060808a0135613273816131ce565b945060a08a0135935060c08a013561328a81613210565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126132bc57600080fd5b50813567ffffffffffffffff8111156132d457600080fd5b6020830191508360208260051b85010111156132ef57600080fd5b9250929050565b6000806000806000806080878903121561330f57600080fd5b613318876131f9565b9550613326602088016131f9565b9450604087013567ffffffffffffffff8082111561334357600080fd5b61334f8a838b016132aa565b9096509450606089013591508082111561336857600080fd5b5061337589828a016132aa565b979a9699509497509295939492505050565b6000806000806080858703121561339d57600080fd5b843593506133ad602086016131f9565b92506133bb604086016131f9565b9396929550929360600135925050565b6000806000606084860312156133e057600080fd5b833592506133f0602085016131f9565b91506133fe604085016131f9565b90509250925092565b6000806040838503121561341a57600080fd5b8235915061342a602084016131f9565b90509250929050565b60006020828403121561344557600080fd5b813567ffffffffffffffff81111561345c57600080fd5b82016060818503121561059357600080fd5b60006020828403121561348057600080fd5b610593826131f9565b6000806000806080858703121561349f57600080fd5b843593506134af602086016131f9565b9250604085013591506134c4606086016131f9565b905092959194509250565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561358357600080fd5b61358c836131f9565b9150602083013561359c816131ce565b809150509250929050565b6000806000606084860312156135bc57600080fd5b833592506135cc602085016131f9565b9150604084013590509250925092565b81516001600160a01b031681526101e08101602083015161360860208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015161366c828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b600080602083850312156136cc57600080fd5b823567ffffffffffffffff8111156136e357600080fd5b6136ef858286016132aa565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561373357835183529284019291840191600101613717565b50909695505050505050565b81516001600160801b031681526101808101602083015161376b60208401826001600160801b03169052565b50604083015161378660408401826001600160801b03169052565b5060608301516137a160608401826001600160801b03169052565b5060808301516137b66080840182600f0b9052565b5060a08301516137d160a08401826001600160801b03169052565b5060c08301516137ec60c08401826001600160801b03169052565b5060e083015161380760e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526136b1565b600080600080600060a0868803121561386857600080fd5b85359450613878602087016131f9565b9350613886604087016131f9565b92506060860135915061389b608087016131f9565b90509295509295909350565b600080604083850312156138ba57600080fd5b6138c3836131f9565b915061342a602084016131f9565b6000602082840312156138e357600080fd5b815161059381613210565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561066b5761066b613904565b8181038181111561066b5761066b613904565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161399881601185016020870161316b565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516139d281601285016020870161316b565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613a0a81601085016020870161316b565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161399881601185016020870161316b565b600060208284031215613a5557600080fd5b5051919050565b8181036000831280158383131683831282161715610d7157610d71613904565b634e487b7160e01b600052601260045260246000fd5b600082613aa157613aa1613a7c565b500690565b600060018201613ab857613ab8613904565b5060010190565b600082613ace57613ace613a7c565b500490565b600060208284031215613ae557600080fd5b8151610593816131ce565b808202811582820484141761066b5761066b613904565b80820182811260008312801582168215821617156136b1576136b1613904565b6000600160ff1b8201613b3c57613b3c613904565b5060000390565b6020810160048310613b6557634e487b7160e01b600052602160045260246000fd5b91905290565b600082613b7a57613b7a613a7c565b600160ff1b821460001984141615613b9457613b94613904565b50059056fea264697066735822122037d107b506b4613bdf8fe99502d2aa6c6b2977407610ff02245adb9363a3709164736f6c63430008140033";
        readonly sourceMap: "1289:7345:92:-:0;;;1815:2694;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1937:829;;;;;;;;2004:1;-1:-1:-1;;;;;1937:829:92;;;;;2040:14;-1:-1:-1;;;;;1937:829:92;;;;;2088:15;1937:829;;;;2145:4;1937:829;;;;2189:4;1937:829;;;;2237:4;1937:829;;;;2277:8;1937:829;;;;2323:6;1937:829;;;;2360:112;2417:7;2446:8;2360:35;;;:112;;:::i;:::-;1937:829;;2510:1;1937:829;;;;;;;;;;;;;;2578:173;;;;;;;;;;;;;;;;;;;;;;;1937:829;2578:173;;;;;;1937:829;;;;;;;1713:1:121;1917:21;;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;5216;;;;5190:56;;;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;6389:12;;;;;;:18;6377:30;;6428:12;;:17;;;-1:-1:-1;6417:28:70;;;6474:12;;:25;;;6455:44;;;;6532:12;;:29;;;6509:52;;;-1:-1:-1;;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;2905:913:92;;;;::::1;::::0;;;;;;;::::1;::::0;;::::1;::::0;;;;;;;;;;3129:4:::1;2905:913:::0;;;;;;;;;;;;;3229:4:::1;2905:913:::0;;;;;;;3273:8:::1;2905:913:::0;;;;;;3323:6:::1;2905:913:::0;;;;;;;;;;;;3364:124:::1;::::0;3425:7:::1;::::0;3364:35:::1;:124::i;:::-;2905:913;;;;3530:1;-1:-1:-1::0;;;;;2905:913:92::1;;;;;3576:1;-1:-1:-1::0;;;;;2905:913:92::1;;;;;3606:193;;;;;;;;3656:1;3606:193;;;;3689:1;3606:193;;;;3730:1;3606:193;;;;3775:1;3606:193;;::::0;2905:913:::1;;::::0;2862:970:::1;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;;;2831:1011:92::1;;::::0;-1:-1:-1;;4405:10:92::1;::::0;;;;::::1;::::0;;::::1;::::0;;-1:-1:-1;;;4405:10:92::1;::::0;;::::1;::::0;4228:264;;4256:121:::1;4228:264:::0;;::::1;2275:25:182::0;4395:21:92;2316:18:182;;;2309:34;4434:13:92::1;2359:18:182::0;;;2352:34;4473:4:92::1;2402:18:182::0;;;;2395:60;;;;4228:264:92;;;;;;;;;;2247:19:182;;;;4228:264:92;;;4205:297;;;::::1;::::0;4187:315:::1;::::0;1289:7345;;1405:1330:75;1521:7;;1684:90;1725:39;1753:10;:4;1760:3;1753:10;:::i;:::-;1733;;1725:27;:39::i;:::-;1692:10;;1684:27;:90::i;:::-;1662:112;-1:-1:-1;1798:24:75;193:4:74;1662:112:75;1798:11;:24::i;:::-;1784:38;-1:-1:-1;2463:265:75;1784:38;2481:212;2663:28;:23;2664:10;2670:4;193::74;2664:10:75;:::i;:::-;2663:21;:23::i;:::-;:26;:28::i;:::-;2510:118;:88;2517:44;:4;2533:17;2552:8;2517:15;:44::i;:::-;2511:50;;193:4:74;2511:50:75;:::i;2510:118::-;2481:173;;:212::i;:::-;2463:252;;:265::i;:::-;2444:284;;;1405:1330;;;;;:::o;1610:118:74:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;:::-;1691:30;1610:118;-1:-1:-1;;;1610:118:74:o;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;2001:204:77:-;2053:8;-1:-1:-1;;;;;2079:1:77;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:77;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:77;2001:204::o;8508:3846:74:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:74;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:74;-1:-1:-1;9283:1:74;9279:49;9386:9;;;-1:-1:-1;;;;;9363:33:74;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:74;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:74;10385:5;;10384:13;;-1:-1:-1;;10383:50:74;10453:5;;10452:13;;;-1:-1:-1;;10451:50:74;10519:5;;;-1:-1:-1;;;;;;10519:46:74;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:74:o;898:556::-;1014:9;1279:1;-1:-1:-1;;1262:19:74;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:74;;1411:27;;898:556::o;1289:7345:92:-;;;;;;;;:::o;14:351:182:-;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;193:16;;252:2;237:18;;231:25;193:16;;-1:-1:-1;;;;;;285:31:182;;275:42;;265:70;;331:1;328;321:12;265:70;354:5;344:15;;;14:351;;;;;:::o;749:1290::-;979:13;;-1:-1:-1;;;;;444:31:182;432:44;;939:3;924:19;;1051:4;1043:6;1039:17;1033:24;1066:62;1122:4;1111:9;1107:20;1093:12;-1:-1:-1;;;;;444:31:182;432:44;;370:112;1066:62;;1184:4;1176:6;1172:17;1166:24;1159:4;1148:9;1144:20;1137:54;1247:4;1239:6;1235:17;1229:24;1222:4;1211:9;1207:20;1200:54;1310:4;1302:6;1298:17;1292:24;1285:4;1274:9;1270:20;1263:54;1373:4;1365:6;1361:17;1355:24;1348:4;1337:9;1333:20;1326:54;1436:4;1428:6;1424:17;1418:24;1411:4;1400:9;1396:20;1389:54;1499:4;1491:6;1487:17;1481:24;1474:4;1463:9;1459:20;1452:54;1525:6;1585:2;1577:6;1573:15;1567:22;1562:2;1551:9;1547:18;1540:50;;1609:6;1664:2;1656:6;1652:15;1646:22;1677:62;1735:2;1724:9;1720:18;1704:14;-1:-1:-1;;;;;444:31:182;432:44;;370:112;1677:62;-1:-1:-1;;1758:6:182;1801:15;;;1795:22;-1:-1:-1;;;;;444:31:182;1869:18;;;432:44;1907:6;1950:15;;;1944:22;557:12;;2014:18;;;545:25;;;;619:4;608:16;;602:23;586:14;;;579:47;675:4;664:16;;658:23;642:14;;;635:47;731:4;720:16;;;714:23;698:14;;;;691:47;749:1290;:::o;2466:127::-;2527:10;2522:3;2518:20;2515:1;2508:31;2558:4;2555:1;2548:15;2582:4;2579:1;2572:15;2598:168;2671:9;;;2702;;2719:15;;;2713:22;;2699:37;2689:71;;2740:18;;:::i;2771:125::-;2836:9;;;2857:10;;;2854:36;;;2870:18;;:::i;2771:125::-;1289:7345:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80639032c7261161005b5780639032c726146101d257806394a97cdb146101e55780639eea5f6614610219578063f698da251461022c5761007d565b806330adf81f1461017157806358af4a0a146101aa578063836a1040146101bf575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516100bf929190610707565b600060405180830381855af49150503d80600081146100fa576040519150601f19603f3d011682016040523d82523d6000602084013e6100ff565b606091505b50915091508161016257600061011482610717565b90506001600160e01b03198116636e64089360e11b1461013657815160208301fd5b81516003198101600484019081529261015791810160200190602401610788565b935061016692505050565b9150505b915050805190602001f35b6101987f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b60405190815260200160405180910390f35b6101bd6101b8366004610851565b610253565b005b6101bd6101cd3660046108a8565b610267565b6101bd6101e03660046108dd565b610277565b6101bd6101f33660046108a8565b6000928352600b602090815260408085206001600160a01b039094168552929052912055565b6101bd6102273660046108a8565b6103c1565b6101987f000000000000000000000000000000000000000000000000000000000000000081565b61026085858585856103cc565b5050505050565b61027283838361058d565b505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610367919061095e565b600060405180830381855af49150503d80600081146103a2576040519150601f19603f3d011682016040523d82523d6000602084013e6103a7565b606091505b5091509150816103b957805160208201fd5b805160208201f35b610272838383610636565b6001600160a01b03841615806103e957506001600160a01b038316155b156104075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146104cb576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff166104cb576000858152600e602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146104c9576000868152600e602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906104c3908490610990565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906104fd908490610990565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906105349084906109a9565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906105bf9084906109a9565b90915550506000838152600c6020526040812080548392906105e29084906109a9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600b602090815260408083206001600160a01b038616845290915290205481111561067957604051631e9acf1760e31b815260040160405180910390fd5b6000838152600b602090815260408083206001600160a01b0386168452825280832080548590039055858352600c909152812080548392906106bc908490610990565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610629565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156107465780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561077f578181015183820152602001610767565b50506000910152565b60006020828403121561079a57600080fd5b815167ffffffffffffffff808211156107b257600080fd5b818401915084601f8301126107c657600080fd5b8151818111156107d8576107d861074e565b604051601f8201601f19908116603f011681019083821181831017156108005761080061074e565b8160405282815287602084870101111561081957600080fd5b61082a836020830160208801610764565b979650505050505050565b80356001600160a01b038116811461084c57600080fd5b919050565b600080600080600060a0868803121561086957600080fd5b8535945061087960208701610835565b935061088760408701610835565b92506060860135915061089c60808701610835565b90509295509295909350565b6000806000606084860312156108bd57600080fd5b833592506108cd60208501610835565b9150604084013590509250925092565b600080600080600080600060e0888a0312156108f857600080fd5b61090188610835565b965061090f60208901610835565b95506040880135801515811461092457600080fd5b945060608801359350608088013560ff8116811461094157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008251610970818460208701610764565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b818103818111156109a3576109a361097a565b92915050565b808201808211156109a3576109a361097a56fea26469706673582212204ee2326888d06b3ba7e3386043e2430f782b813b0084dc59e5bf01c1ac35b2c364736f6c63430008140033";
        readonly sourceMap: "1289:7345:92:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4721:12;4875;4889:23;4916:7;-1:-1:-1;;;;;4916:20:92;4937:5;;4916:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4874:69;;;;4958:7;4953:658;;4981:15;4999:18;5006:10;4999:18;:::i;:::-;4981:36;-1:-1:-1;;;;;;;5035:43:92;;-1:-1:-1;;;5035:43:92;5031:176;;5163:10;5157:17;5152:2;5140:10;5136:19;5129:46;5031:176;5424:17;;-1:-1:-1;;5420:25:92;;5443:1;5398:20;;5391:55;;;5398:20;5537:31;;;;;;;;;;:::i;:::-;5524:44;-1:-1:-1;5583:17:92;;-1:-1:-1;;;5583:17:92;4953:658;5628:10;-1:-1:-1;;4672:973:92;;;;1289:7345;;;;;;1487:174;;1537:124;1487:174;;;;;2090:25:182;;;2078:2;2063:18;1487:174:92;;;;;;;8166:228;;;;;;:::i;:::-;;:::i;:::-;;8400:111;;;;;;:::i;:::-;;:::i;7103:867::-;;;;;;:::i;:::-;;:::i;7995:165::-;;;;;;:::i;:::-;8117:20;;;;:10;:20;;;;;;;;-1:-1:-1;;;;;8117:26:92;;;;;;;;;;:36;7995:165;8517:115;;;;;;:::i;:::-;;:::i;1725:40::-;;;;;8166:228;8339:48;8353:7;8362:4;8368:2;8372:6;8380;8339:13;:48::i;:::-;8166:228;;;;;:::o;8400:111::-;8478:26;8484:7;8493:2;8497:6;8478:5;:26::i;:::-;8400:111;;;:::o;7103:867::-;7375:372;;7477:15;7375:372;;;4268:25:182;1537:124:92;4309:18:182;;;4302:34;-1:-1:-1;;;;;4410:15:182;;;4390:18;;;4383:43;4462:15;;;4442:18;;;4435:43;4522:14;;4515:22;4494:19;;;4487:51;4554:19;;;4547:35;;;4631:4;4619:17;;4598:19;;;4591:46;4653:19;;;4646:35;;;4697:19;;;4690:35;;;7304:12:92;;;;7341:7;:20;;4240:19:182;;7375:372:92;;;-1:-1:-1;;7375:372:92;;;;;;;;;;;;;;-1:-1:-1;;;;;7375:372:92;-1:-1:-1;;;7375:372:92;;;7341:416;;;7375:372;7341:416;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7303:454;;;;7772:7;7767:117;;7852:6;7846:13;7841:2;7833:6;7829:15;7822:38;7767:117;7946:6;7940:13;7935:2;7927:6;7923:15;7916:38;8517:115;8597:28;8603:7;8612:4;8618:6;8597:5;:28::i;3315:1591:68:-;-1:-1:-1;;;;;3528:18:68;;;;:38;;-1:-1:-1;;;;;;3550:16:68;;;3528:38;3524:111;;;3589:35;;-1:-1:-1;;;3589:35:68;;;;;;;;;;;3524:111;3739:4;-1:-1:-1;;;;;3729:14:68;:6;-1:-1:-1;;;;;3729:14:68;;3725:888;;-1:-1:-1;;;;;3880:23:68;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3875:728;;3990:16;4009:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4009:33:68;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4125:29:68;;4121:468;;4519:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4519:33:68;;;;;;;;;;;:41;;;;;;;;;;:51;;4564:6;;4519:27;:51;;4564:6;;4519:51;:::i;:::-;;;;-1:-1:-1;;4121:468:68;3913:690;3875:728;4757:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4757:25:68;;;;;;;;;:35;;4786:6;;4757:19;:35;;4786:6;;4757:35;:::i;:::-;;;;-1:-1:-1;;4802:19:68;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4802:23:68;;;;;;;;;:33;;4829:6;;4802:19;:33;;4829:6;;4802:33;:::i;:::-;;;;-1:-1:-1;;4850:49:68;;;5597:25:182;;;5653:2;5638:18;;5631:34;;;-1:-1:-1;;;;;4850:49:68;;;;;;;;;;;;;;5570:18:182;4850:49:68;;;;;;;3315:1591;;;;;:::o;5934:316::-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:68;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:68;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:68;;;5597:25:182;;;5653:2;5638:18;;5631:34;;;-1:-1:-1;;;;;6184:59:68;;;6219:1;;6199:10;;6184:59;;5570:18:182;6184:59:68;;;;;;;;5934:316;;;:::o;6522:597::-;6722:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6722:25:68;;;;;;;;;;:34;-1:-1:-1;6718:105:68;;;6779:33;;-1:-1:-1;;;6779:33:68;;;;;;;;;;;6718:105;6906:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6906:25:68;;;;;;;;;:35;;;;;;;6961:21;;;:12;:21;;;;;:31;;6935:6;;6906:19;6961:31;;6935:6;;6961:31;:::i;:::-;;;;-1:-1:-1;;7051:61:68;;;5597:25:182;;;5653:2;5638:18;;5631:34;;;7092:1:68;;-1:-1:-1;;;;;7051:61:68;;;7066:10;;7051:61;;5570:18:182;7051:61:68;5423:248:182;14:271;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:182:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:182;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:182;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:182;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:182:o;2126:173::-;2194:20;;-1:-1:-1;;;;;2243:31:182;;2233:42;;2223:70;;2289:1;2286;2279:12;2223:70;2126:173;;;:::o;2304:472::-;2399:6;2407;2415;2423;2431;2484:3;2472:9;2463:7;2459:23;2455:33;2452:53;;;2501:1;2498;2491:12;2452:53;2537:9;2524:23;2514:33;;2566:38;2600:2;2589:9;2585:18;2566:38;:::i;:::-;2556:48;;2623:38;2657:2;2646:9;2642:18;2623:38;:::i;:::-;2613:48;;2708:2;2697:9;2693:18;2680:32;2670:42;;2731:39;2765:3;2754:9;2750:19;2731:39;:::i;:::-;2721:49;;2304:472;;;;;;;;:::o;2781:322::-;2858:6;2866;2874;2927:2;2915:9;2906:7;2902:23;2898:32;2895:52;;;2943:1;2940;2933:12;2895:52;2979:9;2966:23;2956:33;;3008:38;3042:2;3031:9;3027:18;3008:38;:::i;:::-;2998:48;;3093:2;3082:9;3078:18;3065:32;3055:42;;2781:322;;;;;:::o;3108:794::-;3216:6;3224;3232;3240;3248;3256;3264;3317:3;3305:9;3296:7;3292:23;3288:33;3285:53;;;3334:1;3331;3324:12;3285:53;3357:29;3376:9;3357:29;:::i;:::-;3347:39;;3405:38;3439:2;3428:9;3424:18;3405:38;:::i;:::-;3395:48;;3493:2;3482:9;3478:18;3465:32;3540:5;3533:13;3526:21;3519:5;3516:32;3506:60;;3562:1;3559;3552:12;3506:60;3585:5;-1:-1:-1;3637:2:182;3622:18;;3609:32;;-1:-1:-1;3693:3:182;3678:19;;3665:33;3742:4;3729:18;;3717:31;;3707:59;;3762:1;3759;3752:12;3707:59;3108:794;;;;-1:-1:-1;3108:794:182;;;;3785:7;3839:3;3824:19;;3811:33;;-1:-1:-1;3891:3:182;3876:19;;;3863:33;;3108:794;-1:-1:-1;;3108:794:182:o;4736:287::-;4865:3;4903:6;4897:13;4919:66;4978:6;4973:3;4966:4;4958:6;4954:17;4919:66;:::i;:::-;5001:16;;;;;4736:287;-1:-1:-1;;4736:287:182:o;5028:127::-;5089:10;5084:3;5080:20;5077:1;5070:31;5120:4;5117:1;5110:15;5144:4;5141:1;5134:15;5160:128;5227:9;;;5248:11;;;5245:37;;;5262:18;;:::i;:::-;5160:128;;;;:::o;5293:125::-;5358:9;;;5379:10;;;5376:36;;;5392:18;;:::i";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "22064": readonly [{
                readonly start: 135;
                readonly length: 32;
            }, {
                readonly start: 781;
                readonly length: 32;
            }];
            readonly "22073": readonly [{
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_linkerFactory\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"__external_transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"__setBalanceOf\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"InsufficientBalance()\":[{\"notice\":\"Thrown when a user doesn't have a sufficient balance to perform         an action.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"__setBalanceOf(uint256,address,uint256)\":{\"notice\":\"Mocks ///\"},\"domainSeparator()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockMultiToken.sol\":\"MockMultiToken\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x1f3a60886fc6733bfb62ab8424aa8c37654278b7cc445d490f8af55a5001ab9b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d1ce4a76f0078526f191f4f341ecf353c6322be0aaf68493d4a473e55ed1ed13\",\"dweb:/ipfs/QmfKhUhGH7P6CiUF58T8Yw17CfoHoUu5KNp2DPvbsyiRZJ\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b\",\"dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e\",\"dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0x70714806288155c73f7c286288aea549e30599107d6daf968d4e06b70a7159ea\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f12c4b0d396d231bf3fb923d8a8d2081a6383b7518bbe30a7dcc10d7035d5a6a\",\"dweb:/ipfs/QmavEkce1EMqe1XxZUGR3nRaGWnEKzWJddJ7vRfyRBzrRY\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0x468cf346ca2f3a3122417016ad3023d411c5d03729fcb51ee9cab1553a4f45a4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4eb75e200e8118a2d521c56e2765045e53f59f9d5824c01abbcaff9c85339e36\",\"dweb:/ipfs/QmWJvPnekpQ7YntHoFqWnpVeuxoCDYHhc2KZcgSYHfBHdP\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9\",\"dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa\",\"dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba\",\"dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba\",\"dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca\",\"dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x7ceff0ca67a3f49e0b4ee4c411d3f0211044cbf2c5ec9bd5f38f58e158781dfb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cca0d32dee9bb7919c668adae673974eeac4f9f70d8771cb58bfa54a0f4782a9\",\"dweb:/ipfs/Qmc3yQUCi24WqCKTh3nbJm8JMhyWP7GvjURtGamAiLCx9e\"]},\"contracts/test/MockMultiToken.sol\":{\"keccak256\":\"0x388d65d6b7f3e56e6bb6f2cef5c6645a6358a509f8b6ea0c97379eeb1afc9ce8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0f7c1a1970a3c438eec879cca72fc5dd965c4ec4fdf466b9f6cf55030739180\",\"dweb:/ipfs/QmVRihZp1PaFnTQSmC7HfP47HxxHLt5xY4oe53b7mNCRU3\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0x1f3a60886fc6733bfb62ab8424aa8c37654278b7cc445d490f8af55a5001ab9b";
                readonly urls: readonly ["bzz-raw://d1ce4a76f0078526f191f4f341ecf353c6322be0aaf68493d4a473e55ed1ed13", "dweb:/ipfs/QmfKhUhGH7P6CiUF58T8Yw17CfoHoUu5KNp2DPvbsyiRZJ"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8";
                readonly urls: readonly ["bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b", "dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget1.sol": {
                readonly keccak256: "0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da";
                readonly urls: readonly ["bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e", "dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget2.sol": {
                readonly keccak256: "0x70714806288155c73f7c286288aea549e30599107d6daf968d4e06b70a7159ea";
                readonly urls: readonly ["bzz-raw://f12c4b0d396d231bf3fb923d8a8d2081a6383b7518bbe30a7dcc10d7035d5a6a", "dweb:/ipfs/QmavEkce1EMqe1XxZUGR3nRaGWnEKzWJddJ7vRfyRBzrRY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget3.sol": {
                readonly keccak256: "0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1";
                readonly urls: readonly ["bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a", "dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget4.sol": {
                readonly keccak256: "0x468cf346ca2f3a3122417016ad3023d411c5d03729fcb51ee9cab1553a4f45a4";
                readonly urls: readonly ["bzz-raw://4eb75e200e8118a2d521c56e2765045e53f59f9d5824c01abbcaff9c85339e36", "dweb:/ipfs/QmWJvPnekpQ7YntHoFqWnpVeuxoCDYHhc2KZcgSYHfBHdP"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317";
                readonly urls: readonly ["bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213", "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76";
                readonly urls: readonly ["bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb", "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56";
                readonly urls: readonly ["bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8", "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
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
                readonly keccak256: "0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5";
                readonly urls: readonly ["bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9", "dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc";
                readonly urls: readonly ["bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa", "dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveCheckpoint.sol": {
                readonly keccak256: "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649";
                readonly urls: readonly ["bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7", "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLP.sol": {
                readonly keccak256: "0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12";
                readonly urls: readonly ["bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba", "dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLong.sol": {
                readonly keccak256: "0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0";
                readonly urls: readonly ["bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba", "dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveMultiToken.sol": {
                readonly keccak256: "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373";
                readonly urls: readonly ["bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d", "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveShort.sol": {
                readonly keccak256: "0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c";
                readonly urls: readonly ["bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca", "dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f";
                readonly urls: readonly ["bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d", "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"];
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
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e";
                readonly urls: readonly ["bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534", "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785";
                readonly urls: readonly ["bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263", "dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891";
                readonly urls: readonly ["bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c", "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d";
                readonly urls: readonly ["bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df", "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdrive.sol": {
                readonly keccak256: "0x7ceff0ca67a3f49e0b4ee4c411d3f0211044cbf2c5ec9bd5f38f58e158781dfb";
                readonly urls: readonly ["bzz-raw://cca0d32dee9bb7919c668adae673974eeac4f9f70d8771cb58bfa54a0f4782a9", "dweb:/ipfs/Qmc3yQUCi24WqCKTh3nbJm8JMhyWP7GvjURtGamAiLCx9e"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockMultiToken.sol": {
                readonly keccak256: "0x388d65d6b7f3e56e6bb6f2cef5c6645a6358a509f8b6ea0c97379eeb1afc9ce8";
                readonly urls: readonly ["bzz-raw://e0f7c1a1970a3c438eec879cca72fc5dd965c4ec4fdf466b9f6cf55030739180", "dweb:/ipfs/QmVRihZp1PaFnTQSmC7HfP47HxxHLt5xY4oe53b7mNCRU3"];
                readonly license: "Apache-2.0";
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
        readonly id: 22376;
        readonly exportedSymbols: {
            readonly HyperdriveMath: readonly [15630];
            readonly HyperdriveMultiToken: readonly [12682];
            readonly HyperdriveStorage: readonly [13842];
            readonly HyperdriveTarget0: readonly [3257];
            readonly HyperdriveUtils: readonly [146465];
            readonly IERC20: readonly [6920];
            readonly IHyperdrive: readonly [7616];
            readonly IMockMultiToken: readonly [22058];
            readonly IMultiToken: readonly [8498];
            readonly MockHyperdriveBase: readonly [20423];
            readonly MockHyperdriveTarget0: readonly [20781];
            readonly MockMultiToken: readonly [22375];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:8596:92";
        readonly nodes: readonly [{
            readonly id: 21995;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:92";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 21997;
            readonly nodeType: "ImportDirective";
            readonly src: "64:81:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "contracts/src/external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22376;
            readonly sourceUnit: 3258;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 21996;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 3257;
                    readonly src: "73:17:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 21999;
            readonly nodeType: "ImportDirective";
            readonly src: "146:61:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "contracts/src/interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22376;
            readonly sourceUnit: 6921;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 21998;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 6920;
                    readonly src: "155:6:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 22001;
            readonly nodeType: "ImportDirective";
            readonly src: "208:71:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22376;
            readonly sourceUnit: 7617;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 22000;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7616;
                    readonly src: "217:11:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 22003;
            readonly nodeType: "ImportDirective";
            readonly src: "280:71:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IMultiToken.sol";
            readonly file: "contracts/src/interfaces/IMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22376;
            readonly sourceUnit: 8499;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 22002;
                    readonly name: "IMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8498;
                    readonly src: "289:11:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 22005;
            readonly nodeType: "ImportDirective";
            readonly src: "352:87:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveMultiToken.sol";
            readonly file: "contracts/src/internal/HyperdriveMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22376;
            readonly sourceUnit: 12683;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 22004;
                    readonly name: "HyperdriveMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 12682;
                    readonly src: "361:20:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 22007;
            readonly nodeType: "ImportDirective";
            readonly src: "440:81:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveStorage.sol";
            readonly file: "contracts/src/internal/HyperdriveStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22376;
            readonly sourceUnit: 13843;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 22006;
                    readonly name: "HyperdriveStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 13842;
                    readonly src: "449:17:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 22009;
            readonly nodeType: "ImportDirective";
            readonly src: "522:76:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "contracts/src/libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22376;
            readonly sourceUnit: 15631;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 22008;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 15630;
                    readonly src: "531:14:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 22012;
            readonly nodeType: "ImportDirective";
            readonly src: "599:94:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/MockHyperdrive.sol";
            readonly file: "contracts/test/MockHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22376;
            readonly sourceUnit: 20842;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 22010;
                    readonly name: "MockHyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 20423;
                    readonly src: "608:18:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 22011;
                    readonly name: "MockHyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 20781;
                    readonly src: "628:21:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 22014;
            readonly nodeType: "ImportDirective";
            readonly src: "694:65:92";
            readonly nodes: readonly [];
            readonly absolutePath: "test/utils/HyperdriveUtils.sol";
            readonly file: "test/utils/HyperdriveUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 22376;
            readonly sourceUnit: 146466;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 22013;
                    readonly name: "HyperdriveUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 146465;
                    readonly src: "703:15:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 22058;
            readonly nodeType: "ContractDefinition";
            readonly src: "807:480:92";
            readonly nodes: readonly [{
                readonly id: 22026;
                readonly nodeType: "FunctionDefinition";
                readonly src: "854:112:92";
                readonly nodes: readonly [];
                readonly functionSelector: "94a97cdb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__setBalanceOf";
                readonly nameLocation: "863:14:92";
                readonly parameters: {
                    readonly id: 22024;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22019;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "895:8:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22026;
                        readonly src: "887:16:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22018;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "887:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22021;
                        readonly mutability: "mutable";
                        readonly name: "_who";
                        readonly nameLocation: "921:4:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22026;
                        readonly src: "913:12:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22020;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "913:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22023;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "943:7:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22026;
                        readonly src: "935:15:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22022;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "935:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "877:79:92";
                };
                readonly returnParameters: {
                    readonly id: 22025;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "965:0:92";
                };
                readonly scope: 22058;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 22039;
                readonly nodeType: "FunctionDefinition";
                readonly src: "972:163:92";
                readonly nodes: readonly [];
                readonly functionSelector: "58af4a0a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__external_transferFrom";
                readonly nameLocation: "981:23:92";
                readonly parameters: {
                    readonly id: 22037;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22028;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "1022:7:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22039;
                        readonly src: "1014:15:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22027;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1014:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22030;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1047:4:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22039;
                        readonly src: "1039:12:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22029;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1039:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22032;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1069:2:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22039;
                        readonly src: "1061:10:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22031;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1061:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22034;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1089:6:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22039;
                        readonly src: "1081:14:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22033;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1081:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22036;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "1113:6:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22039;
                        readonly src: "1105:14:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22035;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1105:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1004:121:92";
                };
                readonly returnParameters: {
                    readonly id: 22038;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1134:0:92";
                };
                readonly scope: 22058;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 22048;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1141:68:92";
                readonly nodes: readonly [];
                readonly functionSelector: "836a1040";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "1150:4:92";
                readonly parameters: {
                    readonly id: 22046;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22041;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "1163:7:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22048;
                        readonly src: "1155:15:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22040;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1155:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22043;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1180:2:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22048;
                        readonly src: "1172:10:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22042;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1172:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22045;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1192:6:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22048;
                        readonly src: "1184:14:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22044;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1184:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1154:45:92";
                };
                readonly returnParameters: {
                    readonly id: 22047;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1208:0:92";
                };
                readonly scope: 22058;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 22057;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1215:70:92";
                readonly nodes: readonly [];
                readonly functionSelector: "9eea5f66";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "burn";
                readonly nameLocation: "1224:4:92";
                readonly parameters: {
                    readonly id: 22055;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22050;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "1237:7:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22057;
                        readonly src: "1229:15:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22049;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1229:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22052;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1254:4:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22057;
                        readonly src: "1246:12:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22051;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1246:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22054;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1268:6:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22057;
                        readonly src: "1260:14:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22053;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1260:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1228:47:92";
                };
                readonly returnParameters: {
                    readonly id: 22056;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1284:0:92";
                };
                readonly scope: 22058;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 22016;
                    readonly name: "IMultiToken";
                    readonly nameLocations: readonly ["836:11:92"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 8498;
                    readonly src: "836:11:92";
                };
                readonly id: 22017;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "836:11:92";
            }];
            readonly canonicalName: "IMockMultiToken";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 22015;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "761:46:92";
                readonly text: "DEPRECATED: Don't use this for new tests.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [22058, 8498, 8638, 8589, 8711, 8623];
            readonly name: "IMockMultiToken";
            readonly nameLocation: "817:15:92";
            readonly scope: 22376;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [8604, 8613, 8622];
        }, {
            readonly id: 22375;
            readonly nodeType: "ContractDefinition";
            readonly src: "1289:7345:92";
            readonly nodes: readonly [{
                readonly id: 22064;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1363:34:92";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "immutable";
                readonly name: "target0";
                readonly nameLocation: "1390:7:92";
                readonly scope: 22375;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 22063;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1363:7:92";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 22070;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1487:174:92";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly documentation: {
                    readonly id: 22065;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1404:78:92";
                    readonly text: "@notice The typehash used to calculate the EIP712 hash for `permitForAll`.";
                };
                readonly functionSelector: "30adf81f";
                readonly mutability: "constant";
                readonly name: "PERMIT_TYPEHASH";
                readonly nameLocation: "1511:15:92";
                readonly scope: 22375;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 22066;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1487:7:92";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly hexValue: "5065726d6974466f72416c6c2861646472657373206f776e65722c61646472657373207370656e6465722c626f6f6c205f617070726f7665642c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529";
                        readonly id: 22068;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "string";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "1560:91:92";
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
                        readonly id: 22067;
                        readonly name: "keccak256";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: -8;
                        readonly src: "1537:9:92";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                        };
                    };
                    readonly id: 22069;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "functionCall";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1537:124:92";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 22073;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1725:40:92";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 22071;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1668:52:92";
                    readonly text: "@notice This contract's EIP712 domain separator.";
                };
                readonly functionSelector: "f698da25";
                readonly mutability: "immutable";
                readonly name: "domainSeparator";
                readonly nameLocation: "1750:15:92";
                readonly scope: 22375;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 22072;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1725:7:92";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 22188;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1815:2694:92";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22187;
                    readonly nodeType: "Block";
                    readonly src: "2781:1728:92";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 22162;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 22118;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22064;
                                readonly src: "2831:7:92";
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
                                                    readonly id: 22129;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "2976:1:92";
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
                                                    readonly id: 22128;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "2968:7:92";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 22127;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "2968:7:92";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 22130;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "2968:10:92";
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
                                                readonly id: 22126;
                                                readonly name: "IERC20";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 6920;
                                                readonly src: "2961:6:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$6920_$";
                                                    readonly typeString: "type(contract IERC20)";
                                                };
                                            };
                                            readonly id: 22131;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2961:18:92";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$6920";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }, {
                                            readonly id: 22132;
                                            readonly name: "_linkerFactory";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 22077;
                                            readonly src: "3016:14:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 22133;
                                            readonly name: "_linkerCodeHash";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 22075;
                                            readonly src: "3068:15:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }, {
                                            readonly hexValue: "31653138";
                                            readonly id: 22134;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3129:4:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        }, {
                                            readonly hexValue: "31653138";
                                            readonly id: 22135;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3177:4:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        }, {
                                            readonly hexValue: "31653135";
                                            readonly id: 22136;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3229:4:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000";
                                            };
                                            readonly value: "1e15";
                                        }, {
                                            readonly hexValue: "333635";
                                            readonly id: 22137;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3273:8:92";
                                            readonly subdenomination: "days";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                                readonly typeString: "int_const 31536000";
                                            };
                                            readonly value: "365";
                                        }, {
                                            readonly hexValue: "31";
                                            readonly id: 22138;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3323:6:92";
                                            readonly subdenomination: "days";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_86400_by_1";
                                                readonly typeString: "int_const 86400";
                                            };
                                            readonly value: "1";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "302e3035653138";
                                                readonly id: 22141;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3425:7:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                                    readonly typeString: "int_const 50000000000000000";
                                                };
                                                readonly value: "0.05e18";
                                            }, {
                                                readonly hexValue: "333635";
                                                readonly id: 22142;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3458:8:92";
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
                                                    readonly id: 22139;
                                                    readonly name: "HyperdriveMath";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 15630;
                                                    readonly src: "3364:14:92";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                                        readonly typeString: "type(library HyperdriveMath)";
                                                    };
                                                };
                                                readonly id: 22140;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "3379:20:92";
                                                readonly memberName: "calculateTimeStretch";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 15009;
                                                readonly src: "3364:35:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 22143;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3364:124:92";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 22146;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3530:1:92";
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
                                                readonly id: 22145;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3522:7:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 22144;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3522:7:92";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 22147;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3522:10:92";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 22150;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3576:1:92";
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
                                                readonly id: 22149;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3568:7:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 22148;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3568:7:92";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 22151;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3568:10:92";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 22154;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3656:1:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 22155;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3689:1:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 22156;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3730:1:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 22157;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3775:1:92";
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
                                                    readonly id: 22152;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 7616;
                                                    readonly src: "3606:11:92";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7616_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 22153;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "3618:4:92";
                                                readonly memberName: "Fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7332;
                                                readonly src: "3606:16:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_struct$_Fees_$7332_storage_ptr_$";
                                                    readonly typeString: "type(struct IHyperdrive.Fees storage pointer)";
                                                };
                                            };
                                            readonly id: 22158;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "structConstructorCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly ["3649:5:92", "3683:4:92", "3716:12:92", "3757:16:92"];
                                            readonly names: readonly ["curve", "flat", "governanceLP", "governanceZombie"];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3606:193:92";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_IERC20_$6920";
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
                                                readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 22124;
                                                readonly name: "IHyperdrive";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 7616;
                                                readonly src: "2905:11:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7616_$";
                                                    readonly typeString: "type(contract IHyperdrive)";
                                                };
                                            };
                                            readonly id: 22125;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2917:10:92";
                                            readonly memberName: "PoolConfig";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7407;
                                            readonly src: "2905:22:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_struct$_PoolConfig_$7407_storage_ptr_$";
                                                readonly typeString: "type(struct IHyperdrive.PoolConfig storage pointer)";
                                            };
                                        };
                                        readonly id: 22159;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "structConstructorCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly ["2950:9:92", "3001:13:92", "3052:14:92", "3105:22:92", "3155:20:92", "3203:24:92", "3255:16:92", "3303:18:92", "3351:11:92", "3510:10:92", "3554:12:92", "3600:4:92"];
                                        readonly names: readonly ["baseToken", "linkerFactory", "linkerCodeHash", "initialVaultSharePrice", "minimumShareReserves", "minimumTransactionAmount", "positionDuration", "checkpointDuration", "timeStretch", "governance", "feeCollector", "fees"];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2905:913:92";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        }];
                                        readonly id: 22123;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "NewExpression";
                                        readonly src: "2862:25:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$20781_$";
                                            readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)";
                                        };
                                        readonly typeName: {
                                            readonly id: 22122;
                                            readonly nodeType: "UserDefinedTypeName";
                                            readonly pathNode: {
                                                readonly id: 22121;
                                                readonly name: "MockHyperdriveTarget0";
                                                readonly nameLocations: readonly ["2866:21:92"];
                                                readonly nodeType: "IdentifierPath";
                                                readonly referencedDeclaration: 20781;
                                                readonly src: "2866:21:92";
                                            };
                                            readonly referencedDeclaration: 20781;
                                            readonly src: "2866:21:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$20781";
                                                readonly typeString: "contract MockHyperdriveTarget0";
                                            };
                                        };
                                    };
                                    readonly id: 22160;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2862:970:92";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$20781";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$20781";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    }];
                                    readonly id: 22120;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2841:7:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 22119;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2841:7:92";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 22161;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2841:1001:92";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2831:1011:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 22163;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2831:1011:92";
                    }, {
                        readonly expression: {
                            readonly id: 22185;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 22164;
                                readonly name: "domainSeparator";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22073;
                                readonly src: "4187:15:92";
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
                                            readonly id: 22169;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "4287:72:92";
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
                                            readonly id: 22168;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4256:9:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 22170;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4256:121:92";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "31";
                                                readonly id: 22174;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "4411:3:92";
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
                                                readonly id: 22173;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4405:5:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 22172;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4405:5:92";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 22175;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4405:10:92";
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
                                            readonly id: 22171;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4395:9:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 22176;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4395:21:92";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 22177;
                                            readonly name: "block";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -4;
                                            readonly src: "4434:5:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_block";
                                                readonly typeString: "block";
                                            };
                                        };
                                        readonly id: 22178;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4440:7:92";
                                        readonly memberName: "chainid";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4434:13:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 22181;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "4473:4:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockMultiToken_$22375";
                                                readonly typeString: "contract MockMultiToken";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_MockMultiToken_$22375";
                                                readonly typeString: "contract MockMultiToken";
                                            }];
                                            readonly id: 22180;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4465:7:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 22179;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4465:7:92";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 22182;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4465:13:92";
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
                                            readonly id: 22166;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4228:3:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 22167;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4232:6:92";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4228:10:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 22183;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4228:264:92";
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
                                    readonly id: 22165;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "4205:9:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 22184;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4205:297:92";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "4187:315:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 22186;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4187:315:92";
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
                                    readonly id: 22085;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "2004:1:92";
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
                                    readonly id: 22084;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1996:7:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 22083;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1996:7:92";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 22086;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1996:10:92";
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
                                readonly id: 22082;
                                readonly name: "IERC20";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 6920;
                                readonly src: "1989:6:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IERC20_$6920_$";
                                    readonly typeString: "type(contract IERC20)";
                                };
                            };
                            readonly id: 22087;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1989:18:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$6920";
                                readonly typeString: "contract IERC20";
                            };
                        }, {
                            readonly id: 22088;
                            readonly name: "_linkerFactory";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 22077;
                            readonly src: "2040:14:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly id: 22089;
                            readonly name: "_linkerCodeHash";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 22075;
                            readonly src: "2088:15:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        }, {
                            readonly hexValue: "31653138";
                            readonly id: 22090;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2145:4:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            };
                            readonly value: "1e18";
                        }, {
                            readonly hexValue: "31653138";
                            readonly id: 22091;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2189:4:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000000";
                            };
                            readonly value: "1e18";
                        }, {
                            readonly hexValue: "31653135";
                            readonly id: 22092;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2237:4:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1000000000000000_by_1";
                                readonly typeString: "int_const 1000000000000000";
                            };
                            readonly value: "1e15";
                        }, {
                            readonly hexValue: "333635";
                            readonly id: 22093;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2277:8:92";
                            readonly subdenomination: "days";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_31536000_by_1";
                                readonly typeString: "int_const 31536000";
                            };
                            readonly value: "365";
                        }, {
                            readonly hexValue: "31";
                            readonly id: 22094;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2323:6:92";
                            readonly subdenomination: "days";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_86400_by_1";
                                readonly typeString: "int_const 86400";
                            };
                            readonly value: "1";
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "302e3035653138";
                                readonly id: 22097;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2417:7:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_50000000000000000_by_1";
                                    readonly typeString: "int_const 50000000000000000";
                                };
                                readonly value: "0.05e18";
                            }, {
                                readonly hexValue: "333635";
                                readonly id: 22098;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2446:8:92";
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
                                    readonly id: 22095;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "2360:14:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 22096;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2375:20:92";
                                readonly memberName: "calculateTimeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15009;
                                readonly src: "2360:35:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 22099;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2360:112:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 22102;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2510:1:92";
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
                                readonly id: 22101;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "2502:7:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 22100;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2502:7:92";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 22103;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2502:10:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 22106;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2552:1:92";
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
                                readonly id: 22105;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "2544:7:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 22104;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2544:7:92";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 22107;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2544:10:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }, {
                            readonly arguments: readonly [{
                                readonly hexValue: "30";
                                readonly id: 22110;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2624:1:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }, {
                                readonly hexValue: "30";
                                readonly id: 22111;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2653:1:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }, {
                                readonly hexValue: "30";
                                readonly id: 22112;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2690:1:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }, {
                                readonly hexValue: "30";
                                readonly id: 22113;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2731:1:92";
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
                                    readonly id: 22108;
                                    readonly name: "IHyperdrive";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 7616;
                                    readonly src: "2578:11:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7616_$";
                                        readonly typeString: "type(contract IHyperdrive)";
                                    };
                                };
                                readonly id: 22109;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2590:4:92";
                                readonly memberName: "Fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7332;
                                readonly src: "2578:16:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_struct$_Fees_$7332_storage_ptr_$";
                                    readonly typeString: "type(struct IHyperdrive.Fees storage pointer)";
                                };
                            };
                            readonly id: 22114;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "structConstructorCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly ["2617:5:92", "2647:4:92", "2676:12:92", "2713:16:92"];
                            readonly names: readonly ["curve", "flat", "governanceLP", "governanceZombie"];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2578:173:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_IERC20_$6920";
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
                                readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            }];
                            readonly expression: {
                                readonly id: 22080;
                                readonly name: "IHyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7616;
                                readonly src: "1937:11:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7616_$";
                                    readonly typeString: "type(contract IHyperdrive)";
                                };
                            };
                            readonly id: 22081;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "1949:10:92";
                            readonly memberName: "PoolConfig";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 7407;
                            readonly src: "1937:22:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_struct$_PoolConfig_$7407_storage_ptr_$";
                                readonly typeString: "type(struct IHyperdrive.PoolConfig storage pointer)";
                            };
                        };
                        readonly id: 22115;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "structConstructorCall";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly ["1978:9:92", "2025:13:92", "2072:14:92", "2121:22:92", "2167:20:92", "2211:24:92", "2259:16:92", "2303:18:92", "2347:11:92", "2490:10:92", "2530:12:92", "2572:4:92"];
                        readonly names: readonly ["baseToken", "linkerFactory", "linkerCodeHash", "initialVaultSharePrice", "minimumShareReserves", "minimumTransactionAmount", "positionDuration", "checkpointDuration", "timeStretch", "governance", "feeCollector", "fees"];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1937:829:92";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 22116;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 22079;
                        readonly name: "HyperdriveStorage";
                        readonly nameLocations: readonly ["1906:17:92"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 13842;
                        readonly src: "1906:17:92";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1906:870:92";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 22078;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22075;
                        readonly mutability: "mutable";
                        readonly name: "_linkerCodeHash";
                        readonly nameLocation: "1844:15:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22188;
                        readonly src: "1836:23:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 22074;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1836:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22077;
                        readonly mutability: "mutable";
                        readonly name: "_linkerFactory";
                        readonly nameLocation: "1877:14:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22188;
                        readonly src: "1869:22:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22076;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1869:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1826:71:92";
                };
                readonly returnParameters: {
                    readonly id: 22117;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2781:0:92";
                };
                readonly scope: 22375;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 22239;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4672:973:92";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22238;
                    readonly nodeType: "Block";
                    readonly src: "4735:910:92";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [22196, 22198];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 22196;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4880:7:92";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 22238;
                            readonly src: "4875:12:92";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 22195;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4875:4:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 22198;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "4902:10:92";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 22238;
                            readonly src: "4889:23:92";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 22197;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4889:5:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 22203;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 22201;
                                readonly name: "_data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22190;
                                readonly src: "4937:5:92";
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
                                    readonly id: 22199;
                                    readonly name: "target0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22064;
                                    readonly src: "4916:7:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 22200;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4924:12:92";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "4916:20:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 22202;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4916:27:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4874:69:92";
                    }, {
                        readonly condition: {
                            readonly id: 22205;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "4957:8:92";
                            readonly subExpression: {
                                readonly id: 22204;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22196;
                                readonly src: "4958:7:92";
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
                        readonly id: 22235;
                        readonly nodeType: "IfStatement";
                        readonly src: "4953:658:92";
                        readonly trueBody: {
                            readonly id: 22234;
                            readonly nodeType: "Block";
                            readonly src: "4967:644:92";
                            readonly statements: readonly [{
                                readonly assignments: readonly [22207];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 22207;
                                    readonly mutability: "mutable";
                                    readonly name: "selector";
                                    readonly nameLocation: "4988:8:92";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 22234;
                                    readonly src: "4981:15:92";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                    readonly typeName: {
                                        readonly id: 22206;
                                        readonly name: "bytes4";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4981:6:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 22212;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 22210;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22198;
                                        readonly src: "5006:10:92";
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
                                        readonly id: 22209;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4999:6:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_bytes4_$";
                                            readonly typeString: "type(bytes4)";
                                        };
                                        readonly typeName: {
                                            readonly id: 22208;
                                            readonly name: "bytes4";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4999:6:92";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 22211;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4999:18:92";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "4981:36:92";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                    readonly id: 22217;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 22213;
                                        readonly name: "selector";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22207;
                                        readonly src: "5035:8:92";
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
                                                readonly id: 22214;
                                                readonly name: "IHyperdrive";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 7616;
                                                readonly src: "5047:11:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7616_$";
                                                    readonly typeString: "type(contract IHyperdrive)";
                                                };
                                            };
                                            readonly id: 22215;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5059:10:92";
                                            readonly memberName: "ReturnData";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7555;
                                            readonly src: "5047:22:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$";
                                                readonly typeString: "function (bytes memory) pure";
                                            };
                                        };
                                        readonly id: 22216;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5070:8:92";
                                        readonly memberName: "selector";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5047:31:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    };
                                    readonly src: "5035:43:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 22220;
                                readonly nodeType: "IfStatement";
                                readonly src: "5031:176:92";
                                readonly trueBody: {
                                    readonly id: 22219;
                                    readonly nodeType: "Block";
                                    readonly src: "5080:127:92";
                                    readonly statements: readonly [{
                                        readonly AST: {
                                            readonly nodeType: "YulBlock";
                                            readonly src: "5107:86:92";
                                            readonly statements: readonly [{
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly name: "returndata";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5140:10:92";
                                                        }, {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "5152:2:92";
                                                            readonly type: "";
                                                            readonly value: "32";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "add";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5136:3:92";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "5136:19:92";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "returndata";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5163:10:92";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mload";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "5157:5:92";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "5157:17:92";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "revert";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5129:6:92";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5129:46:92";
                                                };
                                                readonly nodeType: "YulExpressionStatement";
                                                readonly src: "5129:46:92";
                                            }];
                                        };
                                        readonly evmVersion: "paris";
                                        readonly externalReferences: readonly [{
                                            readonly declaration: 22198;
                                            readonly isOffset: false;
                                            readonly isSlot: false;
                                            readonly src: "5140:10:92";
                                            readonly valueSize: 1;
                                        }, {
                                            readonly declaration: 22198;
                                            readonly isOffset: false;
                                            readonly isSlot: false;
                                            readonly src: "5163:10:92";
                                            readonly valueSize: 1;
                                        }];
                                        readonly id: 22218;
                                        readonly nodeType: "InlineAssembly";
                                        readonly src: "5098:95:92";
                                    }];
                                };
                            }, {
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "5373:138:92";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "returndata";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5402:10:92";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5414:3:92";
                                                    readonly type: "";
                                                    readonly value: "0x4";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5398:3:92";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5398:20:92";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly name: "returndata";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5430:10:92";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5424:5:92";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5424:17:92";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5443:1:92";
                                                    readonly type: "";
                                                    readonly value: "4";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "sub";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5420:3:92";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5420:25:92";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mstore";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5391:6:92";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5391:55:92";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "5391:55:92";
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "5463:34:92";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly name: "returndata";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5481:10:92";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "5493:3:92";
                                                readonly type: "";
                                                readonly value: "0x4";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5477:3:92";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5477:20:92";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "returndata";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5463:10:92";
                                        }];
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 22198;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5402:10:92";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 22198;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5430:10:92";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 22198;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5463:10:92";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 22198;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "5481:10:92";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 22221;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "5364:147:92";
                            }, {
                                readonly expression: {
                                    readonly id: 22230;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 22222;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22198;
                                        readonly src: "5524:10:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 22225;
                                            readonly name: "returndata";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 22198;
                                            readonly src: "5548:10:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 22227;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5561:5:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 22226;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5561:5:92";
                                                    readonly typeDescriptions: {};
                                                };
                                            }];
                                            readonly id: 22228;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "5560:7:92";
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
                                                readonly id: 22223;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "5537:3:92";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 22224;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5541:6:92";
                                            readonly memberName: "decode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5537:10:92";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                readonly typeString: "function () pure";
                                            };
                                        };
                                        readonly id: 22229;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5537:31:92";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly src: "5524:44:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 22231;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5524:44:92";
                            }, {
                                readonly expression: {
                                    readonly id: 22232;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22198;
                                    readonly src: "5590:10:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly functionReturnParameters: 22194;
                                readonly id: 22233;
                                readonly nodeType: "Return";
                                readonly src: "5583:17:92";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 22236;
                            readonly name: "returndata";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 22198;
                            readonly src: "5628:10:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 22194;
                        readonly id: 22237;
                        readonly nodeType: "Return";
                        readonly src: "5621:17:92";
                    }];
                };
                readonly implemented: true;
                readonly kind: "fallback";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 22191;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22190;
                        readonly mutability: "mutable";
                        readonly name: "_data";
                        readonly nameLocation: "4696:5:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22239;
                        readonly src: "4681:20:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 22189;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4681:5:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4680:22:92";
                };
                readonly returnParameters: {
                    readonly id: 22194;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22193;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22239;
                        readonly src: "4721:12:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 22192;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4721:5:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4720:14:92";
                };
                readonly scope: 22375;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 22253;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5782:132:92";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22252;
                    readonly nodeType: "Block";
                    readonly src: "5889:25:92";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly hexValue: "30";
                            readonly id: 22250;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "5906:1:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly functionReturnParameters: 22249;
                        readonly id: 22251;
                        readonly nodeType: "Return";
                        readonly src: "5899:8:92";
                    }];
                };
                readonly baseFunctions: readonly [9056];
                readonly documentation: {
                    readonly id: 22240;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5651:18:92";
                    readonly text: "Overrides ///";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_applyCheckpoint";
                readonly nameLocation: "5791:16:92";
                readonly overrides: {
                    readonly id: 22246;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "5862:8:92";
                };
                readonly parameters: {
                    readonly id: 22245;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22242;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22253;
                        readonly src: "5817:7:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22241;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5817:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22244;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22253;
                        readonly src: "5834:7:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22243;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5834:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5807:40:92";
                };
                readonly returnParameters: {
                    readonly id: 22249;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22248;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22253;
                        readonly src: "5880:7:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22247;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5880:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5879:9:92";
                };
                readonly scope: 22375;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 22301;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7103:867:92";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22300;
                    readonly nodeType: "Block";
                    readonly src: "7293:677:92";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [22272, 22274];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 22272;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "7309:7:92";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 22300;
                            readonly src: "7304:12:92";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 22271;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7304:4:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 22274;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "7331:6:92";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 22300;
                            readonly src: "7318:19:92";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 22273;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7318:5:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 22293;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 22279;
                                        readonly name: "HyperdriveTarget0";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 3257;
                                        readonly src: "7407:17:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveTarget0_$3257_$";
                                            readonly typeString: "type(contract HyperdriveTarget0)";
                                        };
                                    };
                                    readonly id: 22280;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7425:12:92";
                                    readonly memberName: "permitForAll";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 2771;
                                    readonly src: "7407:30:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$";
                                        readonly typeString: "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 22281;
                                        readonly name: "domainSeparator";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22073;
                                        readonly src: "7477:15:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 22282;
                                        readonly name: "PERMIT_TYPEHASH";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22070;
                                        readonly src: "7514:15:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 22283;
                                        readonly name: "owner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22256;
                                        readonly src: "7551:5:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 22284;
                                        readonly name: "spender";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22258;
                                        readonly src: "7578:7:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 22285;
                                        readonly name: "_approved";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22260;
                                        readonly src: "7607:9:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }, {
                                        readonly id: 22286;
                                        readonly name: "deadline";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22262;
                                        readonly src: "7638:8:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 22287;
                                        readonly name: "v";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22264;
                                        readonly src: "7668:1:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint8";
                                            readonly typeString: "uint8";
                                        };
                                    }, {
                                        readonly id: 22288;
                                        readonly name: "r";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22266;
                                        readonly src: "7691:1:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 22289;
                                        readonly name: "s";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22268;
                                        readonly src: "7714:1:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }];
                                    readonly id: 22290;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "7455:278:92";
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
                                        readonly id: 22277;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "7375:3:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 22278;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7379:10:92";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "7375:14:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 22291;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7375:372:92";
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
                                    readonly id: 22275;
                                    readonly name: "target0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22064;
                                    readonly src: "7341:7:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 22276;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7349:12:92";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "7341:20:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 22292;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7341:416:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7303:454:92";
                    }, {
                        readonly condition: {
                            readonly id: 22295;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "7771:8:92";
                            readonly subExpression: {
                                readonly id: 22294;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22272;
                                readonly src: "7772:7:92";
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
                        readonly id: 22298;
                        readonly nodeType: "IfStatement";
                        readonly src: "7767:117:92";
                        readonly trueBody: {
                            readonly id: 22297;
                            readonly nodeType: "Block";
                            readonly src: "7781:103:92";
                            readonly statements: readonly [{
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "7804:70:92";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7833:6:92";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "7841:2:92";
                                                    readonly type: "";
                                                    readonly value: "32";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7829:3:92";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "7829:15:92";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7852:6:92";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mload";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7846:5:92";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "7846:13:92";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "7822:6:92";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "7822:38:92";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "7822:38:92";
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 22274;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "7833:6:92";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 22274;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "7852:6:92";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 22296;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "7795:79:92";
                            }];
                        };
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "7902:62:92";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7927:6:92";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "7935:2:92";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7923:3:92";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "7923:15:92";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7946:6:92";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mload";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7940:5:92";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "7940:13:92";
                                    }];
                                    readonly functionName: {
                                        readonly name: "return";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "7916:6:92";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "7916:38:92";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "7916:38:92";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 22274;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "7927:6:92";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 22274;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "7946:6:92";
                            readonly valueSize: 1;
                        }];
                        readonly id: 22299;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "7893:71:92";
                    }];
                };
                readonly documentation: {
                    readonly id: 22254;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5944:1154:92";
                    readonly text: "@notice Allows a caller who is not the owner of an account to execute the\n      functionality of 'approve' for all assets with the owners signature.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported.";
                };
                readonly functionSelector: "9032c726";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "permitForAll";
                readonly nameLocation: "7112:12:92";
                readonly parameters: {
                    readonly id: 22269;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22256;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "7142:5:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22301;
                        readonly src: "7134:13:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22255;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7134:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22258;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "7165:7:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22301;
                        readonly src: "7157:15:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22257;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7157:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22260;
                        readonly mutability: "mutable";
                        readonly name: "_approved";
                        readonly nameLocation: "7187:9:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22301;
                        readonly src: "7182:14:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 22259;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7182:4:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22262;
                        readonly mutability: "mutable";
                        readonly name: "deadline";
                        readonly nameLocation: "7214:8:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22301;
                        readonly src: "7206:16:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22261;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7206:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22264;
                        readonly mutability: "mutable";
                        readonly name: "v";
                        readonly nameLocation: "7238:1:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22301;
                        readonly src: "7232:7:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 22263;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7232:5:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22266;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "7257:1:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22301;
                        readonly src: "7249:9:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 22265;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7249:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22268;
                        readonly mutability: "mutable";
                        readonly name: "s";
                        readonly nameLocation: "7276:1:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22301;
                        readonly src: "7268:9:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 22267;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7268:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7124:159:92";
                };
                readonly returnParameters: {
                    readonly id: 22270;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7293:0:92";
                };
                readonly scope: 22375;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 22320;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7995:165:92";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22319;
                    readonly nodeType: "Block";
                    readonly src: "8107:53:92";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 22317;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly baseExpression: {
                                        readonly id: 22311;
                                        readonly name: "_balanceOf";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13728;
                                        readonly src: "8117:10:92";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                                            readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                                        };
                                    };
                                    readonly id: 22314;
                                    readonly indexExpression: {
                                        readonly id: 22312;
                                        readonly name: "_tokenId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 22304;
                                        readonly src: "8128:8:92";
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
                                    readonly src: "8117:20:92";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 22315;
                                readonly indexExpression: {
                                    readonly id: 22313;
                                    readonly name: "_who";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22306;
                                    readonly src: "8138:4:92";
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
                                readonly src: "8117:26:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 22316;
                                readonly name: "_amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22308;
                                readonly src: "8146:7:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "8117:36:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 22318;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8117:36:92";
                    }];
                };
                readonly documentation: {
                    readonly id: 22302;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7976:14:92";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "94a97cdb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__setBalanceOf";
                readonly nameLocation: "8004:14:92";
                readonly parameters: {
                    readonly id: 22309;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22304;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "8036:8:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22320;
                        readonly src: "8028:16:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22303;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8028:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22306;
                        readonly mutability: "mutable";
                        readonly name: "_who";
                        readonly nameLocation: "8062:4:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22320;
                        readonly src: "8054:12:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22305;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8054:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22308;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "8084:7:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22320;
                        readonly src: "8076:15:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22307;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8076:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8018:79:92";
                };
                readonly returnParameters: {
                    readonly id: 22310;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8107:0:92";
                };
                readonly scope: 22375;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 22342;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8166:228:92";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22341;
                    readonly nodeType: "Block";
                    readonly src: "8329:65:92";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 22334;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22322;
                                readonly src: "8353:7:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 22335;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22324;
                                readonly src: "8362:4:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 22336;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22326;
                                readonly src: "8368:2:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 22337;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22328;
                                readonly src: "8372:6:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 22338;
                                readonly name: "caller";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22330;
                                readonly src: "8380:6:92";
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
                                readonly id: 22333;
                                readonly name: "_transferFrom";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12406;
                                readonly src: "8339:13:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$";
                                    readonly typeString: "function (uint256,address,address,uint256,address)";
                                };
                            };
                            readonly id: 22339;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8339:48:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 22340;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8339:48:92";
                    }];
                };
                readonly functionSelector: "58af4a0a";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "__external_transferFrom";
                readonly nameLocation: "8175:23:92";
                readonly parameters: {
                    readonly id: 22331;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22322;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "8216:7:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22342;
                        readonly src: "8208:15:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22321;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8208:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22324;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "8241:4:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22342;
                        readonly src: "8233:12:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22323;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8233:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22326;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "8263:2:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22342;
                        readonly src: "8255:10:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22325;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8255:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22328;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "8283:6:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22342;
                        readonly src: "8275:14:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22327;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8275:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22330;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "8307:6:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22342;
                        readonly src: "8299:14:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22329;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8299:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8198:121:92";
                };
                readonly returnParameters: {
                    readonly id: 22332;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8329:0:92";
                };
                readonly scope: 22375;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 22358;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8400:111:92";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22357;
                    readonly nodeType: "Block";
                    readonly src: "8468:43:92";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 22352;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22344;
                                readonly src: "8484:7:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 22353;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22346;
                                readonly src: "8493:2:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 22354;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22348;
                                readonly src: "8497:6:92";
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
                                readonly id: 22351;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12472;
                                readonly src: "8478:5:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256)";
                                };
                            };
                            readonly id: 22355;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8478:26:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 22356;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8478:26:92";
                    }];
                };
                readonly functionSelector: "836a1040";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "8409:4:92";
                readonly parameters: {
                    readonly id: 22349;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22344;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "8422:7:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22358;
                        readonly src: "8414:15:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22343;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8414:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22346;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "8439:2:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22358;
                        readonly src: "8431:10:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22345;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8431:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22348;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "8451:6:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22358;
                        readonly src: "8443:14:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22347;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8443:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8413:45:92";
                };
                readonly returnParameters: {
                    readonly id: 22350;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8468:0:92";
                };
                readonly scope: 22375;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 22374;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8517:115:92";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 22373;
                    readonly nodeType: "Block";
                    readonly src: "8587:45:92";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 22368;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22360;
                                readonly src: "8603:7:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 22369;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22362;
                                readonly src: "8612:4:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 22370;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 22364;
                                readonly src: "8618:6:92";
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
                                readonly id: 22367;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12524;
                                readonly src: "8597:5:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256)";
                                };
                            };
                            readonly id: 22371;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8597:28:92";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 22372;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8597:28:92";
                    }];
                };
                readonly functionSelector: "9eea5f66";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "burn";
                readonly nameLocation: "8526:4:92";
                readonly parameters: {
                    readonly id: 22365;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 22360;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "8539:7:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22374;
                        readonly src: "8531:15:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22359;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8531:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22362;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "8556:4:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22374;
                        readonly src: "8548:12:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 22361;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8548:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 22364;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "8570:6:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 22374;
                        readonly src: "8562:14:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 22363;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8562:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8530:47:92";
                };
                readonly returnParameters: {
                    readonly id: 22366;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8587:0:92";
                };
                readonly scope: 22375;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 22059;
                    readonly name: "HyperdriveMultiToken";
                    readonly nameLocations: readonly ["1316:20:92"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 12682;
                    readonly src: "1316:20:92";
                };
                readonly id: 22060;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1316:20:92";
            }, {
                readonly baseName: {
                    readonly id: 22061;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["1338:18:92"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 20423;
                    readonly src: "1338:18:92";
                };
                readonly id: 22062;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1338:18:92";
            }];
            readonly canonicalName: "MockMultiToken";
            readonly contractDependencies: readonly [20781];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [22375, 20423, 12682, 9917, 13842, 67058, 8062, 8623];
            readonly name: "MockMultiToken";
            readonly nameLocation: "1298:14:92";
            readonly scope: 22376;
            readonly usedErrors: readonly [7484, 7526, 7550, 7582, 67003];
            readonly usedEvents: readonly [7909, 7924, 7941, 7954, 7971, 7990, 8007, 8024, 8037, 8044, 8049, 8056, 8061, 8604, 8613, 8622];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 92;
};
//# sourceMappingURL=MockMultiToken.d.ts.map