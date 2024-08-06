import React from "react";
import "@radix-ui/themes/styles.css";
import "./App.css";
import { ThemeProvider } from "./ThemeProvider";

import { Theme, ThemePanel, Flex, Box, Text, Button, Grid, Heading, Separator } from "@radix-ui/themes";

import { GrillaOsos } from './GrillaOsos';
import { Tareas } from "./Tareas";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io('http://localhost:4000', { autoConnect: false });


function App() {

  useEffect(() => {

    console.info("pasando por acá");

    socket.connect();

    socket.on("connect", () => {
        console.log("Socket connected");
    });

    socket.on("disconnect", () => {
        console.log("Socket disconnected");
    });

    return () => {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("oso-updated");
    };
}, []);

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
        {/* <Box px="4" pt="2"> */}
        <Flex gap={3}>
          <Box width="300px">
            <Tareas socket={socket}/>
          </Box>
          <Box width="100%">
            <GrillaOsos socket={socket}/>
          </Box>
        </Flex>
        {/* </Box> */}
      </Theme>
    </ThemeProvider>

  );
}

export default App;
