export type ComplementType = "flat" | "daily" | "percentual";

export interface Complement {
  concept: string;
  amount: number;
  discount: boolean;
}
