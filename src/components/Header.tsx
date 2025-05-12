import { Box, Button, Heading, HStack, Separator } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { useMemo } from "react";
import { routes } from "@/routes.ts";
import { PanelLeftClose } from "lucide-react";

const Header = () => {
  const [location] = useLocation();

  const title = useMemo(() => {
    return routes.find((route) => route.path === location)?.label ?? "Unknown";
  }, [location]);

  return (
    <Box w={"100%"} minH={18} paddingX={2} paddingTop={2} display={"flex"} alignItems={"center"}>
      <HStack>
        <Button variant={"ghost"}>
          <PanelLeftClose />
        </Button>
        <Separator orientation={"vertical"} h={50} />
        <Heading paddingLeft={4}>{title}</Heading>
      </HStack>
    </Box>
  );
};

export default Header;
