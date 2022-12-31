import { ethers } from "hardhat";

async function main() {
  const DeLetterBase = await ethers.getContractFactory("DeLetterBase");
  const deLetterBase = await DeLetterBase.deploy();
  await deLetterBase.deployed();
  console.log("DeLetterBase address:", deLetterBase.address); // eslint-disable-line no-console
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
