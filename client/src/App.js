import React from "react";
import "@radix-ui/themes/styles.css";
import "./App.css";
import { ThemeProvider } from "./ThemeProvider";

import { Theme, ThemePanel, Flex, Box, Text, Button, Grid, Heading, Separator } from "@radix-ui/themes";

import { GrillaOsos } from './GrillaOsos';


function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Theme
        appearance="dark"
        accentColor="grass"
        grayColor="sand"
        radius="small"
        scaling="100%"
      >
        {/* <ThemePanel /> */}
        <Heading size="9">
          Osos trabajando
        </Heading>
        <Separator my="3" size="4" />
        <Box px="4" pt="2">
          <GrillaOsos />
        </Box>
      </Theme>
    </ThemeProvider>

  );
}

export default App;
