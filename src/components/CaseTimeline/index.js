import { Box, useColorModeValue } from "@chakra-ui/react";
import TimelineControls from "./TimelineControls";
import DataChart from "./DataChart";
import React, { useEffect, useState } from "react";
import useCaseTimelineData from "../../hooks/useCaseTimelineData";

const CaseTimeline = ({ errorHandler, searchTerm }) => {
  const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");

  const [sort, setSort] = useState(7); //Sorting parameter in days e.g. 7 will return sum of cases for 7 days
  const sortController = (e) => {
    setSort(parseInt(e.target.value));
  };

  const [period, setPeriod] = useState(3); //Period of the case timeline in months
  const periodSelector = (e) => {
    setPeriod(parseInt(e.target.value));
    setTimelineIsLoading(true);
  };

  const [caseType, setCaseType] = useState("cases"); //Type of cases to display in timeline
  const caseTypeSelector = (e) => {
    setCaseType(e.target.value);
  };

  const caseTimeLineData = useCaseTimelineData(
    searchTerm,
    period,
    sort,
    errorHandler,
  );
  const [timelineIsLoading, setTimelineIsLoading] = useState(true);

  useEffect(() => {
    if (caseTimeLineData && caseTimeLineData !== null) {
      setTimelineIsLoading(false);
    } else {
      setTimelineIsLoading(true);
    }
  }, [caseTimeLineData]);

  useEffect(() => {
    setTimelineIsLoading(true);
  }, [searchTerm]);

  return (
    <Box rounded="xl" boxShadow="xl" p={3} bg={bg} my={6}>
      <TimelineControls
        sort={sort}
        periodSelector={periodSelector}
        caseTypeSelector={caseTypeSelector}
        sortController={sortController}
      />
      <DataChart
        data={caseTimeLineData && caseTimeLineData[caseType]}
        isLoading={timelineIsLoading}
      />
    </Box>
  );
};

export default CaseTimeline;
