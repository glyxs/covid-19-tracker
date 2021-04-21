import { Skeleton, Box, useColorModeValue } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { options } from "./options";
import React from "react";

const DataChart = ({ data, isLoading }) => {
  const bg = useColorModeValue("white", "gray.800");
  const gradientBg = useColorModeValue(
    "rgba(255, 255, 255, 0)",
    "rgba(51, 51, 51, 0)"
  );
  const gradient = "linear(to-t, " + bg + ", " + gradientBg + ")";

  return (
    <Skeleton pos="relative" zIndex="5" isLoaded={!isLoading} bg="transparent">
      <Box
        pos="absolute"
        zIndex="6"
        w="100%"
        h="50px"
        bottom="0"
        left="0"
        pointerEvents="none"
        bgGradient={gradient}
      />
      <Line
        height={150}
        data={
          (data && data) || { labels: [1, 2], datasets: [{ data: [1, 2] }] }
        }
        options={options}
      />
    </Skeleton>
  );
};

export default DataChart;
