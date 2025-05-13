import { Button, Heading, HStack, Spacer, VStack } from "@chakra-ui/react";
import { Settings2, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { routes } from "@/routes.ts";
import React from "react";

type Props = {
  expanded: boolean;
};

const Sidebar = ({ expanded }: Props) => {
  const [location, navigate] = useLocation();

  return (
    <VStack minH={"100vh"} w={expanded ? 200 : 73} paddingLeft={3} paddingY={3} paddingRight={2}>
      <HStack paddingY={3}>
        <Zap size={32} />
        {expanded && <Heading>kilovatto</Heading>}
      </HStack>

      {routes.map(({ path, icon, label }) => (
        <SidebarButton
          expanded={expanded}
          icon={icon}
          label={label}
          variant={location === path ? "solid" : "surface"}
          onClick={() => navigate(path)}
        />
      ))}

      <Spacer />

      <SidebarButton
        expanded={expanded}
        icon={Settings2}
        label={"Settings"}
        variant={"surface"}
        onClick={() => {}}
      />
    </VStack>
  );
};

type SidebarButtonProps = {
  expanded: boolean;
  variant: "solid" | "surface" | "plain";
  label: string;
  icon: React.ElementType;
  onClick: () => void;
};

const SidebarButton = ({ expanded, variant, label, icon: Icon, onClick }: SidebarButtonProps) => (
  <Button justifyContent="start" variant={variant} onClick={onClick} w={"100%"}>
    <Icon />
    {expanded ? label : ""}
  </Button>
);

export default Sidebar;
