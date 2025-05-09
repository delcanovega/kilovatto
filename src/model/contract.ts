import type { Complement } from "@/model/complement.ts";

export type EnergyType = "electricity" | "gas";

export interface Contract {
  energyType: EnergyType;
  company: string;

  energyRate: number;

  from: string;
  to?: string;

  complements: Complement[];
}

export interface ElectricityContract extends Contract {
  energyType: "electricity";

  peakPowerRate: number;
  valleyPowerRate: number;
}

export interface GasContract extends Contract {
  energyType: "gas";

  powerRate: number;
}
