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
    "object": "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610273806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea264697066735822122099bef49fa59298d7d336d99f22d0772467765808133f713d5c731af1d19e1e0864736f6c63430008140033",
    "sourceMap": "296:1176:22:-:0;;;497:54;;;;;;;;;-1:-1:-1;521:10:22;:23;;-1:-1:-1;;;;;;521:23:22;534:10;521:23;;;296:1176;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea264697066735822122099bef49fa59298d7d336d99f22d0772467765808133f713d5c731af1d19e1e0864736f6c63430008140033",
    "sourceMap": "296:1176:22:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1299:171;;;;;;:::i;:::-;-1:-1:-1;;;;;1427:36:22;1401:7;1427:36;;;:15;:36;;;;;;;1299:171;;;;529:25:184;;;517:2;502:18;1299:171:22;;;;;;;;390:25;;;;;-1:-1:-1;;;;;390:25:22;;;;;;-1:-1:-1;;;;;729:32:184;;;711:51;;699:2;684:18;390:25:22;565:203:184;768:180:22;;;;;;:::i;:::-;;:::i;:::-;;1002:251;;;;;;:::i;:::-;;:::i;768:180::-;611:10;;-1:-1:-1;;;;;611:10:22;597;:24;593:104;;644:42;;-1:-1:-1;;;644:42:22;;;;;;;;;;;593:104;872:10:::1;:24:::0;;-1:-1:-1;;;;;;872:24:22::1;-1:-1:-1::0;;;;;872:24:22;::::1;::::0;;::::1;::::0;;911:30:::1;::::0;872:24;;911:30:::1;::::0;::::1;768:180:::0;:::o;1002:251::-;611:10;;-1:-1:-1;;;;;611:10:22;597;:24;593:104;;644:42;;-1:-1:-1;;;644:42:22;;;;;;;;;;;593:104;-1:-1:-1;;;;;1138:36:22;::::1;;::::0;;;:15:::1;:36;::::0;;;;;;:44;;;1197:49;::::1;::::0;::::1;::::0;1177:5;529:25:184;;517:2;502:18;;383:177;1197:49:22::1;;;;;;;;1002:251:::0;;:::o;14:173:184:-;82:20;;-1:-1:-1;;;;;131:31:184;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:186::-;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;:::-;333:39;192:186;-1:-1:-1;;;192:186:184:o;773:254::-;841:6;849;902:2;890:9;881:7;877:23;873:32;870:52;;;918:1;915;908:12;870:52;941:29;960:9;941:29;:::i;:::-;931:39;1017:2;1002:18;;;;989:32;;-1:-1:-1;;;773:254:184:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "getHyperdriveInfo(address)": "32ddcb88",
    "governance()": "5aa6e675",
    "setHyperdriveInfo(address,uint256)": "be44e71a",
    "updateGovernance(address)": "b2561263"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"}],\"name\":\"getHyperdriveInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"governance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getHyperdriveInfo(address)\":{\"params\":{\"_hyperdriveInstance\":\"The hyperdrive instance address.\"},\"returns\":{\"_0\":\"The uint256 value set by governance.\"}},\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the instance.\",\"_hyperdriveInstance\":\"The hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"getHyperdriveInfo(address)\":{\"notice\":\"Allows anyone to get the info for a hyperdrive instance.\"},\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance set arbitrary info for a hyperdrive instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/factory/HyperdriveRegistry.sol\":\"HyperdriveRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/factory/HyperdriveRegistry.sol\":{\"keccak256\":\"0x6c378c57cdfc4987ddb1baa6e28ad020fca6d0f8749a2b2b214310032be20fef\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://905b35218a5214ec8757aa1bbbe36397a01b409fb09fa0a48c8dda88d26469da\",\"dweb:/ipfs/QmNx6aWTVj42Em7Jmconvwa4irBQUdXypYLjeU1bfzsNmL\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0x635a358f9e69308cf7e3087e233dfaa503c9b846e0f2f22d365f1c7bb2592965\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8be6d8d101f22a89e5c9a409f20c8d9630f72aa59ff60edf3f232f070eb94ad1\",\"dweb:/ipfs/QmVf9dG9Adt26pJFy5UwJ27y94WEcEdMqaskJivXF458AP\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IHyperdriveRegistry.sol\":{\"keccak256\":\"0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168\",\"dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
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
        "contracts/src/factory/HyperdriveRegistry.sol": "HyperdriveRegistry"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/factory/HyperdriveRegistry.sol": {
        "keccak256": "0x6c378c57cdfc4987ddb1baa6e28ad020fca6d0f8749a2b2b214310032be20fef",
        "urls": [
          "bzz-raw://905b35218a5214ec8757aa1bbbe36397a01b409fb09fa0a48c8dda88d26469da",
          "dweb:/ipfs/QmNx6aWTVj42Em7Jmconvwa4irBQUdXypYLjeU1bfzsNmL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3",
        "urls": [
          "bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398",
          "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16",
        "urls": [
          "bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240",
          "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97",
        "urls": [
          "bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1",
          "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveEvents.sol": {
        "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd",
        "urls": [
          "bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f",
          "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
        "keccak256": "0x635a358f9e69308cf7e3087e233dfaa503c9b846e0f2f22d365f1c7bb2592965",
        "urls": [
          "bzz-raw://8be6d8d101f22a89e5c9a409f20c8d9630f72aa59ff60edf3f232f070eb94ad1",
          "dweb:/ipfs/QmVf9dG9Adt26pJFy5UwJ27y94WEcEdMqaskJivXF458AP"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597",
        "urls": [
          "bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477",
          "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRegistry.sol": {
        "keccak256": "0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00",
        "urls": [
          "bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168",
          "dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC"
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
        "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a",
        "urls": [
          "bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3",
          "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenEvents.sol": {
        "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002",
        "urls": [
          "bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3",
          "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191",
        "urls": [
          "bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd",
          "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868",
        "urls": [
          "bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb",
          "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/factory/HyperdriveRegistry.sol",
    "id": 5430,
    "exportedSymbols": {
      "HyperdriveRegistry": [
        5429
      ],
      "IHyperdrive": [
        7411
      ],
      "IHyperdriveGovernedRegistry": [
        7997
      ],
      "IHyperdriveRegistry": [
        8082
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1434:22",
    "nodes": [
      {
        "id": 5333,
        "nodeType": "PragmaDirective",
        "src": "39:23:22",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 5335,
        "nodeType": "ImportDirective",
        "src": "64:60:22",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5430,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5334,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "73:11:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5337,
        "nodeType": "ImportDirective",
        "src": "125:92:22",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol",
        "file": "../interfaces/IHyperdriveGovernedRegistry.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5430,
        "sourceUnit": 7998,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5336,
              "name": "IHyperdriveGovernedRegistry",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7997,
              "src": "134:27:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5339,
        "nodeType": "ImportDirective",
        "src": "218:76:22",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveRegistry.sol",
        "file": "../interfaces/IHyperdriveRegistry.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5430,
        "sourceUnit": 8083,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5338,
              "name": "IHyperdriveRegistry",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8082,
              "src": "227:19:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5429,
        "nodeType": "ContractDefinition",
        "src": "296:1176:22",
        "nodes": [
          {
            "id": 5345,
            "nodeType": "VariableDeclaration",
            "src": "390:25:22",
            "nodes": [],
            "constant": false,
            "functionSelector": "5aa6e675",
            "mutability": "mutable",
            "name": "governance",
            "nameLocation": "405:10:22",
            "scope": 5429,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5344,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "390:7:22",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5349,
            "nodeType": "VariableDeclaration",
            "src": "422:68:22",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_hyperdriveInfo",
            "nameLocation": "475:15:22",
            "scope": 5429,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 5348,
              "keyName": "hyperdrive",
              "keyNameLocation": "438:10:22",
              "keyType": {
                "id": 5346,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "430:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "422:43:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "data",
              "valueNameLocation": "460:4:22",
              "valueType": {
                "id": 5347,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "452:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 5358,
            "nodeType": "FunctionDefinition",
            "src": "497:54:22",
            "nodes": [],
            "body": {
              "id": 5357,
              "nodeType": "Block",
              "src": "511:40:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5355,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5352,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5345,
                      "src": "521:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 5353,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "534:3:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 5354,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "538:6:22",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "534:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "521:23:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5356,
                  "nodeType": "ExpressionStatement",
                  "src": "521:23:22"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 5350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "508:2:22"
            },
            "returnParameters": {
              "id": 5351,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "511:0:22"
            },
            "scope": 5429,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 5373,
            "nodeType": "ModifierDefinition",
            "src": "557:157:22",
            "nodes": [],
            "body": {
              "id": 5372,
              "nodeType": "Block",
              "src": "583:131:22",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 5363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 5360,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "597:3:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 5361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "601:6:22",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "597:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 5362,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5345,
                      "src": "611:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "597:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5370,
                  "nodeType": "IfStatement",
                  "src": "593:104:22",
                  "trueBody": {
                    "id": 5369,
                    "nodeType": "Block",
                    "src": "623:74:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5364,
                              "name": "IHyperdriveGovernedRegistry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7997,
                              "src": "644:27:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveGovernedRegistry_$7997_$",
                                "typeString": "type(contract IHyperdriveGovernedRegistry)"
                              }
                            },
                            "id": 5366,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "672:12:22",
                            "memberName": "Unauthorized",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7982,
                            "src": "644:40:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5367,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "644:42:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5368,
                        "nodeType": "RevertStatement",
                        "src": "637:49:22"
                      }
                    ]
                  }
                },
                {
                  "id": 5371,
                  "nodeType": "PlaceholderStatement",
                  "src": "706:1:22"
                }
              ]
            },
            "name": "onlyGovernance",
            "nameLocation": "566:14:22",
            "parameters": {
              "id": 5359,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "580:2:22"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5391,
            "nodeType": "FunctionDefinition",
            "src": "768:180:22",
            "nodes": [],
            "body": {
              "id": 5390,
              "nodeType": "Block",
              "src": "862:86:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5384,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5382,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5345,
                      "src": "872:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5383,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5376,
                      "src": "885:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "872:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5385,
                  "nodeType": "ExpressionStatement",
                  "src": "872:24:22"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5387,
                        "name": "_governance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5376,
                        "src": "929:11:22",
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
                      "id": 5386,
                      "name": "GovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7972,
                      "src": "911:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "911:30:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5389,
                  "nodeType": "EmitStatement",
                  "src": "906:35:22"
                }
              ]
            },
            "baseFunctions": [
              7988
            ],
            "documentation": {
              "id": 5374,
              "nodeType": "StructuredDocumentation",
              "src": "720:43:22",
              "text": "@inheritdoc IHyperdriveGovernedRegistry"
            },
            "functionSelector": "b2561263",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5380,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5379,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "847:14:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5373,
                  "src": "847:14:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "847:14:22"
              }
            ],
            "name": "updateGovernance",
            "nameLocation": "777:16:22",
            "overrides": {
              "id": 5378,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "838:8:22"
            },
            "parameters": {
              "id": 5377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5376,
                  "mutability": "mutable",
                  "name": "_governance",
                  "nameLocation": "811:11:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 5391,
                  "src": "803:19:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5375,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "803:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "793:35:22"
            },
            "returnParameters": {
              "id": 5381,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "862:0:22"
            },
            "scope": 5429,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5414,
            "nodeType": "FunctionDefinition",
            "src": "1002:251:22",
            "nodes": [],
            "body": {
              "id": 5413,
              "nodeType": "Block",
              "src": "1128:125:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 5402,
                        "name": "_hyperdriveInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5349,
                        "src": "1138:15:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5404,
                      "indexExpression": {
                        "id": 5403,
                        "name": "_hyperdriveInstance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5394,
                        "src": "1154:19:22",
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
                      "src": "1138:36:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5405,
                      "name": "_data",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5396,
                      "src": "1177:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1138:44:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5407,
                  "nodeType": "ExpressionStatement",
                  "src": "1138:44:22"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5409,
                        "name": "_hyperdriveInstance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5394,
                        "src": "1219:19:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5410,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5396,
                        "src": "1240:5:22",
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
                      "id": 5408,
                      "name": "HyperdriveInfoUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7979,
                      "src": "1197:21:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 5411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1197:49:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5412,
                  "nodeType": "EmitStatement",
                  "src": "1192:54:22"
                }
              ]
            },
            "baseFunctions": [
              7996
            ],
            "documentation": {
              "id": 5392,
              "nodeType": "StructuredDocumentation",
              "src": "954:43:22",
              "text": "@inheritdoc IHyperdriveGovernedRegistry"
            },
            "functionSelector": "be44e71a",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5400,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5399,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "1113:14:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5373,
                  "src": "1113:14:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "1113:14:22"
              }
            ],
            "name": "setHyperdriveInfo",
            "nameLocation": "1011:17:22",
            "overrides": {
              "id": 5398,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1104:8:22"
            },
            "parameters": {
              "id": 5397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5394,
                  "mutability": "mutable",
                  "name": "_hyperdriveInstance",
                  "nameLocation": "1046:19:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 5414,
                  "src": "1038:27:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5393,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1038:7:22",
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
                  "id": 5396,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "1083:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 5414,
                  "src": "1075:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5395,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1075:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1028:66:22"
            },
            "returnParameters": {
              "id": 5401,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1128:0:22"
            },
            "scope": 5429,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5428,
            "nodeType": "FunctionDefinition",
            "src": "1299:171:22",
            "nodes": [],
            "body": {
              "id": 5427,
              "nodeType": "Block",
              "src": "1410:60:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 5423,
                      "name": "_hyperdriveInfo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5349,
                      "src": "1427:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 5425,
                    "indexExpression": {
                      "id": 5424,
                      "name": "_hyperdriveInstance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5417,
                      "src": "1443:19:22",
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
                    "src": "1427:36:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5422,
                  "id": 5426,
                  "nodeType": "Return",
                  "src": "1420:43:22"
                }
              ]
            },
            "baseFunctions": [
              8081
            ],
            "documentation": {
              "id": 5415,
              "nodeType": "StructuredDocumentation",
              "src": "1259:35:22",
              "text": "@inheritdoc IHyperdriveRegistry"
            },
            "functionSelector": "32ddcb88",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getHyperdriveInfo",
            "nameLocation": "1308:17:22",
            "overrides": {
              "id": 5419,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1383:8:22"
            },
            "parameters": {
              "id": 5418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5417,
                  "mutability": "mutable",
                  "name": "_hyperdriveInstance",
                  "nameLocation": "1343:19:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 5428,
                  "src": "1335:27:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5416,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1335:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1325:43:22"
            },
            "returnParameters": {
              "id": 5422,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5421,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5428,
                  "src": "1401:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5420,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1401:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1400:9:22"
            },
            "scope": 5429,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 5340,
              "name": "IHyperdriveRegistry",
              "nameLocations": [
                "331:19:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8082,
              "src": "331:19:22"
            },
            "id": 5341,
            "nodeType": "InheritanceSpecifier",
            "src": "331:19:22"
          },
          {
            "baseName": {
              "id": 5342,
              "name": "IHyperdriveGovernedRegistry",
              "nameLocations": [
                "356:27:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7997,
              "src": "356:27:22"
            },
            "id": 5343,
            "nodeType": "InheritanceSpecifier",
            "src": "356:27:22"
          }
        ],
        "canonicalName": "HyperdriveRegistry",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          5429,
          7997,
          8082
        ],
        "name": "HyperdriveRegistry",
        "nameLocation": "305:18:22",
        "scope": 5430,
        "usedErrors": [
          7982
        ],
        "usedEvents": [
          7972,
          7979
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 22
} as const;
