export const HyperdriveRegistry = 
{
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "Unauthorized",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "governance",
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
          "name": "hyperdrive",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "data",
          "type": "uint256"
        }
      ],
      "name": "HyperdriveInfoUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hyperdriveInstance",
          "type": "address"
        }
      ],
      "name": "getHyperdriveInfo",
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
      "name": "governance",
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
          "name": "_hyperdriveInstance",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_data",
          "type": "uint256"
        }
      ],
      "name": "setHyperdriveInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_governance",
          "type": "address"
        }
      ],
      "name": "updateGovernance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610273806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea26469706673582212200202ca479ab48872bc1a6478e7a33a37590e3fd948493d5ef81bda4616b7081564736f6c63430008130033",
    "sourceMap": "296:1127:6:-:0;;;488:54;;;;;;;;;-1:-1:-1;512:10:6;:23;;-1:-1:-1;;;;;;512:23:6;525:10;512:23;;;296:1127;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea26469706673582212200202ca479ab48872bc1a6478e7a33a37590e3fd948493d5ef81bda4616b7081564736f6c63430008130033",
    "sourceMap": "296:1127:6:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1250:171;;;;;;:::i;:::-;-1:-1:-1;;;;;1378:36:6;1352:7;1378:36;;;:15;:36;;;;;;;1250:171;;;;529:25:161;;;517:2;502:18;1250:171:6;;;;;;;;390:25;;;;;-1:-1:-1;;;;;390:25:6;;;;;;-1:-1:-1;;;;;729:32:161;;;711:51;;699:2;684:18;390:25:6;565:203:161;719:180:6;;;;;;:::i;:::-;;:::i;:::-;;953:251;;;;;;:::i;:::-;;:::i;719:180::-;602:10;;-1:-1:-1;;;;;602:10:6;588;:24;584:63;;621:26;;-1:-1:-1;;;621:26:6;;;;;;;;;;;584:63;823:10:::1;:24:::0;;-1:-1:-1;;;;;;823:24:6::1;-1:-1:-1::0;;;;;823:24:6;::::1;::::0;;::::1;::::0;;862:30:::1;::::0;823:24;;862:30:::1;::::0;::::1;719:180:::0;:::o;953:251::-;602:10;;-1:-1:-1;;;;;602:10:6;588;:24;584:63;;621:26;;-1:-1:-1;;;621:26:6;;;;;;;;;;;584:63;-1:-1:-1;;;;;1089:36:6;::::1;;::::0;;;:15:::1;:36;::::0;;;;;;:44;;;1148:49;::::1;::::0;::::1;::::0;1128:5;529:25:161;;517:2;502:18;;383:177;1148:49:6::1;;;;;;;;953:251:::0;;:::o;14:173:161:-;82:20;;-1:-1:-1;;;;;131:31:161;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:186::-;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;:::-;333:39;192:186;-1:-1:-1;;;192:186:161:o;773:254::-;841:6;849;902:2;890:9;881:7;877:23;873:32;870:52;;;918:1;915;908:12;870:52;941:29;960:9;941:29;:::i;:::-;931:39;1017:2;1002:18;;;;989:32;;-1:-1:-1;;;773:254:161:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "getHyperdriveInfo(address)": "32ddcb88",
    "governance()": "5aa6e675",
    "setHyperdriveInfo(address,uint256)": "be44e71a",
    "updateGovernance(address)": "b2561263"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"}],\"name\":\"getHyperdriveInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"governance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getHyperdriveInfo(address)\":{\"params\":{\"_hyperdriveInstance\":\"The hyperdrive instance address.\"},\"returns\":{\"_0\":\"The uint256 value set by governance.\"}},\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the instance.\",\"_hyperdriveInstance\":\"The hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"getHyperdriveInfo(address)\":{\"notice\":\"Allows anyone to get the info for a hyperdrive instance.\"},\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance set arbitrary info for a hyperdrive instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/factory/HyperdriveRegistry.sol\":\"HyperdriveRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/factory/HyperdriveRegistry.sol\":{\"keccak256\":\"0x24239332fbb75589e34d9618fd723d237e8d52fa0b904891f042950babbabfa3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e8e6ecc7330956208802766c1fd76854adb7c05062f6bcba8f9a59303d49f186\",\"dweb:/ipfs/QmZ7NErfRUuwP3Nr6rPeHRNwmGrudXgS7Q3HjfuD5DUtUk\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0x1a442f311b166a99e67d7811b9b6af6f6cb66b6a6e31d47ebb59cc5820402170\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73b34b30e45b1ecd86c7dac2117427924293918372152d6b9d977e5cfe25fbcb\",\"dweb:/ipfs/QmTAwDbaYUFfBAtvrsgR1NpPJ7Q8SkHmPJaniy2i8rJFui\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IHyperdriveRegistry.sol\":{\"keccak256\":\"0x690370b026b4649bdbe7d5d946da709a105a06c714a26776bb4a94fc058158ea\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://664e92c4dc43d2d94b60fb2eb304236446ef15082cab6dd14b9a3faad721802f\",\"dweb:/ipfs/QmNmtBUb8hKrpYDVpUJTzTmwWMd46drQnSwRnC6ndskxnm\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "governance",
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
              "name": "hyperdrive",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "data",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "HyperdriveInfoUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_hyperdriveInstance",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getHyperdriveInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "governance",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_hyperdriveInstance",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_data",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setHyperdriveInfo"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_governance",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateGovernance"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getHyperdriveInfo(address)": {
            "params": {
              "_hyperdriveInstance": "The hyperdrive instance address."
            },
            "returns": {
              "_0": "The uint256 value set by governance."
            }
          },
          "setHyperdriveInfo(address,uint256)": {
            "params": {
              "_data": "The uint256 value to be set to convey information about the instance.",
              "_hyperdriveInstance": "The hyperdrive instance address."
            }
          },
          "updateGovernance(address)": {
            "params": {
              "_governance": "The new governance address."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "getHyperdriveInfo(address)": {
            "notice": "Allows anyone to get the info for a hyperdrive instance."
          },
          "setHyperdriveInfo(address,uint256)": {
            "notice": "Allows governance set arbitrary info for a hyperdrive instance."
          },
          "updateGovernance(address)": {
            "notice": "Allows governance to transfer the governance role."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/factory/HyperdriveRegistry.sol": "HyperdriveRegistry"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/factory/HyperdriveRegistry.sol": {
        "keccak256": "0x24239332fbb75589e34d9618fd723d237e8d52fa0b904891f042950babbabfa3",
        "urls": [
          "bzz-raw://e8e6ecc7330956208802766c1fd76854adb7c05062f6bcba8f9a59303d49f186",
          "dweb:/ipfs/QmZ7NErfRUuwP3Nr6rPeHRNwmGrudXgS7Q3HjfuD5DUtUk"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787",
        "urls": [
          "bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8",
          "dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d",
        "urls": [
          "bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85",
          "dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
        "keccak256": "0x1a442f311b166a99e67d7811b9b6af6f6cb66b6a6e31d47ebb59cc5820402170",
        "urls": [
          "bzz-raw://73b34b30e45b1ecd86c7dac2117427924293918372152d6b9d977e5cfe25fbcb",
          "dweb:/ipfs/QmTAwDbaYUFfBAtvrsgR1NpPJ7Q8SkHmPJaniy2i8rJFui"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b",
        "urls": [
          "bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17",
          "dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRegistry.sol": {
        "keccak256": "0x690370b026b4649bdbe7d5d946da709a105a06c714a26776bb4a94fc058158ea",
        "urls": [
          "bzz-raw://664e92c4dc43d2d94b60fb2eb304236446ef15082cab6dd14b9a3faad721802f",
          "dweb:/ipfs/QmNmtBUb8hKrpYDVpUJTzTmwWMd46drQnSwRnC6ndskxnm"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad",
        "urls": [
          "bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6",
          "dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb",
        "urls": [
          "bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f",
          "dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/factory/HyperdriveRegistry.sol",
    "id": 2628,
    "exportedSymbols": {
      "HyperdriveRegistry": [
        2627
      ],
      "IHyperdrive": [
        4675
      ],
      "IHyperdriveGovernedRegistry": [
        4877
      ],
      "IHyperdriveRegistry": [
        4955
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1385:6",
    "nodes": [
      {
        "id": 2532,
        "nodeType": "PragmaDirective",
        "src": "39:23:6",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 2534,
        "nodeType": "ImportDirective",
        "src": "64:60:6",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2628,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2533,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "73:11:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2536,
        "nodeType": "ImportDirective",
        "src": "125:92:6",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol",
        "file": "../interfaces/IHyperdriveGovernedRegistry.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2628,
        "sourceUnit": 4878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2535,
              "name": "IHyperdriveGovernedRegistry",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4877,
              "src": "134:27:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2538,
        "nodeType": "ImportDirective",
        "src": "218:76:6",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveRegistry.sol",
        "file": "../interfaces/IHyperdriveRegistry.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2628,
        "sourceUnit": 4956,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2537,
              "name": "IHyperdriveRegistry",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4955,
              "src": "227:19:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2627,
        "nodeType": "ContractDefinition",
        "src": "296:1127:6",
        "nodes": [
          {
            "id": 2544,
            "nodeType": "VariableDeclaration",
            "src": "390:25:6",
            "nodes": [],
            "constant": false,
            "functionSelector": "5aa6e675",
            "mutability": "mutable",
            "name": "governance",
            "nameLocation": "405:10:6",
            "scope": 2627,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 2543,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "390:7:6",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 2548,
            "nodeType": "VariableDeclaration",
            "src": "422:59:6",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_hyperdriveInfo",
            "nameLocation": "466:15:6",
            "scope": 2627,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 2547,
              "keyName": "hyperdrive",
              "keyNameLocation": "438:10:6",
              "keyType": {
                "id": 2545,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "430:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "422:43:6",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "data",
              "valueNameLocation": "460:4:6",
              "valueType": {
                "id": 2546,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "452:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 2557,
            "nodeType": "FunctionDefinition",
            "src": "488:54:6",
            "nodes": [],
            "body": {
              "id": 2556,
              "nodeType": "Block",
              "src": "502:40:6",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 2554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2551,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2544,
                      "src": "512:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 2552,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "525:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2553,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "529:6:6",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "525:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "512:23:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2555,
                  "nodeType": "ExpressionStatement",
                  "src": "512:23:6"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 2549,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "499:2:6"
            },
            "returnParameters": {
              "id": 2550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "502:0:6"
            },
            "scope": 2627,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 2571,
            "nodeType": "ModifierDefinition",
            "src": "548:117:6",
            "nodes": [],
            "body": {
              "id": 2570,
              "nodeType": "Block",
              "src": "574:91:6",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 2562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 2559,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "588:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2560,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "592:6:6",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "588:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 2561,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2544,
                      "src": "602:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "588:24:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2568,
                  "nodeType": "IfStatement",
                  "src": "584:63:6",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 2563,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4675,
                          "src": "621:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 2565,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "633:12:6",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4596,
                        "src": "621:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 2566,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "621:26:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2567,
                    "nodeType": "RevertStatement",
                    "src": "614:33:6"
                  }
                },
                {
                  "id": 2569,
                  "nodeType": "PlaceholderStatement",
                  "src": "657:1:6"
                }
              ]
            },
            "name": "onlyGovernance",
            "nameLocation": "557:14:6",
            "parameters": {
              "id": 2558,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "571:2:6"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 2589,
            "nodeType": "FunctionDefinition",
            "src": "719:180:6",
            "nodes": [],
            "body": {
              "id": 2588,
              "nodeType": "Block",
              "src": "813:86:6",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 2582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2580,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2544,
                      "src": "823:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2581,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2574,
                      "src": "836:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "823:24:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2583,
                  "nodeType": "ExpressionStatement",
                  "src": "823:24:6"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 2585,
                        "name": "_governance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2574,
                        "src": "880:11:6",
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
                      "id": 2584,
                      "name": "GovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4855,
                      "src": "862:17:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "862:30:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2587,
                  "nodeType": "EmitStatement",
                  "src": "857:35:6"
                }
              ]
            },
            "baseFunctions": [
              4868
            ],
            "documentation": {
              "id": 2572,
              "nodeType": "StructuredDocumentation",
              "src": "671:43:6",
              "text": "@inheritdoc IHyperdriveGovernedRegistry"
            },
            "functionSelector": "b2561263",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2578,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2577,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "798:14:6"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2571,
                  "src": "798:14:6"
                },
                "nodeType": "ModifierInvocation",
                "src": "798:14:6"
              }
            ],
            "name": "updateGovernance",
            "nameLocation": "728:16:6",
            "overrides": {
              "id": 2576,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "789:8:6"
            },
            "parameters": {
              "id": 2575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2574,
                  "mutability": "mutable",
                  "name": "_governance",
                  "nameLocation": "762:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 2589,
                  "src": "754:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2573,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "754:7:6",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "744:35:6"
            },
            "returnParameters": {
              "id": 2579,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "813:0:6"
            },
            "scope": 2627,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2612,
            "nodeType": "FunctionDefinition",
            "src": "953:251:6",
            "nodes": [],
            "body": {
              "id": 2611,
              "nodeType": "Block",
              "src": "1079:125:6",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 2604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2600,
                        "name": "_hyperdriveInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2548,
                        "src": "1089:15:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 2602,
                      "indexExpression": {
                        "id": 2601,
                        "name": "_hyperdriveInstance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2592,
                        "src": "1105:19:6",
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
                      "src": "1089:36:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2603,
                      "name": "_data",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2594,
                      "src": "1128:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1089:44:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2605,
                  "nodeType": "ExpressionStatement",
                  "src": "1089:44:6"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 2607,
                        "name": "_hyperdriveInstance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2592,
                        "src": "1170:19:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2608,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2594,
                        "src": "1191:5:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2606,
                      "name": "HyperdriveInfoUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4862,
                      "src": "1148:21:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1148:49:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2610,
                  "nodeType": "EmitStatement",
                  "src": "1143:54:6"
                }
              ]
            },
            "baseFunctions": [
              4876
            ],
            "documentation": {
              "id": 2590,
              "nodeType": "StructuredDocumentation",
              "src": "905:43:6",
              "text": "@inheritdoc IHyperdriveGovernedRegistry"
            },
            "functionSelector": "be44e71a",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2598,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2597,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "1064:14:6"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2571,
                  "src": "1064:14:6"
                },
                "nodeType": "ModifierInvocation",
                "src": "1064:14:6"
              }
            ],
            "name": "setHyperdriveInfo",
            "nameLocation": "962:17:6",
            "overrides": {
              "id": 2596,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1055:8:6"
            },
            "parameters": {
              "id": 2595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2592,
                  "mutability": "mutable",
                  "name": "_hyperdriveInstance",
                  "nameLocation": "997:19:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 2612,
                  "src": "989:27:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2591,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "989:7:6",
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
                  "id": 2594,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "1034:5:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 2612,
                  "src": "1026:13:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2593,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "979:66:6"
            },
            "returnParameters": {
              "id": 2599,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1079:0:6"
            },
            "scope": 2627,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2626,
            "nodeType": "FunctionDefinition",
            "src": "1250:171:6",
            "nodes": [],
            "body": {
              "id": 2625,
              "nodeType": "Block",
              "src": "1361:60:6",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 2621,
                      "name": "_hyperdriveInfo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2548,
                      "src": "1378:15:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 2623,
                    "indexExpression": {
                      "id": 2622,
                      "name": "_hyperdriveInstance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2615,
                      "src": "1394:19:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1378:36:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2620,
                  "id": 2624,
                  "nodeType": "Return",
                  "src": "1371:43:6"
                }
              ]
            },
            "baseFunctions": [
              4954
            ],
            "documentation": {
              "id": 2613,
              "nodeType": "StructuredDocumentation",
              "src": "1210:35:6",
              "text": "@inheritdoc IHyperdriveRegistry"
            },
            "functionSelector": "32ddcb88",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getHyperdriveInfo",
            "nameLocation": "1259:17:6",
            "overrides": {
              "id": 2617,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1334:8:6"
            },
            "parameters": {
              "id": 2616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2615,
                  "mutability": "mutable",
                  "name": "_hyperdriveInstance",
                  "nameLocation": "1294:19:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 2626,
                  "src": "1286:27:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2614,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:6",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1276:43:6"
            },
            "returnParameters": {
              "id": 2620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2619,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2626,
                  "src": "1352:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2618,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1352:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1351:9:6"
            },
            "scope": 2627,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2539,
              "name": "IHyperdriveRegistry",
              "nameLocations": [
                "331:19:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4955,
              "src": "331:19:6"
            },
            "id": 2540,
            "nodeType": "InheritanceSpecifier",
            "src": "331:19:6"
          },
          {
            "baseName": {
              "id": 2541,
              "name": "IHyperdriveGovernedRegistry",
              "nameLocations": [
                "356:27:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4877,
              "src": "356:27:6"
            },
            "id": 2542,
            "nodeType": "InheritanceSpecifier",
            "src": "356:27:6"
          }
        ],
        "canonicalName": "HyperdriveRegistry",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          2627,
          4877,
          4955
        ],
        "name": "HyperdriveRegistry",
        "nameLocation": "305:18:6",
        "scope": 2628,
        "usedErrors": [
          4596
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 6
} as const;
