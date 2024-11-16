import { testnetInfo } from "@constants";
import { PlantyFactory, PlantyPool } from "@typechains";
import { ethers, getNamedAccounts } from "hardhat";

export const closePublicSale = async () => {
  const { developer } = await getNamedAccounts();
  const developerWallet = await ethers.getSigner(developer);

  const plantyFactory = await ethers.getContract<PlantyFactory>("PlantyFactory");
  const plantyPoolAddress = await plantyFactory.pools(0);

  const plantyPool = await ethers.getContractAt<PlantyPool>("PlantyPool", plantyPoolAddress);
  console.log("🎯 Target Pool: ", plantyPool.address);

  const publicSalePrice = testnetInfo.createPoolConfig!.publicSalePrice;

  await (
    await plantyPool
      .connect(developerWallet)
      .configurePublicSale(0, publicSalePrice, { gasLimit: testnetInfo.network!.gasLimit })
  ).wait();

  console.log("🎉 Public Sale closed!");
};

closePublicSale();
