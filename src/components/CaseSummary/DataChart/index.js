import { Skeleton, Box, useColorModeValue } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { options } from "./options";
import React from "react";

const DataChart = ({ data, isLoading }) => {
  const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
  const gradientStartColor = useColorModeValue(
    "rgba(255, 255, 255, 0)",
    "rgba(51, 51, 51, 0)"
  );
  const gradient = "linear(to-t, " + bg + ", " + gradientStartColor + ")";

  return (
    <Skeleton pos="relative" zIndex="5" isLoaded={!isLoading && data} bg="transparent" height="80px">
      <Box
        pos="absolute"
        zIndex="6"
        w="100%"
        h="40%"
        bottom="0"
        left="0"
        pointerEvents="none"
        bgGradient={gradient}
      />
      <Line
        data={data && data}
        options={options}
      />
    </Skeleton>
  );
};

export default DataChart;
