/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DeLetterBase, DeLetterBaseInterface } from "../DeLetterBase";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "arweaveAddress",
        type: "string",
      },
    ],
    name: "ArweaveAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "arweaveAddress",
        type: "string",
      },
    ],
    name: "ArweaveAddressUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_addressList",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "arweaveAddress",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_arweaveAddress",
        type: "string",
      },
    ],
    name: "setArweaveAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_arweaveAddress",
        type: "string",
      },
    ],
    name: "updateArweaveAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061096b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063d40e480114610046578063e34c11be14610062578063ef4ab2d314610093575b600080fd5b610060600480360381019061005b91906105f1565b6100af565b005b61007c600480360381019061007791906105c8565b610225565b60405161008a9291906106fa565b60405180910390f35b6100ad60048036038101906100a891906105f1565b6102f1565b005b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461017e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101759061074c565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010190805190602001906101d39291906104a8565b503373ffffffffffffffffffffffffffffffffffffffff167f5ff86e56c4812e48a53e99b1f2a00dbf3dca0a209eedec74e92d9e5809fd9a328260405161021a919061072a565b60405180910390a250565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461026e9061087d565b80601f016020809104026020016040519081016040528092919081815260200182805461029a9061087d565b80156102e75780601f106102bc576101008083540402835291602001916102e7565b820191906000526020600020905b8154815290600101906020018083116102ca57829003601f168201915b5050505050905082565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805461033f9061087d565b905014610381576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103789061076c565b60405180910390fd5b336000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010190805190602001906104569291906104a8565b503373ffffffffffffffffffffffffffffffffffffffff167fd8be721dcbc2fe996168596311b0f23494bb9563e4398c7bdace1e8a2310f53e8260405161049d919061072a565b60405180910390a250565b8280546104b49061087d565b90600052602060002090601f0160209004810192826104d6576000855561051d565b82601f106104ef57805160ff191683800117855561051d565b8280016001018555821561051d579182015b8281111561051c578251825591602001919060010190610501565b5b50905061052a919061052e565b5090565b5b8082111561054757600081600090555060010161052f565b5090565b600061055e610559846107bd565b61078c565b90508281526020810184848401111561057657600080fd5b61058184828561083b565b509392505050565b6000813590506105988161091e565b92915050565b600082601f8301126105af57600080fd5b81356105bf84826020860161054b565b91505092915050565b6000602082840312156105da57600080fd5b60006105e884828501610589565b91505092915050565b60006020828403121561060357600080fd5b600082013567ffffffffffffffff81111561061d57600080fd5b6106298482850161059e565b91505092915050565b61063b81610809565b82525050565b600061064c826107ed565b61065681856107f8565b935061066681856020860161084a565b61066f8161090d565b840191505092915050565b60006106876015836107f8565b91507f4f6e6c79206f776e65722063616e2075706461746500000000000000000000006000830152602082019050919050565b60006106c7601b836107f8565b91507f41727765617665206164647265737320616c72656164792073657400000000006000830152602082019050919050565b600060408201905061070f6000830185610632565b81810360208301526107218184610641565b90509392505050565b600060208201905081810360008301526107448184610641565b905092915050565b600060208201905081810360008301526107658161067a565b9050919050565b60006020820190508181036000830152610785816106ba565b9050919050565b6000604051905081810181811067ffffffffffffffff821117156107b3576107b26108de565b5b8060405250919050565b600067ffffffffffffffff8211156107d8576107d76108de565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006108148261081b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b8381101561086857808201518184015260208101905061084d565b83811115610877576000848401525b50505050565b6000600282049050600182168061089557607f821691505b602082108114156108a9576108a86108af565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61092781610809565b811461093257600080fd5b5056fea2646970667358221220791c052a94161a49729922ad74cf8178f6a79a3881437cbe5937b28f3165075b64736f6c63430008000033";

type DeLetterBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeLetterBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeLetterBase__factory extends ContractFactory {
  constructor(...args: DeLetterBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DeLetterBase> {
    return super.deploy(overrides || {}) as Promise<DeLetterBase>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeLetterBase {
    return super.attach(address) as DeLetterBase;
  }
  override connect(signer: Signer): DeLetterBase__factory {
    return super.connect(signer) as DeLetterBase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeLetterBaseInterface {
    return new utils.Interface(_abi) as DeLetterBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeLetterBase {
    return new Contract(address, _abi, signerOrProvider) as DeLetterBase;
  }
}
