import { BigNumber } from "ethers";

export interface PlantyDeployConfig {
  plantyToken: {
    name: string;
    symbol: string;
    plantManagerSupply: BigNumber;
    adminSupply: BigNumber;
  };
}
