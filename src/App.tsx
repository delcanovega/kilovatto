import { Box, Flex, VStack } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header.tsx";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import { routes } from "@/routes.ts";

function App() {
  return (
    <Flex>
      <Sidebar />
      <Box flex={"1"} w={"100%"}>
        <VStack>
          <Header />
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
