import { Box, Button, SegmentGroup, Table } from "@chakra-ui/react";
import { formatDate } from "@/utils/dateUtils.ts";
import { CirclePlus, Eye } from "lucide-react";
import type { Contract } from "@/model/contract.ts";
import { useEffect, useState } from "react";

type ContractsTableProps = {
  contracts: Contract[];
  selectContract: (contract: Contract) => void;
};

const ContractsTable = (props: ContractsTableProps) => {
  const [tableFilter, setTableFilter] = useState<string | null>("all");
  const [filteredRows, setFilteredRows] = useState(props.contracts);

  useEffect(() => {
    setFilteredRows(
      props.contracts.filter(
        (contract) => tableFilter === "all" || contract.energyType === tableFilter
      )
    );
  }, [props.contracts, setFilteredRows, tableFilter]);

  return (
    <Box spaceY={2}>
      <SegmentGroup.Root
        value={tableFilter}
        onValueChange={(filter) => setTableFilter(filter.value)}
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Items items={["all", "electricity", "gas"]} />
      </SegmentGroup.Root>
      <Table.Root size="sm" variant="outline" interactive={true}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader minW={81}>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Company</Table.ColumnHeader>
            <Table.ColumnHeader>From</Table.ColumnHeader>
            <Table.ColumnHeader>To</Table.ColumnHeader>
            <Table.ColumnHeader></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredRows.map((contract) => (
            <Table.Row onClick={() => props.selectContract(contract)}>
              <Table.Cell>{contract.energyType}</Table.Cell>
              <Table.Cell>{contract.company}</Table.Cell>
              <Table.Cell>{formatDate(contract.from)}</Table.Cell>
              <Table.Cell>{formatDate(contract.to)}</Table.Cell>
              <Table.Cell textAlign="end">
                <Button size="xs" variant="surface" onClick={() => props.selectContract(contract)}>
                  <Eye />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Button>
        <CirclePlus /> Add
      </Button>
    </Box>
  );
};

export default ContractsTable;
