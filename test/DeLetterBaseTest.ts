import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signer";
import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import chai from "chai";
import { DeLetterBase } from "../typechain/DeLetterBase";

chai.use(solidity);
const { expect } = chai;

describe("DeLetterBase", () => {
  let deLetterBase: DeLetterBase;
  let addr1: SignerWithAddress;

  beforeEach(async () => {
    [addr1] = await ethers.getSigners();
    const DeLetterBaseFactory = await ethers.getContractFactory("DeLetterBase");
    deLetterBase = (await DeLetterBaseFactory.deploy()) as DeLetterBase;
    await deLetterBase.deployed();
  });

  it("Should allow user to set arweave address", async () => {
    expect(await deLetterBase.connect(addr1).setArweaveAddress("test")).to.not
      .reverted;
  });
  //   it("Should allow user to check arweave address", async () => {
  //     await deLetterBase.setArweaveAddress("test");
  //     expect(await deLetterBase._addressList(addr1)).to.equal("test");
  //   });
});
