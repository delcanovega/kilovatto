import type { Contract } from "@/model/contract.ts";
import { Card, DataList, Group, Heading } from "@chakra-ui/react";
import { X } from "lucide-react";

type ContractDetailsProps = {
  contract?: Contract;
  closeContract: () => void;
};

const ContractDetails = ({ contract, closeContract }: ContractDetailsProps) =>
  contract && (
    <Card.Root>
      <Card.Header>
        <Group justifyContent="space-between">
          <Heading>Contract Details</Heading>
          <X onClick={closeContract} />
        </Group>
      </Card.Header>
      <Card.Body color="fg.muted">
        <DataList.Root orientation="horizontal">
          <DataList.Item key={"type"}>
            <DataList.ItemLabel>{"Type:"}</DataList.ItemLabel>
            <DataList.ItemValue>{contract.energyType}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item key={"company"}>
            <DataList.ItemLabel>{"Company:"}</DataList.ItemLabel>
            <DataList.ItemValue>{contract.company}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item key={"from"}>
            <DataList.ItemLabel>{"From:"}</DataList.ItemLabel>
            <DataList.ItemValue>{contract.from}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item key={"to"}>
            <DataList.ItemLabel>{"To:"}</DataList.ItemLabel>
            <DataList.ItemValue>{contract.to}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item key={"energyRate"}>
            <DataList.ItemLabel>{"Energy rate:"}</DataList.ItemLabel>
            <DataList.ItemValue>{contract.energyRate} €/kWh</DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      </Card.Body>
    </Card.Root>
  );

export default ContractDetails;
