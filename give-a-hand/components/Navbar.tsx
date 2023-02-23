import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  NavLink,
  Anchor,
} from "@mantine/core";
import { Router } from "next/router";

export default function MantineNavbar() {
  const theme =
    useMantineTheme(); /*Mantine theme is an object where your application's colors, 
                                    fonts, spacing, border-radius and other design tokens are stored.*/
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      header={
        <Header
          height={{ base: 60, md: 60 }}
          p='md'
          style={{
            backgroundColor: "black",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-evenly",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}>
            <Text style={{ color: "#D6336C", fontSize: "1.5rem" }}>
              GIVEAHAND
            </Text>
            <MediaQuery largerThan='sm' styles={{ display: "none" }}>
              <Burger //Burger component renders open/close menu button.
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.dark[9]}
                mr='xl'
              />
            </MediaQuery>
            <Text>Explore</Text>
            <Text>Our Top 10 projects</Text>
            <Anchor href='/create_campaign' style={{ color: "white" }}>
              Create Campaign
            </Anchor>
          </div>
        </Header>
      }>

    </AppShell>
  );
}
