import { Box, Button, Heading, HStack, Spacer, Stack } from "@chakra-ui/react";
import { Calculator, CirclePlus, LayoutDashboard, Settings2, Zap } from "lucide-react";

const Sidebar = () => (
  <Box background={"bg.subtle"}>
    <Stack minH={"100vh"} minW={200} p={3}>
      <HStack p={4}>
        <Zap />
        <Heading>Kilovatto</Heading>
      </HStack>
      
      <Button justifyContent="start">
        <CirclePlus /> Add
      </Button>
      <Button variant="surface" justifyContent="start">
        <LayoutDashboard /> Dashboard
      </Button>
      <Button variant="surface" justifyContent="start">
        <Calculator /> Simulator
      </Button>

      <Spacer />

      <Button variant="surface" justifyContent="start">
        <Settings2 /> Settings
      </Button>
    </Stack>
  </Box>
);

export default Sidebar;
