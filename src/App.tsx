import { Box, Flex, VStack } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header.tsx";
import Contracts from "@/components/contracts/Contracts.tsx";

function App() {
  return (
    <Flex>
      <Sidebar />
      <Box flex={"1"} w={"100%"}>
        <VStack>
          <Header />
          <Contracts />
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
