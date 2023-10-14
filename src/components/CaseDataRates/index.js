import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RateStat from "./RateStat";
import { IoCalendarOutline } from "react-icons/io5";
import { GiHealthIncrease, GiHastyGrave } from "react-icons/gi";

const CaseDataRates = ({ data, searchTerm }) => {
  const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");

  const [dataIsLoading, setDataIsLoading] = useState(true);

  useEffect(() => {
    if (data && data !== null) {
      setDataIsLoading(false);
    } else {
      setDataIsLoading(true);
    }
  }, [data]);

  useEffect(() => {
    setDataIsLoading(true);
  }, [searchTerm]);

  return (
    <SimpleGrid columns={{ base: 1, sm: 3, lg: 1 }} spacing={3} flex={1}>
      <Box rounded="xl" boxShadow="xl" p={3} bg={bg}>
        <RateStat
          icon={<GiHealthIncrease fontSize="50px" />}
          label="Recovery Rate"
          numColor="#2DD249"
          value={data && data.recovery}
          isLoading={dataIsLoading}
        />
      </Box>
      <Box rounded="xl" boxShadow="xl" p={3} bg={bg}>
        <RateStat
          icon={<GiHastyGrave fontSize="50px" />}
          label="Mortality Rate"
          numColor="#FF0E00"
          value={data && data.mortality}
          isLoading={dataIsLoading}
        />
      </Box>
      <Box rounded="xl" boxShadow="xl" p={3} bg={bg}>
        <RateStat
          icon={<IoCalendarOutline fontSize="50px" />}
          label="Days Since Outbreak"
          numColor="#ff9f10"
          value={data && data.days}
          isLoading={dataIsLoading}
          num={true}
        />
      </Box>
    </SimpleGrid>
  );
};

export default CaseDataRates;
