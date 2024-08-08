import { Box, Card, Flex, Avatar, Text, Separator, DataList } from "@radix-ui/themes";
import { FaceIcon, ImageIcon, SunIcon, BoxIcon, EnterIcon, ExitIcon, CubeIcon, LightningBoltIcon, ExclamationTriangleIcon, GearIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'

const icon = (accion, data) => {

    if(!data.activo) {
        if(data.estado == "charging") return (<><LightningBoltIcon /></>);
        return (<GearIcon/>);
    }

    if (!accion) return (<></>);

    let movimiento = accion.movimiento;

    if (movimiento == "loading") return (<><EnterIcon /><CubeIcon /></>);
    if (movimiento == "unloading") return (<><CubeIcon /><ExitIcon /></>);
    if (movimiento == "moving") return (<><DoubleArrowRightIcon /></>);
    if (movimiento == "charging") return (<><LightningBoltIcon /></>);

    return (<></>);
}

export function Oso({ data }) {

    let accion = data.accion;

    return (
        <Box maxWidth="240px">
            <Card variant={data.activo ? "surface" : "ghost"}>
                <Flex gap="3" align="center">
                    <Box>
                        {icon(accion, data)}
                    </Box>
                    <Box>
                        <Text as="div" size="3" weight="bold">
                            Oso # {data.id}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {data.ubicacion}
                        </Text>
                    </Box>
                </Flex>
                <Separator size="4" />
                <Box pt="2">
                    <DataList.Root trim="both" size="1" py="0">
                        <DataList.Item align="center">
                            <DataList.Label minWidth="88px">Inicio</DataList.Label>
                            <DataList.Value>{data.horaInicio}</DataList.Value>
                        </DataList.Item>
                        <DataList.Item align="center">
                            <DataList.Label minWidth="88px">Ubicación</DataList.Label>
                            <DataList.Value>{!!accion ? accion.ubicacion : ""}</DataList.Value>
                        </DataList.Item>
                    </DataList.Root>
                </Box>
                {/* <Box>
                    <Text as="p">Inicio</Text>
                    <Text as="p">{data.horaInicio}</Text>
                    <Text as="div" size="2" color="gray">
                        {data.ilpn}
                    </Text>
                    <Text as="div" size="1" color="gray">
                        {data.machineId}
                    </Text>
                </Box> */}
            </Card>
        </Box>
    );
};