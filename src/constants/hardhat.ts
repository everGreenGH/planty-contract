import { ethers } from "hardhat";
import { PlantyDeployConfig } from "./interface";

export const localInfo: PlantyDeployConfig = {
  plantyToken: {
    name: "PlantyToken",
    symbol: "PLANTY",
    plantManagerSupply: ethers.utils.parseEther("10000"),
    adminSupply: ethers.utils.parseEther("90000"),
  },
};
