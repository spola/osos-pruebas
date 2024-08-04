
import { Theme, ThemePanel, Flex, Box, Text, Button, Grid } from "@radix-ui/themes";
import { useImmer } from 'use-immer';
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import { Oso } from './Oso';

const socket = io('http://localhost:4000', { autoConnect: false });


export function GrillaOsos() {

    const [listaOsos, updateListaOsos] = useImmer([]);

    function handleOsoUpdated(osoMessage) {
        updateListaOsos(draft => {
            const oso = draft.find(a =>
                a.id === osoMessage.id
            );
            if (oso != null) {

                Object.assign(oso, osoMessage);
            } else {
                console.error("Elemento no encontrado");
            }
        });
    };

    useEffect(() => {
        let res = fetch('http://localhost:4000/osos')
            .then(r => r.json())
            .then(osos => {
                updateListaOsos(draft => {
                    return draft.filter(v => false).concat(osos);
                    // osos.forEach((v) => draft.push(v));
                })
            });

        console.info("pasando por acá");

        socket.connect();

        socket.on("connect", () => {
            console.log("Socket connected");
        });

        socket.on("disconnect", () => {
            console.log("Socket disconnected");
        });

        socket.on("oso-updated", (osoMessage) => {
            console.log("New message added", osoMessage);
            handleOsoUpdated(osoMessage);
            //setMessages((previousMessages) => [...previousMessages, newMessage]);
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("oso-updated");
        };
    }, []);

    return (
        <Grid columns={{ initial: '4', md: '2' }} gap="6" width="auto">
            {listaOsos.map((o, i) => (<Oso key={o.id} data={o}></Oso>))}
        </Grid>
    )
};