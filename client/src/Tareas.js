import { DataList, Flex, Heading, ScrollArea } from "@radix-ui/themes";
import { Box, Card, Avatar, Text, Separator, Badge } from "@radix-ui/themes";

import { useImmer } from 'use-immer';
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

/*
export class TareaDTO {
    constructor(attr: Partial<TareaDTO>) {
        Object.assign(this, attr)
    }

    codigo: string;
    estado: EstadoTarea;
    pln: string;
    origen: string;
    destino: string;

    etapa?: number;
}
    */

// const socket = io('http://localhost:4000', { autoConnect: false });

const colorAccion = (tarea) => {
    if (tarea.estado == "terminado") return "jade";
    if (tarea.estado == "procesado") return "blue";
    if (tarea.estado == "ingresado") return "gray";
}

export function Tareas({ socket }) {

    const [listaTareas, updateListaTareas] = useImmer([]);

    function handleTareaUpdated(accionMessage) {
        updateListaTareas(draft => {
            const t = draft.find(a =>
                a.codigo === accionMessage.codigo
            );
            if (t != null) {
                console.info("Tarea encontrada, actualizando")
                Object.assign(t, accionMessage);
            } else {
                console.info("tarea no encontrada, creando")
                draft.push(accionMessage);
            }
        });
    };

    useEffect(() => {

        let res = fetch('http://localhost:4000/acciones')
            .then(r => r.json())
            .then(acciones => {
                updateListaTareas(draft => {
                    return draft.filter(v => false).concat(acciones);
                    // osos.forEach((v) => draft.push(v));
                })
            });

        socket.on("accion-asignada", (accionMessage) => {
            console.log("New acción asignada", accionMessage);
            handleTareaUpdated(accionMessage.tarea);
            //setMessages((previousMessages) => [...previousMessages, newMessage]);
        });
        socket.on("tarea-creada", (accionMessage) => {
            console.log("New acción creada", accionMessage);
            handleTareaUpdated(accionMessage.tarea);
            //setMessages((previousMessages) => [...previousMessages, newMessage]);
        });

        socket.on("tarea-terminada", (accionMessage) => {
            console.log("tarea terminada", accionMessage);
            handleTareaUpdated(accionMessage.tarea);
            //setMessages((previousMessages) => [...previousMessages, newMessage]);
        });

        return () => {
            socket.off("accion-asignada");
            socket.off("tarea-creada");
            socket.off("tarea-creada");
        };
    }, []);
    return (
        <ScrollArea type="always" scrollbars="vertical" style={{ height: "100%", maxHeight: 600 }}>
            <Box p="2" pr="8">
                <Heading size="5">Tareas</Heading>
                <Flex direction="column" gap="4">
                    {listaTareas.map(tarea => (
                        <Box key={tarea.codigo}>
                            <Card>
                                <Flex direction="column">
                                    <Text as="div" size="2" weight="bold">
                                        Cod:
                                        <Badge color={colorAccion(tarea)} variant="soft" radius="full">
                                            {tarea.codigo}
                                        </Badge>
                                    </Text>
                                    <Text as="div" size="1" color="gray">
                                        {tarea.origen + "=>" + tarea.destino}
                                    </Text>
                                    <Text as="div" size="1" color="bold">
                                        pln: {tarea.pln}
                                    </Text>
                                </Flex>

                            </Card>
                        </Box>
                    ))}

                </Flex>
            </Box >
        </ScrollArea >
    )
}