import { Box, Card, Flex, Avatar, Text, Separator } from "@radix-ui/themes";

export function Oso({ data }) {

    return (
        <Box maxWidth="240px">
            <Card variant={data.activo ? "surface" : "ghost"}>
                <Flex gap="3" align="center">
                    <Avatar
                        size="3"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        radius="full"
                        fallback="T"
                    />
                    <Box>
                        <Text as="div" size="3" weight="bold">
                            Oso # {data.id}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {data.ubicacion}
                        </Text>
                    </Box>
                </Flex>
                <Separator />
                <Box>
                    <Text as="p">Inicio</Text>
                    <Text as="p">{data.inicio}</Text>
                    <Text as="div" size="2" color="gray">
                        {data.ilpn}
                    </Text>
                    <Text as="div" size="1" color="gray">
                        {data.machineId}
                    </Text>
                </Box>
            </Card>
        </Box>
    );
};