import type { Contract } from "@/model/contract.ts";
import { Grid, GridItem } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import ContractsTable from "@/components/contracts/ContractsTable.tsx";
import ContractDetails from "@/components/contracts/ContractDetails.tsx";

const contracts: Contract[] = [
  {
    energyType: "electricity",
    company: "Repsol",
    energyRate: 0.144068,
    peakPowerRate: 26.438889,
    valleyPowerRate: 24.628736,
    from: "2024-01-25",
    complements: [],
  },
  {
    energyType: "gas",
    company: "Repsol",
    energyRate: 0.144068,
    powerRate: 5.904451,
    from: "2024-01-25",
    complements: [],
  },
];

const Contracts = () => {
  const [openContract, setOpenContract] = useState<Contract>();

  const selectContract = useCallback(
    (contract: Contract) => {
      setOpenContract(contract);
    },
    [setOpenContract]
  );

  const closeContract = useCallback(() => {
    setOpenContract(undefined);
  }, [setOpenContract]);

  return (
    <Grid w={"100%"} templateColumns="repeat(5, 1fr)" gap={4} p={4}>
      <GridItem colSpan={3}>
        <ContractsTable contracts={contracts} selectContract={selectContract} />
      </GridItem>
      <GridItem colSpan={2}>
        <ContractDetails contract={openContract} closeContract={closeContract} />
      </GridItem>
    </Grid>
  );
};

export default Contracts;
