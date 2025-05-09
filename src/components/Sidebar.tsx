import { Box, Button, Heading, HStack, SegmentGroup, Spacer, Stack } from "@chakra-ui/react";
import { Calculator, CirclePlus, Gauge, Handshake, Settings2, Zap } from "lucide-react";

const menuItems = [
  {
    value: "consumption",
    label: (
      <HStack w="100%" justify="flex-start">
        <Gauge /> Consumption
      </HStack>
    ),
  },
  {
    value: "simulator",
    label: (
      <HStack w="100%" justify="flex-start">
        <Calculator /> Simulator
      </HStack>
    ),
  },
];

const Sidebar = () => {
  return (
    <Box background={"bg.subtle"}>
      <Stack minH={"100dvh"} minW={200} p={3}>
        <HStack p={4}>
          <Zap />
          <Heading>Kilovatto</Heading>
        </HStack>

        <Button justifyContent="start">
          <CirclePlus /> Add
        </Button>
        <Button variant="surface" justifyContent="start">
          <Gauge /> Consumption
        </Button>
        <Button variant="surface" justifyContent="start">
          <Calculator /> Simulator
        </Button>
        <Button variant="surface" justifyContent="start">
          <Handshake /> Contracts
        </Button>

        <SegmentGroup.Root
          defaultValue="consumption"
          orientation="vertical"
          style={{ width: "100%" }}
        >
          <SegmentGroup.Indicator />
          <SegmentGroup.Items items={menuItems} />
        </SegmentGroup.Root>

        <Spacer />

        <Button variant="surface" justifyContent="start">
          <Settings2 /> Settings
        </Button>
      </Stack>
    </Box>
  );
};

export default Sidebar;
