import type { Complement } from "@/model/complement.ts";

type EnergyType = "electricity" | "gas";

export type Contract = ElectricityContract | GasContract;

interface AbstractContract {
  energyType: EnergyType;
  company: string;

  energyRate: number;

  from: string;
  to?: string;

  complements: Complement[];
}

export interface ElectricityContract extends AbstractContract {
  energyType: "electricity";

  peakPowerRate: number;
  valleyPowerRate: number;
}

export interface GasContract extends AbstractContract {
  energyType: "gas";

  powerRate: number;
}
