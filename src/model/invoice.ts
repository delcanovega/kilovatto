import type { Contract } from "@/model/contract.ts";
import type { Complement } from "@/model/complement.ts";

export interface Invoice {
  contract: Contract;

  from: string;
  to: string;

  consumptionKw: number;

  complements: Complement[];
}
