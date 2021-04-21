import { Box, Skeleton, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { lighten, darken } from '@chakra-ui/theme-tools';
import { MapContainer, GeoJSON } from 'react-leaflet';
import OnEachCountry from './OnEachCountry';
import React, { useState, useEffect } from 'react';
import MapLegend from './MapLegend';
import 'leaflet/dist/leaflet.css';


const WorldMap = ({ isLoading, data }) => {

    const { colorMode } = useColorMode();
    const bg = useColorModeValue("white", "gray.800");
    const [show, setShow] = useState(false);

    useEffect(() => {
        // delay map load by 2 seconds to avoid bottleneck with GeoJSON
        if (!isLoading) {
            setTimeout(() => {
                setShow(true);
            }, 2000);
        }
    }, [isLoading]);

    const mapStyle = {
        fillColor: 'white',
        weight: 2,
        color: '#808080',
        fillOpacity: 1
    };

    return (
        <Box
            rounded='xl'
            boxShadow='xl'
            p={3} bg={bg}
            my={6}>
            <MapLegend />
            <Skeleton
                isLoaded={!isLoading}>
                <Box
                    rounded='md'
                    bg={colorMode === "light" ? darken(bg, 10) : lighten(bg, 10)}
                    pos='relative'>
                    {(show && <MapContainer
                        zoom={1.5}
                        center={[30, 0]}
                        attributionControl={false}
                        style={{
                            height: "500px",
                            backgroundColor: 'transparent',
                            borderRadius: '7px'
                        }}
                    >
                        <GeoJSON
                            style={mapStyle}
                            data={data && data}
                            onEachFeature={OnEachCountry}
                        />
                    </MapContainer>) || <Box h={500}></Box>}
                </Box>
            </Skeleton>
        </Box>
    );
};

export default WorldMap;
