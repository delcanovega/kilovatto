import { Box, Button, ButtonGroup, Heading, HStack, Spacer, Stack } from "@chakra-ui/react";
import { Settings2, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { routes } from "@/routes.ts";

const Sidebar = () => {
  const [location, navigate] = useLocation();

  return (
    <Box background={"bg.subtle"}>
      <Stack minH={"100dvh"} minW={200} p={3}>
        <HStack p={4} onClick={() => navigate("/")}>
          <Zap />
          <Heading>Kilovatto</Heading>
        </HStack>

        <ButtonGroup orientation="vertical">
          {routes.map(({ path, icon: Icon, label }) => (
            <Button
              key={path}
              justifyContent="start"
              variant={location === path ? "solid" : "surface"}
              onClick={() => navigate(path)}
              w={"100%"}
            >
              <Icon />
              {label}
            </Button>
          ))}
        </ButtonGroup>

        <Spacer />

        <Button variant="surface" justifyContent="start">
          <Settings2 /> Settings
        </Button>
      </Stack>
    </Box>
  );
};

export default Sidebar;
