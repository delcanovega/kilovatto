import { Box, Button, Heading, HStack, Separator } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { useCallback, useMemo } from "react";
import { routes } from "@/routes.ts";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

type Props = {
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
};

const Header = ({ sidebarExpanded, setSidebarExpanded }: Props) => {
  const [location] = useLocation();

  const toggleSidebar = useCallback(() => {
    setSidebarExpanded(!sidebarExpanded);
  }, [sidebarExpanded, setSidebarExpanded]);

  const title = useMemo(() => {
    return routes.find((route) => route.path === location)?.label ?? "Unknown";
  }, [location]);

  return (
    <Box w={"100%"} minH={18} paddingX={2} paddingTop={2} display={"flex"} alignItems={"center"}>
      <HStack>
        <Button variant={"ghost"} onClick={toggleSidebar}>
          {sidebarExpanded ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
        <Separator orientation={"vertical"} h={50} />
        <Heading paddingLeft={4}>{title}</Heading>
      </HStack>
    </Box>
  );
};

export default Header;
