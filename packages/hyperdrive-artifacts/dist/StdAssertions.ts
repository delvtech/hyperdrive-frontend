export const StdAssertions = 
{
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "log",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "log_address",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "val",
          "type": "uint256[]"
        }
      ],
      "name": "log_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "int256[]",
          "name": "val",
          "type": "int256[]"
        }
      ],
      "name": "log_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "val",
          "type": "address[]"
        }
      ],
      "name": "log_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "log_bytes",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "log_bytes32",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "name": "log_int",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "val",
          "type": "address"
        }
      ],
      "name": "log_named_address",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "val",
          "type": "uint256[]"
        }
      ],
      "name": "log_named_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "int256[]",
          "name": "val",
          "type": "int256[]"
        }
      ],
      "name": "log_named_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "val",
          "type": "address[]"
        }
      ],
      "name": "log_named_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "val",
          "type": "bytes"
        }
      ],
      "name": "log_named_bytes",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "val",
          "type": "bytes32"
        }
      ],
      "name": "log_named_bytes32",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "val",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "decimals",
          "type": "uint256"
        }
      ],
      "name": "log_named_decimal_int",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "val",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "decimals",
          "type": "uint256"
        }
      ],
      "name": "log_named_decimal_uint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "val",
          "type": "int256"
        }
      ],
      "name": "log_named_int",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "val",
          "type": "string"
        }
      ],
      "name": "log_named_string",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "val",
          "type": "uint256"
        }
      ],
      "name": "log_named_uint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "log_string",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "log_uint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "logs",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "IS_TEST",
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
      "name": "failed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "IS_TEST()": "fa7626d4",
    "failed()": "ba414fa6"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"log_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"log_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"log_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"name\":\"log_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"val\",\"type\":\"address\"}],\"name\":\"log_named_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"val\",\"type\":\"bytes\"}],\"name\":\"log_named_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"val\",\"type\":\"bytes32\"}],\"name\":\"log_named_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"}],\"name\":\"log_named_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"val\",\"type\":\"string\"}],\"name\":\"log_named_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"name\":\"log_named_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"log_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"logs\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"IS_TEST\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"failed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdAssertions.sol\":\"StdAssertions\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/lib/ds-test/src/test.sol\":{\"keccak256\":\"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240\",\"dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k\"]},\"lib/forge-std/src/StdAssertions.sol\":{\"keccak256\":\"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b\",\"dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]}},\"version\":1}",
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
              "internalType": "string",
              "name": "",
              "type": "string",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_address",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256[]",
              "name": "val",
              "type": "uint256[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "int256[]",
              "name": "val",
              "type": "int256[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "val",
              "type": "address[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_bytes",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_bytes32",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "",
              "type": "int256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_int",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "val",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_address",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256[]",
              "name": "val",
              "type": "uint256[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "int256[]",
              "name": "val",
              "type": "int256[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "address[]",
              "name": "val",
              "type": "address[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "bytes",
              "name": "val",
              "type": "bytes",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_bytes",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "bytes32",
              "name": "val",
              "type": "bytes32",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_bytes32",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "int256",
              "name": "val",
              "type": "int256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "decimals",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_decimal_int",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "decimals",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_decimal_uint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "int256",
              "name": "val",
              "type": "int256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_int",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "string",
              "name": "val",
              "type": "string",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_string",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_uint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_string",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_uint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "logs",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "IS_TEST",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "failed",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
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
        "lib/forge-std/src/StdAssertions.sol": "StdAssertions"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/lib/ds-test/src/test.sol": {
        "keccak256": "0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b",
        "urls": [
          "bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240",
          "dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k"
        ],
        "license": "GPL-3.0-or-later"
      },
      "lib/forge-std/src/StdAssertions.sol": {
        "keccak256": "0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60",
        "urls": [
          "bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b",
          "dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdMath.sol": {
        "keccak256": "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
        "urls": [
          "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
          "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/StdAssertions.sol",
    "id": 26568,
    "exportedSymbols": {
      "DSTest": [
        25035
      ],
      "StdAssertions": [
        26567
      ],
      "stdMath": [
        31113
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:13639:97",
    "nodes": [
      {
        "id": 25151,
        "nodeType": "PragmaDirective",
        "src": "32:31:97",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".2",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 25153,
        "nodeType": "ImportDirective",
        "src": "65:40:97",
        "nodes": [],
        "absolutePath": "lib/forge-std/lib/ds-test/src/test.sol",
        "file": "ds-test/test.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 26568,
        "sourceUnit": 25036,
        "symbolAliases": [
          {
            "foreign": {
              "id": 25152,
              "name": "DSTest",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 25035,
              "src": "73:6:97",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 25155,
        "nodeType": "ImportDirective",
        "src": "106:38:97",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/StdMath.sol",
        "file": "./StdMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 26568,
        "sourceUnit": 31114,
        "symbolAliases": [
          {
            "foreign": {
              "id": 25154,
              "name": "stdMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 31113,
              "src": "114:7:97",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 26567,
        "nodeType": "ContractDefinition",
        "src": "146:13524:97",
        "nodes": [
          {
            "id": 25162,
            "nodeType": "EventDefinition",
            "src": "194:31:97",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "fb102865d50addddf69da9b5aa1bced66c80cf869a5c8d0471a467e18ce9cab1",
            "name": "log_array",
            "nameLocation": "200:9:97",
            "parameters": {
              "id": 25161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25160,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "220:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25162,
                  "src": "210:13:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25158,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "210:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25159,
                    "nodeType": "ArrayTypeName",
                    "src": "210:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "209:15:97"
            }
          },
          {
            "id": 25167,
            "nodeType": "EventDefinition",
            "src": "230:30:97",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "890a82679b470f2bd82816ed9b161f97d8b967f37fa3647c21d5bf39749e2dd5",
            "name": "log_array",
            "nameLocation": "236:9:97",
            "parameters": {
              "id": 25166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25165,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "255:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25167,
                  "src": "246:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25163,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "246:6:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 25164,
                    "nodeType": "ArrayTypeName",
                    "src": "246:8:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "245:14:97"
            }
          },
          {
            "id": 25172,
            "nodeType": "EventDefinition",
            "src": "265:31:97",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "40e1840f5769073d61bd01372d9b75baa9842d5629a0c99ff103be1178a8e9e2",
            "name": "log_array",
            "nameLocation": "271:9:97",
            "parameters": {
              "id": 25171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25170,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "291:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25172,
                  "src": "281:13:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25168,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "281:7:97",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 25169,
                    "nodeType": "ArrayTypeName",
                    "src": "281:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "280:15:97"
            }
          },
          {
            "id": 25179,
            "nodeType": "EventDefinition",
            "src": "301:49:97",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "00aaa39c9ffb5f567a4534380c737075702e1f7f14107fc95328e3b56c0325fb",
            "name": "log_named_array",
            "nameLocation": "307:15:97",
            "parameters": {
              "id": 25178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25174,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "330:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25179,
                  "src": "323:10:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25173,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "323:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25177,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "345:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25179,
                  "src": "335:13:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25175,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "335:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25176,
                    "nodeType": "ArrayTypeName",
                    "src": "335:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "322:27:97"
            }
          },
          {
            "id": 25186,
            "nodeType": "EventDefinition",
            "src": "355:48:97",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a73eda09662f46dde729be4611385ff34fe6c44fbbc6f7e17b042b59a3445b57",
            "name": "log_named_array",
            "nameLocation": "361:15:97",
            "parameters": {
              "id": 25185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25181,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "384:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25186,
                  "src": "377:10:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25180,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25184,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "398:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25186,
                  "src": "389:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25182,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "389:6:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 25183,
                    "nodeType": "ArrayTypeName",
                    "src": "389:8:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "376:26:97"
            }
          },
          {
            "id": 25193,
            "nodeType": "EventDefinition",
            "src": "408:49:97",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "3bcfb2ae2e8d132dd1fce7cf278a9a19756a9fceabe470df3bdabb4bc577d1bd",
            "name": "log_named_array",
            "nameLocation": "414:15:97",
            "parameters": {
              "id": 25192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25188,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "437:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25193,
                  "src": "430:10:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25187,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "430:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25191,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "452:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25193,
                  "src": "442:13:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25189,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "442:7:97",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 25190,
                    "nodeType": "ArrayTypeName",
                    "src": "442:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "429:27:97"
            }
          },
          {
            "id": 25207,
            "nodeType": "FunctionDefinition",
            "src": "463:118:97",
            "nodes": [],
            "body": {
              "id": 25206,
              "nodeType": "Block",
              "src": "513:68:97",
              "nodes": [],
              "statements": [
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "hexValue": "4572726f72",
                        "id": 25199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "545:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                          "typeString": "literal_string \"Error\""
                        },
                        "value": "Error"
                      },
                      {
                        "id": 25200,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25195,
                        "src": "554:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                          "typeString": "literal_string \"Error\""
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 25198,
                      "name": "log_named_string",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22829,
                      "src": "528:16:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 25201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:30:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25202,
                  "nodeType": "EmitStatement",
                  "src": "523:35:97"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 25203,
                      "name": "fail",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25207,
                        22960
                      ],
                      "referencedDeclaration": 22960,
                      "src": "568:4:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 25204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "568:6:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25205,
                  "nodeType": "ExpressionStatement",
                  "src": "568:6:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fail",
            "nameLocation": "472:4:97",
            "parameters": {
              "id": 25196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25195,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "491:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25207,
                  "src": "477:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25194,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "476:19:97"
            },
            "returnParameters": {
              "id": 25197,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "513:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25218,
            "nodeType": "FunctionDefinition",
            "src": "587:83:97",
            "nodes": [],
            "body": {
              "id": 25217,
              "nodeType": "Block",
              "src": "636:34:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25214,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "657:5:97",
                        "subExpression": {
                          "id": 25213,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25209,
                          "src": "658:4:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 25212,
                      "name": "assertTrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23013,
                        23034
                      ],
                      "referencedDeclaration": 23013,
                      "src": "646:10:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 25215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "646:17:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25216,
                  "nodeType": "ExpressionStatement",
                  "src": "646:17:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertFalse",
            "nameLocation": "596:11:97",
            "parameters": {
              "id": 25210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25209,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "613:4:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25218,
                  "src": "608:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25208,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "607:11:97"
            },
            "returnParameters": {
              "id": 25211,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "636:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25232,
            "nodeType": "FunctionDefinition",
            "src": "676:107:97",
            "nodes": [],
            "body": {
              "id": 25231,
              "nodeType": "Block",
              "src": "744:39:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "765:5:97",
                        "subExpression": {
                          "id": 25226,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25220,
                          "src": "766:4:97",
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
                      {
                        "id": 25228,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25222,
                        "src": "772:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 25225,
                      "name": "assertTrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23013,
                        23034
                      ],
                      "referencedDeclaration": 23034,
                      "src": "754:10:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 25229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "754:22:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25230,
                  "nodeType": "ExpressionStatement",
                  "src": "754:22:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertFalse",
            "nameLocation": "685:11:97",
            "parameters": {
              "id": 25223,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25220,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "702:4:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25232,
                  "src": "697:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25219,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25222,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "722:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25232,
                  "src": "708:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25221,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "696:30:97"
            },
            "returnParameters": {
              "id": 25224,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "744:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25268,
            "nodeType": "FunctionDefinition",
            "src": "789:312:97",
            "nodes": [],
            "body": {
              "id": 25267,
              "nodeType": "Block",
              "src": "840:261:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 25241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25239,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25234,
                      "src": "854:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 25240,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25236,
                      "src": "859:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "854:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25266,
                  "nodeType": "IfStatement",
                  "src": "850:245:97",
                  "trueBody": {
                    "id": 25265,
                    "nodeType": "Block",
                    "src": "862:233:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b626f6f6c5d",
                              "id": 25243,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "885:36:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_8b48ec9ac4dc7123ad32509232067c63ebae61bff18d5e06bf4dea2a25240ed2",
                                "typeString": "literal_string \"Error: a == b not satisfied [bool]\""
                              },
                              "value": "Error: a == b not satisfied [bool]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_8b48ec9ac4dc7123ad32509232067c63ebae61bff18d5e06bf4dea2a25240ed2",
                                "typeString": "literal_string \"Error: a == b not satisfied [bool]\""
                              }
                            ],
                            "id": 25242,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "881:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 25244,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "881:41:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25245,
                        "nodeType": "EmitStatement",
                        "src": "876:46:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 25247,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "958:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "condition": {
                                "id": 25248,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25234,
                                "src": "972:1:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "66616c7365",
                                "id": 25250,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "985:7:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ba9154e0baa69c78e0ca563b867df81bae9d177c4ea1452c35c84386a70f0f7a",
                                  "typeString": "literal_string \"false\""
                                },
                                "value": "false"
                              },
                              "id": 25251,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "972:20:97",
                              "trueExpression": {
                                "hexValue": "74727565",
                                "id": 25249,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "976:6:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6273151f959616268004b58dbb21e5c851b7b8d04498b4aabee12291d22fc034",
                                  "typeString": "literal_string \"true\""
                                },
                                "value": "true"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25246,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "941:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "941:52:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25253,
                        "nodeType": "EmitStatement",
                        "src": "936:57:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 25255,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1029:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "condition": {
                                "id": 25256,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25236,
                                "src": "1043:1:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "66616c7365",
                                "id": 25258,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1056:7:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ba9154e0baa69c78e0ca563b867df81bae9d177c4ea1452c35c84386a70f0f7a",
                                  "typeString": "literal_string \"false\""
                                },
                                "value": "false"
                              },
                              "id": 25259,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "1043:20:97",
                              "trueExpression": {
                                "hexValue": "74727565",
                                "id": 25257,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1047:6:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6273151f959616268004b58dbb21e5c851b7b8d04498b4aabee12291d22fc034",
                                  "typeString": "literal_string \"true\""
                                },
                                "value": "true"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25254,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "1012:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25260,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1012:52:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25261,
                        "nodeType": "EmitStatement",
                        "src": "1007:57:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 25262,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "1078:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 25263,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1078:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25264,
                        "nodeType": "ExpressionStatement",
                        "src": "1078:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "798:8:97",
            "parameters": {
              "id": 25237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25234,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "812:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25268,
                  "src": "807:6:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25233,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "807:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25236,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "820:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25268,
                  "src": "815:6:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25235,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "815:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "806:16:97"
            },
            "returnParameters": {
              "id": 25238,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "840:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25293,
            "nodeType": "FunctionDefinition",
            "src": "1107:186:97",
            "nodes": [],
            "body": {
              "id": 25292,
              "nodeType": "Block",
              "src": "1177:116:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 25279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25277,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25270,
                      "src": "1191:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 25278,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25272,
                      "src": "1196:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1191:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25291,
                  "nodeType": "IfStatement",
                  "src": "1187:100:97",
                  "trueBody": {
                    "id": 25290,
                    "nodeType": "Block",
                    "src": "1199:88:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 25281,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1235:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 25282,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25274,
                              "src": "1244:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25280,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "1218:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25283,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1218:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25284,
                        "nodeType": "EmitStatement",
                        "src": "1213:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 25286,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25270,
                              "src": "1271:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "id": 25287,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25272,
                              "src": "1274:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 25285,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25268,
                              25293,
                              25306,
                              25322,
                              25364,
                              25406,
                              25448,
                              25485,
                              25522,
                              25559,
                              23064,
                              23089,
                              23119,
                              23144,
                              23203,
                              23228,
                              23258,
                              23283,
                              24756,
                              24791
                            ],
                            "referencedDeclaration": 25268,
                            "src": "1262:8:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_bool_$returns$__$",
                              "typeString": "function (bool,bool)"
                            }
                          },
                          "id": 25288,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1262:14:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25289,
                        "nodeType": "ExpressionStatement",
                        "src": "1262:14:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1116:8:97",
            "parameters": {
              "id": 25275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25270,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1130:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25293,
                  "src": "1125:6:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25269,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1125:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25272,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1138:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25293,
                  "src": "1133:6:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25271,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1133:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25274,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "1155:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25293,
                  "src": "1141:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25273,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1124:35:97"
            },
            "returnParameters": {
              "id": 25276,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1177:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25306,
            "nodeType": "FunctionDefinition",
            "src": "1299:99:97",
            "nodes": [],
            "body": {
              "id": 25305,
              "nodeType": "Block",
              "src": "1366:32:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25301,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25295,
                        "src": "1386:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 25302,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25297,
                        "src": "1389:1:97",
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
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 25300,
                      "name": "assertEq0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        24950,
                        24977
                      ],
                      "referencedDeclaration": 24950,
                      "src": "1376:9:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory,bytes memory)"
                      }
                    },
                    "id": 25303,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1376:15:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25304,
                  "nodeType": "ExpressionStatement",
                  "src": "1376:15:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1308:8:97",
            "parameters": {
              "id": 25298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25295,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1330:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25306,
                  "src": "1317:14:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 25294,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1317:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25297,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1346:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25306,
                  "src": "1333:14:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 25296,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1333:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1316:32:97"
            },
            "returnParameters": {
              "id": 25299,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1366:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25322,
            "nodeType": "FunctionDefinition",
            "src": "1404:123:97",
            "nodes": [],
            "body": {
              "id": 25321,
              "nodeType": "Block",
              "src": "1490:37:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25316,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25308,
                        "src": "1510:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 25317,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25310,
                        "src": "1513:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 25318,
                        "name": "err",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25312,
                        "src": "1516:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 25315,
                      "name": "assertEq0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        24950,
                        24977
                      ],
                      "referencedDeclaration": 24977,
                      "src": "1500:9:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory,bytes memory,string memory)"
                      }
                    },
                    "id": 25319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1500:20:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25320,
                  "nodeType": "ExpressionStatement",
                  "src": "1500:20:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1413:8:97",
            "parameters": {
              "id": 25313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25308,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1435:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25322,
                  "src": "1422:14:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 25307,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1422:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25310,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1451:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25322,
                  "src": "1438:14:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 25309,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1438:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25312,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "1468:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25322,
                  "src": "1454:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25311,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1454:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1421:51:97"
            },
            "returnParameters": {
              "id": 25314,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1490:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25364,
            "nodeType": "FunctionDefinition",
            "src": "1533:344:97",
            "nodes": [],
            "body": {
              "id": 25363,
              "nodeType": "Block",
              "src": "1608:269:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 25343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25334,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25325,
                              "src": "1643:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25332,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1632:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25333,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1636:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1632:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25335,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1632:13:97",
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
                        "id": 25331,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1622:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25336,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1622:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25340,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25328,
                              "src": "1671:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25338,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1660:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25339,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1664:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1660:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1660:13:97",
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
                        "id": 25337,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1650:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25342,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1650:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1622:52:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25362,
                  "nodeType": "IfStatement",
                  "src": "1618:253:97",
                  "trueBody": {
                    "id": 25361,
                    "nodeType": "Block",
                    "src": "1676:195:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e745b5d5d",
                              "id": 25345,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1699:38:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_521d63632bd73b6c06245b96e4e8f1b767ee309607c65899b409e5c9e6c384eb",
                                "typeString": "literal_string \"Error: a == b not satisfied [uint[]]\""
                              },
                              "value": "Error: a == b not satisfied [uint[]]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_521d63632bd73b6c06245b96e4e8f1b767ee309607c65899b409e5c9e6c384eb",
                                "typeString": "literal_string \"Error: a == b not satisfied [uint[]]\""
                              }
                            ],
                            "id": 25344,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "1695:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 25346,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1695:43:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25347,
                        "nodeType": "EmitStatement",
                        "src": "1690:48:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 25349,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1773:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 25350,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25325,
                              "src": "1787:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "id": 25348,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25179,
                              25186,
                              25193
                            ],
                            "referencedDeclaration": 25179,
                            "src": "1757:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,uint256[] memory)"
                            }
                          },
                          "id": 25351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1757:32:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25352,
                        "nodeType": "EmitStatement",
                        "src": "1752:37:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 25354,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1824:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 25355,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25328,
                              "src": "1838:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "id": 25353,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25179,
                              25186,
                              25193
                            ],
                            "referencedDeclaration": 25179,
                            "src": "1808:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,uint256[] memory)"
                            }
                          },
                          "id": 25356,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1808:32:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25357,
                        "nodeType": "EmitStatement",
                        "src": "1803:37:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 25358,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "1854:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 25359,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1854:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25360,
                        "nodeType": "ExpressionStatement",
                        "src": "1854:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1542:8:97",
            "parameters": {
              "id": 25329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25325,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1568:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25364,
                  "src": "1551:18:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25323,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1551:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25324,
                    "nodeType": "ArrayTypeName",
                    "src": "1551:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25328,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1588:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25364,
                  "src": "1571:18:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25326,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1571:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25327,
                    "nodeType": "ArrayTypeName",
                    "src": "1571:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1550:40:97"
            },
            "returnParameters": {
              "id": 25330,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1608:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25406,
            "nodeType": "FunctionDefinition",
            "src": "1883:341:97",
            "nodes": [],
            "body": {
              "id": 25405,
              "nodeType": "Block",
              "src": "1956:268:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 25385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25376,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25367,
                              "src": "1991:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25374,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1980:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25375,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1984:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "1980:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1980:13:97",
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
                        "id": 25373,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1970:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25378,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1970:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25382,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25370,
                              "src": "2019:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25380,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2008:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25381,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2012:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2008:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2008:13:97",
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
                        "id": 25379,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1998:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1998:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1970:52:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25404,
                  "nodeType": "IfStatement",
                  "src": "1966:252:97",
                  "trueBody": {
                    "id": 25403,
                    "nodeType": "Block",
                    "src": "2024:194:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b696e745b5d5d",
                              "id": 25387,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2047:37:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_6c8a6638f7c95c9ee18ffcfc37ffe04d6270c2db7493e9b7a14add834054a5f5",
                                "typeString": "literal_string \"Error: a == b not satisfied [int[]]\""
                              },
                              "value": "Error: a == b not satisfied [int[]]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_6c8a6638f7c95c9ee18ffcfc37ffe04d6270c2db7493e9b7a14add834054a5f5",
                                "typeString": "literal_string \"Error: a == b not satisfied [int[]]\""
                              }
                            ],
                            "id": 25386,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "2043:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 25388,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2043:42:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25389,
                        "nodeType": "EmitStatement",
                        "src": "2038:47:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 25391,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2120:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 25392,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25367,
                              "src": "2134:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "id": 25390,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25179,
                              25186,
                              25193
                            ],
                            "referencedDeclaration": 25186,
                            "src": "2104:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,int256[] memory)"
                            }
                          },
                          "id": 25393,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2104:32:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25394,
                        "nodeType": "EmitStatement",
                        "src": "2099:37:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 25396,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2171:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 25397,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25370,
                              "src": "2185:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "id": 25395,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25179,
                              25186,
                              25193
                            ],
                            "referencedDeclaration": 25186,
                            "src": "2155:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,int256[] memory)"
                            }
                          },
                          "id": 25398,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2155:32:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25399,
                        "nodeType": "EmitStatement",
                        "src": "2150:37:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 25400,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "2201:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 25401,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2201:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25402,
                        "nodeType": "ExpressionStatement",
                        "src": "2201:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "1892:8:97",
            "parameters": {
              "id": 25371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25367,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1917:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25406,
                  "src": "1901:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25365,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1901:6:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 25366,
                    "nodeType": "ArrayTypeName",
                    "src": "1901:8:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25370,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1936:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25406,
                  "src": "1920:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25368,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1920:6:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 25369,
                    "nodeType": "ArrayTypeName",
                    "src": "1920:8:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1900:38:97"
            },
            "returnParameters": {
              "id": 25372,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1956:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25448,
            "nodeType": "FunctionDefinition",
            "src": "2230:347:97",
            "nodes": [],
            "body": {
              "id": 25447,
              "nodeType": "Block",
              "src": "2305:272:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 25427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25418,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25409,
                              "src": "2340:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25416,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2329:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25417,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2333:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2329:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25419,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2329:13:97",
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
                        "id": 25415,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2319:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25420,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2319:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25424,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25412,
                              "src": "2368:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25422,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2357:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25423,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2361:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2357:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25425,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2357:13:97",
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
                        "id": 25421,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2347:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25426,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2347:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2319:52:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25446,
                  "nodeType": "IfStatement",
                  "src": "2315:256:97",
                  "trueBody": {
                    "id": 25445,
                    "nodeType": "Block",
                    "src": "2373:198:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061203d3d2062206e6f7420736174697366696564205b616464726573735b5d5d",
                              "id": 25429,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2396:41:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_18b6dc04296758144a4e9b271bd3d79214335bb195df00f93d1706586d5041f8",
                                "typeString": "literal_string \"Error: a == b not satisfied [address[]]\""
                              },
                              "value": "Error: a == b not satisfied [address[]]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_18b6dc04296758144a4e9b271bd3d79214335bb195df00f93d1706586d5041f8",
                                "typeString": "literal_string \"Error: a == b not satisfied [address[]]\""
                              }
                            ],
                            "id": 25428,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "2392:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 25430,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2392:46:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25431,
                        "nodeType": "EmitStatement",
                        "src": "2387:51:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 25433,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2473:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 25434,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25409,
                              "src": "2487:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "id": 25432,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25179,
                              25186,
                              25193
                            ],
                            "referencedDeclaration": 25193,
                            "src": "2457:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,address[] memory)"
                            }
                          },
                          "id": 25435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2457:32:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25436,
                        "nodeType": "EmitStatement",
                        "src": "2452:37:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 25438,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2524:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 25439,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25412,
                              "src": "2538:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "id": 25437,
                            "name": "log_named_array",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25179,
                              25186,
                              25193
                            ],
                            "referencedDeclaration": 25193,
                            "src": "2508:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,address[] memory)"
                            }
                          },
                          "id": 25440,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2508:32:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25441,
                        "nodeType": "EmitStatement",
                        "src": "2503:37:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 25442,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "2554:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 25443,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2554:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25444,
                        "nodeType": "ExpressionStatement",
                        "src": "2554:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "2239:8:97",
            "parameters": {
              "id": 25413,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25409,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2265:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25448,
                  "src": "2248:18:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25407,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2248:7:97",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 25408,
                    "nodeType": "ArrayTypeName",
                    "src": "2248:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25412,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2285:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25448,
                  "src": "2268:18:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25410,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2268:7:97",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 25411,
                    "nodeType": "ArrayTypeName",
                    "src": "2268:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2247:40:97"
            },
            "returnParameters": {
              "id": 25414,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2305:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25485,
            "nodeType": "FunctionDefinition",
            "src": "2583:256:97",
            "nodes": [],
            "body": {
              "id": 25484,
              "nodeType": "Block",
              "src": "2677:162:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 25471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25462,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25451,
                              "src": "2712:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25460,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2701:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25461,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2705:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2701:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25463,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2701:13:97",
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
                        "id": 25459,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2691:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25464,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2691:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25468,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25454,
                              "src": "2740:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25466,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2729:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25467,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2733:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2729:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25469,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2729:13:97",
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
                        "id": 25465,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2719:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25470,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2719:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2691:52:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25483,
                  "nodeType": "IfStatement",
                  "src": "2687:146:97",
                  "trueBody": {
                    "id": 25482,
                    "nodeType": "Block",
                    "src": "2745:88:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 25473,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2781:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 25474,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25456,
                              "src": "2790:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25472,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "2764:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25475,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2764:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25476,
                        "nodeType": "EmitStatement",
                        "src": "2759:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 25478,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25451,
                              "src": "2817:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            {
                              "id": 25479,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25454,
                              "src": "2820:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              },
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "id": 25477,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25268,
                              25293,
                              25306,
                              25322,
                              25364,
                              25406,
                              25448,
                              25485,
                              25522,
                              25559,
                              23064,
                              23089,
                              23119,
                              23144,
                              23203,
                              23228,
                              23258,
                              23283,
                              24756,
                              24791
                            ],
                            "referencedDeclaration": 25364,
                            "src": "2808:8:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (uint256[] memory,uint256[] memory)"
                            }
                          },
                          "id": 25480,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2808:14:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25481,
                        "nodeType": "ExpressionStatement",
                        "src": "2808:14:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "2592:8:97",
            "parameters": {
              "id": 25457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25451,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2618:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25485,
                  "src": "2601:18:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25449,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2601:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25450,
                    "nodeType": "ArrayTypeName",
                    "src": "2601:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25454,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2638:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25485,
                  "src": "2621:18:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25452,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2621:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25453,
                    "nodeType": "ArrayTypeName",
                    "src": "2621:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25456,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2655:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25485,
                  "src": "2641:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25455,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2641:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2600:59:97"
            },
            "returnParameters": {
              "id": 25458,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2677:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25522,
            "nodeType": "FunctionDefinition",
            "src": "2845:254:97",
            "nodes": [],
            "body": {
              "id": 25521,
              "nodeType": "Block",
              "src": "2937:162:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 25508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25499,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25488,
                              "src": "2972:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25497,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2961:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25498,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2965:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2961:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25500,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2961:13:97",
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
                        "id": 25496,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2951:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25501,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2951:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25505,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25491,
                              "src": "3000:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25503,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2989:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25504,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2993:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "2989:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25506,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2989:13:97",
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
                        "id": 25502,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "2979:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25507,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2979:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2951:52:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25520,
                  "nodeType": "IfStatement",
                  "src": "2947:146:97",
                  "trueBody": {
                    "id": 25519,
                    "nodeType": "Block",
                    "src": "3005:88:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 25510,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3041:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 25511,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25493,
                              "src": "3050:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25509,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "3024:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25512,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3024:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25513,
                        "nodeType": "EmitStatement",
                        "src": "3019:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 25515,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25488,
                              "src": "3077:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            },
                            {
                              "id": 25516,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25491,
                              "src": "3080:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              },
                              {
                                "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                "typeString": "int256[] memory"
                              }
                            ],
                            "id": 25514,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25268,
                              25293,
                              25306,
                              25322,
                              25364,
                              25406,
                              25448,
                              25485,
                              25522,
                              25559,
                              23064,
                              23089,
                              23119,
                              23144,
                              23203,
                              23228,
                              23258,
                              23283,
                              24756,
                              24791
                            ],
                            "referencedDeclaration": 25406,
                            "src": "3068:8:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_int256_$dyn_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (int256[] memory,int256[] memory)"
                            }
                          },
                          "id": 25517,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3068:14:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25518,
                        "nodeType": "ExpressionStatement",
                        "src": "3068:14:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "2854:8:97",
            "parameters": {
              "id": 25494,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25488,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2879:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25522,
                  "src": "2863:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25486,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2863:6:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 25487,
                    "nodeType": "ArrayTypeName",
                    "src": "2863:8:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25491,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2898:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25522,
                  "src": "2882:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25489,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2882:6:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 25490,
                    "nodeType": "ArrayTypeName",
                    "src": "2882:8:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25493,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2915:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25522,
                  "src": "2901:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25492,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2901:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2862:57:97"
            },
            "returnParameters": {
              "id": 25495,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2937:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25559,
            "nodeType": "FunctionDefinition",
            "src": "3105:256:97",
            "nodes": [],
            "body": {
              "id": 25558,
              "nodeType": "Block",
              "src": "3199:162:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 25545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25536,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25525,
                              "src": "3234:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25534,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "3223:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25535,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3227:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "3223:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25537,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3223:13:97",
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
                        "id": 25533,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3213:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25538,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3213:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 25542,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25528,
                              "src": "3262:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "expression": {
                              "id": 25540,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "3251:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 25541,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3255:6:97",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "3251:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 25543,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3251:13:97",
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
                        "id": 25539,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3241:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 25544,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3241:24:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "3213:52:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25557,
                  "nodeType": "IfStatement",
                  "src": "3209:146:97",
                  "trueBody": {
                    "id": 25556,
                    "nodeType": "Block",
                    "src": "3267:88:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 25547,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3303:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 25548,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25530,
                              "src": "3312:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25546,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "3286:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25549,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3286:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25550,
                        "nodeType": "EmitStatement",
                        "src": "3281:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 25552,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25525,
                              "src": "3339:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            {
                              "id": 25553,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25528,
                              "src": "3342:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              },
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            ],
                            "id": 25551,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25268,
                              25293,
                              25306,
                              25322,
                              25364,
                              25406,
                              25448,
                              25485,
                              25522,
                              25559,
                              23064,
                              23089,
                              23119,
                              23144,
                              23203,
                              23228,
                              23258,
                              23283,
                              24756,
                              24791
                            ],
                            "referencedDeclaration": 25448,
                            "src": "3330:8:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (address[] memory,address[] memory)"
                            }
                          },
                          "id": 25554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3330:14:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25555,
                        "nodeType": "ExpressionStatement",
                        "src": "3330:14:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEq",
            "nameLocation": "3114:8:97",
            "parameters": {
              "id": 25531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25525,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3140:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25559,
                  "src": "3123:18:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25523,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3123:7:97",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 25524,
                    "nodeType": "ArrayTypeName",
                    "src": "3123:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25528,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3160:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25559,
                  "src": "3143:18:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25526,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3143:7:97",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 25527,
                    "nodeType": "ArrayTypeName",
                    "src": "3143:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25530,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "3177:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25559,
                  "src": "3163:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25529,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3163:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3122:59:97"
            },
            "returnParameters": {
              "id": 25532,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3199:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25578,
            "nodeType": "FunctionDefinition",
            "src": "3388:110:97",
            "nodes": [],
            "body": {
              "id": 25577,
              "nodeType": "Block",
              "src": "3449:49:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25569,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25561,
                            "src": "3476:1:97",
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
                            }
                          ],
                          "id": 25568,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3468:7:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 25567,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3468:7:97",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 25570,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3468:10:97",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 25573,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25563,
                            "src": "3488:1:97",
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
                            }
                          ],
                          "id": 25572,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3480:7:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 25571,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3480:7:97",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 25574,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3480:10:97",
                        "tryCall": false,
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 25566,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25268,
                        25293,
                        25306,
                        25322,
                        25364,
                        25406,
                        25448,
                        25485,
                        25522,
                        25559,
                        23064,
                        23089,
                        23119,
                        23144,
                        23203,
                        23228,
                        23258,
                        23283,
                        24756,
                        24791
                      ],
                      "referencedDeclaration": 23258,
                      "src": "3459:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 25575,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3459:32:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25576,
                  "nodeType": "ExpressionStatement",
                  "src": "3459:32:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqUint",
            "nameLocation": "3397:12:97",
            "parameters": {
              "id": 25564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25561,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3418:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25578,
                  "src": "3410:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25560,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3410:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25563,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3429:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25578,
                  "src": "3421:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3421:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3409:22:97"
            },
            "returnParameters": {
              "id": 25565,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3449:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25628,
            "nodeType": "FunctionDefinition",
            "src": "3504:470:97",
            "nodes": [],
            "body": {
              "id": 25627,
              "nodeType": "Block",
              "src": "3588:386:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25588
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25588,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "3606:5:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 25627,
                      "src": "3598:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25587,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3598:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25594,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25591,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25580,
                        "src": "3628:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 25592,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25582,
                        "src": "3631:1:97",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 25589,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "3614:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 25590,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3622:5:97",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31024,
                      "src": "3614:13:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25593,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3614:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3598:35:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25595,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25588,
                      "src": "3648:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 25596,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25584,
                      "src": "3656:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3648:16:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25626,
                  "nodeType": "IfStatement",
                  "src": "3644:324:97",
                  "trueBody": {
                    "id": 25625,
                    "nodeType": "Block",
                    "src": "3666:302:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 25599,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3689:36:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              },
                              "value": "Error: a ~= b not satisfied [uint]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              }
                            ],
                            "id": 25598,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "3685:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 25600,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3685:41:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25601,
                        "nodeType": "EmitStatement",
                        "src": "3680:46:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 25603,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3760:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 25604,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25580,
                              "src": "3774:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25602,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22817,
                            "src": "3745:14:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 25605,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3745:31:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25606,
                        "nodeType": "EmitStatement",
                        "src": "3740:36:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 25608,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3810:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 25609,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25582,
                              "src": "3824:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25607,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22817,
                            "src": "3795:14:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 25610,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3795:31:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25611,
                        "nodeType": "EmitStatement",
                        "src": "3790:36:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 25613,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3860:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 25614,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25584,
                              "src": "3874:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25612,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22817,
                            "src": "3845:14:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 25615,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3845:38:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25616,
                        "nodeType": "EmitStatement",
                        "src": "3840:43:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 25618,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3917:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 25619,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25588,
                              "src": "3931:5:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25617,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22817,
                            "src": "3902:14:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 25620,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3902:35:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25621,
                        "nodeType": "EmitStatement",
                        "src": "3897:40:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 25622,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "3951:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 25623,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3951:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25624,
                        "nodeType": "ExpressionStatement",
                        "src": "3951:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbs",
            "nameLocation": "3513:17:97",
            "parameters": {
              "id": 25585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25580,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3539:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25628,
                  "src": "3531:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25579,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3531:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25582,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3550:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25628,
                  "src": "3542:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3542:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25584,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "3561:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25628,
                  "src": "3553:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3553:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3530:40:97"
            },
            "returnParameters": {
              "id": 25586,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3588:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25664,
            "nodeType": "FunctionDefinition",
            "src": "3980:294:97",
            "nodes": [],
            "body": {
              "id": 25663,
              "nodeType": "Block",
              "src": "4083:191:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25640
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25640,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "4101:5:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 25663,
                      "src": "4093:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25639,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4093:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25646,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25643,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25630,
                        "src": "4123:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 25644,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25632,
                        "src": "4126:1:97",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 25641,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "4109:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 25642,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4117:5:97",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31024,
                      "src": "4109:13:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25645,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4109:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4093:35:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25649,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25647,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25640,
                      "src": "4143:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 25648,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25634,
                      "src": "4151:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4143:16:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25662,
                  "nodeType": "IfStatement",
                  "src": "4139:129:97",
                  "trueBody": {
                    "id": 25661,
                    "nodeType": "Block",
                    "src": "4161:107:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 25651,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4197:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 25652,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25636,
                              "src": "4206:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25650,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "4180:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25653,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4180:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25654,
                        "nodeType": "EmitStatement",
                        "src": "4175:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 25656,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25630,
                              "src": "4242:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25657,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25632,
                              "src": "4245:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25658,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25634,
                              "src": "4248:8:97",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25655,
                            "name": "assertApproxEqAbs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25628,
                              25664,
                              25809,
                              25845
                            ],
                            "referencedDeclaration": 25628,
                            "src": "4224:17:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 25659,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4224:33:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25660,
                        "nodeType": "ExpressionStatement",
                        "src": "4224:33:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbs",
            "nameLocation": "3989:17:97",
            "parameters": {
              "id": 25637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25630,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4015:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25664,
                  "src": "4007:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25629,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4007:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25632,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4026:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25664,
                  "src": "4018:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25631,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4018:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25634,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4037:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25664,
                  "src": "4029:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25633,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4029:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25636,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4061:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25664,
                  "src": "4047:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25635,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4047:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4006:59:97"
            },
            "returnParameters": {
              "id": 25638,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4083:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25720,
            "nodeType": "FunctionDefinition",
            "src": "4280:567:97",
            "nodes": [],
            "body": {
              "id": 25719,
              "nodeType": "Block",
              "src": "4389:458:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25676
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25676,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "4407:5:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 25719,
                      "src": "4399:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25675,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4399:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25682,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25679,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25666,
                        "src": "4429:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 25680,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25668,
                        "src": "4432:1:97",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 25677,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "4415:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 25678,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4423:5:97",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31024,
                      "src": "4415:13:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4415:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4399:35:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25683,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25676,
                      "src": "4449:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 25684,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25670,
                      "src": "4457:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4449:16:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25718,
                  "nodeType": "IfStatement",
                  "src": "4445:396:97",
                  "trueBody": {
                    "id": 25717,
                    "nodeType": "Block",
                    "src": "4467:374:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 25687,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4490:36:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              },
                              "value": "Error: a ~= b not satisfied [uint]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              }
                            ],
                            "id": 25686,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "4486:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 25688,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4486:41:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25689,
                        "nodeType": "EmitStatement",
                        "src": "4481:46:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 25691,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4569:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 25692,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25666,
                              "src": "4583:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25693,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25672,
                              "src": "4586:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25690,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "4546:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 25694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4546:49:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25695,
                        "nodeType": "EmitStatement",
                        "src": "4541:54:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 25697,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4637:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 25698,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25668,
                              "src": "4651:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25699,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25672,
                              "src": "4654:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25696,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "4614:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 25700,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4614:49:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25701,
                        "nodeType": "EmitStatement",
                        "src": "4609:54:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 25703,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4705:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 25704,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25670,
                              "src": "4719:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25705,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25672,
                              "src": "4729:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25702,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "4682:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 25706,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4682:56:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25707,
                        "nodeType": "EmitStatement",
                        "src": "4677:61:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 25709,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4780:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 25710,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25676,
                              "src": "4794:5:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25711,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25672,
                              "src": "4801:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25708,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "4757:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 25712,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4757:53:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25713,
                        "nodeType": "EmitStatement",
                        "src": "4752:58:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 25714,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "4824:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 25715,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4824:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25716,
                        "nodeType": "ExpressionStatement",
                        "src": "4824:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbsDecimal",
            "nameLocation": "4289:24:97",
            "parameters": {
              "id": 25673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25666,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4322:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25720,
                  "src": "4314:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25665,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4314:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25668,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4333:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25720,
                  "src": "4325:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25667,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4325:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25670,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4344:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25720,
                  "src": "4336:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25669,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4336:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25672,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4362:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25720,
                  "src": "4354:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25671,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4354:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4313:58:97"
            },
            "returnParameters": {
              "id": 25674,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4389:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25759,
            "nodeType": "FunctionDefinition",
            "src": "4853:356:97",
            "nodes": [],
            "body": {
              "id": 25758,
              "nodeType": "Block",
              "src": "5001:208:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25734
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25734,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5019:5:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 25758,
                      "src": "5011:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25733,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5011:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25740,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25737,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25722,
                        "src": "5041:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 25738,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25724,
                        "src": "5044:1:97",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 25735,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "5027:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 25736,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5035:5:97",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31024,
                      "src": "5027:13:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5027:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5011:35:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25743,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25741,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25734,
                      "src": "5061:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 25742,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25726,
                      "src": "5069:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5061:16:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25757,
                  "nodeType": "IfStatement",
                  "src": "5057:146:97",
                  "trueBody": {
                    "id": 25756,
                    "nodeType": "Block",
                    "src": "5079:124:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 25745,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5115:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 25746,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25730,
                              "src": "5124:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25744,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "5098:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25747,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5098:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25748,
                        "nodeType": "EmitStatement",
                        "src": "5093:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 25750,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25722,
                              "src": "5167:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25751,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25724,
                              "src": "5170:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25752,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25726,
                              "src": "5173:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25753,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25728,
                              "src": "5183:8:97",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25749,
                            "name": "assertApproxEqAbsDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25720,
                              25759,
                              25901,
                              25940
                            ],
                            "referencedDeclaration": 25720,
                            "src": "5142:24:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 25754,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5142:50:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25755,
                        "nodeType": "ExpressionStatement",
                        "src": "5142:50:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbsDecimal",
            "nameLocation": "4862:24:97",
            "parameters": {
              "id": 25731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25722,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4895:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25759,
                  "src": "4887:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4887:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25724,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4906:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25759,
                  "src": "4898:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25723,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4898:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25726,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "4917:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25759,
                  "src": "4909:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4909:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25728,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4935:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25759,
                  "src": "4927:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4927:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25730,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4959:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25759,
                  "src": "4945:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25729,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4945:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4886:77:97"
            },
            "returnParameters": {
              "id": 25732,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5001:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25809,
            "nodeType": "FunctionDefinition",
            "src": "5215:467:97",
            "nodes": [],
            "body": {
              "id": 25808,
              "nodeType": "Block",
              "src": "5297:385:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25769
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25769,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5315:5:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 25808,
                      "src": "5307:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25768,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5307:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25775,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25772,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25761,
                        "src": "5337:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 25773,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25763,
                        "src": "5340:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 25770,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "5323:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 25771,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5331:5:97",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31060,
                      "src": "5323:13:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 25774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5323:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5307:35:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25776,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25769,
                      "src": "5357:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 25777,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25765,
                      "src": "5365:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5357:16:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25807,
                  "nodeType": "IfStatement",
                  "src": "5353:323:97",
                  "trueBody": {
                    "id": 25806,
                    "nodeType": "Block",
                    "src": "5375:301:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 25780,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5398:35:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              },
                              "value": "Error: a ~= b not satisfied [int]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              }
                            ],
                            "id": 25779,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "5394:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 25781,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5394:40:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25782,
                        "nodeType": "EmitStatement",
                        "src": "5389:45:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020204c656674",
                              "id": 25784,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5467:13:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_0d86233afabb8b3973e071db5489b096a3194445fead9d01245809171b4e3927",
                                "typeString": "literal_string \"       Left\""
                              },
                              "value": "       Left"
                            },
                            {
                              "id": 25785,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25761,
                              "src": "5482:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_0d86233afabb8b3973e071db5489b096a3194445fead9d01245809171b4e3927",
                                "typeString": "literal_string \"       Left\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 25783,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22811,
                            "src": "5453:13:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 25786,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5453:31:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25787,
                        "nodeType": "EmitStatement",
                        "src": "5448:36:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020205269676874",
                              "id": 25789,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5517:13:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_49df7c349e5ac2a2258473415d7a60c524ff5057a99dca9437d1a93b96f3739d",
                                "typeString": "literal_string \"      Right\""
                              },
                              "value": "      Right"
                            },
                            {
                              "id": 25790,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25763,
                              "src": "5532:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_49df7c349e5ac2a2258473415d7a60c524ff5057a99dca9437d1a93b96f3739d",
                                "typeString": "literal_string \"      Right\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 25788,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22811,
                            "src": "5503:13:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 25791,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5503:31:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25792,
                        "nodeType": "EmitStatement",
                        "src": "5498:36:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 25794,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5568:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 25795,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25765,
                              "src": "5582:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25793,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22817,
                            "src": "5553:14:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 25796,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5553:38:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25797,
                        "nodeType": "EmitStatement",
                        "src": "5548:43:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 25799,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5625:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 25800,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25769,
                              "src": "5639:5:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25798,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22817,
                            "src": "5610:14:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 25801,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5610:35:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25802,
                        "nodeType": "EmitStatement",
                        "src": "5605:40:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 25803,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "5659:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 25804,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5659:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25805,
                        "nodeType": "ExpressionStatement",
                        "src": "5659:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbs",
            "nameLocation": "5224:17:97",
            "parameters": {
              "id": 25766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25761,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5249:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25809,
                  "src": "5242:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25760,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5242:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25763,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5259:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25809,
                  "src": "5252:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25762,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5252:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25765,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "5270:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25809,
                  "src": "5262:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5262:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5241:38:97"
            },
            "returnParameters": {
              "id": 25767,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5297:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25845,
            "nodeType": "FunctionDefinition",
            "src": "5688:292:97",
            "nodes": [],
            "body": {
              "id": 25844,
              "nodeType": "Block",
              "src": "5789:191:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25821
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25821,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "5807:5:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 25844,
                      "src": "5799:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25820,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5799:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25827,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25824,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25811,
                        "src": "5829:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 25825,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25813,
                        "src": "5832:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 25822,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "5815:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 25823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5823:5:97",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31060,
                      "src": "5815:13:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 25826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5815:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5799:35:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25828,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25821,
                      "src": "5849:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 25829,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25815,
                      "src": "5857:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5849:16:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25843,
                  "nodeType": "IfStatement",
                  "src": "5845:129:97",
                  "trueBody": {
                    "id": 25842,
                    "nodeType": "Block",
                    "src": "5867:107:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 25832,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5903:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 25833,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25817,
                              "src": "5912:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25831,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "5886:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5886:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25835,
                        "nodeType": "EmitStatement",
                        "src": "5881:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 25837,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25811,
                              "src": "5948:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 25838,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25813,
                              "src": "5951:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 25839,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25815,
                              "src": "5954:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25836,
                            "name": "assertApproxEqAbs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25628,
                              25664,
                              25809,
                              25845
                            ],
                            "referencedDeclaration": 25809,
                            "src": "5930:17:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256)"
                            }
                          },
                          "id": 25840,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5930:33:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25841,
                        "nodeType": "ExpressionStatement",
                        "src": "5930:33:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbs",
            "nameLocation": "5697:17:97",
            "parameters": {
              "id": 25818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25811,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5722:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25845,
                  "src": "5715:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25810,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5715:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25813,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5732:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25845,
                  "src": "5725:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25812,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5725:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25815,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "5743:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25845,
                  "src": "5735:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5735:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25817,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "5767:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25845,
                  "src": "5753:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25816,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5753:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5714:57:97"
            },
            "returnParameters": {
              "id": 25819,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5789:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25901,
            "nodeType": "FunctionDefinition",
            "src": "5986:562:97",
            "nodes": [],
            "body": {
              "id": 25900,
              "nodeType": "Block",
              "src": "6093:455:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25857
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25857,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "6111:5:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 25900,
                      "src": "6103:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25856,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6103:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25863,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25860,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25847,
                        "src": "6133:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 25861,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25849,
                        "src": "6136:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 25858,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "6119:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 25859,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6127:5:97",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31060,
                      "src": "6119:13:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 25862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6119:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6103:35:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25864,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25857,
                      "src": "6153:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 25865,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25851,
                      "src": "6161:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6153:16:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25899,
                  "nodeType": "IfStatement",
                  "src": "6149:393:97",
                  "trueBody": {
                    "id": 25898,
                    "nodeType": "Block",
                    "src": "6171:371:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 25868,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6194:35:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              },
                              "value": "Error: a ~= b not satisfied [int]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              }
                            ],
                            "id": 25867,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "6190:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 25869,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6190:40:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25870,
                        "nodeType": "EmitStatement",
                        "src": "6185:45:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020204c656674",
                              "id": 25872,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6271:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              "value": "      Left"
                            },
                            {
                              "id": 25873,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25847,
                              "src": "6285:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 25874,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25853,
                              "src": "6288:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_bbf7c57905778f125dacfa4fd24c0b99a73d897099071adb94dd57d06b52ce31",
                                "typeString": "literal_string \"      Left\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25871,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22797,
                            "src": "6249:21:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 25875,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6249:48:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25876,
                        "nodeType": "EmitStatement",
                        "src": "6244:53:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020205269676874",
                              "id": 25878,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6338:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              "value": "     Right"
                            },
                            {
                              "id": 25879,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25849,
                              "src": "6352:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 25880,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25853,
                              "src": "6355:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f594094f8f37a3e37fa75233058696f0caafa00827fc96f5c5afe6f0e2570053",
                                "typeString": "literal_string \"     Right\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25877,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22797,
                            "src": "6316:21:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 25881,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6316:48:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25882,
                        "nodeType": "EmitStatement",
                        "src": "6311:53:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d61782044656c7461",
                              "id": 25884,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6406:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              "value": " Max Delta"
                            },
                            {
                              "id": 25885,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25851,
                              "src": "6420:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25886,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25853,
                              "src": "6430:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_cd2884c74a25327f5cafe8471ed73da28ba1991b65dde72feb1cd4f78f5dc2a5",
                                "typeString": "literal_string \" Max Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25883,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "6383:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 25887,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6383:56:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25888,
                        "nodeType": "EmitStatement",
                        "src": "6378:61:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202044656c7461",
                              "id": 25890,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6481:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              "value": "     Delta"
                            },
                            {
                              "id": 25891,
                              "name": "delta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25857,
                              "src": "6495:5:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25892,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25853,
                              "src": "6502:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_39d8d5e74991bbc141eb1ca770e60e69523d5c43706b72685708d217b293c55f",
                                "typeString": "literal_string \"     Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25889,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "6458:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 25893,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6458:53:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25894,
                        "nodeType": "EmitStatement",
                        "src": "6453:58:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 25895,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "6525:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 25896,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6525:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25897,
                        "nodeType": "ExpressionStatement",
                        "src": "6525:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbsDecimal",
            "nameLocation": "5995:24:97",
            "parameters": {
              "id": 25854,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25847,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6027:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25901,
                  "src": "6020:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25846,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6020:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25849,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6037:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25901,
                  "src": "6030:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25848,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6030:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25851,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "6048:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25901,
                  "src": "6040:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6040:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25853,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "6066:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25901,
                  "src": "6058:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25852,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6058:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6019:56:97"
            },
            "returnParameters": {
              "id": 25855,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6093:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 25940,
            "nodeType": "FunctionDefinition",
            "src": "6554:354:97",
            "nodes": [],
            "body": {
              "id": 25939,
              "nodeType": "Block",
              "src": "6700:208:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25915
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25915,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "6718:5:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 25939,
                      "src": "6710:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25914,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6710:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25921,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25918,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25903,
                        "src": "6740:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 25919,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25905,
                        "src": "6743:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 25916,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "6726:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 25917,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6734:5:97",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31060,
                      "src": "6726:13:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 25920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6726:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6710:35:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25922,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25915,
                      "src": "6760:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 25923,
                      "name": "maxDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25907,
                      "src": "6768:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6760:16:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25938,
                  "nodeType": "IfStatement",
                  "src": "6756:146:97",
                  "trueBody": {
                    "id": 25937,
                    "nodeType": "Block",
                    "src": "6778:124:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 25926,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6814:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 25927,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25911,
                              "src": "6823:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 25925,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "6797:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 25928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6797:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25929,
                        "nodeType": "EmitStatement",
                        "src": "6792:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 25931,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25903,
                              "src": "6866:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 25932,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25905,
                              "src": "6869:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 25933,
                              "name": "maxDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25907,
                              "src": "6872:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 25934,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25909,
                              "src": "6882:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25930,
                            "name": "assertApproxEqAbsDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25720,
                              25759,
                              25901,
                              25940
                            ],
                            "referencedDeclaration": 25901,
                            "src": "6841:24:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256,uint256)"
                            }
                          },
                          "id": 25935,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6841:50:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25936,
                        "nodeType": "ExpressionStatement",
                        "src": "6841:50:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqAbsDecimal",
            "nameLocation": "6563:24:97",
            "parameters": {
              "id": 25912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25903,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6595:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25940,
                  "src": "6588:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25902,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6588:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25905,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6605:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25940,
                  "src": "6598:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25904,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6598:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25907,
                  "mutability": "mutable",
                  "name": "maxDelta",
                  "nameLocation": "6616:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25940,
                  "src": "6608:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6608:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25909,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "6634:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25940,
                  "src": "6626:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25908,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6626:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25911,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "6658:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 25940,
                  "src": "6644:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25910,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6644:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6587:75:97"
            },
            "returnParameters": {
              "id": 25913,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6700:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26005,
            "nodeType": "FunctionDefinition",
            "src": "6914:733:97",
            "nodes": [],
            "body": {
              "id": 26004,
              "nodeType": "Block",
              "src": "7091:556:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25949,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25944,
                      "src": "7105:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 25950,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7110:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7105:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25957,
                  "nodeType": "IfStatement",
                  "src": "7101:33:97",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 25953,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25942,
                          "src": "7129:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 25954,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25944,
                          "src": "7132:1:97",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 25952,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          25268,
                          25293,
                          25306,
                          25322,
                          25364,
                          25406,
                          25448,
                          25485,
                          25522,
                          25559,
                          23064,
                          23089,
                          23119,
                          23144,
                          23203,
                          23228,
                          23258,
                          23283,
                          24756,
                          24791
                        ],
                        "referencedDeclaration": 23258,
                        "src": "7120:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,uint256)"
                        }
                      },
                      "id": 25955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7120:14:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 25948,
                    "id": 25956,
                    "nodeType": "Return",
                    "src": "7113:21:97"
                  }
                },
                {
                  "assignments": [
                    25959
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25959,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "7193:12:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26004,
                      "src": "7185:20:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25958,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7185:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25965,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25962,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25942,
                        "src": "7229:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 25963,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25944,
                        "src": "7232:1:97",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 25960,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "7208:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 25961,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7216:12:97",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31083,
                      "src": "7208:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7208:26:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7185:49:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25966,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25959,
                      "src": "7249:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 25967,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25946,
                      "src": "7264:15:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7249:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26003,
                  "nodeType": "IfStatement",
                  "src": "7245:396:97",
                  "trueBody": {
                    "id": 26002,
                    "nodeType": "Block",
                    "src": "7281:360:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 25970,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7304:36:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              },
                              "value": "Error: a ~= b not satisfied [uint]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              }
                            ],
                            "id": 25969,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "7300:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 25971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7300:41:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25972,
                        "nodeType": "EmitStatement",
                        "src": "7295:46:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 25974,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7375:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 25975,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25942,
                              "src": "7391:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25973,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22817,
                            "src": "7360:14:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 25976,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7360:33:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25977,
                        "nodeType": "EmitStatement",
                        "src": "7355:38:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 25979,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7427:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 25980,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25944,
                              "src": "7443:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25978,
                            "name": "log_named_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22817,
                            "src": "7412:14:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256)"
                            }
                          },
                          "id": 25981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7412:33:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25982,
                        "nodeType": "EmitStatement",
                        "src": "7407:38:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 25984,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7487:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              "value": " Max % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 25987,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 25985,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25946,
                                "src": "7503:15:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 25986,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7521:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "7503:21:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 25988,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7526:2:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 25983,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "7464:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 25989,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7464:65:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25990,
                        "nodeType": "EmitStatement",
                        "src": "7459:70:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 25992,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7571:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              "value": "     % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 25995,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 25993,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25959,
                                "src": "7587:12:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 25994,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7602:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "7587:18:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 25996,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7607:2:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 25991,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "7548:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 25997,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7548:62:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25998,
                        "nodeType": "EmitStatement",
                        "src": "7543:67:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 25999,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "7624:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 26000,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7624:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26001,
                        "nodeType": "ExpressionStatement",
                        "src": "7624:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRel",
            "nameLocation": "6923:17:97",
            "parameters": {
              "id": 25947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25942,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6958:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26005,
                  "src": "6950:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25941,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6950:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25944,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6977:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26005,
                  "src": "6969:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25943,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6969:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25946,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "6996:15:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26005,
                  "src": "6988:23:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25945,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6988:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6940:133:97"
            },
            "returnParameters": {
              "id": 25948,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7091:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26051,
            "nodeType": "FunctionDefinition",
            "src": "7653:519:97",
            "nodes": [],
            "body": {
              "id": 26050,
              "nodeType": "Block",
              "src": "7857:315:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26018,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26016,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26009,
                      "src": "7871:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 26017,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7876:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7871:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26025,
                  "nodeType": "IfStatement",
                  "src": "7867:38:97",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 26020,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26007,
                          "src": "7895:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 26021,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26009,
                          "src": "7898:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 26022,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26013,
                          "src": "7901:3:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 26019,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          25268,
                          25293,
                          25306,
                          25322,
                          25364,
                          25406,
                          25448,
                          25485,
                          25522,
                          25559,
                          23064,
                          23089,
                          23119,
                          23144,
                          23203,
                          23228,
                          23258,
                          23283,
                          24756,
                          24791
                        ],
                        "referencedDeclaration": 23283,
                        "src": "7886:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,uint256,string memory)"
                        }
                      },
                      "id": 26023,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7886:19:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 26015,
                    "id": 26024,
                    "nodeType": "Return",
                    "src": "7879:26:97"
                  }
                },
                {
                  "assignments": [
                    26027
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26027,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "7964:12:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26050,
                      "src": "7956:20:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 26026,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7956:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26033,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26030,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26007,
                        "src": "8000:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 26031,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26009,
                        "src": "8003:1:97",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 26028,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "7979:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 26029,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7987:12:97",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31083,
                      "src": "7979:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 26032,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7979:26:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7956:49:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26036,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26034,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26027,
                      "src": "8020:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 26035,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26011,
                      "src": "8035:15:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8020:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26049,
                  "nodeType": "IfStatement",
                  "src": "8016:150:97",
                  "trueBody": {
                    "id": 26048,
                    "nodeType": "Block",
                    "src": "8052:114:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 26038,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8088:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 26039,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26013,
                              "src": "8097:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 26037,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "8071:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 26040,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8071:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26041,
                        "nodeType": "EmitStatement",
                        "src": "8066:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 26043,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26007,
                              "src": "8133:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 26044,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26009,
                              "src": "8136:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 26045,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26011,
                              "src": "8139:15:97",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 26042,
                            "name": "assertApproxEqRel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              26005,
                              26051,
                              26234,
                              26280
                            ],
                            "referencedDeclaration": 26005,
                            "src": "8115:17:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256)"
                            }
                          },
                          "id": 26046,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8115:40:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26047,
                        "nodeType": "ExpressionStatement",
                        "src": "8115:40:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRel",
            "nameLocation": "7662:17:97",
            "parameters": {
              "id": 26014,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26007,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7697:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26051,
                  "src": "7689:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26006,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7689:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26009,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7716:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26051,
                  "src": "7708:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26008,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7708:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26011,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "7735:15:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26051,
                  "src": "7727:23:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26010,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7727:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26013,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "7830:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26051,
                  "src": "7816:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26012,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7816:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7679:160:97"
            },
            "returnParameters": {
              "id": 26015,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7857:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26120,
            "nodeType": "FunctionDefinition",
            "src": "8178:802:97",
            "nodes": [],
            "body": {
              "id": 26119,
              "nodeType": "Block",
              "src": "8388:592:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26062,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26055,
                      "src": "8402:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 26063,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8407:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8402:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26070,
                  "nodeType": "IfStatement",
                  "src": "8398:33:97",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 26066,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26053,
                          "src": "8426:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 26067,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26055,
                          "src": "8429:1:97",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 26065,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          25268,
                          25293,
                          25306,
                          25322,
                          25364,
                          25406,
                          25448,
                          25485,
                          25522,
                          25559,
                          23064,
                          23089,
                          23119,
                          23144,
                          23203,
                          23228,
                          23258,
                          23283,
                          24756,
                          24791
                        ],
                        "referencedDeclaration": 23258,
                        "src": "8417:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,uint256)"
                        }
                      },
                      "id": 26068,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8417:14:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 26061,
                    "id": 26069,
                    "nodeType": "Return",
                    "src": "8410:21:97"
                  }
                },
                {
                  "assignments": [
                    26072
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26072,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "8490:12:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26119,
                      "src": "8482:20:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 26071,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8482:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26078,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26075,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26053,
                        "src": "8526:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 26076,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26055,
                        "src": "8529:1:97",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 26073,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "8505:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 26074,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8513:12:97",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31083,
                      "src": "8505:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 26077,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8505:26:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8482:49:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26079,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26072,
                      "src": "8546:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 26080,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26057,
                      "src": "8561:15:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8546:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26118,
                  "nodeType": "IfStatement",
                  "src": "8542:432:97",
                  "trueBody": {
                    "id": 26117,
                    "nodeType": "Block",
                    "src": "8578:396:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e745d",
                              "id": 26083,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8601:36:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              },
                              "value": "Error: a ~= b not satisfied [uint]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_b3cfa1421f120a399b6064fcc8d5188a4e28bcc717972b37d8e8a5e5cc07c7fe",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [uint]\""
                              }
                            ],
                            "id": 26082,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "8597:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 26084,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8597:41:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26085,
                        "nodeType": "EmitStatement",
                        "src": "8592:46:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 26087,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8680:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 26088,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26053,
                              "src": "8696:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 26089,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26059,
                              "src": "8699:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 26086,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "8657:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 26090,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8657:51:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26091,
                        "nodeType": "EmitStatement",
                        "src": "8652:56:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 26093,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8750:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 26094,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26055,
                              "src": "8766:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 26095,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26059,
                              "src": "8769:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 26092,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "8727:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 26096,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8727:51:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26097,
                        "nodeType": "EmitStatement",
                        "src": "8722:56:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 26099,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8820:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              "value": " Max % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 26102,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 26100,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26057,
                                "src": "8836:15:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 26101,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8854:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "8836:21:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 26103,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8859:2:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 26098,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "8797:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 26104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8797:65:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26105,
                        "nodeType": "EmitStatement",
                        "src": "8792:70:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 26107,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8904:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              "value": "     % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 26110,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 26108,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26072,
                                "src": "8920:12:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 26109,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8935:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "8920:18:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 26111,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8940:2:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 26106,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "8881:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 26112,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8881:62:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26113,
                        "nodeType": "EmitStatement",
                        "src": "8876:67:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 26114,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "8957:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 26115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8957:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26116,
                        "nodeType": "ExpressionStatement",
                        "src": "8957:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRelDecimal",
            "nameLocation": "8187:24:97",
            "parameters": {
              "id": 26060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26053,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "8229:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26120,
                  "src": "8221:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26052,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8221:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26055,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "8248:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26120,
                  "src": "8240:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26054,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8240:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26057,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "8267:15:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26120,
                  "src": "8259:23:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26056,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8259:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26059,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "8356:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26120,
                  "src": "8348:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26058,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8348:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8211:159:97"
            },
            "returnParameters": {
              "id": 26061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8388:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26169,
            "nodeType": "FunctionDefinition",
            "src": "8986:569:97",
            "nodes": [],
            "body": {
              "id": 26168,
              "nodeType": "Block",
              "src": "9223:332:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26133,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26124,
                      "src": "9237:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 26134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9242:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9237:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26142,
                  "nodeType": "IfStatement",
                  "src": "9233:38:97",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 26137,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26122,
                          "src": "9261:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 26138,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26124,
                          "src": "9264:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 26139,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26130,
                          "src": "9267:3:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 26136,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          25268,
                          25293,
                          25306,
                          25322,
                          25364,
                          25406,
                          25448,
                          25485,
                          25522,
                          25559,
                          23064,
                          23089,
                          23119,
                          23144,
                          23203,
                          23228,
                          23258,
                          23283,
                          24756,
                          24791
                        ],
                        "referencedDeclaration": 23283,
                        "src": "9252:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,uint256,string memory)"
                        }
                      },
                      "id": 26140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9252:19:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 26132,
                    "id": 26141,
                    "nodeType": "Return",
                    "src": "9245:26:97"
                  }
                },
                {
                  "assignments": [
                    26144
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26144,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "9330:12:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26168,
                      "src": "9322:20:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 26143,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9322:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26150,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26147,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26122,
                        "src": "9366:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 26148,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26124,
                        "src": "9369:1:97",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 26145,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "9345:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 26146,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9353:12:97",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31083,
                      "src": "9345:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 26149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9345:26:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9322:49:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26151,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26144,
                      "src": "9386:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 26152,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26126,
                      "src": "9401:15:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9386:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26167,
                  "nodeType": "IfStatement",
                  "src": "9382:167:97",
                  "trueBody": {
                    "id": 26166,
                    "nodeType": "Block",
                    "src": "9418:131:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 26155,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9454:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 26156,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26130,
                              "src": "9463:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 26154,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "9437:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 26157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9437:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26158,
                        "nodeType": "EmitStatement",
                        "src": "9432:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 26160,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26122,
                              "src": "9506:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 26161,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26124,
                              "src": "9509:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 26162,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26126,
                              "src": "9512:15:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 26163,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26128,
                              "src": "9529:8:97",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 26159,
                            "name": "assertApproxEqRelDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              26120,
                              26169,
                              26349,
                              26398
                            ],
                            "referencedDeclaration": 26120,
                            "src": "9481:24:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 26164,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9481:57:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26165,
                        "nodeType": "ExpressionStatement",
                        "src": "9481:57:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRelDecimal",
            "nameLocation": "8995:24:97",
            "parameters": {
              "id": 26131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26122,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9037:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26169,
                  "src": "9029:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26121,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9029:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26124,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9056:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26169,
                  "src": "9048:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26123,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9048:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26126,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "9075:15:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26169,
                  "src": "9067:23:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26125,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9067:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26128,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "9164:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26169,
                  "src": "9156:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26127,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9156:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26130,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "9196:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26169,
                  "src": "9182:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26129,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9182:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9019:186:97"
            },
            "returnParameters": {
              "id": 26132,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9223:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26234,
            "nodeType": "FunctionDefinition",
            "src": "9561:642:97",
            "nodes": [],
            "body": {
              "id": 26233,
              "nodeType": "Block",
              "src": "9650:553:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 26180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26178,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26173,
                      "src": "9664:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 26179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9669:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9664:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26186,
                  "nodeType": "IfStatement",
                  "src": "9660:33:97",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 26182,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26171,
                          "src": "9688:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 26183,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26173,
                          "src": "9691:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        ],
                        "id": 26181,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          25268,
                          25293,
                          25306,
                          25322,
                          25364,
                          25406,
                          25448,
                          25485,
                          25522,
                          25559,
                          23064,
                          23089,
                          23119,
                          23144,
                          23203,
                          23228,
                          23258,
                          23283,
                          24756,
                          24791
                        ],
                        "referencedDeclaration": 23203,
                        "src": "9679:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                          "typeString": "function (int256,int256)"
                        }
                      },
                      "id": 26184,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9679:14:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 26177,
                    "id": 26185,
                    "nodeType": "Return",
                    "src": "9672:21:97"
                  }
                },
                {
                  "assignments": [
                    26188
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26188,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "9752:12:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26233,
                      "src": "9744:20:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 26187,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9744:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26194,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26191,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26171,
                        "src": "9788:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 26192,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26173,
                        "src": "9791:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 26189,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "9767:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 26190,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9775:12:97",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31112,
                      "src": "9767:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 26193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9767:26:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9744:49:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26195,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26188,
                      "src": "9808:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 26196,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26175,
                      "src": "9823:15:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9808:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26232,
                  "nodeType": "IfStatement",
                  "src": "9804:393:97",
                  "trueBody": {
                    "id": 26231,
                    "nodeType": "Block",
                    "src": "9840:357:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 26199,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9863:35:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              },
                              "value": "Error: a ~= b not satisfied [int]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              }
                            ],
                            "id": 26198,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "9859:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 26200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9859:40:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26201,
                        "nodeType": "EmitStatement",
                        "src": "9854:45:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 26203,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9932:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 26204,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26171,
                              "src": "9948:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 26202,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22811,
                            "src": "9918:13:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 26205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9918:32:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26206,
                        "nodeType": "EmitStatement",
                        "src": "9913:37:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 26208,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9983:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 26209,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26173,
                              "src": "9999:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 26207,
                            "name": "log_named_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22811,
                            "src": "9969:13:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$returns$__$",
                              "typeString": "function (string memory,int256)"
                            }
                          },
                          "id": 26210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9969:32:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26211,
                        "nodeType": "EmitStatement",
                        "src": "9964:37:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 26213,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10043:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              "value": " Max % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 26216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 26214,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26175,
                                "src": "10059:15:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 26215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10077:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "10059:21:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 26217,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10082:2:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 26212,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "10020:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 26218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10020:65:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26219,
                        "nodeType": "EmitStatement",
                        "src": "10015:70:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 26221,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10127:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              "value": "     % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 26224,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 26222,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26188,
                                "src": "10143:12:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 26223,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10158:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "10143:18:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 26225,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10163:2:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 26220,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "10104:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 26226,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10104:62:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26227,
                        "nodeType": "EmitStatement",
                        "src": "10099:67:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 26228,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "10180:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 26229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10180:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26230,
                        "nodeType": "ExpressionStatement",
                        "src": "10180:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRel",
            "nameLocation": "9570:17:97",
            "parameters": {
              "id": 26176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26171,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9595:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26234,
                  "src": "9588:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26170,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9588:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26173,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9605:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26234,
                  "src": "9598:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26172,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9598:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26175,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "9616:15:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26234,
                  "src": "9608:23:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26174,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9608:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9587:45:97"
            },
            "returnParameters": {
              "id": 26177,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9650:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26280,
            "nodeType": "FunctionDefinition",
            "src": "10209:423:97",
            "nodes": [],
            "body": {
              "id": 26279,
              "nodeType": "Block",
              "src": "10317:315:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 26247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26245,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26238,
                      "src": "10331:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 26246,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10336:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10331:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26254,
                  "nodeType": "IfStatement",
                  "src": "10327:38:97",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 26249,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26236,
                          "src": "10355:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 26250,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26238,
                          "src": "10358:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 26251,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26242,
                          "src": "10361:3:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 26248,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          25268,
                          25293,
                          25306,
                          25322,
                          25364,
                          25406,
                          25448,
                          25485,
                          25522,
                          25559,
                          23064,
                          23089,
                          23119,
                          23144,
                          23203,
                          23228,
                          23258,
                          23283,
                          24756,
                          24791
                        ],
                        "referencedDeclaration": 23228,
                        "src": "10346:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (int256,int256,string memory)"
                        }
                      },
                      "id": 26252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10346:19:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 26244,
                    "id": 26253,
                    "nodeType": "Return",
                    "src": "10339:26:97"
                  }
                },
                {
                  "assignments": [
                    26256
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26256,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "10424:12:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26279,
                      "src": "10416:20:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 26255,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10416:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26262,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26259,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26236,
                        "src": "10460:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 26260,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26238,
                        "src": "10463:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 26257,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "10439:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 26258,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10447:12:97",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31112,
                      "src": "10439:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 26261,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10439:26:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10416:49:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26263,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26256,
                      "src": "10480:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 26264,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26240,
                      "src": "10495:15:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10480:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26278,
                  "nodeType": "IfStatement",
                  "src": "10476:150:97",
                  "trueBody": {
                    "id": 26277,
                    "nodeType": "Block",
                    "src": "10512:114:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 26267,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10548:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 26268,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26242,
                              "src": "10557:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 26266,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "10531:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 26269,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10531:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26270,
                        "nodeType": "EmitStatement",
                        "src": "10526:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 26272,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26236,
                              "src": "10593:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 26273,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26238,
                              "src": "10596:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 26274,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26240,
                              "src": "10599:15:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 26271,
                            "name": "assertApproxEqRel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              26005,
                              26051,
                              26234,
                              26280
                            ],
                            "referencedDeclaration": 26234,
                            "src": "10575:17:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256)"
                            }
                          },
                          "id": 26275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10575:40:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26276,
                        "nodeType": "ExpressionStatement",
                        "src": "10575:40:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRel",
            "nameLocation": "10218:17:97",
            "parameters": {
              "id": 26243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26236,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "10243:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26280,
                  "src": "10236:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26235,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10236:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26238,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "10253:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26280,
                  "src": "10246:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26237,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10246:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26240,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "10264:15:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26280,
                  "src": "10256:23:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26239,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10256:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26242,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "10295:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26280,
                  "src": "10281:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26241,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10281:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10235:64:97"
            },
            "returnParameters": {
              "id": 26244,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10317:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26349,
            "nodeType": "FunctionDefinition",
            "src": "10638:703:97",
            "nodes": [],
            "body": {
              "id": 26348,
              "nodeType": "Block",
              "src": "10752:589:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 26293,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26291,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26284,
                      "src": "10766:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 26292,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10771:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10766:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26299,
                  "nodeType": "IfStatement",
                  "src": "10762:33:97",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 26295,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26282,
                          "src": "10790:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 26296,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26284,
                          "src": "10793:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        ],
                        "id": 26294,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          25268,
                          25293,
                          25306,
                          25322,
                          25364,
                          25406,
                          25448,
                          25485,
                          25522,
                          25559,
                          23064,
                          23089,
                          23119,
                          23144,
                          23203,
                          23228,
                          23258,
                          23283,
                          24756,
                          24791
                        ],
                        "referencedDeclaration": 23203,
                        "src": "10781:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                          "typeString": "function (int256,int256)"
                        }
                      },
                      "id": 26297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10781:14:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 26290,
                    "id": 26298,
                    "nodeType": "Return",
                    "src": "10774:21:97"
                  }
                },
                {
                  "assignments": [
                    26301
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26301,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "10854:12:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26348,
                      "src": "10846:20:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 26300,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10846:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26307,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26304,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26282,
                        "src": "10890:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 26305,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26284,
                        "src": "10893:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 26302,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "10869:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 26303,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10877:12:97",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31112,
                      "src": "10869:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 26306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10869:26:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10846:49:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26308,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26301,
                      "src": "10910:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 26309,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26286,
                      "src": "10925:15:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10910:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26347,
                  "nodeType": "IfStatement",
                  "src": "10906:429:97",
                  "trueBody": {
                    "id": 26346,
                    "nodeType": "Block",
                    "src": "10942:393:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2061207e3d2062206e6f7420736174697366696564205b696e745d",
                              "id": 26312,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10965:35:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              },
                              "value": "Error: a ~= b not satisfied [int]"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_11d61c8cdd58caffa5994831eb66eb6db7a7b4d13b2c9d187ffbe992d75f810d",
                                "typeString": "literal_string \"Error: a ~= b not satisfied [int]\""
                              }
                            ],
                            "id": 26311,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "10961:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 26313,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10961:40:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26314,
                        "nodeType": "EmitStatement",
                        "src": "10956:45:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20202020202020204c656674",
                              "id": 26316,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11042:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              "value": "        Left"
                            },
                            {
                              "id": 26317,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26282,
                              "src": "11058:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 26318,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26288,
                              "src": "11061:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_f6217da0e9e1e8e3afbc25e930358ad2d4e2a699b783f5770a33f4ed6b592df8",
                                "typeString": "literal_string \"        Left\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 26315,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22797,
                            "src": "11020:21:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 26319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11020:50:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26320,
                        "nodeType": "EmitStatement",
                        "src": "11015:55:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "202020202020205269676874",
                              "id": 26322,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11111:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              "value": "       Right"
                            },
                            {
                              "id": 26323,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26284,
                              "src": "11127:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 26324,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26288,
                              "src": "11130:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d9b31153d6e7e750f2f69f035ad70ea4ecc1e34ecdfd4456407493e5f00fcc1d",
                                "typeString": "literal_string \"       Right\""
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 26321,
                            "name": "log_named_decimal_int",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22797,
                            "src": "11089:21:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,int256,uint256)"
                            }
                          },
                          "id": 26325,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11089:50:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26326,
                        "nodeType": "EmitStatement",
                        "src": "11084:55:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "204d617820252044656c7461",
                              "id": 26328,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11181:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              "value": " Max % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 26331,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 26329,
                                "name": "maxPercentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26286,
                                "src": "11197:15:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 26330,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11215:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "11197:21:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 26332,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11220:2:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_476fe8c6eb42275e4a879ea3f97d4c8aa2f38a65ce8511d323ad7a22579f732d",
                                "typeString": "literal_string \" Max % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 26327,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "11158:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 26333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11158:65:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26334,
                        "nodeType": "EmitStatement",
                        "src": "11153:70:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2020202020252044656c7461",
                              "id": 26336,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11265:14:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              "value": "     % Delta"
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 26339,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 26337,
                                "name": "percentDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26301,
                                "src": "11281:12:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "313030",
                                "id": 26338,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11296:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "value": "100"
                              },
                              "src": "11281:18:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "3138",
                              "id": 26340,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11301:2:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_3a4ade1e1607945ca481fbcd7c0ca5baa7e21e413316ae3997404f04177b03d7",
                                "typeString": "literal_string \"     % Delta\""
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              }
                            ],
                            "id": 26335,
                            "name": "log_named_decimal_uint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22805,
                            "src": "11242:22:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (string memory,uint256,uint256)"
                            }
                          },
                          "id": 26341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11242:62:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26342,
                        "nodeType": "EmitStatement",
                        "src": "11237:67:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 26343,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "11318:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 26344,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11318:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26345,
                        "nodeType": "ExpressionStatement",
                        "src": "11318:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRelDecimal",
            "nameLocation": "10647:24:97",
            "parameters": {
              "id": 26289,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26282,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "10679:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26349,
                  "src": "10672:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26281,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10672:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26284,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "10689:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26349,
                  "src": "10682:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26283,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10682:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26286,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "10700:15:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26349,
                  "src": "10692:23:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26285,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10692:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26288,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "10725:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26349,
                  "src": "10717:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26287,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10717:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10671:63:97"
            },
            "returnParameters": {
              "id": 26290,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10752:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26398,
            "nodeType": "FunctionDefinition",
            "src": "11347:485:97",
            "nodes": [],
            "body": {
              "id": 26397,
              "nodeType": "Block",
              "src": "11500:332:97",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 26364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26362,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26353,
                      "src": "11514:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 26363,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11519:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "11514:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26371,
                  "nodeType": "IfStatement",
                  "src": "11510:38:97",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 26366,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26351,
                          "src": "11538:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 26367,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26353,
                          "src": "11541:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 26368,
                          "name": "err",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26359,
                          "src": "11544:3:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 26365,
                        "name": "assertEq",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          25268,
                          25293,
                          25306,
                          25322,
                          25364,
                          25406,
                          25448,
                          25485,
                          25522,
                          25559,
                          23064,
                          23089,
                          23119,
                          23144,
                          23203,
                          23228,
                          23258,
                          23283,
                          24756,
                          24791
                        ],
                        "referencedDeclaration": 23228,
                        "src": "11529:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (int256,int256,string memory)"
                        }
                      },
                      "id": 26369,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11529:19:97",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "functionReturnParameters": 26361,
                    "id": 26370,
                    "nodeType": "Return",
                    "src": "11522:26:97"
                  }
                },
                {
                  "assignments": [
                    26373
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26373,
                      "mutability": "mutable",
                      "name": "percentDelta",
                      "nameLocation": "11607:12:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26397,
                      "src": "11599:20:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 26372,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11599:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26379,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26376,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26351,
                        "src": "11643:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 26377,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26353,
                        "src": "11646:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 26374,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "11622:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 26375,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11630:12:97",
                      "memberName": "percentDelta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31112,
                      "src": "11622:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 26378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11622:26:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11599:49:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26382,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26380,
                      "name": "percentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26373,
                      "src": "11663:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 26381,
                      "name": "maxPercentDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26355,
                      "src": "11678:15:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11663:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26396,
                  "nodeType": "IfStatement",
                  "src": "11659:167:97",
                  "trueBody": {
                    "id": 26395,
                    "nodeType": "Block",
                    "src": "11695:131:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f72",
                              "id": 26384,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11731:7:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              "value": "Error"
                            },
                            {
                              "id": 26385,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26359,
                              "src": "11740:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_e342daa49723ff3485f4ff5f755a17b8bc9c3c33bbd312ceee37c94eebfe45c1",
                                "typeString": "literal_string \"Error\""
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 26383,
                            "name": "log_named_string",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22829,
                            "src": "11714:16:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 26386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11714:30:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26387,
                        "nodeType": "EmitStatement",
                        "src": "11709:35:97"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 26389,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26351,
                              "src": "11783:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 26390,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26353,
                              "src": "11786:1:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 26391,
                              "name": "maxPercentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26355,
                              "src": "11789:15:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 26392,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26357,
                              "src": "11806:8:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 26388,
                            "name": "assertApproxEqRelDecimal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              26120,
                              26169,
                              26349,
                              26398
                            ],
                            "referencedDeclaration": 26349,
                            "src": "11758:24:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (int256,int256,uint256,uint256)"
                            }
                          },
                          "id": 26393,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11758:57:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26394,
                        "nodeType": "ExpressionStatement",
                        "src": "11758:57:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertApproxEqRelDecimal",
            "nameLocation": "11356:24:97",
            "parameters": {
              "id": 26360,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26351,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "11388:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26398,
                  "src": "11381:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26350,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11381:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26353,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11398:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26398,
                  "src": "11391:8:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26352,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11391:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26355,
                  "mutability": "mutable",
                  "name": "maxPercentDelta",
                  "nameLocation": "11409:15:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26398,
                  "src": "11401:23:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26354,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11401:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26357,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "11434:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26398,
                  "src": "11426:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26356,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11426:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26359,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "11458:3:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26398,
                  "src": "11444:17:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26358,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11444:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11380:82:97"
            },
            "returnParameters": {
              "id": 26361,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11500:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26416,
            "nodeType": "FunctionDefinition",
            "src": "11838:176:97",
            "nodes": [],
            "body": {
              "id": 26415,
              "nodeType": "Block",
              "src": "11941:73:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26408,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26400,
                        "src": "11964:6:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 26409,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26402,
                        "src": "11972:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 26410,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26400,
                        "src": "11983:6:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 26411,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26404,
                        "src": "11991:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 26412,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12002:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 26407,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26416,
                        26436,
                        26456,
                        26566
                      ],
                      "referencedDeclaration": 26566,
                      "src": "11951:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 26413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11951:56:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26414,
                  "nodeType": "ExpressionStatement",
                  "src": "11951:56:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "11847:12:97",
            "parameters": {
              "id": 26405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26400,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "11868:6:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26416,
                  "src": "11860:14:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26399,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11860:7:97",
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
                  "id": 26402,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "11889:9:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26416,
                  "src": "11876:22:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26401,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11876:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26404,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "11913:9:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26416,
                  "src": "11900:22:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26403,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11900:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11859:64:97"
            },
            "returnParameters": {
              "id": 26406,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11941:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26436,
            "nodeType": "FunctionDefinition",
            "src": "12020:216:97",
            "nodes": [],
            "body": {
              "id": 26435,
              "nodeType": "Block",
              "src": "12161:75:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26428,
                        "name": "targetA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26418,
                        "src": "12184:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 26429,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26420,
                        "src": "12193:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 26430,
                        "name": "targetB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26422,
                        "src": "12204:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 26431,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26424,
                        "src": "12213:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 26432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12224:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 26427,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26416,
                        26436,
                        26456,
                        26566
                      ],
                      "referencedDeclaration": 26566,
                      "src": "12171:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 26433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12171:58:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26434,
                  "nodeType": "ExpressionStatement",
                  "src": "12171:58:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12029:12:97",
            "parameters": {
              "id": 26425,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26418,
                  "mutability": "mutable",
                  "name": "targetA",
                  "nameLocation": "12050:7:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26436,
                  "src": "12042:15:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26417,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12042:7:97",
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
                  "id": 26420,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12072:9:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26436,
                  "src": "12059:22:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26419,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12059:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26422,
                  "mutability": "mutable",
                  "name": "targetB",
                  "nameLocation": "12091:7:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26436,
                  "src": "12083:15:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26421,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12083:7:97",
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
                  "id": 26424,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12113:9:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26436,
                  "src": "12100:22:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26423,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12100:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12041:82:97"
            },
            "returnParameters": {
              "id": 26426,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12161:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26456,
            "nodeType": "FunctionDefinition",
            "src": "12242:231:97",
            "nodes": [],
            "body": {
              "id": 26455,
              "nodeType": "Block",
              "src": "12388:85:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26448,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26438,
                        "src": "12411:6:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 26449,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26440,
                        "src": "12419:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 26450,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26438,
                        "src": "12430:6:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 26451,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26442,
                        "src": "12438:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 26452,
                        "name": "strictRevertData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26444,
                        "src": "12449:16:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
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
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 26447,
                      "name": "assertEqCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26416,
                        26436,
                        26456,
                        26566
                      ],
                      "referencedDeclaration": 26566,
                      "src": "12398:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_address_$_t_bytes_memory_ptr_$_t_bool_$returns$__$",
                        "typeString": "function (address,bytes memory,address,bytes memory,bool)"
                      }
                    },
                    "id": 26453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12398:68:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26454,
                  "nodeType": "ExpressionStatement",
                  "src": "12398:68:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12251:12:97",
            "parameters": {
              "id": 26445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26438,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "12272:6:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26456,
                  "src": "12264:14:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26437,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12264:7:97",
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
                  "id": 26440,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12293:9:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26456,
                  "src": "12280:22:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26439,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12280:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26442,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12317:9:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26456,
                  "src": "12304:22:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26441,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12304:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26444,
                  "mutability": "mutable",
                  "name": "strictRevertData",
                  "nameLocation": "12333:16:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26456,
                  "src": "12328:21:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26443,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12328:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12263:87:97"
            },
            "returnParameters": {
              "id": 26446,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12388:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26566,
            "nodeType": "FunctionDefinition",
            "src": "12479:1189:97",
            "nodes": [],
            "body": {
              "id": 26565,
              "nodeType": "Block",
              "src": "12669:999:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    26470,
                    26472
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26470,
                      "mutability": "mutable",
                      "name": "successA",
                      "nameLocation": "12685:8:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26565,
                      "src": "12680:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 26469,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "12680:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 26472,
                      "mutability": "mutable",
                      "name": "returnDataA",
                      "nameLocation": "12708:11:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26565,
                      "src": "12695:24:97",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 26471,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "12695:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26480,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26478,
                        "name": "callDataA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26460,
                        "src": "12745:9:97",
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
                        "arguments": [
                          {
                            "id": 26475,
                            "name": "targetA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26458,
                            "src": "12731:7:97",
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
                          "id": 26474,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12723:7:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 26473,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12723:7:97",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 26476,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12723:16:97",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 26477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12740:4:97",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "12723:21:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 26479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12723:32:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12679:76:97"
                },
                {
                  "assignments": [
                    26482,
                    26484
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26482,
                      "mutability": "mutable",
                      "name": "successB",
                      "nameLocation": "12771:8:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26565,
                      "src": "12766:13:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 26481,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "12766:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 26484,
                      "mutability": "mutable",
                      "name": "returnDataB",
                      "nameLocation": "12794:11:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 26565,
                      "src": "12781:24:97",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 26483,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "12781:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26492,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26490,
                        "name": "callDataB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26464,
                        "src": "12831:9:97",
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
                        "arguments": [
                          {
                            "id": 26487,
                            "name": "targetB",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26462,
                            "src": "12817:7:97",
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
                          "id": 26486,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12809:7:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 26485,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12809:7:97",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 26488,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12809:16:97",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 26489,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12826:4:97",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "12809:21:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 26491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12809:32:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12765:76:97"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 26495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26493,
                      "name": "successA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26470,
                      "src": "12856:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 26494,
                      "name": "successB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26482,
                      "src": "12868:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "12856:20:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26503,
                  "nodeType": "IfStatement",
                  "src": "12852:120:97",
                  "trueBody": {
                    "id": 26502,
                    "nodeType": "Block",
                    "src": "12878:94:97",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 26497,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26472,
                              "src": "12901:11:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 26498,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26484,
                              "src": "12914:11:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "hexValue": "43616c6c2072657475726e206461746120646f6573206e6f74206d61746368",
                              "id": 26499,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12927:33:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f3c9e4317c8eebc5635871f467354820a216f046f0a61b2ded371c2d507a555f",
                                "typeString": "literal_string \"Call return data does not match\""
                              },
                              "value": "Call return data does not match"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_f3c9e4317c8eebc5635871f467354820a216f046f0a61b2ded371c2d507a555f",
                                "typeString": "literal_string \"Call return data does not match\""
                              }
                            ],
                            "id": 26496,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25268,
                              25293,
                              25306,
                              25322,
                              25364,
                              25406,
                              25448,
                              25485,
                              25522,
                              25559,
                              23064,
                              23089,
                              23119,
                              23144,
                              23203,
                              23228,
                              23258,
                              23283,
                              24756,
                              24791
                            ],
                            "referencedDeclaration": 25322,
                            "src": "12892:8:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,bytes memory,string memory)"
                            }
                          },
                          "id": 26500,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12892:69:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26501,
                        "nodeType": "ExpressionStatement",
                        "src": "12892:69:97"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 26510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 26508,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 26505,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "12986:9:97",
                        "subExpression": {
                          "id": 26504,
                          "name": "successA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26470,
                          "src": "12987:8:97",
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
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "id": 26507,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "12999:9:97",
                        "subExpression": {
                          "id": 26506,
                          "name": "successB",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26482,
                          "src": "13000:8:97",
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
                      "src": "12986:22:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 26509,
                      "name": "strictRevertData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26466,
                      "src": "13012:16:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "12986:42:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26518,
                  "nodeType": "IfStatement",
                  "src": "12982:142:97",
                  "trueBody": {
                    "id": 26517,
                    "nodeType": "Block",
                    "src": "13030:94:97",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 26512,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26472,
                              "src": "13053:11:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 26513,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26484,
                              "src": "13066:11:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "hexValue": "43616c6c20726576657274206461746120646f6573206e6f74206d61746368",
                              "id": 26514,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13079:33:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_428332fc36b72ecad0a5d9bab5b9a568a85eeb20fd69ffcfbf4cf91598a0c858",
                                "typeString": "literal_string \"Call revert data does not match\""
                              },
                              "value": "Call revert data does not match"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_428332fc36b72ecad0a5d9bab5b9a568a85eeb20fd69ffcfbf4cf91598a0c858",
                                "typeString": "literal_string \"Call revert data does not match\""
                              }
                            ],
                            "id": 26511,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25268,
                              25293,
                              25306,
                              25322,
                              25364,
                              25406,
                              25448,
                              25485,
                              25522,
                              25559,
                              23064,
                              23089,
                              23119,
                              23144,
                              23203,
                              23228,
                              23258,
                              23283,
                              24756,
                              24791
                            ],
                            "referencedDeclaration": 25322,
                            "src": "13044:8:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,bytes memory,string memory)"
                            }
                          },
                          "id": 26515,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13044:69:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26516,
                        "nodeType": "ExpressionStatement",
                        "src": "13044:69:97"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 26522,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26520,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "13138:9:97",
                      "subExpression": {
                        "id": 26519,
                        "name": "successA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26470,
                        "src": "13139:8:97",
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
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 26521,
                      "name": "successB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26482,
                      "src": "13151:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13138:21:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26541,
                  "nodeType": "IfStatement",
                  "src": "13134:259:97",
                  "trueBody": {
                    "id": 26540,
                    "nodeType": "Block",
                    "src": "13161:232:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2043616c6c732077657265206e6f7420657175616c",
                              "id": 26524,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13184:29:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_6693dff23bd870151cc1817cba0ac95847c6f34adf907b7a38759066cb467c90",
                                "typeString": "literal_string \"Error: Calls were not equal\""
                              },
                              "value": "Error: Calls were not equal"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_6693dff23bd870151cc1817cba0ac95847c6f34adf907b7a38759066cb467c90",
                                "typeString": "literal_string \"Error: Calls were not equal\""
                              }
                            ],
                            "id": 26523,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "13180:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 26525,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13180:34:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26526,
                        "nodeType": "EmitStatement",
                        "src": "13175:39:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20204c6566742063616c6c207265766572742064617461",
                              "id": 26528,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13249:25:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d7308eff46cc177523801826a9076ec6e32f003b8da409c4d39812f8e534c573",
                                "typeString": "literal_string \"  Left call revert data\""
                              },
                              "value": "  Left call revert data"
                            },
                            {
                              "id": 26529,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26472,
                              "src": "13276:11:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d7308eff46cc177523801826a9076ec6e32f003b8da409c4d39812f8e534c573",
                                "typeString": "literal_string \"  Left call revert data\""
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 26527,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22823,
                            "src": "13233:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 26530,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13233:55:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26531,
                        "nodeType": "EmitStatement",
                        "src": "13228:60:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2052696768742063616c6c2072657475726e2064617461",
                              "id": 26533,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13323:25:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_688c5b0ecbf27f0fe1b748e920d97ecaaa6ff424050ac2e32936b79dcfbe27d9",
                                "typeString": "literal_string \" Right call return data\""
                              },
                              "value": " Right call return data"
                            },
                            {
                              "id": 26534,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26484,
                              "src": "13350:11:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_688c5b0ecbf27f0fe1b748e920d97ecaaa6ff424050ac2e32936b79dcfbe27d9",
                                "typeString": "literal_string \" Right call return data\""
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 26532,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22823,
                            "src": "13307:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 26535,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13307:55:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26536,
                        "nodeType": "EmitStatement",
                        "src": "13302:60:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 26537,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "13376:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 26538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13376:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26539,
                        "nodeType": "ExpressionStatement",
                        "src": "13376:6:97"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 26545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26542,
                      "name": "successA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26470,
                      "src": "13407:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 26544,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "13419:9:97",
                      "subExpression": {
                        "id": 26543,
                        "name": "successB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26482,
                        "src": "13420:8:97",
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
                    "src": "13407:21:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26564,
                  "nodeType": "IfStatement",
                  "src": "13403:259:97",
                  "trueBody": {
                    "id": 26563,
                    "nodeType": "Block",
                    "src": "13430:232:97",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "4572726f723a2043616c6c732077657265206e6f7420657175616c",
                              "id": 26547,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13453:29:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_6693dff23bd870151cc1817cba0ac95847c6f34adf907b7a38759066cb467c90",
                                "typeString": "literal_string \"Error: Calls were not equal\""
                              },
                              "value": "Error: Calls were not equal"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_6693dff23bd870151cc1817cba0ac95847c6f34adf907b7a38759066cb467c90",
                                "typeString": "literal_string \"Error: Calls were not equal\""
                              }
                            ],
                            "id": 26546,
                            "name": "log",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22749,
                            "src": "13449:3:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 26548,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13449:34:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26549,
                        "nodeType": "EmitStatement",
                        "src": "13444:39:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "20204c6566742063616c6c2072657475726e2064617461",
                              "id": 26551,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13518:25:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_596a9779ba89cf63b8ee3ff9d9ab391dc33d379f762c747717807c6af488f86f",
                                "typeString": "literal_string \"  Left call return data\""
                              },
                              "value": "  Left call return data"
                            },
                            {
                              "id": 26552,
                              "name": "returnDataA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26472,
                              "src": "13545:11:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_596a9779ba89cf63b8ee3ff9d9ab391dc33d379f762c747717807c6af488f86f",
                                "typeString": "literal_string \"  Left call return data\""
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 26550,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22823,
                            "src": "13502:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 26553,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13502:55:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26554,
                        "nodeType": "EmitStatement",
                        "src": "13497:60:97"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "2052696768742063616c6c207265766572742064617461",
                              "id": 26556,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13592:25:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_07ebd1833884933dbc5d408273462f380b6eb526f9bb29a66115cfe3ede76145",
                                "typeString": "literal_string \" Right call revert data\""
                              },
                              "value": " Right call revert data"
                            },
                            {
                              "id": 26557,
                              "name": "returnDataB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26484,
                              "src": "13619:11:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_07ebd1833884933dbc5d408273462f380b6eb526f9bb29a66115cfe3ede76145",
                                "typeString": "literal_string \" Right call revert data\""
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 26555,
                            "name": "log_named_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22823,
                            "src": "13576:15:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,bytes memory)"
                            }
                          },
                          "id": 26558,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13576:55:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26559,
                        "nodeType": "EmitStatement",
                        "src": "13571:60:97"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 26560,
                            "name": "fail",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              25207,
                              22960
                            ],
                            "referencedDeclaration": 22960,
                            "src": "13645:4:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 26561,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13645:6:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 26562,
                        "nodeType": "ExpressionStatement",
                        "src": "13645:6:97"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assertEqCall",
            "nameLocation": "12488:12:97",
            "parameters": {
              "id": 26467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26458,
                  "mutability": "mutable",
                  "name": "targetA",
                  "nameLocation": "12518:7:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26566,
                  "src": "12510:15:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12510:7:97",
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
                  "id": 26460,
                  "mutability": "mutable",
                  "name": "callDataA",
                  "nameLocation": "12548:9:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26566,
                  "src": "12535:22:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26459,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12535:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26462,
                  "mutability": "mutable",
                  "name": "targetB",
                  "nameLocation": "12575:7:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26566,
                  "src": "12567:15:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26461,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12567:7:97",
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
                  "id": 26464,
                  "mutability": "mutable",
                  "name": "callDataB",
                  "nameLocation": "12605:9:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26566,
                  "src": "12592:22:97",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26463,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12592:5:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26466,
                  "mutability": "mutable",
                  "name": "strictRevertData",
                  "nameLocation": "12629:16:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 26566,
                  "src": "12624:21:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26465,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12624:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12500:151:97"
            },
            "returnParameters": {
              "id": 26468,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12669:0:97"
            },
            "scope": 26567,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 25156,
              "name": "DSTest",
              "nameLocations": [
                "181:6:97"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 25035,
              "src": "181:6:97"
            },
            "id": 25157,
            "nodeType": "InheritanceSpecifier",
            "src": "181:6:97"
          }
        ],
        "canonicalName": "StdAssertions",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          26567,
          25035
        ],
        "name": "StdAssertions",
        "nameLocation": "164:13:97",
        "scope": 26568,
        "usedErrors": [],
        "usedEvents": [
          22749,
          22753,
          22757,
          22761,
          22765,
          22769,
          22773,
          22777,
          22783,
          22789,
          22797,
          22805,
          22811,
          22817,
          22823,
          22829,
          25162,
          25167,
          25172,
          25179,
          25186,
          25193
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 97
} as const;
