import { Box, Heading } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { useMemo } from "react";
import { routes } from "@/routes.ts";

const Header = () => {
  const [location] = useLocation();

  const title = useMemo(() => {
    return routes.find((route) => route.path === location)?.label ?? "Unknown";
  }, [location]);

  return (
    <Box w={"100%"} minH={20} background={"bg.emphasized"}>
      <Heading>{title}</Heading>
    </Box>
  );
};

export default Header;
