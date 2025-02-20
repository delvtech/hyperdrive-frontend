import { abi as _multicallabi } from "../abis/Multicall2.json";

// deploy the bytecode
import { Address, Hex } from "viem";
import { publicClient, walletClient } from "../client";

async function deployMulticall(): Promise<Address> {
  const multicallBytecode =
    "0x608060405234801561001057600080fd5b50600436106100b45760003560e01c806372425d9d1161007157806372425d9d1461013a57806386d516e814610140578063a8b0574e14610146578063bce38bd714610154578063c3077fa914610174578063ee82ac5e14610187576100b4565b80630f28c97d146100b9578063252dba42146100ce57806327e86d6e146100ef578063399542e9146100f757806342cbb15c146101195780634d2301cc1461011f575b600080fd5b425b6040519081526020015b60405180910390f35b6100e16100dc3660046106e2565b610199565b6040516100c592919061084e565b6100bb610359565b61010a61010536600461071d565b61036c565b6040516100c5939291906108b6565b436100bb565b6100bb61012d3660046106c1565b6001600160a01b03163190565b446100bb565b456100bb565b6040514181526020016100c5565b61016761016236600461071d565b610384565b6040516100c5919061083b565b61010a6101823660046106e2565b610576565b6100bb61019536600461076f565b4090565b8051439060609067ffffffffffffffff8111156101c657634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156101f957816020015b60608152602001906001900390816101e45790505b50905060005b83518110156103535760008085838151811061022b57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b031686848151811061026057634e487b7160e01b600052603260045260246000fd5b602002602001015160200151604051610279919061081f565b6000604051808303816000865af19150503d80600081146102b6576040519150601f19603f3d011682016040523d82523d6000602084013e6102bb565b606091505b5091509150816103125760405162461bcd60e51b815260206004820181905260248201527f4d756c746963616c6c206167677265676174653a2063616c6c206661696c656460448201526064015b60405180910390fd5b8084848151811061033357634e487b7160e01b600052603260045260246000fd5b60200260200101819052505050808061034b90610956565b9150506101ff565b50915091565b600061036660014361090f565b40905090565b438040606061037b8585610384565b90509250925092565b6060815167ffffffffffffffff8111156103ae57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156103f457816020015b6040805180820190915260008152606060208201528152602001906001900390816103cc5790505b50905060005b825181101561056f5760008084838151811061042657634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b031685848151811061045b57634e487b7160e01b600052603260045260246000fd5b602002602001015160200151604051610474919061081f565b6000604051808303816000865af19150503d80600081146104b1576040519150601f19603f3d011682016040523d82523d6000602084013e6104b6565b606091505b5091509150851561051857816105185760405162461bcd60e51b815260206004820152602160248201527f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c656044820152601960fa1b6064820152608401610309565b604051806040016040528083151581526020018281525084848151811061054f57634e487b7160e01b600052603260045260246000fd5b60200260200101819052505050808061056790610956565b9150506103fa565b5092915050565b600080606061058660018561036c565b9196909550909350915050565b80356001600160a01b03811681146105aa57600080fd5b919050565b600082601f8301126105bf578081fd5b8135602067ffffffffffffffff808311156105dc576105dc610987565b6105e982838502016108de565b83815282810190868401865b868110156106b357813589016040601f198181848f03011215610616578a8bfd5b61061f826108de565b61062a8a8501610593565b8152828401358981111561063c578c8dfd5b8085019450508d603f850112610650578b8cfd5b898401358981111561066457610664610987565b6106748b84601f840116016108de565b92508083528e84828701011115610689578c8dfd5b808486018c85013782018a018c9052808a01919091528652505092850192908501906001016105f5565b509098975050505050505050565b6000602082840312156106d2578081fd5b6106db82610593565b9392505050565b6000602082840312156106f3578081fd5b813567ffffffffffffffff811115610709578182fd5b610715848285016105af565b949350505050565b6000806040838503121561072f578081fd5b8235801515811461073e578182fd5b9150602083013567ffffffffffffffff811115610759578182fd5b610765858286016105af565b9150509250929050565b600060208284031215610780578081fd5b5035919050565b60008282518085526020808601955080818302840101818601855b848110156107e657858303601f19018952815180511515845284015160408585018190526107d2818601836107f3565b9a86019a94505050908301906001016107a2565b5090979650505050505050565b6000815180845261080b816020860160208601610926565b601f01601f19169290920160200192915050565b60008251610831818460208701610926565b9190910192915050565b6000602082526106db6020830184610787565b600060408201848352602060408185015281855180845260608601915060608382028701019350828701855b828110156108a857605f198887030184526108968683516107f3565b9550928401929084019060010161087a565b509398975050505050505050565b6000848252836020830152606060408301526108d56060830184610787565b95945050505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561090757610907610987565b604052919050565b60008282101561092157610921610971565b500390565b60005b83811015610941578181015183820152602001610929565b83811115610950576000848401525b50505050565b600060001982141561096a5761096a610971565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212206787faa4e99522d99238bfccae7db663406d5fb76d32f85395e2076d3733a7cd64736f6c63430008020033"; // Get the Multicall2 bytecode from verified sources

  const hash = await walletClient?.deployContract({
    abi: _multicallabi,
    bytecode: multicallBytecode as Hex,
    account: walletClient?.account?.address,
    chain: publicClient?.chain,
    gas: 100000n,
  });

  const receipt = await publicClient?.waitForTransactionReceipt({ hash });
  console.log(receipt, "receipt");
  if (!receipt?.contractAddress) {
    throw new Error("Multicall deployment failed");
  }
  return receipt.contractAddress;
}

deployMulticall().then((address) => {
  console.log(`Multicall deployed to: ${address}`);
});
