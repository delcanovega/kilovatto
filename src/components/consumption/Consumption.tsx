import { Box, Tabs } from "@chakra-ui/react";
import { Flame, Lightbulb } from "lucide-react";

const Consumption = () => (
  <Box w={"100%"} p={4}>
    <Tabs.Root variant={"enclosed"} defaultValue="electricity">
      <Tabs.List>
        <Tabs.Trigger value="electricity">
          <Lightbulb /> Electricity
        </Tabs.Trigger>
        <Tabs.Trigger value="gas">
          <Flame /> Gas
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="electricity">View your electricity consumption</Tabs.Content>
      <Tabs.Content value="gas">View your gas consumption</Tabs.Content>
    </Tabs.Root>
  </Box>
);

export default Consumption;
