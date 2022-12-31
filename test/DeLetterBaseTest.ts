import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import chai from "chai";
import { DeLetterBase } from "../typechain-types/DeLetterBase";

chai.use(solidity);
const { expect } = chai;

describe("DeLetterBase", () => {
  let deLetterBase: DeLetterBase;
  let addr1: any;
  let addr2: any;

  beforeEach(async () => {
    [addr1, addr2] = await ethers.getSigners();
    const DeLetterBaseFactory = await ethers.getContractFactory("DeLetterBase");
    deLetterBase = (await DeLetterBaseFactory.deploy()) as DeLetterBase;
    await deLetterBase.deployed();
  });

  it("Should set a new addressList struct for user", async () => {
    console.log(addr1.address);
    await deLetterBase.connect(addr1).setArweaveAddress("test");
    console.log(await deLetterBase._addressList(addr1.address));
    expect((await deLetterBase._addressList(addr1.address)).owner).to.equal(
      addr1.address
    );
  });

  it("Should allow user to update existing struct", async () => {
    await deLetterBase.connect(addr1).setArweaveAddress("test");
    await deLetterBase.connect(addr1).updateArweaveAddress("test2");
    expect(
      (await deLetterBase._addressList(addr1.address)).arweaveAddress
    ).to.equal("test2");
  });

  it("Should not allow user to create multiple list: arweaveAddress issue", async () => {
    await deLetterBase.connect(addr1).setArweaveAddress("test");
    await expect(
      deLetterBase.connect(addr1).setArweaveAddress("test")
    ).to.be.revertedWith("Arweave address already set");
  });
  it("Should not allow user updating empty struct", async () => {
    await expect(deLetterBase.updateArweaveAddress("test")).to.be.revertedWith(
      "Only owner can update"
    );
  });
});
