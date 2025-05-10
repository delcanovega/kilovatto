import React from "react";
import { Gauge, Handshake } from "lucide-react";
import Consumption from "@/components/consumption/Consumption.tsx";
import Contracts from "@/components/contracts/Contracts.tsx";

export type AppRoute = {
  path: string;
  label: string;
  icon: React.ElementType;
  component: React.FC;
};

export const routes: AppRoute[] = [
  {
    path: "/consumption",
    label: "Consumption",
    icon: Gauge,
    component: Consumption,
  },
  {
    path: "/contracts",
    label: "Contracts",
    icon: Handshake,
    component: Contracts,
  },
];
