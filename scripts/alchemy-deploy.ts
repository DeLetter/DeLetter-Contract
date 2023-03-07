const { Network, Alchemy, ContractFactory, Wallet } = require("alchemy-sdk");
const abi = require("../artifacts/DeLetterBase_ABI.json");
const bytecodes = require("../artifacts/DeLetterBase_Bytecode.json");
const { config } = require("dotenv");
config();

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);
let wallet = new Wallet(process.env.GOERLI_PRIVATE_KEY, alchemy);
async function main() {
  let factory = new ContractFactory(abi, bytecodes, wallet);
  let contract = await factory.deploy();
  console.log(contract.address);
  console.log(contract.deployTransaction.hash);
  await contract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
