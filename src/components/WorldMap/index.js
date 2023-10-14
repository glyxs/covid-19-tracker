import { Box, Fade, Skeleton, useColorModeValue } from "@chakra-ui/react";
import { MapContainer, GeoJSON } from "react-leaflet";
import OnEachCountry from "./OnEachCountry";
import React, { useState, useEffect } from "react";
import MapLegend from "./MapLegend";
import "leaflet/dist/leaflet.css";

const WorldMap = ({ data, searchController }) => {
  const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
  const bgHover = useColorModeValue("bg.boxBgHoverLight", "bg.boxBgHoverDark");

  const [mapIsLoading, setMapIsLoading] = useState(true);

  useEffect(() => {
    if (data && data !== null) {
      setMapIsLoading(false);
    } else {
      setMapIsLoading(true);
    }
  }, [data]);

  const mapStyle = {
    fillColor: "white",
    weight: 2,
    color: "#808080",
    fillOpacity: 1,
  };

  const defaultBounds = [
    [-60, -180],
    [90, 180],
  ];

  return (
    <Box rounded="xl" boxShadow="xl" p={3} bg={bg} my={6}>
      <MapLegend />
      <Skeleton isLoaded={!mapIsLoading}>
        <Fade in={true}>
          <Box rounded="md" bg={bgHover} pos="relative">
            <MapContainer
              zoom={2}
              maxBounds={defaultBounds}
              maxZoom={6}
              minZoom={2}
              zoomSnap={0}
              center={[30, 0]}
              attributionControl={false}
              style={{
                height: "500px",
                backgroundColor: "transparent",
                borderRadius: "7px",
              }}
            >
              <GeoJSON
                style={mapStyle}
                data={data && data}
                onEachFeature={OnEachCountry(searchController)}
              />
            </MapContainer>
          </Box>
        </Fade>
      </Skeleton>
    </Box>
  );
};

export default WorldMap;
