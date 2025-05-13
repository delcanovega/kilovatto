import { Box, Flex, Separator, VStack } from "@chakra-ui/react";
import Header from "@/components/Header.tsx";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { routes } from "@/routes.ts";
import Sidebar from "@/components/Sidebar.tsx";

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true);

  return (
    <Box h={"100%"} w={"100%"} background={"bg.subtle"}>
      <Flex>
        <Sidebar expanded={sidebarExpanded} />
        <Box
          flex={"1"}
          w={"100%"}
          background={"bg.panel"}
          borderWidth={"1px"}
          borderColor={"bg.emphasized"}
          rounded={"lg"}
          m={1}
        >
          <VStack>
            <Header sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
            <Separator w={"100%"} />
            <Switch>
              <Route path="/" component={() => <NavigateTo path="/consumption" />} />
              {routes.map((route) => (
                <Route path={route.path} component={route.component} />
              ))}
              <Route>404: No such page!</Route>
            </Switch>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

function NavigateTo({ path }: { path: string }) {
  const [, navigate] = useLocation();
  useEffect(() => {
    navigate(path);
  }, [navigate, path]);
  return null;
}

export default App;
