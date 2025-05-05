import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Flex>
      <Sidebar />
      <Box>Content</Box>
    </Flex>
  );
}

export default App;
